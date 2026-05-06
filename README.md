# 🛒 React E-Commerce Portal

> A modern, type-safe e-commerce web application built with **React 19**, **TypeScript**, and **Vite** — featuring a full shopping experience with product browsing, cart management, checkout, and order tracking.

---

## 📋 Table of Contents

- [Live Demo](http://ecommerce-project-react-env.eba-qpkqcbgg.ap-southeast-1.elasticbeanstalk.com/)
- [Overview]
- [Tech Stack]
- [Project Structure]
- [Component Tree]
- [Features]
- [Getting Started]
- [Available Scripts]
- [Configuration]
- [Testing]

---

## 🧭 Overview

This project is a simple but complete **e-commerce portal** built as a learning and portfolio project. It demonstrates modern frontend engineering practices using React with TypeScript, including client-side routing, component-based UI architecture, HTTP data fetching via Axios, and a Vite-powered development workflow.

The app serves as a frontend SPA (Single Page Application) that communicates with a backend API (proxied to `http://localhost:3000`) to load products, handle cart state, and manage orders.

**Repository:** [github.com/deepshikava/react-ecommerce-project-ts](https://github.com/deepshikava/react-ecommerce-project-ts)
**Branch:** `master`  
**Language Breakdown:** TypeScript 48.6% · CSS 35.6% · JavaScript 14.6% · HTML 1.2%

---

## 🚀 Tech Stack

| Category        | Technology                                                            | Version       |
| --------------- | --------------------------------------------------------------------- | ------------- |
| UI Library      | [React](https://react.dev/)                                           | ^19.1.0       |
| Language        | [TypeScript](https://www.typescriptlang.org/)                         | ~5.8.3        |
| Build Tool      | [Vite](https://vitejs.dev/)                                           | ^6.3.5        |
| Routing         | [React Router](https://reactrouter.com/)                              | ^7.8.0        |
| HTTP Client     | [Axios](https://axios-http.com/)                                      | ^1.8.4        |
| Date Utility    | [Day.js](https://day.js.org/)                                         | ^1.11.13      |
| Linting         | [ESLint](https://eslint.org/)                                         | ^9.25.0       |
| Testing         | [Vitest](https://vitest.dev/)                                         | ^3.1.2        |
| Test Utilities  | [@testing-library/react](https://testing-library.com/)                | ^16.3.0       |
| Compiler Plugin | [babel-plugin-react-compiler](https://react.dev/learn/react-compiler) | RC (React 19) |
| Font            | [Roboto via Google Fonts](https://fonts.google.com/specimen/Roboto)   | 400/500/700   |

---

## 📁 Project Structure

```
react-ecommerce-project-ts/
├── public/
│   └── images/                  # Static product images
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.tsx        # Top navigation bar
│   │   |
│   ├── pages/
│   │   ├── home/
│   │   │   ├── HomePage.tsx      # Product listing page
│   │   │   ├── ProductGrid.tsx      # Grid/list of product cards
│   │   │   └── Product.tsx          # Individual product card
│   │   ├── orders/
│   │   │   ├── OrdersPage.tsx      # Orders listing page
│   │   │   ├── OrdersGrid.tsx      # Grid/list of orders cards
│   │   │   ├── OrderDetailsGrid.tsx      # Individual order card
│   │   │   └── OrderProduct.tsx          # Individual order products list
│   │   ├── checkout/
│   │   │   └── Checkout.tsx      # Checkout flow
│   │   └── tracking/
│   │       └── TrackingPage.tsx        # Order Tracking page
│   ├── App.tsx                   # Root component with routing
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML entry (Roboto font, #root mount)
├── vite.config.ts                # Vite config (proxy, React compiler)
├── tsconfig.json                 # TypeScript root config
├── tsconfig.app.json             # App-specific TS config
├── tsconfig.node.json            # Node-specific TS config
├── eslint.config.js              # ESLint flat config
├── vitest.config.js              # Vitest test configuration
├── setupTests.js                 # Test setup (jest-dom)
└── package.json                  # Dependencies and scripts
```

---

## 🌳 Component Tree

```
<App>
  └── <BrowserRouter>
        ├── <Navbar />                        — persistent top nav
        └── <Routes>
              ├── / ──────────────────────── <HomePage>
              │                                  └── <ProductsGrid>
              │                                        └── <Product> (×N)
              │
              ├──  /orders ────────────────── <OrdersPage>
              │
              │
              ├── /checkout ──────────────── <CheckoutPage>
              │
              └── /tracking/:orderId/:productId ──────────────── <TrackingPage>
```

The entire component tree is wrapped in a `<GlobalProvider>` (React Context) in `main.tsx`, making shared state (cart contents, order list) available application-wide without prop drilling.

---

## ✨ Features

- **Product Listing** — Browse all products with name, brand, price, rating, and image displayed on cards
- **Product Detail View** — Click any product to see its full detail page with an Add to Cart button
- **Shopping Cart** — Add/remove items; cart state persists across navigation within the session
- **Checkout** — Proceed from cart to a checkout flow
- **Order History** — View placed orders with date formatting via Day.js
- **Client-Side Routing** — Fast SPA navigation using React Router v7 (no full page reloads)
- **API Proxy** — Vite dev server proxies `/api` and `/images` requests to a backend at `localhost:3000`
- **TypeScript Throughout** — Full type safety across components, context, and data models
- **Testing Setup** — Vitest + React Testing Library configured and ready

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/deepshikava/react-ecommerce-project-ts.git

# 2. Navigate into the project directory
cd react-ecommerce-project-ts

# 3. Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** by default.

> **Note:** The frontend proxies API calls to `http://localhost:3000`. If you have a backend server for this project, make sure it's running on port 3000 before making data requests.

---

## 📜 Available Scripts

| Script    | Command           | Description                                                                  |
| --------- | ----------------- | ---------------------------------------------------------------------------- |
| `dev`     | `npm run dev`     | Starts the Vite development server with HMR                                  |
| `build`   | `npm run build`   | Type-checks and builds for production into `../react-ecommerce-backend/dist` |
| `preview` | `npm run preview` | Serves the production build locally for preview                              |
| `lint`    | `npm run lint`    | Runs ESLint across all source files                                          |

---

## ⚙️ Configuration

### Vite (`vite.config.ts`)

```ts
// Key highlights:
plugins: [react({ babel: { plugins: [['babel-plugin-react-compiler', { target: '19' }]] } })]

// Dev server API proxy
proxy: {
  '/api':    { target: 'http://localhost:3000' },
  '/images': { target: 'http://localhost:3000' },
}

// Production build outputs to a sibling backend folder
build: { outDir: '../react-ecommerce-backend/dist' }
```

This means the project is designed to be deployed as a **monorepo** alongside a companion backend project (`react-ecommerce-backend`).

Backend - [SuperSimpleDev/react-course/tree/main/2-copy-of-code/lesson-11/ecommerce-backend](https://github.com/SuperSimpleDev/react-course/tree/main/2-copy-of-code/lesson-11/ecommerce-backend)

### TypeScript

Three tsconfig files manage the setup:

- `tsconfig.json` — root references
- `tsconfig.app.json` — frontend app compilation settings
- `tsconfig.node.json` — Node/Vite tooling settings

### ESLint

Uses the new **flat config** format (`eslint.config.js`) with:

- `typescript-eslint` for type-aware rules
- `eslint-plugin-react-hooks` for hooks best practices
- `eslint-plugin-react-refresh` for Vite HMR safety

---

## 🧪 Testing

The project is configured with **Vitest** and **React Testing Library**:

```bash
# Run tests (once vitest.config.js test environment is fully configured)
npm run test
# or
npx vitest
```

Test utilities available:

- `@testing-library/react` — component rendering and querying
- `@testing-library/user-event` — simulating user interactions
- `@testing-library/jest-dom` — custom DOM matchers (configured via `setupTests.js`)
- `jsdom` — browser DOM simulation for tests

---

<div align="center">
  <sub>Built with ❤️ using React 19 + TypeScript + Vite</sub>
</div>
