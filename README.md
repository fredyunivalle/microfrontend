
# Microfrontend Architecture with Webpack 5 and Module Federation

This project demonstrates a basic microfrontend setup using **Webpack 5** and **Module Federation**. It is composed of two separate applications:

- **host-app**: the main application that consumes remote components
- **remote-app**: a standalone application that exposes a remote React component (`Button`)

---

## 📖 What is a Microfrontend?

Microfrontend architecture applies the principles of microservices to the frontend. Instead of building a single monolithic frontend, the application is broken down into smaller, independently developed and deployed parts. These modules are integrated dynamically into a host application.

---

## 🧩 What is Webpack and Module Federation?

- **Webpack** is a module bundler that takes your frontend code (JavaScript, CSS, images, etc.) and bundles it for the browser.
- **Module Federation** is a Webpack 5 feature that allows different applications to share and consume modules from each other at runtime. It enables true code sharing between independent builds.

---

## ✅ Benefits of Microfrontends

- **Team autonomy**: different teams can work on different parts of the UI independently
- **Independent deployments**: deploy and update modules separately
- **Scalability**: easier to maintain and scale large applications
- **Component reuse**: shared components across projects
- **Improved fault isolation**: issues in one module don't affect the whole system

---

## 🛠 Tech Stack

- React 18.2.0
- Webpack 5
- Babel
- Webpack Module Federation
- Webpack Dev Server

---

## 📂 Project Structure

```
.
├── host-app/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
├── remote-app/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
└── README.md
```

---

## 🧪 What happens here?

- `remote-app` exposes a React component called `Button` using Module Federation.
- `host-app` dynamically imports and renders this component using `React.lazy` and `Suspense`.
- Both apps share `react` and `react-dom` as singletons to avoid duplication and conflicts.
- The configuration uses `eager: true` to ensure that shared modules like React are loaded immediately.

---

## 🚀 How to Run

### 1. Install dependencies

```bash
cd remote-app
npm install

cd ../host-app
npm install
```

### 2. Start the remote app

```bash
cd remote-app
npm start
```

### 3. Start the host app

```bash
cd ../host-app
npm start
```

---

## 👨‍💻 Author

Fredy Ballesteros  
Educational project — Demonstrating microfrontend architecture using Webpack 5 and React
