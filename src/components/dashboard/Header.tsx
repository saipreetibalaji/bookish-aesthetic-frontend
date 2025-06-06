
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Book, LogOut, User as UserIcon } from 'lucide-react';
import { User } from '../../types/User';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  onMenuClick: () => void;
}

const Header = ({ user, onLogout, onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            ☰
          </Button>
          <div className="flex items-center space-x-2">
            <Book className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-900">BookVerse</h1>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <Input
            type="search"
            placeholder="Search for books, authors, or genres..."
            className="w-full h-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-amber-100 text-amber-700">
                {user?.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              {user?.name || 'User'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
