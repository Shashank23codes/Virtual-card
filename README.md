# Virtual Card - Digital Profile for Financial Professional

This project is a modern, responsive **Digital Visiting Card / Virtual Profile** built for **Ramesh Sahu (Financial Doctor)**. It serves as a comprehensive online hub for clients to view his services, contact him instantly, save his details directly to their phonebook, and easily share his profile.

The application has a unique **dual-layout architecture**:
1.  **On Desktop & Tablet:** It behaves like a premium, single-page professional landing site with a top navigation bar, presenting all information sequentially as you scroll down.
2.  **On Mobile:** It transforms into an interactive, "Native App-style" experience. The layout switches to a bottom tab bar navigation, where each section (Home, About, Services, Contact) behaves like an independent app screen to maximize screen real estate and ease of use.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Architecture & Components](#project-architecture--components)
  - [App.jsx (The Layout Controller)](#appjsx-the-layout-controller)
  - [Hero Section (Home Tab)](#hero-section-home-tab)
  - [About Info Section](#about-info-section)
  - [Services Section](#services-section)
  - [Testimonials Section](#testimonials-section)
  - [Contact Footer & Quick Actions](#contact-footer--quick-actions)
  - [Navigation Elements](#navigation-elements)
- [How It Works (Under the Hood)](#how-it-works-under-the-hood)

---

## Tech Stack
-   **Framework:** React (Vite)
-   **Styling:** Tailwind CSS (for rapid, utility-first styling and robust responsive design)
-   **Icons:** `lucide-react` (Lightweight SVG icons)
-   **Deployment/Routing:** Single Page Application (SPA) driven by state rather than complex routing.

---

## Key Features

*   **Responsive Dual-UI:** Detects screen size on load and resize to switch between a sequential desktop landing page and a tabbed mobile web-app.
*   **Bento Grid Design:** The desktop Hero area features an elegant, glassmorphic 4-card "Bento Box" layout.
*   **One-Click "Save Contact":** Generates and downloads a `.vcf` (vCard) file instantly on the user's device containing the professional's name, phone, email, and website URL, allowing seamless addition to their phonebook.
*   **Native Sharing Feature:** Highlights integration of the native `navigator.share` Web Share API. Tapping "Share Profile" invokes the mobile device's built-in sharing tray (WhatsApp, Messages, Airdrop, etc.).
*   **Direct WhatsApp & Maps Integration:** Bypasses awkward desktop prompts on mobile by utilizing direct URLs for WhatsApp (`wa.me`) and Google Maps Search URLs to pinpoint the office location instantly.
*   **Glassmorphism Theme:** Heavy use of modern UI aesthetics: blurred backgrounds (`backdrop-blur`), subtle gradients, and floating semi-transparent cards.

---

## Project Architecture & Components

The application's source code is structured primarily inside `src/components/`, with the main orchestration happening in `src/App.jsx`.

### `App.jsx` (The Layout Controller)
This is the heart of the application. 
*   It tracks an `isMobile` state variable by listening to `window.innerWidth`. 
*   It maintains an `activeTab` state to know which page the mobile user is currently viewing.
*   **Desktop logic:** It renders all sections (`Hero`, `AboutInfo`, `Services`, `Testimonials`, `ContactFooter`) sequentially on top of each other and shows the `TopNav`.
*   **Mobile logic:** It hides the `TopNav`, shows the `BottomNav`, and uses CSS `display: hidden` conditions to hide all sections EXCEPT the one matching the current `activeTab`.

### `Hero.jsx` (Home Tab)
The primary landing view. 
*   **Desktop:** Displays a modern Bento Grid featuring 4 main cards: Profile Image/Name, Bio Introduction, Connect & Share (Social Icons + Native Web Share API), and Quick Actions (Call, WhatsApp, Email, Maps, Save Contact).
*   **Mobile:** Cards stack neatly.
*   *Fun fact:* The "Save Contact to Phonebook" logic is located here (and in QuickActions). It creates a raw vCard string, parses it into a Blob, creates an Object URL, and programmatically triggers a hidden `<a>` tag click to force a file download.

### `AboutInfo.jsx` (About Tab)
A detailed overview of the professional's background. Includes personal details (Name, Specialization, Experience, Languages) alongside key highlighting points (Commitment, Ethics) wrapped in glassmorphic, glowing cards.

### `Services.jsx` (Services Tab)
A visually rich portfolio of offerings. Lists specific financial verticals like:
1.  **Life Insurance:** Features staggered animations on hover.
2.  **Health Care Insurance:** Includes a descriptive breakdown.
3.  **Wealth Management:** Uses distinct iconography and premium gradients to highlight premium services.

### `Testimonials.jsx`
Features social proof. A responsive grid displaying client reviews and ratings. On mobile, this usually groups with the "Services" or "Home" scroll flow.

### `QuickActions.jsx`
A mobile-specific component that typically pins to the screen or appears at the top of the mobile view to ensure core actions (Call, WhatsApp, Email, Map) are always one thumb-tap away without having to scroll or navigate tabs.

### `ContactFooter.jsx` (Contact Tab)
The final section (or the final tab on mobile). 
*   Contains a functional form UI designed for direct inquiries.
*   Displays the physical office address alongside a direct "Open in Maps" link powered by Google Maps Search API.
*   Reiterates Business Hours and social media links (Website, Facebook, Instagram, LinkedIn, YouTube, X/Twitter) in a streamlined horizontal bar.

### Navigation Elements
*   **`TopNav.jsx`:** The desktop sticky header. Contains smooth-scrolling anchor links (using `getBoundingClientRect`) to jump down the page to specific sections.
*   **`BottomNav.jsx`:** The mobile sticky footer. A UI metaphor borrowed from iOS/Android apps. It updates the `activeTab` state in `App.jsx`, causing different sections to immediately render/hide.

---

## How It Works (Under the Hood)

1.  **State-Driven Rendering:** Rather than utilizing React Router, this app handles its "pages" using simple state variables in `App.jsx` (`activeTab`). This keeps the app incredibly fast, lightweight, and prevents unnecessary re-renders.
2.  **Mobile First vs. Desktop First:** Standard Tailwind practices use a `min-width` philosophy (e.g., standard styles apply to mobile, `md:` applies to tablets and up). Thus, the default view rendered is the stacked, mobile-friendly configuration, which magically snaps into the Bento grid and sidebar layouts as soon as the viewport hits `lg:` standard breakpoints.
3.  **No Backend Required:** This is a purely static front-end application. Contact form handling would require an external endpoint (like Formspree or an API Route). All links (WhatsApp, Email, Maps) rely strictly on robust `mailto:`, `tel:`, `https://wa.me/`, and web URL protocols.