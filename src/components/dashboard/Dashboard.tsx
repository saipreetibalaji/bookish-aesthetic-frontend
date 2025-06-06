
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import BookRecommendations from './BookRecommendations';
import ReadingHistory from './ReadingHistory';
import UserPreferences from './UserPreferences';
import UserProfile from './UserProfile';
import { User } from '../../types/User';

interface DashboardProps {
  user: User | null;
  onLogout: () => void;
}

type ActiveView = 'recommendations' | 'history' | 'preferences' | 'profile';

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [activeView, setActiveView] = useState<ActiveView>('recommendations');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderActiveView = () => {
    switch (activeView) {
      case 'recommendations':
        return <BookRecommendations user={user} />;
      case 'history':
        return <ReadingHistory user={user} />;
      case 'preferences':
        return <UserPreferences user={user} />;
      case 'profile':
        return <UserProfile user={user} />;
      default:
        return <BookRecommendations user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header 
        user={user} 
        onLogout={onLogout}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex">
        <Sidebar 
          activeView={activeView} 
          onViewChange={setActiveView}
          isOpen={sidebarOpen}
        />
        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
