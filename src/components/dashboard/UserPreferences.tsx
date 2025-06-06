
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from '../../types/User';

interface UserPreferencesProps {
  user: User | null;
}

const UserPreferences = ({ user }: UserPreferencesProps) => {
  const [favoriteGenres, setFavoriteGenres] = useState<string[]>(['Fiction', 'Mystery', 'Self-Help']);
  const [favoriteAuthors, setFavoriteAuthors] = useState<string[]>(['Agatha Christie', 'Stephen King']);
  const [readingGoal, setReadingGoal] = useState(24);
  const [preferredLength, setPreferredLength] = useState<'short' | 'medium' | 'long' | 'any'>('medium');

  const availableGenres = [
    'Fiction', 'Mystery', 'Romance', 'Fantasy', 'Science Fiction', 'Thriller',
    'Biography', 'History', 'Self-Help', 'Business', 'Philosophy', 'Classic',
    'Young Adult', 'Horror', 'Poetry', 'Travel', 'Cooking', 'Art'
  ];

  const addGenre = (genre: string) => {
    if (!favoriteGenres.includes(genre)) {
      setFavoriteGenres([...favoriteGenres, genre]);
    }
  };

  const removeGenre = (genre: string) => {
    setFavoriteGenres(favoriteGenres.filter(g => g !== genre));
  };

  const addAuthor = (author: string) => {
    if (author.trim() && !favoriteAuthors.includes(author)) {
      setFavoriteAuthors([...favoriteAuthors, author]);
    }
  };

  const removeAuthor = (author: string) => {
    setFavoriteAuthors(favoriteAuthors.filter(a => a !== author));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Reading Preferences</h2>
        <p className="text-gray-600 mt-1">Customize your reading experience and get better recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Favorite Genres */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Favorite Genres</CardTitle>
            <CardDescription>
              Select genres you enjoy reading to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {favoriteGenres.map((genre) => (
                <Badge 
                  key={genre} 
                  variant="default" 
                  className="bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer"
                  onClick={() => removeGenre(genre)}
                >
                  {genre} ×
                </Badge>
              ))}
            </div>
            <Select onValueChange={addGenre}>
              <SelectTrigger>
                <SelectValue placeholder="Add a genre" />
              </SelectTrigger>
              <SelectContent>
                {availableGenres
                  .filter(genre => !favoriteGenres.includes(genre))
                  .map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Favorite Authors */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Favorite Authors</CardTitle>
            <CardDescription>
              Add authors you love to discover similar writers and new releases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {favoriteAuthors.map((author) => (
                <Badge 
                  key={author} 
                  variant="default" 
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer"
                  onClick={() => removeAuthor(author)}
                >
                  {author} ×
                </Badge>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter author name"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addAuthor((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
              <Button 
                variant="outline"
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Enter author name"]') as HTMLInputElement;
                  if (input && input.value) {
                    addAuthor(input.value);
                    input.value = '';
                  }
                }}
              >
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reading Goal */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Annual Reading Goal</CardTitle>
            <CardDescription>
              Set a target for how many books you want to read this year
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reading-goal">Books per year</Label>
              <Input
                id="reading-goal"
                type="number"
                value={readingGoal}
                onChange={(e) => setReadingGoal(parseInt(e.target.value) || 0)}
                min="1"
                max="365"
              />
            </div>
            <div className="text-sm text-gray-600">
              That's about {Math.round(readingGoal / 12)} books per month
            </div>
          </CardContent>
        </Card>

        {/* Preferred Book Length */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Preferred Book Length</CardTitle>
            <CardDescription>
              Choose your preferred book length for better recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={preferredLength} onValueChange={(value: any) => setPreferredLength(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short (under 200 pages)</SelectItem>
                <SelectItem value="medium">Medium (200-400 pages)</SelectItem>
                <SelectItem value="long">Long (over 400 pages)</SelectItem>
                <SelectItem value="any">Any length</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="bg-amber-600 hover:bg-amber-700">
          Save Preferences
        </Button>
      </div>
    </div>
  );
};

export default UserPreferences;
