# Landing Pages — เลขาบาบูน (Baboon Secretary)

เลขาบาบูนคือผู้ช่วย AI ภาษาไทย สำหรับวางแผนงาน สรุปโน้ต และเตือนความจำ ออกแบบมาเพื่อให้คนไทยทำงานได้อย่างมีประสิทธิภาพสูงสุดในทุกวัน

## 1) Localization & SEO Setup
- **Path-based locales**: `/th/...` และ `/en/...`
- **i18n Implementation**: ใช้ dictionary-based system ใน `src/dictionaries/*.json` เพื่อความรวดเร็วและจัดการง่าย
- **Dynamic SEO**: metadata ถูกสร้างตาม locale เพื่อผลลัพธ์การค้นหาที่แม่นยำ

## 2) Design System (Orange Premium)
- **Primary Color**: Orange (`oklch(0.65 0.22 45)`)
- **Aesthetics**: เน้นความโค้งมน (`rounded-full`, `rounded-[3.5rem]`), gradients, และ glassmorphism เพื่อความทันสมัยและดูพรีเมียม

## 3) Page Structure & Components
- **Header**: Navigation bar พร้อมปุ่มดูแผนการใช้งาน (View Plans)
- **Hero**: พาดหัวหลักที่ดึงดูดสายตา พร้อม badges และ CTAs
- **Steps**: ขั้นตอนการเริ่มต้นใช้งานที่ชัดเจน
- **Features/Benefits**: เน้นสิ่งที่ช่วยได้จริง (To-do, สรุปโน้ต, Memory Profile)
- **FAQ**: คำถามที่พบบ่อยในรูปแบบ Accordion
- **Footer**: ข้อมูลบริษัท ลิงก์สำคัญ และตัวเลือกภาษา

## 4) Developer Commands
- `make dev`: รันเซิร์ฟเวอร์พัฒนา
- `make build`: สร้างโปรไฟล์โปรดักชัน
- `make start`: รันเซิร์ฟเวอร์โปรดักชัน
- `make clean`: ล้างไฟล์ build และ node_modules
- `make install`: ติดตั้ง dependencies ใหม่

---
© 2026 BABOON SECRETARY. ALL RIGHTS RESERVED.
