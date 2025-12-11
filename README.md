# Modern E-Commerce Frontend (SPA) 🛍️


A responsive Single Page Application (SPA) built with **React**. This project represents the **"Head"** (Frontend) of a decoupled e-commerce architecture, designed to interact with RESTful APIs to display products and manage shopping cart state.

👉 **Live Demo:** [Click here to view the app](https://ecommerce-m9os.onrender.com/)

---


## ✨ Key Features

This project demonstrates my ability to build **interactive UIs** and manage **complex client-side state**:

*   **🛒 Dynamic Shopping Cart:**
    *   Add/Remove items.
    *   Real-time price calculation (Subtotal/Total).
    *   Persistent state logic (Context API / LocalStorage).
*   **🔍 Product Navigation:**
    *   Category filtering.
    *   Product detail views via React Router.
*   **⚡ Modern Tooling:**
    *   Built with **Vite** for lightning-fast HMR (Hot Module Replacement).
    *   Component-based architecture for reusability.

---

## 🛠️ Tech Stack

*   **Frontend Framework:** React 18
*   **Routing:** React Router DOM
*   **Styling:** TailwindCSS
*   **State Management:** React Context API / Hooks (`useState`, `useEffect`)
*   **Build Tool:** Vite
*   **Deployment:** Render

---

## 🏗️ Architecture & Component Structure

The project follows a modular structure to ensure maintainability and scalability, simulating a real-world **Headless Commerce frontend**:

```text
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components
│   ├── Navbar.jsx   # Navigation and Cart trigger
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   └── Footer.jsx
├── context/         # Global State Management
│   └── CartContext.jsx  # Logic for adding/removing items
├── pages/           # Page Views
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Cart.jsx
├── App.jsx          # Main Router setup
└── main.jsx         # Entry point
```

---
## 🚀 Getting Started
To run this project locally:
1.  **Clone the repository**
    ```bash
    git clone https://github.com/yanyangdev/eCommerce.git
    cd eCommerce
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Start the development server**
    ```bash
    npm run dev
    ```
4.  **Build for production**
    ```bash
    npm run bild
    ```
