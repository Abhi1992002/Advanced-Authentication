## About 

- `🚀 Advanced-Authentication` helps developers kick-start a `NextJS application` with industry-level authentication using the `Next-auth v5 library`.

- 🛠 You can use it by `cloning the repository` or use our [CLI](https://cli.abhimanyu.tech) 🖥, which also helps you customize your initial folder setup. Check [CLI code](https://github.com/Abhi1992002/cli) here!

## Architecture / Flow

<img width="1194" alt="Screenshot 2024-02-21 at 12 51 48 PM" src="https://github.com/Abhi1992002/Advanced-Authentication/assets/122007096/0dbec17f-d964-40ba-9b18-3154558c292d">

## Tech Stacks 

<img width="1106" alt="Screenshot 2024-02-21 at 1 31 03 PM" src="https://github.com/Abhi1992002/Advanced-Authentication/assets/122007096/0c40073c-965d-416f-bb55-1efe06c7696d">

## How to use 

Clone repositry in your local machine
```cli
git clone https://github.com/Abhi1992002/Advanced-Authentication
```
create .env file
```
cp .env.example .env
```
or
Use cli to create initialial app
```
npx @abhimanyu1992002/cli@latest
```
create Prisma Client
```
npx prisma generate
```
Push migrations to your database, everytime you change schema use this. It helps to create migration as well as prisma client
```
npx prisma db push
```
start code in development environment
```
npm run dev
```
built command
```
npm run built
```

## Features

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification (2FA)
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification (2FA)
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only

