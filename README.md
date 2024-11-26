# ASCII KeyCode Visualizer

## Overview

The **ASCII KeyCode Visualizer** is a simple web application that displays the details of any key pressed on the keyboard. When a key is pressed, it shows:

- The key itself
- The key code (keyCode)
- The ASCII value of the key
- The type of key (e.g., uppercase letter, lowercase letter, number, or special character)

This tool is useful for understanding how different keys on your keyboard correspond to their ASCII values and key codes.

---

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file containing the structure for the visualizer.
- `style.css`: The CSS file that styles the visualizer and adjusts the size of the key boxes based on content.
- `script.js`: The JavaScript file that listens for key presses and updates the display dynamically.

---

## Features

- **Real-time Key Information**: Displays key name, key code, ASCII value, and type dynamically as you press keys.
- **Dynamic Box Resizing**: The information boxes resize based on the length of the content.
- **Key Type Identification**: Identifies whether the key is an uppercase letter, lowercase letter, number, or special character.
- **User-Friendly Interface**: Shows the visualizer screen only after the first key press.

---

## Screenshots

### 1. Initial Screen (Visualizer Not Visible)

When the page is first loaded, no key has been pressed, so only the introductory screen is visible.

![Initial Screen](image1.png)


### 2. Pressing Small 'a'

When the small letter 'a' is pressed, the key details are shown, and the type is identified as "Lowercase Letter."

![Small 'a' Key Pressed](image3.png)

### 3. Pressing Capital 'A'

When the capital letter 'A' is pressed, the key details are shown, and the type is identified as "Uppercase Letter."

![Capital 'A' Key Pressed](image4.png)

### 4. Pressing '1'

When the number '1' is pressed, the key details are shown, and the type is identified as "Number."

![Number '1' Key Pressed](image5.png)

### 5. Pressing `*`

When the `*` key is pressed, the key details are shown, and the type is identified as "Special Character / Other."

![Asterisk Key Pressed](image6.png)

---

## How the Key Types Are Identified

- **Uppercase Letter**: Keys with key codes between 65 and 90 (e.g., 'A' to 'Z').
- **Lowercase Letter**: Keys with key codes between 97 and 122 (e.g., 'a' to 'z').
- **Number**: Keys with key codes between 48 and 57 (e.g., '0' to '9').
- **Special Character / Other**: Any other keys like punctuation, symbols, or function keys.

---

## Live Demo

You can try the **ASCII KeyCode Visualizer** online by visiting the following link:

[ASCII KeyCode Visualizer Demo](https://example.com)

---

## How to Run the Project Locally

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
