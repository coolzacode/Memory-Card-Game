# GeoMemory

GeoMemory is a lightweight, frontend-only web application built as an interactive cognitive challenge.

## Visual Demonstration

![Visual](./assets/memorygame.png)

## Overview

GeoMemory is a lightweight, frontend-only web application that is an interactive cognitive challenge. By tracking user engagement per card and dynamically shuffling array indices upon every input interaction, the application offers a seamless game loop designed to test memory limits without unnecessary framework overhead.

## Key Features

- **Pure Fisher-Yates Shuffling:** Implements a randomization algorithm that guarantees unbiased card distribution on every interaction.
- **Declarative Overlay Modals:** Uses short-circuit JSX evaluation to render lightweight game-over and victory menus without relying on heavy external modal libraries.
- **Deterministic State Tracking:** Computes score evaluations and high-score logic directly from the length of single-source state arrays, minimizing synchronization bugs.

---

## Technical Architecture & Decisions

### 1. Pure State Mutation & Immutability

Direct state mutation in React leads to silent rendering failures. To combat this, the application ensures strict data isolation during the card shuffling phase:

- **Shallow Copying (`[...data]`):** Before the randomization algorithm triggers, the dataset is duplicated into an isolated block of memory.
- **In-Place Swapping:** The algorithm updates this copy internally, returning a fully fresh reference string to the React state setter. This guarantees that React instantly registers the memory reference change and executes a clean, single-pass visual re-render.

### 2. Linear Complexity Algorithm (O(n))

**Fisher-Yates Shuffle**:

- The logic loops backward through the array, selecting a random remaining element and swapping it with the current index.
- This cuts down operations to exactly linear time complexity (O(n)), ensuring that even if the dataset scales from 12 countries to 200, shuffling will resolve in less than a millisecond.

### 3. Declarative Conditional UI Transitions

Traditional UI architectures manipulate the DOM imperatively to hide or display overlay cards. GeoMemory delegates this entire pipeline to state:

- **Short-Circuit Rendering (`&&`):** Modals exist as conditional markup expressions dependent entirely on the status of `gameWon` and `gameLoss`.
- **CSS Keyframes:** When a state flag flips to `true`, the native DOM paints the element while smoothly executing hardware-accelerated entry scales (`scaleUp`) and transparency adjustments (`fadeIn`) configured purely in native CSS.

---

## How to Run This Locally

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Install dependencies: in your terminal, enter `npm install`.
4. Launch the local development server: in your terminal, enter `npm run dev`.
5. Navigate to the `localhost` URL provided in your terminal output.
