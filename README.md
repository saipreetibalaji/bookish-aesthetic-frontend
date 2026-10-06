# Book Discovery & Reading Dashboard

BookVerse is a frontend web application designed to work as a book recommendation interface using curated mock data. It allows users to explore book recommendations, track their reading history, manage reading preferences, and maintain a personal reading profile.

The project focuses on building a responsive and component-based user interface using React and TypeScript.

## Features

### Authentication Interface

* Login and Sign Up interfaces
* Form-based user input
* Mock authentication flow for frontend demonstration

### Book Recommendations

* Curated book recommendation cards
* Book covers, authors, genres, ratings, descriptions, page counts, and publication years
* Responsive grid-based layout
* Interactive UI elements for reading, previewing, and favoriting books

### Reading History

* Previously read books
* User ratings
* Reading dates
* Book metadata
* Reading statistics including:

  * Books read
  * Total pages read
  * Average rating
  * Favorite genre

### Reading Preferences

* Favorite genre selection
* Favorite author management
* Annual reading goal
* Preferred book length
* Interactive preference controls

### User Profile

* Personal information management
* Reading statistics
* Reading achievements
* Profile customization interface

### Responsive UI

* Responsive layouts for different screen sizes
* Sidebar navigation
* Mobile navigation support
* Reusable UI components

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* TanStack React Query
* Radix UI
* Lucide React
* shadcn/ui components

## Project Structure

```text
bookish-aesthetic-frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── LoginPage.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── BookRecommendations.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ReadingHistory.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── UserPreferences.tsx
│   │   │   └── UserProfile.tsx
│   │   │
│   │   └── ui/
│   │       └── Reusable UI components
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── types/
│   │   └── User.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Application Flow

```text
Landing / Authentication
          │
          ▼
   Login / Sign Up
          │
          ▼
       Dashboard
          │
    ┌─────┼─────────────┬──────────────┐
    ▼     ▼             ▼              ▼
Recommendations  Reading History  Preferences  Profile
```

## Current Project Scope

This repository currently focuses on the frontend experience and uses mock data for demonstration.

The current version does not include:

* Backend authentication
* Database integration
* Persistent user accounts
* Real-time book data
* Recommendation algorithms
* Persistent favorites or reading history
* API-based book search

The authentication, recommendations, reading history, profile information, and preferences are currently represented through frontend state and mock data.

## Future Improvements

Possible future extensions include:

* Integrating a book data API
* Implementing real user authentication
* Adding a backend and database
* Persisting reading history and user preferences
* Building a personalized recommendation system
* Implementing book search and filtering
* Adding favorites and reading-list functionality
* Adding book details and preview pages
* Deploying the application as a production web application

## Purpose

This project was developed as a frontend application to explore modern React development, component-based UI design, responsive layouts, TypeScript, and interactive state management.

## Sai Preeti B
