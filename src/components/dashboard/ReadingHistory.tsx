
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, BookOpen } from 'lucide-react';
import { User, Book } from '../../types/User';

interface ReadingHistoryProps {
  user: User | null;
}

const ReadingHistory = ({ user }: ReadingHistoryProps) => {
  // Mock reading history - in real app this would come from user's actual history
  const readBooks: (Book & { dateRead: string; userRating: number })[] = [
    {
      id: '1',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      genre: 'Philosophy',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop',
      rating: 4.2,
      description: 'A philosophical book about following your dreams.',
      pages: 163,
      publishedYear: 1988,
      dateRead: '2024-01-15',
      userRating: 5
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop',
      rating: 4.8,
      description: 'A classic novel about justice and moral growth.',
      pages: 281,
      publishedYear: 1960,
      dateRead: '2024-02-22',
      userRating: 4
    },
    {
      id: '3',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop',
      rating: 4.3,
      description: 'A story of decadence and excess in Jazz Age America.',
      pages: 180,
      publishedYear: 1925,
      dateRead: '2024-03-10',
      userRating: 4
    }
  ];

  const readingStats = {
    totalBooks: readBooks.length,
    totalPages: readBooks.reduce((sum, book) => sum + book.pages, 0),
    averageRating: readBooks.reduce((sum, book) => sum + book.userRating, 0) / readBooks.length,
    favoriteGenre: 'Classic'
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Reading History</h2>
        <p className="text-gray-600 mt-1">Track your reading journey and achievements</p>
      </div>

      {/* Reading Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">Books Read</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-900">{readingStats.totalBooks}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Pages Read</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{readingStats.totalPages.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{readingStats.averageRating.toFixed(1)}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Favorite Genre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-purple-900">{readingStats.favoriteGenre}</div>
          </CardContent>
        </Card>
      </div>

      {/* Books List */}
      <div className="space-y-4">
        {readBooks.map((book) => (
          <Card key={book.id} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-gray-600">by {book.author}</p>
                      <p className="text-sm text-gray-500 mt-1">{book.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < book.userRating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(book.dateRead).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-3">
                    <Badge variant="secondary">{book.genre}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {book.pages} pages
                    </span>
                    <span className="text-sm text-gray-500">{book.publishedYear}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
