import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Blog listing page component.
 * Displays a grid of blog post cards with placeholder content.
 *
 * @param params - Route parameters containing the locale
 * @returns JSX.Element - The rendered blog listing page
 */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  console.log("[BlogPage] Entry: Initializing blog page");

  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "th");

  console.log(`[BlogPage] Locale resolved: ${locale}`);

  // Get blog posts from dictionary
  const blog_posts = get_blog_posts(locale, dict.blog);

  console.log(`[BlogPage] Exit: Rendering ${blog_posts.length} posts`);

  // Localized content
  const page_content = {
    badge: locale === "th" ? "บล็อก" : "Blog",
    subtitle:
      locale === "th"
        ? "เคล็ดลับ ข้อมูลเชิงลึก และอัปเดตเพื่อช่วยให้คุณใช้งาน AI ได้อย่างเต็มประสิทธิภาพ"
        : "Tips, insights, and updates to help you get the most out of your AI assistant.",
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      <Header locale={locale} dict={dict.navigation} />

      {/* Blog Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            {page_content.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {dict.blog.title}
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {page_content.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog_posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                locale={locale}
                read_more_text={dict.blog.readMore}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict.footer} />
    </main>
  );
}

/**
 * Blog post card component for displaying individual post previews.
 *
 * @param post - The blog post data object
 * @param locale - Current locale for URL generation
 * @param read_more_text - Localized "Read More" text
 * @returns JSX.Element - The rendered blog post card
 */
function BlogPostCard({
  post,
  locale,
  read_more_text,
}: {
  post: BlogPost;
  locale: string;
  read_more_text: string;
}) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-8 h-8 text-primary/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          <span className="text-xs text-foreground/60">{post.formatted_date}</span>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-2">
        <CardDescription className="line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/link"
        >
          {read_more_text}
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}

/**
 * Blog post data structure.
 */
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  formatted_date: string;
}

/**
 * Dictionary blog post structure.
 */
interface DictBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

/**
 * Transforms dictionary blog posts into BlogPost format with categories.
 *
 * @param locale - Current locale for category generation
 * @param blog_dict - Blog dictionary containing posts array
 * @returns BlogPost[] - Array of formatted blog posts
 */
function get_blog_posts(
  locale: string,
  blog_dict: {
    posts: DictBlogPost[];
  }
): BlogPost[] {
  console.log(`[get_blog_posts] Generating posts for locale: ${locale}`);

  // Category mapping based on post slug
  const category_map: Record<string, { en: string; th: string }> = {
    "ai-thai-productivity": { en: "Productivity", th: "เพิ่มประสิทธิภาพ" },
    "memory-profile-feature": { en: "Features", th: "ฟีเจอร์" },
    "note-summarization-tips": { en: "Tips", th: "เคล็ดลับ" },
  };

  return blog_dict.posts.map((post) => {
    const category_data = category_map[post.slug] || { en: "Article", th: "บทความ" };

    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: locale === "th" ? category_data.th : category_data.en,
      date: post.date,
      formatted_date: format_date(post.date, locale),
    };
  });
}

/**
 * Formats a date string based on locale.
 *
 * @param date_string - ISO date string (YYYY-MM-DD)
 * @param locale - Target locale for formatting
 * @returns string - Formatted date string
 */
function format_date(date_string: string, locale: string): string {
  console.log(`[format_date] Formatting date: ${date_string} for locale: ${locale}`);

  const date = new Date(date_string);

  if (locale === "th") {
    const thai_months = [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ];
    const thai_year = date.getFullYear() + 543;
    return `${date.getDate()} ${thai_months[date.getMonth()]} ${thai_year}`;
  }

  const en_months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${en_months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
