# Knowledge Base UI

##  Overview

This project is a frontend implementation of a Knowledge Base dashboard built using React and Tailwind CSS.
It replicates a Figma-based UI with focus on layout accuracy, component-based structure, and basic user interactions.

---

## 📸 Screenshots

### Home Screen
<img width="1076" height="645" alt="img1" src="https://github.com/user-attachments/assets/e92ad5b3-629d-43e9-895a-0935ea435be8" />


### Modal
<img width="1360" height="643" alt="img2" src="https://github.com/user-attachments/assets/fce5894f-4978-4a41-a336-610ead311fad" />

---

## Features

* Responsive dashboard layout with sidebar and navbar
* Sidebar navigation with grouped sections 
* Reusable UI components 
* Knowledge Base grid with static card data
* Modal drawer to create a new Knowledge Base
* Form with validation (Name, Vector Store, Embedding Model)
* Toast notifications for success and error messages
* Smooth UI interactions and transitions

---

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- React Toastify
- Lucide React Icons

---

## Project Structure

```
src/
├── components/
│   ├── mainDashboardContent/
│   │   ├── Header.jsx
│   │   ├── CardGrid.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Form.jsx
│   │   ├── Pagination.jsx
│   │   └── Button.jsx
│   │
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   └── SidebarItems.jsx
│
├── page/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/itsmeanwar/knowledge-base-ui.git

# Navigate into the project
cd knowledge-base-ui

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## Core Implementation Details

### Layout

* The app is structured with a **Navbar at the top**, **Sidebar on the left**, and **Main content area**
* Uses flexbox and responsive utilities for layout handling

### Sidebar

* Displays grouped navigation items
* Uses reusable `SidebarItems` component with icons and active state styling

### Dashboard Content

* Displays a grid of knowledge base cards
* Uses a reusable `Card` component
* Cards are currently populated with static data

### Modal & Form

* Clicking **“Create New”** opens a right-side modal drawer
* Form includes:

  * Name (required)
  * Description
  * Vector Store selection
  * Embedding Model selection
* Validation is handled before submission
* Success and error messages are shown using toast notifications

### Pagination

* Static pagination UI is implemented at the bottom
* Designed with responsiveness in mind

---

## Styling Approach

* Tailwind CSS is used for all styling
* Custom color variables:

  * Primary: `#4F46E5`
  * Secondary: `#1E1B4B`

---

## Current Limitations

* Card data is static (no backend or API integration)
* Pagination is currently UI-only (no functional logic)
* Sidebar items are non-clickable (as per assignment requirement)

---

## Author

**Shaik Anwar Basha**

* Live Demo: https://kbui.netlify.app
* GitHub: https://github.com/itsmeanwar
* LinkedIn: https://www.linkedin.com/in/anwarbasha-shaik-reactjs-frontend-developer/

---

## Note

This project was developed as part of a UI assignment to demonstrate:

* React component structuring
* UI accuracy from design
* Clean and maintainable frontend code
