---

# Cooks Delight – Cooking & Recipes Blog

Welcome to the **Cooks Delight** repository! This is a professional React-based web application built to showcase high-quality recipes, culinary tips, and a seamless user experience.

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/doaamostafa67988/Cooks-Delight-Cooking-and-Recipes-Blog
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Setup:**
   - Create a `.env` file in the root directory.
   - Refer to `.env.example` for the required keys.
   - Copy the values provided in our private team channel.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## Tech Stack

- **Framework:** React + Vite
- **State Management:** Zustand
- **API:** [DummyJSON API](https://dummyjson.com/)
- **Styling:** CSS
- **Icons:** React Icons

---

## Project Structure & Path Aliases

We use **Absolute Imports** to keep our code clean. Use `@` to refer to the `src` directory.

- `@/assets`: Images, fonts, and icons.
- `@/components`: Global reusable UI components (Buttons, Inputs).
- `@/features`: Modular features (e.g., `recipes/`, `auth/`, `tips/`).
- `@/hooks`: Custom React hooks.
- `@/services`: API calling logic (Axios/Fetch instances).
- `@/store`: Zustand stores.

Example:
`import Button from '@/components/Button';`

---

## Coding Standards & Workflow

### 1. Naming Conventions

- **Components:** `PascalCase` (e.g., `RecipeCard.jsx`)
- **Files/Folders:** `kebab-case` or `camelCase` (e.g., `recipe-service.js`)
- **Variables/Functions:** `camelCase` (e.g., `const [isLoading, setIsLoading] = ...`)

### 2. Formatting

- We use **Prettier** for consistent styling.
- **Rule:** Please enable "Format on Save" in your VS Code settings.
- Do not bypass ESLint warnings.

### 3. Git Flow

- **main**: Production-ready code.
- **develop**: Integration branch for features.
- **pages/page-name**: Create a branch from `develop` for your task.
  - _Example:_ `git checkout -b page/home`
- **Commits:** Use descriptive messages (e.g., `feat(page/home): build hero section and featured recipes layout`).

---

## Features Checklist

- [ ] Home Page (Hero, Categories, Featured Recipes)
- [ ] Recipe Details Page (Ingredients, Instructions)
- [ ] Search & Filter Functionality (via DummyJSON)
- [ ] Cooking Tips Page (Static & Editorial content)
- [ ] Authentication (Login/Logout flow)
- [ ] Fully Responsive Design (Mobile, Tablet, Desktop)

---
