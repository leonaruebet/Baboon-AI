# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed
- **ESLint and TypeScript errors**: Comprehensive code quality improvements
  - Created `src/types/dictionary.ts` with full type definitions for all i18n dictionaries
  - Replaced all `any` types with proper typed interfaces across components:
    - `NavigationDict`, `HeroDict`, `SloganDict`, `StepsDict`, `TrustDict`, `FooterDict`
    - `FAQDict`, `FAQItem`, `WhyUsDict`, `WhyUsReason`, `ContactUsDict`
  - Fixed unused imports in `Steps.tsx` (removed `Image`, `Send`, `Monitor`, `Smartphone`)
  - Fixed unused `locale` parameters in multiple components by removing from props:
    - `Hero`, `Slogan`, `Steps`, `Trust`, `FAQ`, `WhyUs`
  - Fixed `react-hooks/purity` errors in `ParticleField.tsx`:
    - Replaced `Math.random()` calls with deterministic golden ratio-based generation
    - Used `useState` with lazy initializer for stable particle data
    - Extracted particle generation to pure functions (`generateParticleData`, `generateOrbitalParticles`)
  - Fixed `react-hooks/refs` errors by replacing `useRef` access during render with `useState`

### Changed
- **Steps section**: Complete overhaul with vertical stepper design
  - Redesigned from grid layout to vertical stepper on left + visualization area on right
  - Now has 4 steps with improved visualizations:
    - Step 1: "เริ่มใช้งาน" / "Get Started" - Desktop monitor mockup with:
      - Browser window with traffic lights (red/yellow/green) and "baboon.ai" URL bar
      - AI avatar (Bot icon) with green online indicator
      - "เริ่มใช้งาน" / "Get Started" button with Play icon
      - Animated cursor (SVG) pointing at start button with bounce animation
      - Monitor stand with realistic perspective
      - Sparkles decoration around monitor
      - Enlarged dimensions: w-96 h-60 screen, scale-110 wrapper
    - Step 2: "ส่งข้อมูล AI ถามกลับ" / "Send Data, AI Asks Follow-up" - Chat-style visualization showing:
      - User sends transfer slip (sky-400 light blue bubble, right-aligned)
      - User avatar with "คุณ"/"You" text (sky-500 background)
      - AI asks clarifying questions ("Account: Kasikorn Bank?", "Category: Food expenses?")
      - Yes/Edit confirmation buttons
    - Step 3: "ตั้งเตือนความจำ" / "Set Reminders" - Chat-style visualization showing:
      - User asks for reminder ("Remind me to pay electric bill on 25th") - sky-400 bubble
      - User avatar with "คุณ"/"You" text
      - AI confirms with date/time details (Calendar and Clock icons)
      - Success indicator with CheckCircle
    - Step 4: "สรุป & แจ้งเตือน" / "Summary & Notifications" - 3-column output cards:
      - Summary card: "เงินแต่งงานน้องส้ม", "ค่าอาหาร 350 บาท"
      - Categorized card: "งานแต่งงาน", "ค่าอาหาร"
      - Remind card: "นัดลูกค้า 14:00", "นัดเดทน้องฟ้า"
      - Bot with Brain icon processing indicator
      - "อัตโนมัติ"/"Automatic" badge with Sparkles
  - Vertical stepper with connecting lines between step indicators
  - Step indicators: Numbers for pending, checkmarks for completed, ring highlight for active
  - Clickable steps to switch visualization
  - Visualization area with light orange gradient (`from-orange-100 via-orange-200/80 to-primary/20`)
  - All visualizations use primary/orange colors only (except user: sky-400)
  - Added new icons: MessageSquare, Clock, Calendar, CheckCircle
  - Uses Bot icon from lucide-react instead of emoji
  - Step label badge positioned at bottom-left of visualization area
  - Responsive: stacks vertically on mobile, side-by-side on desktop (lg:grid-cols-[320px_1fr])
  - **Full i18n support**: Replaced all inline `locale === "th"` checks with dictionary references
  - Updated dictionaries (en.json, th.json) with comprehensive nested structure:
    - `common`: you, yes, edit, automatic, summary, categorized, remind
    - `step1`: label, title, description, getStarted
    - `step2`: label, title, description, userMessage, clarifying, question1, question2
    - `step3`: label, title, description, userMessage, reminderSet, date, time, task
    - `step4`: label, title, description, summaryExample1/2, categoryExample1/2, remindExample1/2

- **Benefits section**: Redesigned to match Steps component layout
  - Removed Badge, kept centered title
  - Changed from CardContent-based cards to transparent cards with large visual areas
  - Added `aspect-square rounded-[3.5rem]` visual containers matching Steps style
  - Created unique visual elements for each benefit (6 items total):
    - To-do + Reminders: Task list with checkbox and bell icons
    - Note Summarizer: Document with highlight indicators and sparkles
    - Document Manager: Folder organization with separated file icons
    - Memory Profile: Brain with progress indicators and sparkles
    - Income & Expense Tracker: Wallet with income/expense rows (green/red indicators)
    - Friendly Advisor: Chat bubbles with heart icon and typing indicator
  - Changed to horizontal scrollable layout with infinite auto-scroll
  - Cards fixed at `w-[280px]` with `flex-shrink-0`
  - Added `scrollbar-hide` utility class to globals.css
  - Auto-scroll animation (0.5px/frame) pauses on hover
  - Seamless infinite loop (duplicates items for smooth reset)
  - Right fade gradient with pulsing chevron hint
  - Uses `useRef`, `useState`, `useEffect` for scroll control
  - Custom cursor (🎨🐒) on hover using inline SVG data URL
  - Added hover animation (`-translate-y-3` + shadow transition)
  - Moved text content below visual area with `px-6` padding
  - Added new icons: Wallet, TrendingUp, TrendingDown, MessageCircle, Heart

- **Steps section**: Complete redesign with vertical stepper layout
  - Left side: Vertical stepper with clickable step buttons
  - Right side: Large visualization area showing active step
  - Step indicators: Numbers for pending, checkmarks for completed, ring highlight for active
  - Vertical connecting line between step indicators
  - Interactive: clicking a step shows its visualization
  - Step label badge in bottom-left of visualization area
  - Decorative SVG illustration in top-right corner
  - Section header with title and subtitle
  - White card container with rounded corners and shadow
  - Responsive: stacks vertically on mobile, side-by-side on desktop

- **Slogan section**: Centered rotating words and custom cursor
  - Added `items-center` to flex-col container
  - Added `justify-center` to each rotating word span
  - Added custom monkey cursor (🐵) on hover using inline SVG data URL

- **Hero section**: Centered text and interactive monkey
  - Changed title and subtitle from `text-left` to `text-center`
  - Added `mx-auto` to subtitle for proper centering
  - Added computer emoji (💻) that slides in + scales from 0 when hovering over monkey
  - Uses React useState for hover state tracking

### Added
- **Steps section step 4**: Added 4th step and reordered steps
  - Step 3: "Manage & Organize Documents" / "ช่วยจัดการเอกสาร แยกเอกสาร" (document visual with FolderOpen, Files, FileCheck icons)
  - Step 4: "AI learns your style" / "AI จำสไตล์คุณได้" (brain visual with progress indicators)
  - Updated `src/dictionaries/en.json` and `src/dictionaries/th.json`
  - Updated `src/components/Steps.tsx` with matching visuals
  - Grid layout changed from 3 columns to 4 columns (responsive: 1 col mobile, 2 col tablet, 4 col desktop)
  - Container max-width increased from max-w-6xl to max-w-7xl

### Changed
- **Browser favicon**: Updated to baboon face emoji (🦧)
  - Created `src/app/icon.svg` with SVG emoji favicon
  - Added explicit `icons` metadata in layout.tsx for proper icon handling
  - Modern SVG approach for crisp rendering at all sizes

### Changed
- **About Us page** (`src/app/[locale]/about/page.tsx`): Complete redesign with 3D animations and Three.js
  - Removed Team Section (ทีมผู้นำ) as requested
  - Added framer-motion for advanced animations
  - **Integrated Three.js 3D scene as fixed background**
    - Central animated sphere with MeshDistortMaterial morphing effect
    - Floating geometric shapes (torus, icosahedron, octahedron, rounded boxes, cones, dodecahedron)
    - Particle field with 200 animated orange particles
    - Small sphere clusters with rotating group animations
    - Animated pulsating ring with 3D rotation
    - OrbitControls with auto-rotate for passive 3D interaction
    - Stars background with Environment preset
    - Scene rendered at 40% opacity with radial gradient overlay for readability
  - Hero section features animated badge, 3D title with perspective, floating mascot with shadow
  - Mission section with 3D card hover effects, rotating icon, and decorative orbital rings
  - Story highlights with 3D flip animations on hover
  - Values section with perspective-based 3D cards, rotating icons on hover
  - CTA section with animated gradient background and floating emojis
  - All sections feature scroll-triggered entrance animations using useInView
  - **Removed blur effects** (backdrop-blur) from all cards for better text readability
  - Cards now use solid `bg-white` or `bg-white/95` backgrounds

### Changed
- **Contact Us page** (`src/app/[locale]/contact/page.tsx`): Updated contact information and custom form
  - Created custom styled form that submits to Google Forms via POST
  - Individual styled inputs for: Full Name, Phone, Email, Company, Business Type, Budget
  - Hidden field auto-fills "baboon_ai" for Service Interest (entry.899412047)
  - Form fields match Google Form entry IDs for proper data mapping
  - Updated email addresses from baboonsec.com to center@ireadcustomer.com
  - Added LINE Official Account (@ireadcustomer) with clickable link to LINE OA
  - **Added prominent "Add LINE Friend" button card** (green gradient) with @ireadcustomer
  - Email and support links now clickable (mailto: links)
  - Hover effects on contact info items
  - Responsive 2-column layout for phone/email and business type/budget fields
  - Required field indicators with red asterisk
- **About Us page** (`src/components/AboutContent.tsx`): Added iReadCustomer section
  - New section at bottom with link to https://ireadcustomer.com/
  - Orange gradient button matching site theme
  - Bilingual text (EN/TH)

### Added
- `three@^0.x`: Three.js 3D graphics library (new dependency)
- `@react-three/fiber@^8.x`: React renderer for Three.js (new dependency)
- `@react-three/drei@^9.x`: Useful helpers for React Three Fiber (new dependency)
- `src/components/three/Scene3D.tsx`: Main Three.js canvas wrapper with lighting, environment, and controls
- `src/components/three/FloatingShapes.tsx`: Animated 3D geometric shapes (torus, icosahedron, octahedron, etc.)
- `src/components/three/AnimatedSphere.tsx`: Central morphing sphere with distortion material and GlowingSphere variant
- `src/components/three/ParticleField.tsx`: Particle system with OrbitalParticles variant
- `src/components/three/index.ts`: Barrel export file for Three.js components
- `framer-motion@^11.x`: Animation library for React (new dependency)
  - Used for scroll-triggered animations (useInView, useScroll)
  - Motion components for 3D transforms (rotateX, rotateY, perspective)
  - Spring physics animations (useSpring)
  - Hover and tap interactions (whileHover, whileTap)
- `src/components/AboutContent.tsx`: New client component for animated about page content
  - Contains all 3D animations and scroll-triggered effects
  - Separated from server component for proper Next.js 16 app router compatibility
- `src/lib/get-dictionary-client.ts`: Client-safe dictionary loader
  - For use in client components that need to load dictionaries dynamically
  - Avoids "server-only" import errors in client component context

### Added
- "Why Us" section component (`src/components/WhyUs.tsx`):
  - 6 reasons cards with icons (Zap, Shield, Heart, Clock, Users, Award)
  - Hover animations with icon background color transition
  - Badge, title, subtitle header
  - Trust indicator footer text
  - Gradient background from background to primary/5
  - Section anchor id="why-us" for navigation
- About Us page (`src/app/[locale]/about/page.tsx`):
  - Mission section with gradient background card
  - Story section with company history and highlights grid
  - Values section with 4 value cards (Privacy, Thai-First, Innovation, Customer Success)
  - Team section with leadership members display
  - CTA section with "Get Started Free" button
  - Full i18n support (EN/TH)
- Contact Us page (`src/app/[locale]/contact/page.tsx`):
  - Contact form with name, email, subject, message fields
  - Form validation and submission handling with status feedback
  - Contact info sidebar with email, support, address, business hours
  - FAQ link card for quick answers
  - Client-side rendering with useState/useEffect
  - Full i18n support (EN/TH)
- Navigation links in Header for "Why Us" (anchor), "About Us" (page), "Contact Us" (page)
- Dictionary translations for `whyUs`, `aboutUs`, `contactUs` in both `en.json` and `th.json`
- Navigation keys `whyUs`, `aboutUs`, `contactUs` in both dictionaries

### Changed
- **Compare.tsx**: Clean redesign with 4-way comparison table:
  - Now compares: Baboon vs ChatGPT vs Calendar Apps vs Notion
  - 7 features compared: Thai Language AI, Memory Profile, Smart Reminders, Note Summary, Privacy First, Calendar Sync, Voice Input
  - Three-state values: Check (green), Partial (amber dash), X (muted)
  - Clean minimal table design with rounded corners and subtle borders
  - Scroll-triggered staggered animations (80ms delay between rows)
  - Subtle hover state on rows
  - Baboon column highlighted with light primary background
  - Footer note with baboon and sparkle emojis (replaced Thai flag)
- **Dictionaries (en.json, th.json)**: Updated compare section structure:
  - Changed from array-based features to object-based for type safety
  - Added `competitors` object with baboon, chatgpt, calendar, notion
  - Added `features` object with thai, memory, reminders, summarize, privacy, calendar, voice
  - Updated title to "Why Baboon?" / "ทำไมต้อง Baboon?"

### Removed
- "Trusted by" brand logos section (APPLE, DISNEY, ADOBE, SONY, NIKE) from Trust.tsx component

### Added
- 5 new FAQ items in both EN and TH dictionaries:
  - Is my data safe and private?
  - How much does it cost?
  - Can I cancel my subscription anytime?
  - How is Baboon different from ChatGPT?
  - Do I need to install any app?

### Fixed
- Footer bottom bar text visibility: Changed from `text-primary/20` (nearly invisible) to `text-foreground/50`
- Improved grey shade readability across entire codebase:
  - Updated `muted-foreground` in globals.css from `oklch(0.5 0.02 0)` to `oklch(0.4 0.02 0)` (darker)
  - Increased text opacity throughout components from `/30-40` to `/50-70` range
  - Components updated: Footer.tsx, Compare.tsx, Trust.tsx, Steps.tsx, Hero.tsx, blog/page.tsx, pricing/page.tsx

### Added
- Animated baboon mascot (🐵) in Hero section with:
  - Positioned on left side of headline text (side-by-side layout)
  - Floating animation with 3D perspective rotation
  - Dynamic shadow that pulses with the floating motion
  - Sparkle effects (✨⭐) with staggered animations
  - Hover interaction (scale up on hover)
  - Responsive: stacks vertically on mobile, horizontal on desktop
  - CSS keyframe animations using styled-jsx
- Language toggle in Header (Globe icon + locale code) on left side of CTA button
  - Switches between Thai (th) and English (en)
  - Preserves current page path when switching
  - Hover tooltip shows target language
- Navigation anchor IDs to Hero (`id="start"`) and Steps (`id="process"`) components for topbar link functionality

### Changed
- Steps section content updated to match actual Baboon Secretary features:
  - Step 1: Quick onboarding (30 seconds setup)
  - Step 2: Plan, Summarize, Remind (To-do, notes, reminders)
  - Step 3: AI learns your style (Memory Profile)
- Steps component visuals redesigned with lucide-react icons:
  - Step 1: User profile card with sparkle
  - Step 2: Task list, note, and reminder items
  - Step 3: Brain icon with learning progress indicators
- Hero text alignment set to left-aligned consistently
- Integrated Benefits and Compare components into main page layout (`src/app/[locale]/page.tsx`)
- Complete navigation flow: all topbar links now navigate to their respective sections/pages

### Fixed
- Hydration mismatch error caused by browser extensions (Grammarly) adding attributes to `<body>` tag
  - Added `suppressHydrationWarning` to `<html>` and `<body>` in `src/app/[locale]/layout.tsx`
  - This is the standard React solution for browser extension interference

### Changed
- Replaced "BABOON" text with monkey emoji (🐒) in Header and Footer components
- Added iReadCustomer backlinks to Footer:
  - "Created by iReadCustomer" link below logo description
  - "Powered by iReadCustomer" link in bottom bar
- Updated typography to use Noto Sans Thai + Noto Sans:
  - Replaced Inter font with Noto Sans Thai for Thai text rendering
  - Added Noto Sans for Latin character support
  - Configured CSS font stack with proper fallbacks
  - Uses `next/font/google` for optimized font loading
- Updated color scheme to cleaner design:
  - Background changed to pure white (`oklch(1 0 0)`) - no orange tint
  - Removed warm color cast from neutral grays (borders, muted, secondary)
  - Primary accent color kept as vibrant orange (`oklch(0.7 0.18 45)`)
  - Foreground text changed to neutral dark gray

### Added
- `src/app/[locale]/privacy/page.tsx`: New Privacy Policy page component
  - Follows Next.js App Router pattern with locale parameter
  - Uses Header and Footer components for consistent layout
  - Fetches translations via getDictionary for i18n support (EN/TH)
  - Five content sections: Data Collection, How We Use Your Data, Data Security, Your Rights, Contact Us
  - Introduction section with highlight box using primary color accent
  - Each section has numbered circle indicators with primary color styling
  - Bulleted lists for clear information presentation
  - Contact section with glassmorphism card styling (email and address)
  - Clean prose styling with proper typography hierarchy
  - Follows existing design system (orange primary, white background)
- Updated privacy dictionary structure in both `en.json` and `th.json`:
  - Changed from array-based sections to structured object-based format
  - Added `introduction` key for policy overview
  - Added `dataCollection`, `dataUsage`, `dataSecurity`, `yourRights` objects each with `title`, `description`, `items[]`
  - Added `contact` object with `title`, `description`, `email`, `address`
  - Enhanced content with comprehensive privacy policy language
- `src/app/[locale]/pricing/page.tsx`: New Pricing page component
  - Follows Next.js App Router pattern with locale parameter
  - Uses Header and Footer components for consistent layout
  - Three pricing tiers: Free (0 baht), Pro (199 baht), Enterprise (custom)
  - Glassmorphism card design with backdrop-blur and shadows
  - Pro tier highlighted as "Most Popular" with ring accent
  - Feature lists with check icons for each tier
  - CTA buttons with appropriate styling (outline for Free/Enterprise, filled for Pro)
  - FAQ link section at bottom
  - Uses getDictionary for i18n translations (EN/TH)
  - Console logging for component lifecycle tracking
- Updated pricing dictionary structure in both `en.json` and `th.json`:
  - Added `badge`, `questionsNote`, `faqLink` keys
  - Restructured tiers with `name`, `description`, `price`, `features`, `cta` per tier
  - Each tier now has proper Thai translations
- `src/app/[locale]/blog/page.tsx`: New Blog listing page component
  - Follows Next.js App Router pattern with locale parameter
  - Uses Header and Footer components for consistent layout
  - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
  - Blog post cards with image placeholder, category badge, title, excerpt, date
  - Read more link with hover animation
  - Thai Buddhist calendar date formatting for Thai locale
  - Uses getDictionary for i18n translations
  - Follows existing design system (orange primary, rounded corners, cards)
- `src/app/[locale]/terms/page.tsx`: Terms of Service page component
  - Follows Next.js App Router pattern with locale parameter
  - Uses Header and Footer components for consistent layout
  - Fetches translations via getDictionary for i18n support (EN/TH)
  - Clean prose styling with orange primary accent border on section headings
  - Six content sections: Terms of Use, User Responsibilities, Service Limitations, Intellectual Property, Termination, Changes to Terms
  - Contact section with glassmorphism card styling
  - Console logging for component lifecycle tracking
- Updated terms dictionary structure in both `en.json` and `th.json`:
  - Changed from array-based sections to object-based sections for cleaner access
  - Added `contact` object with title and content
  - Enhanced content with comprehensive legal language
- Dictionary translations for new sections and pages in `src/dictionaries/th.json` and `src/dictionaries/en.json`:
  - `compare`: Comparison section with feature list (Thai expertise, Memory profile, Task reminders, Note summarization, Privacy focus)
  - `pricing`: Pricing page with Free/Pro/Enterprise tiers and feature lists
  - `privacy`: Privacy Policy page with sections for data collection, usage, protection, and user rights
  - `terms`: Terms of Service page with sections for acceptance, usage, IP, and liability
  - `blog`: Blog page with title, read more, sample posts metadata
  - Added supporting keys: `perMonth`, `contactUs`, `backToBlog`, `publishedOn`
- `src/components/Compare.tsx`: New Compare section component for landing page
  - Feature comparison table: Baboon vs ChatGPT vs Traditional methods
  - Supports localization via locale/dict props
  - Uses lucide-react Check/X icons for visual comparison
  - Five comparison features: Thai language optimization, Memory profile, Task reminders, Note summarization, Privacy focus
  - Responsive design with hover states and primary color accents
  - Section anchor id="compare" for navigation
- `src/components/Benefits.tsx`: New Benefits section component for landing page
  - Displays 3 benefit cards with lucide-react icons (ListTodo, CheckCircle, Brain)
  - Accepts locale and dict props for i18n support
  - Uses glassmorphism design with backdrop-blur and orange primary accents
  - Features hover animations with translate and shadow transitions
  - Section has id="benefits" for navigation anchor support
  - Follows existing design patterns from Steps.tsx and FAQ.tsx
- Initial project structure planning.
- `TODOS.md`, `CHANGELOG.md`
- `Makefile`: Project utility commands.
- `project_info.txt`: Project metadata.
- Implementation plan for landing page.
- `Makefile` for developer utilities (dev, build, start, clean).
