
export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    favoriteGenres: string[];
    favoriteAuthors: string[];
    readingGoal: number;
    preferredLength: 'short' | 'medium' | 'long' | 'any';
  };
  readingHistory: Book[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverUrl: string;
  rating: number;
  description: string;
  pages: number;
  publishedYear: number;
  isRead?: boolean;
  userRating?: number;
  dateRead?: string;
}
