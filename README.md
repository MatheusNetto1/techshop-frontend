# 🛍️ TechShop - E-commerce Front-end

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)
![Technologies](https://img.shields.io/badge/Technologies-React%20%7C%20TypeScript%20%7C%20Tailwind%20CSS-blue)

This is the front-end repository for **TechShop**, a portfolio project that simulates an electronics store. The main goal is to demonstrate the creation of a functional and modern e-commerce application, with a focus on clean architecture, state management, and a fluid user experience (UX).

---

## ✨ Key Features

- **Product Catalog:** Displays a list of products with images, names, and prices.
- **Search & Pagination:** Real-time search system and pagination to efficiently navigate through a large number of products.
- **Product Detail Page:** Detailed view of each product, including a description and an option to add it to the cart.
- **Shopping Cart:** Full shopping cart management, allowing users to add, remove, and adjust item quantities.
- **Simulated Checkout Flow:** A simulated purchase process, featuring a shipping form and a redirect to an order confirmation page.
- **Mock Authentication:** A login and logout system with protected routes, ensuring that the checkout is only accessible to "logged-in" users.
- **Reusable Components:** A modular code structure with reusable components like `ProductCard`, `Header`, and `Footer`.
- **Visual Feedback:** A confirmation modal to notify the user when an item is successfully added to the cart.
- **Responsive Design:** A UI optimized to be displayed on different screen sizes (desktop, tablet, and mobile) using Tailwind CSS.

---

## 🛠️ Technologies Used

- **React:** A JavaScript library for building the user interface.
- **TypeScript:** Adds static typing to the codebase, improving safety and maintainability.
- **Tailwind CSS:** A utility-first CSS framework for rapid and responsive styling.
- **React Router Dom:** Manages application navigation and routing.
- **Context API:** Provides global state management for the shopping cart and authentication.
- **Vite:** A fast build tool for the development environment.

---

## 📂 Project Structure

The project follows a clean and modular architecture, separating concerns into logical directories:

```
src/
├── assets/                 # Images and Icons
├── components/             # Reusable UI components
│   └── ui/
├── context/                # Global state management (Cart, Auth)
├── hooks/                  # Custom hooks
├── pages/                  # Main application pages (routes)
├── services/               # API communication logic
├── types/                  # TypeScript type definitions
├── App.tsx                 # Main application component
└── main.tsx                # Entry file
```

---

## 🧠 Architectural Decisions

- **Single-Page Application (SPA) Architecture:** The front-end is built as a SPA using React, providing a smooth and fast user experience without full page reloads.
- **Component-Based UI:** The interface is broken down into small, reusable components, which enhances code maintainability and scalability.
- **Context API for State Management:** The **React Context API** was chosen to manage global state (e.g., shopping cart and user authentication) to avoid prop drilling and keep the code organized. This is a robust solution for a project of this size.
- **UI/API Separation:** The front-end communicates with a **RESTful API** (simulated with local data) through a dedicated `services` layer, ensuring a clear separation of concerns. This design allows the back-end to be swapped or integrated with a real API easily in the future.

---

## 🚀 How to Run the Project

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1.  Clone this repository:
    ```bash
    git clone "https://github.com/MatheusNetto1/techshop-frontend"
    ```
2.  Navigate to the project directory:
    ```bash
    cd techshop-frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173/`.

---

## 👨‍💻 Author

- **Matheus Netto** - [MatheusNetto1](https://github.com/MatheusNetto1)