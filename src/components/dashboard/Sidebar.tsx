
import { Button } from '@/components/ui/button';
import { Book, History, User, Users } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: 'recommendations' | 'history' | 'preferences' | 'profile') => void;
  isOpen: boolean;
}

const Sidebar = ({ activeView, onViewChange, isOpen }: SidebarProps) => {
  const menuItems = [
    { id: 'recommendations', label: 'Recommendations', icon: Book },
    { id: 'history', label: 'Reading History', icon: History },
    { id: 'preferences', label: 'Preferences', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white/90 backdrop-blur-sm border-r border-gray-200 shadow-sm transition-transform duration-300 z-30 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64`}>
      <nav className="p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeView === item.id ? 'default' : 'ghost'}
                className={`w-full justify-start text-left ${
                  activeView === item.id 
                    ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => onViewChange(item.id as any)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
