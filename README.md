🔐 Next.js Authentication with Middleware & Private Routing

This project implements a simple and secure authentication system with Next.js (App Router).
After logging in, users receive a token/cookie, and protected pages (Private Routes) are only accessible if the user is authenticated.

✨ Features

✅ Next.js Middleware for access control

✅ Protected Routes (only accessible to authenticated users)

✅ Secure token storage in cookies (HttpOnly / Secure)

✅ Automatic redirects:

Unauthenticated users → redirected to /login

Authenticated users → redirected to /dashboard

✅ Clean and extensible structure for real-world projects



🚀 Future Improvements

Add Signup (registration)

Implement real JWT with bcrypt + database

Role-based authentication (admin/user)

Refresh token & logout flow
