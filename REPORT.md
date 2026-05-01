# E-commerce Website Report: Cartify

## 1. Project Overview

This document provides a comprehensive report on the e-commerce website, Cartify. Cartify is a modern, single-page web application built with React that allows users to browse products, add them to a cart, and proceed to checkout. The application features a clean and user-friendly interface, with a focus on providing a seamless shopping experience.

## 2. Technologies Used

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Routing:** react-router-dom
*   **Styling:** CSS
*   **Icons:** Font Awesome
*   **Fonts:** Google Fonts (Poppins)

## 3. Features Implemented

### 3.1. Pages

*   **Home Page:** The landing page of the website, featuring a banner, a "Shop by Category" section, and a "Latest Products" section.
*   **Products Page:** Displays a list of all available products with filtering options for category and price range.
*   **Product View Page:** Shows the details of a single product, including images, description, price, and ratings. It also includes an "Add to Cart" button and a section for related products.
*   **Category Page:** Displays a list of all product categories.
*   **Cart Page:** Shows the items that have been added to the cart, with options to update the quantity or remove items.
*   **Checkout Page:** A form for users to enter their shipping information and an order summary.
*   **Order Confirmation Page:** A page that confirms the order has been placed and provides an order number.
*   **About Us Page:** A page with information about the company, including features and testimonials.
*   **Contact Us Page:** A page with contact information and a contact form.
*   **Search Page:** A page that allows users to search for products.

### 3.2. Components

*   **Navbar:** The main navigation bar, present on all pages.
*   **Footer:** The website footer, present on all pages.
*   **Slider:** A carousel on the home page that displays rotating banners.
*   **ScrollToTop:** A component that scrolls to the top of the page on route changes.
*   **CartContext:** A React context to manage the state of the shopping cart.

### 3.3. Key Functionalities

*   **Product Filtering:** Users can filter products by category and price range on the Products page.
*   **Shopping Cart:** Users can add items to the cart, update the quantity, and remove items.
*   **Form Validation:** The contact form has client-side validation to ensure that all required fields are filled out correctly.
*   **Responsive Design:** The website has a responsive design that adapts to different screen sizes (though this has not been explicitly tested).

## 4. How to Run the Application

1.  **Install Dependencies:** Open a terminal in the `react` directory and run the following command:

    ```bash
    npm install
    ```

2.  **Start the Development Server:** After the dependencies are installed, run the following command to start the development server:

    ```bash
    npm run dev
    ```

3.  **View the Application:** Open your web browser and navigate to the URL provided by the development server (usually `http://localhost:5173`).
