# Dede Shkurti Tribute Website

A minimal and elegant tribute website dedicated to the memory of Dede Shkurti (1953 - 2018).

## Overview

This project is a static web application designed with a focus on simplicity, typography, and respectful aesthetics. It serves as a digital memorial to share his life story, photos, and memories.

## Features

-   **Elegant Hero Section**: Full-screen introduction with a side-by-side layout featuring a portrait and dedication text.
-   **Biography**: A dedicated section for sharing his life story.
-   **Gallery**: A responsive grid layout for displaying cherished moments.
-   **Tributes**: A section for visitors to pay their respects.
-   **Responsive Design**: Fully responsive layout that adapts gracefully to mobile, tablet, and desktop screens.
-   **Smooth Animations**: Subtle scroll-triggered fade-in animations for a polished experience.

## Technology Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom styling with CSS variables, Flexbox, and Grid. No external frameworks.
-   **JavaScript**: Vanilla JS for lightweight intersection observer animations.

## Local Development

To view the website locally:

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd dedeshkurti.com
    ```
3.  Open `index.html` in your preferred web browser.
    -   On macOS, you can run: `open index.html`

## Deployment

This website is designed to be hosted as a static site on **AWS Amplify**, which offers a streamlined workflow for static site hosting.

1.  **Push to GitHub**: Ensure your code is pushed to a GitHub repository.
2.  **Connect to Amplify**:
    -   Go to the AWS Console > AWS Amplify.
    -   Click "Create new app" > "Host web app".
    -   Select "GitHub" as your source code provider.
3.  **Configure Build Settings**:
    -   Amplify will automatically detect the settings.
    -   Since this is a static site with no build step, ensure the "Build command" is empty or just `echo "no build"`.
    -   Set the "Base directory" to `/` (root).
4.  **Deploy**: Click "Save and deploy". Amplify will build and deploy your site globally.

## License

The source code of this project is available under the [MIT License](LICENSE).

**Content Copyright**: All photos, images, and personal text content on this website are **Copyright © 2025 Dede Shkurti Family. All Rights Reserved.** They may not be used, reproduced, or distributed without express written permission.
