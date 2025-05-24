// import { button } from 'framer-motion/client'
// import { div } from 'framer-motion/m'
// import React, { useState } from 'react'

// function Shubhh({gokul,handle,ind}){
//     const {name,cla,friend}= gokul;
//     // const [fri,setfri]= useState(gokul.friend);
//     return(
//         <div className='h-80 w-60 bg-white rounded-md overflow-hidden mx-5' >
//             <div className='h-50 w-full bg-blue-100 overflow-hidden'></div>
//             <h1 className='text-xl font-semibold px-2'>{name}</h1>
//             <h2 className='px-2'>{cla}</h2>
//             <button onClick={()=>handle(ind)} className={`h-10 text-xl font-bold my-1 text-white w-30 mx-1 ${friend ? "bg-blue-400" : "bg-green-400"} rounded-md`}>{friend ? "Addfriend":"friend"}</button>
//         </div>
//     )
// }

// export default Shubhh











import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import local images (ensure these paths are correct relative to your file structure)
// If an 'images' folder is in the same directory as this file:
import Ar from "./images/ARVR.png";
import Xbox from "./images/Xbox.png";
import classic from "./images/classic.png";
import crs from "./images/carSimulator.png";
import logo from "./images/logo.jpg";
import locationImg from "./images/location.png"; // Renamed to avoid conflict with 'location' variable/keyword
import fort from "./images/fortnite.png";
import cod from "./images/callOfDuty.png";

// Component to embed styles
const GlobalStyles = () => {
  const cssStyles = `
    /* IMPORTANT NOTES:
     * 1. The original CSS had "@import "tailwindcss";". Tailwind CSS typically requires a build setup.
     * That import has been omitted here. If your design relies on Tailwind utility classes
     * not defined below, they might not apply.
     * 2. For Font Awesome icons (e.g., <i className="fas fa-...">) to work,
     * you need to link Font Awesome in your HTML file (e.g., via CDN).
     */

    /* Base Styles */
    :root {
        --background: #0a0a0a;
        --foreground: #fafafa;
        --card: #0a0a0a;
        --card-foreground: #fafafa;
        --popover: #0a0a0a;
        --popover-foreground: #fafafa;
        --primary: #10b981;
        --primary-foreground: #052e16;
        --secondary: #27272a;
        --secondary-foreground: #fafafa;
        --muted: #262626;
        --muted-foreground: #a3a3a3;
        --accent: #292524;
        --accent-foreground: #fafafa;
        --destructive: #991b1b;
        --destructive-foreground: #fafafa;
        --border: #27272a;
        --input: #27272a;
        --ring: #059669;
        
        /* Color palette */
        --red-300: #fca5a5; /* Added for btn-gradient-blue-red */
        --red-400: #f87171;
        --red-500: #ef4444;
        --red-600: #dc2626;
        --red-700: #b91c1c;
        --red-800: #991b1b; /* Added for .pink-event border, assuming it was a typo (pink-800) */
        --red-900: #7f1d1d;
        
        --green-400: #4ade80;
        --green-500: #22c55e;
        --green-600: #16a34a;
        --green-700: #15803d;
        --green-800: #166534; /* Added for .green-event border */
        --green-900: #14532d;
        
        --blue-400: #60a5fa;
        --blue-500: #3b82f6;
        --blue-600: #2563eb;
        --blue-700: #1d4ed8;
        --blue-800: #1e40af; /* Added for .blue-event border */
        --blue-900: #1e3a8a;
        
        --pink-400: #f472b6;
        --pink-500: #ec4899;
        --pink-600: #db2777;
        --pink-700: #be185d;
        --pink-800: #9d174d; /* Defined for .pink-event border */
        --pink-900: #831843;
        
        --purple-400: #c084fc;
        --purple-500: #a855f7;
        --purple-600: #9333ea;
        --purple-700: #7e22ce;
        --purple-900: #581c87;
        
        --yellow-400: #facc15;
        --yellow-500: #eab308;
        --yellow-600: #ca8a04;
        --yellow-700: #a16207;
        --yellow-900: #713f12;
        
        --gray-300: #d4d4d8;
        --gray-400: #a1a1aa;
        --gray-500: #71717a;
        --gray-700: #3f3f46;
        --gray-800: #27272a;
        --gray-900: #18181b;
        
        --black: #000000;
        --white: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--background);
        color: var(--foreground);
        line-height: 1.6;
        overflow-x: hidden;
    }
    #logophoto {
        height: 60px;
        margin:5px;
        margin-right:10px;
        object-fit: cover;
        overflow: hidden;
        border-radius: 8px; /* Added for aesthetics */
    }
    img {
        max-width: 100%;
        height: auto;
        display: block; /* Prevents bottom space under images */
    }
    
    a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;
    }
    
    ul {
        list-style: none;
    }
    
    .container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    
    /* Neon Effects */
    .neon-text {
        -webkit-text-stroke: 1px #fff;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    
    .neon-text:hover {
        -webkit-text-stroke: 1px #fff;
        color: transparent;
        text-decoration: none;
        font-weight:500;
        /* text-shadow: 0 0 5px currentColor; */
        /* text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor; */
    }
    
    .neon-green {
        color: var(--green-500);
        text-shadow: 0 0 5px var(--green-500), 0 0 10px var(--green-500), 0 0 20px var(--green-500);
    }
    
    .neon-pink {
        color: var(--pink-500);
        text-shadow: 0 0 5px var(--pink-500), 0 0 10px var(--pink-500), 0 0 20px var(--pink-500);
    }
    
    .neon-blue {
        color: var(--blue-500);
        text-shadow: 0 0 5px var(--blue-500);
    }
    
    .neon-purple {
        color: var(--purple-500);
        text-shadow: 0 0 5px var(--purple-500), 0 0 10px var(--purple-500), 0 0 20px var(--purple-500);
    }
    
    .neon-yellow {
        color: var(--yellow-500);
        text-shadow: 0 0 5px var(--yellow-500), 0 0 10px var(--yellow-500), 0 0 20px var(--yellow-500);
    }
    .neon-red {
        color: var(--red-500);
        text-shadow: 0 0 5px var(--red-500), 0 0 10px var(--red-500), 0 0 20px var(--red-500);
    }
    
    .neon-border {
        border: 2px solid;
        border-radius: 0.5rem;
        padding: 1.5rem;
        transition: all 0.3s ease;
        background-color: rgba(0, 0, 0, 0.6);
    }
    
    .neon-border:hover {
        box-shadow: 0 0 10px currentColor;
    }
    
    .neon-border.neon-green {
        border-color: var(--green-500);
        /* box-shadow: 0 0 5px var(--green-500), 0 0 10px var(--green-500); */
    }
    
    .neon-border.neon-blue {
        border-color: var(--blue-500);
        box-shadow: 0 0 5px var(--blue-500), 0 0 10px var(--blue-500);
    }
    
    .neon-border.neon-pink {
        border-color: var(--pink-500);
        box-shadow: 0 0 5px var(--pink-500), 0 0 10px var(--pink-500);
    }
    
    .neon-border.neon-purple {
        border-color: var(--purple-500);
        box-shadow: 0 0 5px var(--purple-500), 0 0 10px var(--purple-500);
    }
    
    /* Buttons */
    .btn {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        font-size: 1rem;
        text-align: center;
    }
    
    .btn-full {
        width: 100%;
    }
    
    .btn-gradient-green-blue {
        background: linear-gradient(to right, var(--green-500), var(--blue-500));
        color: white;
    }
    
    .btn-gradient-green-blue:hover {
        background: linear-gradient(to right, var(--green-400), var(--blue-400));
    }

    .btn-gradient-blue-red {
        background: linear-gradient(to right, var(--blue-600), var(--red-400)); /* Adjusted to red-400 from red-300 */
        color: white;
        box-shadow: 0 1rem 1.5rem rgba(147, 51, 234, 0.3); /* This shadow is purple, might be intentional */
    }

    .btn-gradient-blue-red:hover {
        background: linear-gradient(to right, var(--blue-500), var(--red-500)); /* Adjusted to red-500 from red-300 */
    }
    
    .btn-gradient-pink-purple {
        background: linear-gradient(to right, var(--pink-600), var(--purple-600));
        color: white;
        box-shadow: 0 0.5rem 1rem rgba(147, 51, 234, 0.3);
    }
    
    .btn-gradient-pink-purple:hover {
        background: linear-gradient(to right, var(--pink-500), var(--purple-500));
    }
    
    .btn-gradient-blue-purple {
        background: linear-gradient(to right, var(--blue-500), var(--purple-500));
        color: white;
    }
    
    .btn-gradient-blue-purple:hover {
        background: linear-gradient(to right, var(--blue-400), var(--purple-400));
    }
    
    .btn-outline-blue {
        background: transparent;
        border: 2px solid var(--blue-500);
        color: var(--blue-400);
    }
    
    .btn-outline-blue:hover {
        background: rgba(37, 99, 235, 0.1); /* blue-500 with alpha */
    }
    
    .btn-green {
        background-color: var(--green-600);
        color: white;
    }
    
    .btn-green:hover {
        background-color: var(--green-700);
    }
    
    .btn-blue {
        background-color: var(--blue-600);
        color: white;
    }
    
    .btn-blue:hover {
        background-color: var(--blue-700);
    }
    
    .btn-pink {
        background-color: var(--pink-600);
        color: white;
    }
    
    .btn-pink:hover {
        background-color: var(--pink-700);
    }
    
    .btn-red {
        background-color: var(--red-600);
        color: white;
    }
    
    .btn-red:hover {
        background-color: var(--red-700);
    }

    .btn-purple {
        background-color: var(--purple-600);
        color: white;
    }
    
    .btn-purple:hover {
        background-color: var(--purple-700);
    }
    
    .btn-yellow {
        background-color: var(--yellow-500);
        color: white;
    }
    
    .btn-yellow:hover {
        background-color: var(--yellow-700);
    }
    
    /* Navbar */
    #battleLogo {
        letter-spacing: 0.1em;
        font-size: 1.2rem;
        color: var(--red-700); /* This is a dark red, ensure neon-text overrides if visual brightness is key */
        /* text-shadow: 0 0 2px var(--red-400);  Re-enable if needed, .neon-red provides stronger shadow */
    }
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); /* Safari */
        border-bottom: 1px solid var(--gray-800);
    }
    
    .navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem; /* Default height, overridden in media queries */
    }
    
    .logo {
        display: flex;
        align-items: center;
    }
    
    .logo i { /* This i tag is commented out in JSX, so this rule might not apply unless re-added */
        font-size: 2rem;
        color: var(--pink-500);
        margin-right: 0.5rem;
    }
    
    .nav-links {
        display: none; /* Hidden by default, shown in larger screens */
    }
    
    .nav-link {
        margin: 0 1rem;
        color: var(--gray-300);
        font-size: 1.5rem; /* This is quite large */
        /* text-shadow: 0 0 1px var(--red-500), 0 0 10px var(--red-500), 0 0 20px var(--red-500); */
        /* Consider a lighter, more subtle shadow if this is too much, or rely on .neon-text if applied */
    }
    .nav-link.font-bold { /* Basic font-bold if Tailwind is not present */
        font-weight: bold;
    }
    
    .nav-link:hover {
        color: var(--red-400);
    }
    /* #contact{
        color:var(--red-700);
        -webkit-text-stroke: 0.01em #fff;
        color:transparent;
        font-weight: 800;
    } */

    /* Hero Section */
    .hero {
        position: relative;
        height: 100vh;
        min-height: 600px; /* Ensure hero has minimum height */
        overflow: hidden;
        display: flex; /* To center content if hero-content isn't absolute */
        align-items: center;
        justify-content: center;
    }
    
    .hero-content {
        position: relative; /* Changed from absolute to work better with flex parent */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        z-index: 10; /* Above overlay and bg */
    }
    #holu {
        line-height: 1.2; /* Adjusted from fixed 4rem for better responsiveness */
    }

    .hero-title {
        font-size: 3rem; /* Base size, adjusted by media queries */
        margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.25rem;
        max-width: 48rem;
        margin-bottom: 2rem;
        color: var(--gray-300);
    }
    
    .hero-buttons {
        margin-bottom: 2rem;
    }
    
    .hero-buttons .btn {
        margin: 0.5rem; /* Ensure spacing on small screens if they wrap */
    }
    
    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8), var(--background) );
        z-index: 1; /* Below content, above bg image */
    }
    
    .hero-bg { /* This class is on the same div as hero, and on hero-content. May need to be specific. Assuming it's for a background image container */
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 0; /* Background image behind overlay */
    }
    .heroSection-bg { /* Specific background for hero section elements */
      /* background: radial-gradient(circle at center, rgba(30, 14, 134, 0.596), black, black); */
      /* If this is for the image itself, it's fine. If it's an overlay, hero-overlay is better. */
      /* In your JSX, it's on an empty div and also on hero-content. Clarify its purpose. */
      /* For now, let's assume it's an additional layer if needed, or it's the primary bg if hero-bg img isn't used */
    }
    
    .scroll-down {
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--gray-400);
        z-index: 10;
    }
    
    .scroll-down span {
        margin-bottom: 0.5rem;
    }
    
    .bounce {
        animation: bounce 1.5s infinite ease-in-out;
    }
    
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
    }
    
    /* Section Styles */
    .section {
        position: relative;
        padding: 5rem 0;
        overflow: hidden; /* Contains background gradients */
    }
    
    .section-bg { /* General container for section-specific gradient backgrounds */
        position: absolute;
        inset: 0;
        z-index: 0; /* Behind section content */
    }
    
    /* Specific Section Backgrounds (applied to .section-bg div) */
    .games-bg {
        background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2), var(--background) 70%, var(--background));
    }
    
    .features-bg {
        background: radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.2), var(--background) 70%, var(--background));
    }
    
    .booking-bg {
        background: radial-gradient(circle at top left, rgba(22, 163, 74, 0.2), var(--background) 70%, var(--background));
    }
    
    .events-bg {
        background: radial-gradient(circle at center, rgba(219, 39, 119, 0.2), var(--background) 70%, var(--background));
    }
    
    .location-bg {
        background: radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.2), var(--background) 70%, var(--background));
    }
    
    .newsletter-bg { /* This class isn't used in the provided JSX for a .section-bg */
        background: linear-gradient(to bottom, var(--background), rgba(37, 99, 235, 0.3));
    }
    
    .section-header {
        text-align: center;
        margin-bottom: 4rem;
        position: relative;
        z-index: 1; /* Above section-bg */
    }
    
    .section-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
    
    .section-subtitle {
        font-size: 1.25rem;
        color: var(--gray-400);
        max-width: 48rem;
        margin: 0 auto;
    }
    
    /* Games Section */
    .games-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
        gap: 2rem;
        position: relative;
        z-index: 1;
    }
    
    .game-card {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        transition: transform 0.3s ease;
        background-color: var(--card); /* Ensure card has a background */
    }
    
    .game-card:hover {
        transform: scale(1.05);
    }
    
    .game-card-image {
        position: relative;
        height: 250px; /* Adjusted for better card proportions */
        overflow: hidden;
        /* border-radius: 0.5rem; Let parent card handle radius if content bleeds */
    }
    
    .game-card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    .game-card:hover .game-card-image img {
        transform: scale(1.1);
    }
    
    .game-card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5) 50%, transparent);
        opacity: 0.8; /* Or adjust gradient directly */
    }
    
    .game-card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;
        z-index: 2; /* Above overlay */
    }
    
    .game-card[data-color="blue"] .game-card-title { color: var(--blue-400); }
    .game-card[data-color="green"] .game-card-title { color: var(--green-400); }
    .game-card[data-color="pink"] .game-card-title { color: var(--pink-400); }
    .game-card[data-color="purple"] .game-card-title { color: var(--purple-400); }
    .game-card[data-color="yellow"] .game-card-title { color: var(--yellow-400); }
    .game-card[data-color="red"] .game-card-title { color: var(--red-400); }

    .game-card-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    
    .game-card-description {
        color: var(--gray-300);
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    /* Features Section */
    .features-grid {
        display: grid;
        grid-template-columns: 1fr; /* Default, overridden by media queries */
        gap: 4rem;
        position: relative;
        z-index: 1;
    }
    
    .features-image {
        position: relative;
        height: clamp(300px, 50vh, 500px); /* Responsive height */
        border-radius: 0.5rem;
        overflow: hidden;
    }
    
    .features-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .features-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 70%);
    }
    
    .features-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    
    .features-list {
        display: grid;
        gap: 2rem;
    }
    
    .feature-card {
        display: flex;
        align-items: flex-start;
        /* neon-border already provides padding and border, this is for cards within the list */
    }
    
    .feature-icon {
        margin-right: 1rem;
        background-color: rgba(22, 163, 74, 0.1); /* Default icon bg, override per color */
        padding: 0.75rem;
        border-radius: 9999px;
        flex-shrink: 0;
    }
    
    .feature-icon i {
        font-size: 1.5rem;
        display: block; /* Helps with alignment */
    }
    
    .feature-card.neon-green .feature-icon { background-color: rgba(var(--green-500-rgb, 34, 197, 94), 0.1); } /* Define --*-rgb for rgba usage */
    .feature-card.neon-green .feature-icon i { color: var(--green-400); }
    
    .feature-card.neon-blue .feature-icon { background-color: rgba(var(--blue-500-rgb, 59, 130, 246), 0.1); }
    .feature-card.neon-blue .feature-icon i { color: var(--blue-400); }
    
    .feature-card.neon-pink .feature-icon { background-color: rgba(var(--pink-500-rgb, 236, 72, 153), 0.1); }
    .feature-card.neon-pink .feature-icon i { color: var(--pink-400); }
    
    .feature-card.neon-purple .feature-icon { background-color: rgba(var(--purple-500-rgb, 168, 85, 247), 0.1); }
    .feature-card.neon-purple .feature-icon i { color: var(--purple-400); }
    
    .feature-details {
        flex: 1;
    }
    
    .feature-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    
    .feature-card.neon-green .feature-title { color: var(--green-400); }
    .feature-card.neon-blue .feature-title { color: var(--blue-400); }
    .feature-card.neon-pink .feature-title { color: var(--pink-400); }
    .feature-card.neon-purple .feature-title { color: var(--purple-400); }
    
    .feature-description {
        color: var(--gray-300);
    }
    
    /* Booking Section */
    .booking-grid {
        display: grid;
        grid-template-columns: 1fr; /* Default, overridden by media queries */
        gap: 4rem;
        position: relative;
        z-index: 1;
    }
    
    .booking-form-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--green-400);
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr; /* Default, overridden */
        gap: 1.5rem;
        /* margin-bottom: 1.5rem; Removed, apply to .form-group */
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    .form-row .form-group:last-child {
      margin-bottom: 0; /* If it's the last item in a row */
    }
    
    .form-group label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--gray-300);
        margin-bottom: 0.5rem;
    }
    
    .input-icon {
        position: relative;
    }
    
    .input-icon i {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--gray-400);
        pointer-events: none; /* So icon doesn't block input click */
    }
    
    .input-icon input, .input-icon select { /* Added select */
        padding-left: 2.5rem !important; /* Ensure it overrides default padding */
    }
    
    .form-input,
    .form-select,
    .form-textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: var(--gray-900);
        border: 1px solid var(--gray-700);
        color: white;
        border-radius: 0.375rem;
        transition: all 0.3s ease;
        font-size: 1rem;
    }
    .form-select {
      appearance: none; /* For custom select arrow if added */
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23a1a1aa'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25em 1.25em;
      padding-right: 2.5rem; /* Space for arrow */
    }
    
    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
        border-color: var(--green-500);
        outline: none;
        box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2); /* green-500 with alpha */
    }
    
    .form-textarea {
        resize: vertical;
        min-height: 80px;
    }
    
    .hours-card,
    .packages-card {
        margin-bottom: 2rem; /* If they are separate from form, otherwise form provides spacing */
    }
    
    .hours-title,
    .packages-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
    
    .hours-title { color: var(--blue-400); }
    .packages-title { color: var(--pink-400); } /* Was pink in HTML, purple in CSS, harmonized to pink */
    
    .hours-list {
        display: grid;
        gap: 1rem;
    }
    
    .hours-item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--gray-700);
    }
    
    .hours-item:last-child {
        border-bottom: none;
    }
    
    .day { color: var(--gray-300); }
    .time { color: white; font-weight: 500; }
    
    .packages-list { display: grid; gap: 1.5rem; }
    
    .package-item {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-700);
    }
    .package-item:last-child { border-bottom: none; padding-bottom: 0; }
    
    .package-name { font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 0.5rem; }
    .package-description { color: var(--gray-300); margin-bottom: 0.75rem; }
    .package-price { display: flex; align-items: center; color: var(--pink-400); }
    .price { font-size: 1.25rem; font-weight: bold; }
    .price-info { color: var(--gray-400); margin-left: 0.5rem; }
    
    /* Events Section */
    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive */
        gap: 2rem;
        position: relative;
        z-index: 1;
    }
    
    .event-card {
        background: linear-gradient(to bottom right, var(--card), rgba(0,0,0,0.3));
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column; /* Ensure content flows well */
    }
    
    .pink-event { border: 1px solid var(--pink-800); box-shadow: 0 0.5rem 1rem rgba(219, 39, 119, 0.2); } /* pink-600 with alpha */
    .blue-event { border: 1px solid var(--blue-800); box-shadow: 0 0.5rem 1rem rgba(37, 99, 235, 0.2); }  /* blue-600 with alpha */
    .green-event { border: 1px solid var(--green-800); box-shadow: 0 0.5rem 1rem rgba(22, 163, 74, 0.2); }/* green-600 with alpha */
    
    .event-image {
        position: relative;
        height: 12rem; /* Fixed height */
        width: 100%;
    }
    
    .event-image img { width: 100%; height: 100%; object-fit: cover; }
    
    .event-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
    
    .event-badge {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        /* background-color: var(--pink-600); Default, overridden by specific event colors */
        color: white;
        font-size: 0.75rem;
        font-weight: bold;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        z-index: 1;
    }
    
    .pink-event .event-badge { background-color: var(--pink-600); }
    .blue-event .event-badge { background-color: var(--blue-600); }
    .green-event .event-badge { background-color: var(--green-600); }
    
    .event-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .event-title { font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 0.5rem; }
    .event-description { color: var(--gray-300); margin-bottom: 1rem; font-size: 0.9rem; flex-grow: 1; }
    .event-date { display: flex; align-items: center; color: var(--gray-400); margin-bottom: 1rem; font-size: 0.875rem; }
    .event-date i { margin-right: 0.5rem; }
    .event-content .btn { margin-top: auto; } /* Push button to bottom of card content */
    
    .events-more { margin-top: 3rem; text-align: center; }
    
    /* Location Section */
    .location-grid {
        display: grid;
        grid-template-columns: 1fr; /* Default, overridden */
        gap: 4rem;
        position: relative;
        z-index: 1;
        align-items: center; /* Vertically align items when 2 columns */
    }
    
    .location-title { font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem; }
    .info-list { display: grid; gap: 1.5rem; }
    .info-item { display: flex; align-items: flex-start; }
    
    .info-icon {
        margin-right: 1rem;
        background-color: rgba(168, 85, 247, 0.1); /* purple-500 with alpha */
        padding: 0.75rem;
        border-radius: 9999px;
        flex-shrink: 0;
    }
    
    .info-icon i { font-size: 1.5rem; color: var(--purple-400); display: block; }
    
    .info-content { flex: 1; }
    .info-title { font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 0.5rem; }
    .info-description { color: var(--gray-300); }
    
    .social-links { margin-top: 2rem; /* Increased spacing */ padding-top: 1rem; } /* Removed border-top as it's inside location-info */
    .social-title { font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 1rem; }
    .social-icons { display: flex; gap: 1rem; }
    
    .social-icon {
        background-color: rgba(168, 85, 247, 0.2); /* purple-500 with alpha */
        padding: 0.75rem;
        border-radius: 9999px;
        transition: background-color 0.3s ease;
        display: inline-flex; /* For icon centering */
        align-items: center;
        justify-content: center;
    }
    
    .social-icon:hover { background-color: rgba(168, 85, 247, 0.4); } /* purple-500 with alpha */
    .social-icon i { font-size: 1.5rem; color: var(--purple-400); display: block; }
    
    .location-map {
        position: relative;
        height: clamp(300px, 50vh, 400px); /* Responsive height */
        border-radius: 0.5rem;
        overflow: hidden;
    }
    
    .location-map img { width: 100%; height: 100%; object-fit: cover; }
    
    .map-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.3); /* Slight overlay to make button pop */
    }
    
    /* Newsletter Section (Not in JSX, but CSS was provided) */
    .newsletter-section { text-align: center; }
    .newsletter-content { max-width: 48rem; margin: 0 auto; position: relative; z-index: 1; }
    .newsletter-title { font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem; }
    .newsletter-subtitle { font-size: 1.25rem; color: var(--gray-300); margin-bottom: 2rem; }
    .newsletter-form { display: flex; flex-direction: column; gap: 1rem; }
    
    .newsletter-input {
        flex-grow: 1;
        padding: 0.75rem 1rem;
        background-color: rgba(0,0,0,0.6);
        border: 1px solid var(--gray-700);
        color: white;
        border-radius: 0.375rem;
    }
    
    .newsletter-input:focus { border-color: var(--blue-500); outline: none; box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); } /* blue-500 with alpha */
    
    /* Footer (Not in JSX, but CSS was provided) */
    .footer { padding: 3rem 0; border-top: 1px solid var(--gray-800); }
    .footer-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    .footer-about { margin-bottom: 1.5rem; }
    .footer-logo { display: flex; align-items: center; margin-bottom: 1.5rem; }
    .footer-logo i { font-size: 2rem; color: var(--pink-500); margin-right: 0.5rem; }
    .footer-description { color: var(--gray-400); margin-bottom: 1.5rem; }
    .footer-social { display: flex; gap: 1rem; }
    .footer-social-link { color: var(--gray-400); transition: color 0.3s ease; }
    .footer-social-link:hover { color: white; }
    .footer-social-link i { font-size: 1.25rem; }
    .footer-title { font-size: 1.125rem; font-weight: bold; color: white; margin-bottom: 1.5rem; }
    .footer-menu { display: grid; gap: 1rem; }
    .footer-menu a { color: var(--gray-400); transition: color 0.3s ease; }
    .footer-menu a:hover { color: white; }
    .footer-info { display: grid; gap: 1rem; }
    .footer-info li { display: flex; align-items: flex-start; }
    .footer-info i { color: var(--gray-400); margin-right: 0.75rem; margin-top: 0.125rem; flex-shrink: 0; }
    .footer-info span { color: var(--gray-400); }
    .footer-bottom { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-800); display: flex; flex-direction: column; align-items: center; }
    .copyright { color: var(--gray-500); font-size: 0.875rem; margin-bottom: 1rem; text-align: center;}
    .footer-legal { display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; }
    .footer-legal a { color: var(--gray-500); font-size: 0.875rem; transition: color 0.3s ease; }
    .footer-legal a:hover { color: white; }

    /* Specific ID styles */
    #loca { /* This ID is on the map image */
        /* Styles for the map image itself, .location-map img already covers it */
    }
    #subbm { /* This ID is not in the JSX, seems like a typo for submit button? */
        margin-top: 1rem;
    }
    #upcoming-event-section { /* This ID is not in the JSX */
        margin-top: 20px;
    }
    
    /* Media Queries */
    @media (max-width: 640px) {
        #contact { display:none; }
        #holu { line-height: 1.3; } /* Adjusted from fixed 3rem */
        .hero-title { font-size: 2.5rem; }
        .section-title { font-size: 2rem; }
        .nav-link { font-size: 1.2rem; margin: 0 0.5rem; }
    }
    
    @media (min-width: 640px) {
        /* .navbar-content { height: 3rem; } This seems too small, keeping 5rem from default or higher up MQ */
        .newsletter-form { flex-direction: row; } /* For newsletter if used */
        .form-row { grid-template-columns: repeat(2, 1fr); } /* Form fields side-by-side earlier */
    }
    
    @media (min-width: 768px) {
        .hero-title { font-size: 4rem; }
        .hero-subtitle { font-size: 1.5rem; }
        .section-title { font-size: 3rem; }
        /* .games-grid { grid-template-columns: repeat(2, 1fr); } auto-fit handles this */
        /* .events-grid { grid-template-columns: repeat(2, 1fr); } auto-fit handles this */
        
        .footer-bottom { flex-direction: row; justify-content: space-between; }
        .copyright { margin-bottom: 0; }
    }
    
    @media (min-width: 1024px) {
        .nav-links { display: flex; }
        .navbar-content { height: 5rem; } /* Standard navbar height */
        .hero-title { font-size: 4.5rem; }
        /* .games-grid { grid-template-columns: repeat(3, 1fr); } auto-fit handles this */
        .features-grid { grid-template-columns: repeat(2, 1fr); align-items: center; }
        .booking-grid { grid-template-columns: 2fr 1fr; /* Form larger than info */ }
        /* .events-grid { grid-template-columns: repeat(3, 1fr); } auto-fit handles this */
        .location-grid { grid-template-columns: 1fr 1fr; /* Equal columns */ align-items: center; }
        .footer-grid { grid-template-columns: repeat(4, 1fr); } /* For footer if used */
    }
  `;
  return <style>{cssStyles}</style>;
};


function Shubhh() {
    const [fullName, setFullName] = useState(''); // Initialize with empty string
    const [mobilenumber, setmobilenumber] = useState(''); // Initialize with empty string
    const [date, setDate] = useState(''); // Initialize with empty string
    const [nop, setnop] = useState(1); // Initialize with 1 or ''
    const [gexp, setgexp] = useState(''); // Initialize with empty string
    const [data, setData] = useState(''); // For API response message
    const [amount, setamount] = useState(0);
    const [warning, setWarning] = useState("");

    // console.log(fullName, mobilenumber, date, nop, gexp);

    const prices = React.useMemo(() => [
        { "ps4": 80 }, { "ps5": 120 }, { "racSimul": 200 }, { "vr": 120 }, { "arc": 50 }, { "rc20": 120 },
        { "psfour": 100 }, { "psfive": 150 }
    ], []);

    const gamesexp = React.useMemo(() => [
        "Virtual Reality Arena-10",
        "PlayStation 5 (I)",
        "PlayStation 5 (II)",
        "PlayStation 5 (III)",
        "PlayStation 4 (I)",
        "PlayStation 4 (II)",
        "Racing Simulators-20 minutes",
        "Racing Simulators-60 minutes",
        "Arcade Classics",
    ], []);

    const calculateAmount = React.useCallback(() => {
        if (!gexp || !nop || parseInt(nop, 10) <= 0) {
            setamount(0);
            return;
        }
        
        let price = 0;
        const numPeople = parseInt(nop, 10);

        if (gexp.includes("PlayStation 4")) {
            price = (numPeople === 1) ? prices[6].psfour : prices[0].ps4;
        } else if (gexp.includes("PlayStation 5")) {
            price = (numPeople === 1) ? prices[7].psfive : prices[1].ps5;
        } else if (gexp.includes("Racing Simulators-60")) {
            price = prices[2].racSimul;
        } else if (gexp.includes("Virtual Reality")) {
            price = prices[3].vr;
        } else if (gexp.includes("Arcade Classics")) {
            price = prices[4].arc;
        } else if (gexp.includes("Racing Simulators-20")) {
            price = prices[5].rc20;
        }
        
        const totalAmount = price * numPeople;
        setamount(totalAmount);
    }, [gexp, nop, prices]);

    useEffect(() => {
        calculateAmount();
    }, [gexp, nop, calculateAmount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName || !mobilenumber || !date || !gexp || !nop || nop <= 0) {
            setData("Please fill in all required fields and ensure number of people is valid.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/createTicket', { 
                fullName: fullName, // Added fullName to request
                mobileNumber: mobilenumber, 
                amount: amount, 
                startingTime: date, 
                game: gexp, 
                guest: nop 
            });
            console.log('Booking response:', response.data);
            setData(response.data.message || "Booking successful!");
            // Optionally reset form:
            // setFullName(''); setmobilenumber(''); setDate(''); setgexp(''); setnop(1); setamount(0);
        } catch (error) {
            console.error('Booking failed:', error.response?.data || error.message);
            setData(error.response?.data?.message || 'Booking failed. Please try again.');
        }
    };

    const handleNopChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 1) {
            setWarning("Number of people must be at least 1.");
            setnop(1); // Reset to a valid minimum
        } else if (value > 10) {
            setWarning("Cannot book for more than 10 people at once.");
            setnop(10); // Cap at 10
        } else {
            setWarning("");
            setnop(value);
        }
        // calculateAmount will be called by useEffect
    };
    

    return (
        <>
            <GlobalStyles />
            <div id="main">
                {/* */}
                <header className="navbar">
                    <div className="container">
                        <div className="navbar-content">
                            <a href="/" className="logo">
                                {/* */}
                                <img id="logophoto" src={logo} alt="Battleground Logo" />
                                <span id="battleLogo" className="neon-text neon-red">BATTLEGROUND</span>
                            </a>
                            <nav className="nav-links">
                                <a href="#games" className="nav-link font-bold">Games</a>
                                <a href="#booking" className="nav-link font-bold">Booking</a>
                                <a href="#events" className="nav-link font-bold">Events</a>
                                <a href="#location" className="nav-link font-bold">Location</a>
                            </nav>
                            <a id="contact" href='#location' className="btn btn-gradient-blue-red">Contact Us</a>
                        </div>
                    </div>
                </header>

                {/* */}
                <section className="hero" id="hero">
                    <div className="hero-bg" /> {/* Example background image */}
                    <div className="hero-overlay"></div>
                    <div className="hero-content"> {/* Removed heroSection-bg as hero-overlay and hero-bg handle visual */}
                        <h1 id="holu" className="hero-title">
                            <span className="neon-text neon-red">THE</span><br />
                            <span className="neon-text neon-red">BATTLEGROUND</span> <br />
                            <span className="neon-text neon-red">GAMEZONE</span>
                        </h1>
                        <p className="hero-subtitle">
                            Experience next-level gaming with cutting-edge technology and immersive environments
                        </p>
                        <div className="hero-buttons">
                            <a href="#booking" className="btn btn-gradient-pink-purple">Book Now</a>
                            <a href="#games" className="btn btn-outline-blue">Explore Games</a>
                        </div>
                        <a href="#games" className="scroll-down">
                            <span>Scroll Down</span>
                            <i className="fas fa-chevron-down bounce"></i>
                        </a>
                    </div>
                </section>

                {/* */}
                <section id="games" className="section games-section">
                    <div className="section-bg games-bg"></div>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">
                                <span className="neon-text neon-blue">Our Gaming Experiences</span>
                            </h2>
                            <p className="section-subtitle">
                                Discover our wide range of immersive gaming experiences designed for all ages and skill levels
                            </p>
                        </div>
                        <div className="games-grid">
                            <div className="game-card" data-color="purple">
                                <div className="game-card-image">
                                    <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheSUyMHN0YXRpb24lMjA1fGVufDB8fDB8fHww" alt="Play Station 5" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content">
                                    <h3 className="game-card-title">Play Station 5</h3>
                                    <p className="game-card-description">Comfortable gaming stations with the latest consoles and games for casual and competitive play.</p>
                                    <a href="#booking" className="btn btn-purple">Book Now</a>
                                </div>
                            </div>
                            <div className="game-card" data-color="blue">
                                <div className="game-card-image">
                                    <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D" alt="Play Station 4" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content">
                                    <h3 className="game-card-title">Play Station 4</h3>
                                    <p className="game-card-description">Test your problem-solving skills in our themed escape rooms with immersive storylines.</p>
                                    <a href="#booking" className="btn btn-blue">Book Now</a>
                                </div>
                            </div>
                            <div className="game-card" data-color="red">
                                <div className="game-card-image">
                                    <img src={Ar} alt="Virtual Reality Arena" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content" >
                                    <h3 className="game-card-title">Virtual Reality Arena</h3>
                                    <p className="game-card-description">Step into another world with our cutting-edge VR experiences. Perfect for groups and parties.</p>
                                    <a href="#booking" className="btn btn-red">Book Now</a>
                                </div>
                            </div>
                            <div className="game-card" data-color="green">
                                <div className="game-card-image">
                                    <img src={Xbox} alt="Xbox Series X" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content">
                                    <h3 className="game-card-title">Xbox Series X</h3>
                                    <p className="game-card-description">Engage in tactical team battles in our neon-lit arena with state-of-the-art equipment.</p>
                                    <a href="#booking" className="btn btn-green">Book Now</a>
                                </div>
                            </div>
                            <div className="game-card" data-color="pink">
                                <div className="game-card-image">
                                    <img src={crs} alt="Racing Simulators" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content">
                                    <h3 className="game-card-title">Racing Simulators</h3>
                                    <p className="game-card-description">Feel the adrenaline with our professional-grade racing simulators with motion feedback.</p>
                                    <a href="#booking" className="btn btn-pink">Book Now</a>
                                </div>
                            </div>
                            <div className="game-card" data-color="yellow">
                                <div className="game-card-image">
                                    <img src={classic} alt="Arcade Classics" />
                                    <div className="game-card-overlay"></div>
                                </div>
                                <div className="game-card-content">
                                    <h3 className="game-card-title">Arcade Classics</h3>
                                    <p className="game-card-description">Relive the golden age of gaming with our collection of classic and modern arcade games.</p>
                                    <a href="#booking" className="btn btn-yellow">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* */}
                <section id="features" className="section features-section"> {/* Added ID for potential navigation */}
                    <div className="section-bg features-bg"></div>
                    <div className="container">
                        <div className="features-grid">
                            <div className="features-image">
                                <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Gaming Features" />
                                <div className="features-image-overlay"></div>
                            </div>
                            <div className="features-content">
                                <h2 className="features-title">
                                    <span className="neon-text neon-pink">Why Choose</span> <br />
                                    <span className="neon-text neon-green">Battleground Gaming?</span>
                                </h2>
                                <div className="features-list">
                                    <div className="feature-card neon-border neon-green">
                                        <div className="feature-icon"><i className="fas fa-gamepad"></i></div>
                                        <div className="feature-details">
                                            <h3 className="feature-title">Cutting-Edge Technology</h3>
                                            <p className="feature-description">Experience gaming on the latest hardware with immersive displays and responsive controls.</p>
                                        </div>
                                    </div>
                                    <div className="feature-card neon-border neon-blue">
                                        <div className="feature-icon"><i className="fas fa-users"></i></div>
                                        <div className="feature-details">
                                            <h3 className="feature-title">Perfect for Groups</h3>
                                            <p className="feature-description">Ideal for birthday parties, corporate events, and team-building activities.</p>
                                        </div>
                                    </div>
                                    <div className="feature-card neon-border neon-pink">
                                        <div className="feature-icon"><i className="fas fa-trophy"></i></div>
                                        <div className="feature-details">
                                            <h3 className="feature-title">Competitive Gaming</h3>
                                            <p className="feature-description">Regular tournaments and leaderboards to showcase your skills and win prizes.</p>
                                        </div>
                                    </div>
                                    <div className="feature-card neon-border neon-purple">
                                        <div className="feature-icon"><i className="fas fa-calendar-days"></i></div>
                                        <div className="feature-details">
                                            <h3 className="feature-title">Special Events</h3>
                                            <p className="feature-description">Themed nights, game launches, and exclusive member events throughout the year.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* */}
                <section id="booking" className="section booking-section">
                    <div className="section-bg booking-bg"></div>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">
                                <span className="neon-text neon-green">Book Your Gaming Session</span>
                            </h2>
                            <p className="section-subtitle">
                                Reserve your spot for an unforgettable gaming experience with friends and family
                            </p>
                        </div>
                        <div className="booking-grid">
                            <div className="booking-form neon-border neon-green">
                                <h3 className="booking-form-title">Booking Form</h3>
                                <form onSubmit={handleSubmit} id="bookingForm">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" id="fullName" placeholder="Your name" className="form-input" value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mobilenumber">Mobile Number</label> {/* Corrected htmlFor */}
                                            <input type="tel" id="mobilenumber" placeholder="Mobile Number" className="form-input" value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)}
                                                pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="date">Date & Time</label>
                                            <div className="input-icon">
                                                <i className="fas fa-calendar"></i>
                                                <input type="datetime-local" id="date" className="form-input" value={date} onChange={(e) => setDate(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="people">Number of People</label>
                                            <div className="input-icon">
                                                <i className="fas fa-users"></i>
                                                <input type="number" id="people" min="1" max="10" placeholder="Number of guests" className="form-input" value={nop}
                                                    onChange={handleNopChange}
                                                    required />
                                            </div>
                                            {warning && <div style={{ color: 'var(--red-400)', marginTop: '5px', fontSize: '0.875rem' }}>{warning}</div>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="experience">Gaming Experience</label>
                                            <div className="input-icon"> {/* Added for consistency if an icon was planned */}
                                              <i className="fas fa-gamepad"></i> {/* Example icon */}
                                              <select id="experience" className="form-select" value={gexp}
                                                  onChange={(e) => setgexp(e.target.value)} required>
                                                  <option value="" disabled>Select experience</option>
                                                  {gamesexp.map((t, index) => (
                                                      <option key={index} value={t}>{t}</option>
                                                  ))}
                                              </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Total Amount</label>
                                            <div style={{ border: '1px solid var(--gray-700)', backgroundColor: 'var(--gray-900)', padding: '0.75rem 1rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', height: 'calc(0.75rem * 2 + 1rem * 2 + 2px)' }}> {/* Matched height of input */}
                                                <i className="fas fa-rupee-sign" style={{ marginRight: '8px', color: 'var(--green-400)'}}></i>
                                                <span style={{color: 'white', fontSize: '1rem'}}>{amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-gradient-green-blue btn-full" style={{marginTop: '1rem'}}>Book Now</button>
                                    {data && <div style={{ color: data.includes('failed') ? 'var(--red-400)' : 'var(--green-400)', marginTop: '15px', textAlign: 'center' }}>{data}</div>}
                                </form>
                                <div style={{ padding: '10px', color: 'var(--gray-400)', fontSize: '0.875rem', textAlign: 'center', marginTop: '1rem' }} >
                                    Disclaimer: All bookings are for 1 hour unless specified (e.g., VR, Racing Simulators).
                                </div>
                            </div>
                            <div className="booking-info">
                                <div className="hours-card neon-border neon-blue">
                                    <h3 className="hours-title">Opening Hours</h3>
                                    <div className="hours-list">
                                        <div className="hours-item">
                                            <span className="day">Monday</span>
                                            <span className="time" style={{color: 'var(--red-400)'}}>Closed</span>
                                        </div>
                                        <div className="hours-item">
                                            <span className="day">Tuesday - Sunday</span>
                                            <span className="time">10:00 AM - 10:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="packages-card neon-border neon-pink"> {/* Changed from purple to pink to match CSS title rule */}
                                    <h3 className="packages-title">Booked Slots (Example)</h3>
                                     <p style={{color: 'var(--gray-300)'}}>Information about currently booked slots or peak times could be displayed here if an API provides it.</p>
                                    {/* Actual booked slots would need dynamic data */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* */}
                <section id="events" className="section events-section">
                    <div className="section-bg events-bg"></div>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="section-header">
                            <h2 className="section-title">
                                <span className="neon-text neon-pink">Upcoming Events</span>
                            </h2>
                            <p className="section-subtitle">
                                Join our special gaming events, tournaments, and themed nights
                            </p>
                        </div>
                        <div className="events-grid">
                            <div className="event-card pink-event">
                                <div className="event-image">
                                    <img src={fort} alt="Fortnite Championship" />
                                    <div className="event-overlay"></div>
                                    <div className="event-badge">TOURNAMENT</div>
                                </div>
                                <div className="event-content">
                                    <h3 className="event-title">Fortnite Championship</h3>
                                    <p className="event-description">Compete against the best players and win exclusive prizes in our monthly tournament.</p>
                                    <div className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        <span>Date: TBD</span> {/* Placeholder Date */}
                                    </div>
                                    <button className="btn btn-pink btn-full">Register Now</button>
                                </div>
                            </div>
                            <div className="event-card blue-event"> {/* Example second event */}
                                <div className="event-image">
                                    <img src={cod} alt="Call of Duty Launch" />
                                    <div className="event-overlay"></div>
                                    <div className="event-badge">LAUNCH PARTY</div>
                                </div>
                                <div className="event-content">
                                    <h3 className="event-title">New Game Launch</h3>
                                    <p className="event-description">Be the first to play the latest releases. Special launch night event!</p>
                                    <div className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        <span>Date: TBD</span> {/* Placeholder Date */}
                                    </div>
                                    <button className="btn btn-blue btn-full">RSVP Now</button>
                                </div>
                            </div>
                             <div className="event-card green-event"> {/* Example third event */}
                                <div className="event-image">
                                    <img src="https://images.unsplash.com/photo-1580236176063-339697a9a279?auto=format&fit=crop&w=600&q=60" alt="VR Night" />
                                    <div className="event-overlay"></div>
                                    <div className="event-badge">SPECIAL EVENT</div>
                                </div>
                                <div className="event-content">
                                    <h3 className="event-title">VR After Dark</h3>
                                    <p className="event-description">Adults-only VR gaming night with special challenges and premium drinks.</p>
                                    <div className="event-date">
                                        <i className="fas fa-calendar"></i>
                                        <span>Date: TBD</span> {/* Placeholder Date */}
                                    </div>
                                    <button className="btn btn-green btn-full">Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="events-more">
                            <button className="btn btn-gradient-pink-purple">View All Events</button>
                        </div>
                    </div>
                </section>

                {/* */}
                <section id="location" className="section location-section">
                    <div className="section-bg location-bg"></div>
                    <div className="container">
                        <div className="location-grid">
                            <div className="location-info">
                                <h2 className="location-title">
                                    <span className="neon-text neon-purple">Find Us</span>
                                </h2>
                                <div className="info-list">
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="info-content">
                                            <h3 className="info-title">Our Location</h3>
                                            <p className="info-description">
                                                Swarna Jayanti Nagar, Ramghat Road<br />
                                                Aligarh, Uttar Pradesh 202001<br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fas fa-phone"></i></div>
                                        <div className="info-content">
                                            <h3 className="info-title">Contact Us</h3>
                                            <p className="info-description">
                                                Phone: +91 98765 43210<br />
                                                Email: info@battlegroundgaming.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fas fa-clock"></i></div>
                                        <div className="info-content">
                                            <h3 className="info-title">Opening Hours</h3>
                                            <p className="info-description">
                                                Tuesday - Sunday: 10:00 AM - 10:00 PM<br />
                                                Monday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <h3 className="social-title">Follow Us</h3>
                                    <div className="social-icons">
                                        <a href="https://www.instagram.com/the_battleground_gamezone/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        {/* Add other social icons here if needed */}
                                    </div>
                                </div>
                            </div>
                            <div className="location-map neon-border neon-purple"> {/* Added neon-border for consistency */}
                                <img id="loca" src={locationImg} alt="Location Map Visual" />
                                <div className="map-overlay">
                                     <a href="https://www.google.com/maps/place/BATTLEGROUND+GAMEZONE+ALIGARH/@27.8967597,78.09723,17z" target="_blank" rel="noopener noreferrer" className="btn btn-gradient-purple">
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Placeholder - CSS was provided but no JSX, so adding a basic one */}
                <footer className="footer section" style={{borderTop: '1px solid var(--gray-800)', padding: '3rem 0', backgroundColor: 'var(--background)'}}>
                    <div className="container">
                        <div className="footer-bottom" style={{textAlign: 'center'}}>
                            <p className="copyright" style={{color: 'var(--gray-500)', fontSize: '0.875rem'}}>
                                &copy; {new Date().getFullYear()} BATTLEGROUND Gamezone. All Rights Reserved.
                            </p>
                            {/* <div className="footer-legal">
                                <a href="#privacy">Privacy Policy</a>
                                <a href="#terms">Terms of Service</a>
                            </div> */}
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Shubhh;
