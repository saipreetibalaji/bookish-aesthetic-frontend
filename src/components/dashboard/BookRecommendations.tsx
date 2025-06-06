
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, BookOpen } from 'lucide-react';
import { User, Book } from '../../types/User';

interface BookRecommendationsProps {
  user: User | null;
}

const BookRecommendations = ({ user }: BookRecommendationsProps) => {
  // Mock book data - in real app this would come from API based on user preferences
  const recommendedBooks: Book[] = [
    {
      id: '1',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      genre: 'Fiction',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      rating: 4.8,
      description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.',
      pages: 400,
      publishedYear: 2017
    },
    {
      id: '2',
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      rating: 4.7,
      description: 'An easy & proven way to build good habits & break bad ones.',
      pages: 320,
      publishedYear: 2018
    },
    {
      id: '3',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      genre: 'Fantasy',
      coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      rating: 4.6,
      description: 'A novel about all the choices that go into a life well lived.',
      pages: 288,
      publishedYear: 2020
    },
    {
      id: '4',
      title: 'Educated',
      author: 'Tara Westover',
      genre: 'Memoir',
      coverUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop',
      rating: 4.9,
      description: 'A memoir about education, transformation, and the power of learning.',
      pages: 334,
      publishedYear: 2018
    },
    {
      id: '5',
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      genre: 'Mystery',
      coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      rating: 4.5,
      description: 'A coming-of-age story and murder mystery set in the marshes of North Carolina.',
      pages: 384,
      publishedYear: 2018
    },
    {
      id: '6',
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      genre: 'Finance',
      coverUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=300&h=400&fit=crop',
      rating: 4.6,
      description: 'Timeless lessons on wealth, greed, and happiness.',
      pages: 256,
      publishedYear: 2020
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Recommended for You</h2>
          <p className="text-gray-600 mt-1">Discover books tailored to your reading preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedBooks.map((book) => (
          <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-amber-700 transition-colors">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-1">
                    by {book.author}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">{book.rating}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {book.genre}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {book.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{book.pages} pages</span>
                <span>{book.publishedYear}</span>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Now
                </Button>
                <Button variant="outline" size="sm">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookRecommendations;
