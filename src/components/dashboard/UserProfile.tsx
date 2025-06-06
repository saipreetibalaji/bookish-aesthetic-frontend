
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, User as UserIcon, Book, Star } from 'lucide-react';
import { User } from '../../types/User';

interface UserProfileProps {
  user: User | null;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState('Passionate reader who loves discovering new worlds through books. Currently exploring contemporary fiction and historical novels.');
  const [location, setLocation] = useState('San Francisco, CA');
  const [website, setWebsite] = useState('');

  // Mock user stats
  const userStats = {
    booksRead: 47,
    reviewsWritten: 23,
    averageRating: 4.2,
    joinDate: '2023-06-15',
    currentStreak: 15,
    favoriteYear: 2023
  };

  const achievements = [
    { name: 'Early Bird', description: 'Read 5 books this year', earned: true },
    { name: 'Speed Reader', description: 'Read 3 books in one month', earned: true },
    { name: 'Genre Explorer', description: 'Read books from 5 different genres', earned: true },
    { name: 'Reviewer', description: 'Write 10 book reviews', earned: false },
    { name: 'Marathon Reader', description: 'Read 50 books in a year', earned: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Profile</h2>
        <p className="text-gray-600 mt-1">Manage your account and view your reading achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-amber-100 text-amber-700 text-2xl">
                    {name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://your-website.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself and your reading interests..."
                  rows={4}
                />
              </div>

              <Button className="bg-amber-600 hover:bg-amber-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reading Stats */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Reading Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{userStats.booksRead}</div>
                  <div className="text-sm text-amber-700">Books Read</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{userStats.reviewsWritten}</div>
                  <div className="text-sm text-amber-700">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{userStats.averageRating}</div>
                  <div className="text-sm text-amber-700">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{userStats.currentStreak}</div>
                  <div className="text-sm text-amber-700">Day Streak</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-amber-200">
                <div className="flex items-center text-sm text-amber-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(userStats.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <Star className="w-4 h-4 mr-2" />
                  Best year: {userStats.favoriteYear}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your reading milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.name} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {achievement.earned ? '✓' : '○'}
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-700'}`}>
                      {achievement.name}
                    </div>
                    <div className={`text-sm ${achievement.earned ? 'text-green-700' : 'text-gray-500'}`}>
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
