# Cartify

Cartify is a modern e-commerce application built with React and Vite. It provides a seamless shopping experience with a focus on ease of use and modern UI/UX design.

## Features

- **Product Catalog:** Browse through a wide range of products.
- **Search Capability:** Find specific products quickly with the built-in search functionality.
- **Cart Management:** Add, remove, and manage items in your shopping cart.
- **Checkout Process:** Secure and streamlined checkout flow.
- **Responsive Design:** Fully responsive layout that works across desktop, tablet, and mobile devices.
- **Category Filtering:** Filter products by categories to find what you're looking for.

## Tech Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router Dom
- **State Management:** React Context API (CartContext)
- **Styling:** CSS (Modular CSS for components and pages)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- npm or yarn

### Installation

1. Navigate to the `react` directory:
   ```bash
   cd react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

- `src/components/`: Reusable UI components like Navbar, Footer, and Slider.
- `src/pages/`: Main application views like Home, Products, Cart, and Checkout.
- `src/contexts/`: React Context providers for global state management.
- `src/data/`: Static data and product information.
- `src/assets/`: Images and other static assets.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.
