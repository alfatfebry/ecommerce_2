# 🛒 E-commerce React App

A simple **E-commerce** web application built with **React**, **Redux**, **React Router**, and **Bootstrap**.  
Products are fetched from the [Fake Store API](https://fakestoreapi.com/), with a custom logic to mark some products as **Out of Stock**.

---

## 🚀 Live Demo
[Click here to view on Vercel](https://your-vercel-app.vercel.app)

---

## 📸 Screenshots

### Homepage
![Homepage Screenshot](./screenshots/homepage.png)

### Product Detail
![Product Detail Screenshot](./screenshots/product-detail.png)

---

## 📐 Layout Approach
- The layout is built using **Bootstrap’s grid system** combined with custom CSS for product cards and responsiveness.
- Product cards use a flexible **flexbox** layout for alignment, ensuring consistent sizing across devices.

---

## 📱 Responsiveness Considerations
- The design adapts to mobile view by stacking product cards vertically and adjusting widths (`w-100` on small screens).
- Navbar collapses into a mobile-friendly toggle menu.
- Buttons and form elements resize automatically for better touch interaction.

---

## 🛠️ Tech Stack
- **React** – UI rendering
- **Redux** – State management
- **React Router** – Page routing
- **Bootstrap** – Styling and responsive layout
- **Fake Store API** – Product data

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/alfatfebry/ecommerce.git

# Navigate to project folder
cd ecommerce

# Install dependencies
npm install

# Run locally
npm start
