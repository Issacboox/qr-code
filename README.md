```md
# 📦 QR Code Product Management (Next.js + Prisma + PostgreSQL)

ระบบจัดการ Product Code พร้อมสร้าง QR Code  
รองรับการเพิ่ม / แสดงผล / ลบข้อมูล แบบ Fullstack

---

# 🚀 Tech Stack

- Next.js (App Router)
- React (Client + Server Components)
- Prisma ORM
- PostgreSQL (Docker)
- Axios
- TailwindCSS

---

# 📁 Project Structure

```
```
app/
├── api/
│   └── products/
│       ├── route.ts          # GET, POST
│       └── [id]/route.ts     # DELETE
│
├── components/
│   ├── AddForm.tsx
│   ├── ProductTable.tsx
│   ├── QRModal.tsx
│   └── ConfirmModal.tsx
│
├── lib/
│   ├── db.ts                # Prisma Client
│   └── validation.ts        # validate code format
│
└── page.tsx                # main page

prisma/
└── schema.prisma

.env
```
```

---

# ⚙️ Setup

## 1. Clone project

```bash
git clone <your-repo>
cd qrcode
````

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Setup PostgreSQL (Docker)

```bash
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d -p 5433:5432 postgres
```

---

## 4. Setup `.env`

```env
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5433/postgres"
```

---

## 5. Setup Prisma

```bash
npx prisma generate
npx prisma db push
```

---

## 6. Run project

```bash
npm run dev
```

---

# 📡 API Endpoints

## ✅ GET /api/products

ดึงรายการทั้งหมด

```json
[
  {
    "id": 1,
    "code": "ABCD-1234-XXXX-XXXX-XXXX-XXXX"
  }
]
```

---

## ✅ POST /api/products

```json
{
  "code": "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"
}
```

### Validation

* ต้องเป็นรูปแบบ: `XXXX-XXXX-XXXX-XXXX-XXXX-XXXX`
* A-Z / 0-9 เท่านั้น

---

## ✅ DELETE /api/products/:id

ลบข้อมูลตาม id

---

# 🧠 Logic สำคัญ

## 1. Code Format

```ts
XXXX-XXXX-XXXX-XXXX-XXXX-XXXX
```

* 6 groups
* group ละ 4 ตัว
* A-Z, 0-9 เท่านั้น

---

## 2. Prisma Model

```prisma
model Product {
  id        Int      @id @default(autoincrement())
  code      String   @unique
  createdAt DateTime @default(now())
}
```

---

## 3. Validation

```ts
const regex = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){5}$/;
```

---

## 4. Server vs Client

| Type             | ใช้ทำอะไร        |
| ---------------- | ---------------- |
| Server Component | fetch data       |
| Client Component | UI / interaction |

❌ ห้ามส่ง function จาก Server → Client

---

# 🎨 Features

* ✅ Add Product Code
* ✅ Auto format input
* ✅ Show Table
* ✅ Generate QR Code
* ✅ Delete with confirmation
* ✅ Validation
* ✅ Unique constraint

---

# 🧪 Testing

### เช็ค API

```bash
curl http://localhost:3000/api/products
```

---

# ⚠️ Known Issues

* ใช้ `window.location.reload()` (UX ยังไม่ optimal)
* ยังไม่มี pagination
* ยังไม่มี auth

---

# 🔥 Future Improvements

* ❌ remove reload → use state / SWR
* 📦 bulk import (CSV)
* 📥 download QR as PNG
* 🔍 search/filter
* 🔐 authentication

---

# 💡 Tips

* ถ้า Prisma error → run:

```bash
npx prisma generate
```

* ถ้า DB เพี้ยน:

```bash
npx prisma db push --force-reset
```

---

# 🧑‍💻 Author
Issacboox (Nurarat Sangreuang)
