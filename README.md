# GigsVerse

A full-stack freelance marketplace where users can browse services ("gigs"), place orders instantly, and list their own skills for sale — think a lightweight Fiverr-style platform built with Next.js and Express.

---

## 🚀 Live Link

🔗 https://gigsverse-client.vercel.app

---

## 🔑 Demo Credentials

Use the **"Demo login credentials"** button on the login page to autofill instantly, or log in manually:

- **Email:** `demo@gigsverse.com`
- **Password:** `Demo1234`

You can also sign in with **Google** directly, or register your own account.

---

## ✨ Key Features

- **Browse & discover gigs** — search by title, filter by category and price range, sort by price or popularity
- **Instant ordering** — place an order on any gig with optional special requirements, no seller approval step
- **List your own services** — create, edit, and delete gig listings from a personal dashboard
- **My Orders / My Listings** — track everything you've ordered and everything you're selling, with live order counts
- **Authentication** — email/password and Google sign-in, powered by Better Auth
- **Cross-service JWT auth** — secure token-based communication between the Next.js frontend and the standalone Express API
- **AI-powered gig description generator** — sellers can auto-generate a polished gig description from a title, category, and keywords (via Google Gemini)
- **AI support chatbot** — a context-aware assistant that answers questions about the platform, remembers conversation history, and suggests relevant follow-up questions (via Groq/Llama)
- **Responsive, themed UI** — built with Tailwind CSS and daisyUI, dark theme with a pink accent palette throughout
- **Skeleton loaders & loading states** — polished perceived performance across gig listings, detail pages, and dashboards

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS** + **daisyUI**
- **HeroUI** (`@heroui/react`) — form components
- **Better Auth** (`better-auth/react`) — authentication client, with JWT plugin
- **React Hot Toast** — notifications
- **React Icons**

### Backend
- **Node.js** + **Express**
- **MongoDB** (native driver)
- **Better Auth** — server-side auth, MongoDB adapter, JWT plugin (JWKS-based token verification)
- **jose** — JWT verification middleware
- **Groq SDK** (Llama 3.3 70B) — AI support chatbot
- **Google Generative AI** (Gemini) — AI gig description generator

### Auth & Security
- Email/password + Google OAuth via Better Auth
- Cross-origin JWT verification using a remote JWKS endpoint (`/api/auth/jwks`)
- Protected routes on both frontend (middleware) and backend (`verifyToken` middleware)

---

## 🚀 Getting Started Locally

### Backend
```bash
cd marketplace-server
npm install
npm run dev
```

### Frontend

```bash
cd marketplace
npm install
npm run dev
```

The frontend runs on `http://localhost:3000` and expects the backend running on `http://localhost:8080` (or whatever `NEXT_PUBLIC_API_URL` points to).

---
