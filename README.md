<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> c9ccd1d70b37d1d0764fe1b4bf8a3e9e0d8496c5
