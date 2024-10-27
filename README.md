

# BPL-DREAM 11 Team Selection App

Welcome to Assignment-07, where we build a React-based BPL-DREAM 11 app that lets users create their dream cricket team by selecting players based on a limited coin budget. The application UI and components are designed based on the Figma design provided.

### 📑 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
  - [Navbar](#navbar)
  - [Banner](#banner)
  - [Main Section](#main-section)
  - [Player Data](#player-data)
  - [Player Selection](#player-selection)
  - [Selected Players](#selected-players)
  - [Newsletter](#newsletter)
  - [Footer](#footer)
- [Setup Instructions](#setup-instructions)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## 📋 Project Overview

This app lets users create a cricket team by choosing from available players within a set coin limit. Each player card provides details like player name, country, role, and bidding price. Users can add or remove players to/from their team and see the remaining budget. The app is developed with React and Vite, and deployed on Vercel.

## 🛠 Features

### Navbar
- A responsive navbar styled to match the Figma design.
- Displays the user's coin balance, initialized at 0 coins.
  
### Banner
- A banner section with a heading, subtext, background, and a button.
- Button increases the user’s coin balance, allowing them to select players.

### Main Section
- Displays two toggle buttons: **Available** and **Selected**.
- Available Players section is displayed by default.
- **Selected** button shows the count of selected players.

### Player Data
- A JSON file (e.g., `players.json`) includes an array of 10–15 players with the following details:
  - `playerId`, `name`, `country`, `image`, `role`, `batting/bowling type`, and `bidding price`.

### Player Selection
- Displays all players in a card layout (recommended 3 columns).
- Each player card includes details and a **Choose Player** button.
- When **Choose Player** is clicked:
  - Checks if user has enough coins. If not, shows an alert.
  - If sufficient, adds the player to the selected team and deducts coins accordingly.

### Selected Players
- Displays selected players in a card layout (one column recommended).
- Each card includes player details and a **Remove** button to deselect them.

### Newsletter
- Newsletter section designed according to Figma specs.

### Footer
- Footer section styled per Figma design.

---

## 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mr-Imran/bpl-dream-11.git
   cd bpl-dream-11
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Locally**
   ```bash
   npm run dev
   ```
   - The development server should now be running at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

This project is hosted on Vercel. To deploy your own version:
1. Link your GitHub repo with Vercel.
2. Push your changes, and Vercel will automatically build and deploy your application.

Live Demo: [BPL-DREAM 11 on Vercel](https://b10a7.imrann.my.id/)

## 🛠 Technologies Used
- **Frontend**: React, Vite
- **Hosting**: Vercel
- **Design Reference**: Figma

## 📝 License
This project is open-source and licensed under the MIT License.

---

Happy coding! 🏏
