## Tools & Libraries Used

* **React** (^19.2.3) – Frontend library for building UI components
* **React DOM** (^19.2.3) – DOM-specific methods for React
* **React Router DOM** (^7.10.1) – Routing and navigation

---

## 📂 Component Breakdown

The project is organized into the following components/pages:

* **`/pages/Home.js`** – Main landing page of the application. Contains the home layout, header, and call-to-action sections.
* **`/pages/About.js`** – About page providing additional information about the site or organization.
* **`/components`** – Folder for reusable UI components such as:

  * **Header** – Navigation bar for routing between pages
  * **Footer** – Site footer with links and social icons
  * **FeatureSection** – Show app benefits or how it works.​
  * **HeroSection** – Landing section with main message and tracking form/button.​​
  * **Buttons** – Modular components for consistent UI


## Running the Project Locally

Follow these steps to run on your machine:

1. **Clone the repository:**

```bash
git clone https://github.com/Nkemaze/Nkemaze_CA.git
cd tracking-site
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

This will start the React app locally at [http://localhost:3000]


## 🔗 Navigation & Routing

The project uses **React Router v7**:

* `/` – Home page
* `/about` – About page

## 🎯 Features

* Component-based architecture for easy maintenance
* Client-side routing with React Router
* Easy local development with `npm start`
