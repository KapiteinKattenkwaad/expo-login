# 🛠️ Fullstack Auth Starter — React Native + Express + PostgreSQL

A starter template for building fullstack mobile apps using:


| Layer        | Tech Stack                                                                   |
| -------------- | ------------------------------------------------------------------------------ |
| Frontend     | [React Native](https://reactnative.dev/) + [Expo](https://expo.dev)          |
| Styling      | [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)    |
| Backend      | [Express](https://expressjs.com/) + [Node.js](https://nodejs.org/)           |
| Auth         | [JWT](https://jwt.io) + [bcrypt](https://github.com/kelektiv/node.bcrypt.js) |
| ORM          | [Prisma](https://www.prisma.io)                                              |
| Database     | [Neon](https://neon.tech) (Serverless PostgreSQL)                            |
| Secure Store | [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore)   |

---

## 📁 Project Structure

```
.
├── backend/                    # Node.js + Express server
│   ├── routes/                 # Auth endpoints
│   ├── prisma/                 # Prisma schema and client
│   ├── utils/                  # Helper functions (e.g. auth)
│   └── index.ts                # Express entry point
│
├── frontend/                   # React Native app (Expo)
│   ├── app/                    # Screens (Login, Register, Home)
│   ├── utils/                  # API + auth helpers
│   └── App.tsx                 # Root of the app
│
├── .gitignore
├── README.md
└── .env.example
```

---

## 🧪 Features

- 🔐 JWT-based user authentication
- 🧑 Register/login with `name`, `email`, and `password`
- 🛡️ Secure token storage using Expo Secure Store
- 🌈 Tailwind-style styling with NativeWind
- 🪄 PostgreSQL database powered by serverless Neon
- ⚙️ Built with Prisma for clean DB access

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/fullstack-auth-starter.git
cd expo-native
```

---

### 2. Setup environment variables

Copy `.env.example` file in the root and move to backend folder and rename to `.env`

```
# .env (copy from .env.example)

DATABASE_URL=postgresql://youruser:yourpass@yourdb.neon.tech/dbname?sslmode=require
JWT_SECRET=yourSuperSecretKey
```

---

### 3. Backend setup

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Server should start on [http://localhost:3001](http://localhost:3001)

---

### 4. Frontend setup

```bash
cd ../frontend
npm install
npx expo start
```

> Make sure your `.env` in frontend has the correct API URL if you’re testing on a real device.

---

## 🧾 API Routes

### POST `/register`

Registers a user with name, email, and password.

**Body:**

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "securepassword"
}
```

### POST `/login`

Logs in a user with email and password, returns JWT.

**Body:**

```json
{
  "email": "alice@example.com",
  "password": "securepassword"
}
```

---

## 📄 License

MIT — free to use, share and modify.
