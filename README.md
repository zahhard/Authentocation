# 🔐 Next.js Authentication with Middleware & Private Routing  

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)  
[![Auth](https://img.shields.io/badge/Auth-Middleware%20%26%20Cookies-pink)](#)  

A **simple and secure authentication system** built with **Next.js (App Router)**.  
Users receive a **token/cookie** upon login, and only authenticated users can access protected pages.  

---

## ✨ Features  

- 🔒 **Next.js Middleware** for route protection  
- 🛡 **Protected Routes** – only available to authenticated users  
- 🍪 **Secure token storage** using cookies (HttpOnly / Secure)  
- 🔄 **Automatic redirects**  
  - 🚫 Unauthenticated → `/login`  
  - ✅ Authenticated → `/dashboard`  
- 🧩 **Clean & extensible architecture** – easy to integrate  

---

## 📂 Project Structure  

```bash
app/
 ├─ login/            # Login page
 │   └─ page.tsx
 ├─ dashboard/        # Protected page
 │   └─ page.tsx
 |
 ├─ middleware.ts     # Auth middleware
 └─ page.tsx          # Home page

