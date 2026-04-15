Movie Discovery App
PROG2700 — Final Project

For my final project I chose to do a movie search/ discovery app, me and my boyfriend have been really into watching movies and finding new movies to watch so I thought this was a great idea
that I could aslo personally use! I will admit I severly underestimated how much work this project would take lol it was very frustrating to say the least but I am glad I stuck with it and worked 
out all the issues!

Project Overview

The Movie Discovery App lets users explore a curated catalogue of movies, view detailed information about each title, and manage a personal favourites list that persists across pages. The app demonstrates modern front end development practices including component-based architecture, global state management with React Context, client-side routing, and third-party API integration.

Features

- Browse Movies — View a dynamic grid of movie cards on the home page, each displaying poster art, title, and release date.
- Search & Sort — Filter movies by keyword and sort results alphabetically or by release date using Lodash utilities.
- Movie Details — Click any card to view a dedicated details page with synopsis, rating, genres, and formatted release date.
- Favourites System — Add or remove movies from a global favourites list managed through React Context; access saved favourites on a dedicated page.
- Responsive Design — SCSS-powered layouts that adapt cleanly to desktop, tablet, and mobile viewports.
- Client-Side Routing — Seamless navigation between Home, Favourites, and Details pages via React Router.

Technology Stack

| Technology | Purpose |
| React 18| Component-based UI library |
| Vite| Fast development server and build tool |
| React Router | Client-side page routing |
| Axios| HTTP client for API requests |
| Lodash| Utility functions for sorting and data manipulation |
| Day.js | Lightweight date formatting |
| SCSS| Modular, nested CSS styling |

Architecture Diagram

┌─────────────────────────────────────────────────────────┐
│                        App.jsx                          │
│                   (React Router Setup)                  │
└────────────┬──────────────┬──────────────┬──────────────┘
│              │              │
▼              ▼              ▼
┌───────────┐  ┌──────────────┐  ┌──────────────────┐
│ HomePage  │  │FavouritesPage│  │ MovieDetailsPage │
└─────┬─────┘  └──────┬───────┘  └────────┬─────────┘
│               │                    │
▼               ▼                    │
┌───────────┐   ┌───────────┐              │
│ MovieCard │   │ MovieCard │              │
└─────┬─────┘   └─────┬─────┘              │
│               │                    │
▼               ▼                    ▼
┌─────────────────────────────────────────────┐
│          FavouritesContext (Global State)    │
│        Add / Remove / Check Favourites      │
└──────────────────────┬──────────────────────┘
│
▼
┌─────────────────────────────────────────────┐
│              api.js (Axios)                 │
│       Fetch movies from external API        │
└─────────────────────────────────────────────┘

SetUp Steps 

vite-project/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── MovieCard.jsx    # Reusable movie card component
│   ├── context/
│   │   └── FavouritesContext.jsx  # Global favourites state provider
│   ├── pages/
│   │   ├── HomePage.jsx          # Main browsing page
│   │   ├── FavouritesPage.jsx    # Saved favourites page
│   │   └── MovieDetailsPage.jsx  # Individual movie detail view
│   ├── styles/
│   │   └── *.scss           # SCSS stylesheets 
│   ├── api.js               # Axios API configuration and calls
│   ├── App.jsx              # Root component with route definitions
│   └── main.jsx             # Application entry point
├── .env                     # API key 
├── index.html               # HTML shell
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration


