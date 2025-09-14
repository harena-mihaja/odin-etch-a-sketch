---

# 🎮 Odin Etch-a-Sketch

A browser‑based Etch-a-Sketch drawing tool, built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

Create pixel art by clicking and dragging across a customizable grid — just like the classic toy!
<img width="1907" height="947" alt="image" src="https://github.com/user-attachments/assets/3991327a-2b52-4c0c-bb26-4ec678dded6e" />

---

## 📚 Table of Contents

* [📌 Overview](#-overview)
* [✨ Features](#-features)
* [🚀 Getting Started](#-getting-started)

  * [🛠️ Prerequisites](#️-prerequisites)
  * [📥 Installation](#-installation)
  * [🖱️ Usage](#️-usage)
* [⚙️ How It Works](#️-how-it-works)
* [🧰 Technologies Used](#-technologies-used)
* [📈 Project Status](#-project-status)
* [👤 Author](#-author)
* [📄 License](#-license)

---

## 📌 Overview

**Etch-a-Sketch** is a simple and fun drawing app where users can sketch by moving across a grid of squares. As the cursor moves over each cell while the mouse button is held, it changes color — just like dragging a pen.

This project was created to practice core front-end skills including:

* **DOM manipulation**
* **Event handling**
* **CSS Flexbox**

---

## ✨ Features

✅ Customizable grid size — choose how many squares per side (e.g., 16×16, 32×32)
✅ Click and drag to draw across the grid
✅ Reset button to clear the canvas
✅ Support for different coloring modes (e.g., solid color, random colors)

---

## 🚀 Getting Started

### 🛠️ Prerequisites

To run the project locally, you'll need:

* A modern web browser (Chrome, Firefox, Edge, Safari)
* A text editor or IDE (e.g. VS Code) if you want to inspect or modify the code

### 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harena-mihaja/odin-etch-a-sketch.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd odin-etch-a-sketch
   ```

3. **Open the project in your browser:**

   * You can double-click `index.html`
   * Or serve it using a local development server

### 🖱️ Usage

* On page load, a default grid is displayed
* Click and drag your mouse over the grid to start drawing
* Use the controls to:

  * **Clear the grid**
  * **Change the grid size**
  * **Change color**
  * **Randomize color**
  * **Eraser tool**
  * **Toggle grid display**

---

## ⚙️ How It Works

A high-level breakdown of how the app functions:

* 🔲 **Grid generation**: JavaScript dynamically creates a grid of div elements, sized based on user input.
* 🎨 **Drawing mechanism**: Drawing happens when the user holds down the mouse (`mousedown`) and moves over grid cells (`mouseover`).
* 🔄 **Reset function**: Clears the current grid and rebuilds it from scratch.
* 🖱️ **Mouse event listeners**:

  * `mousedown` – start drawing
  * `mouseover` – continue drawing while mouse is pressed
  * `mouseup` – stop drawing

> 🧠 The drawing logic ensures users can draw continuous lines by dragging the mouse, not just clicking on individual cells.

---

## 🧰 Technologies Used

* 🧱 **HTML** – Page structure and UI elements
* 🎨 **CSS (Flexbox)** – Layout
* 🧠 **JavaScript** – Logic, interactivity, and DOM manipulation

---

## 📈 Project Status

✅ **Completed (MVP)**
🚧 Possible improvements:

* Add a **color picker**
* Add **touch support** for mobile
