import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState<{username: string; avatar: string} | null>(null);

  const handleLogin = (username: string) => {
    setCurrentUser({
      username,
      avatar: `https://source.unsplash.com/100x100/?portrait&${Math.random()}`
    });
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-8">
            <Flame className="w-12 h-12 text-red-500" />
            <h1 className="text-4xl font-bold text-white ml-2">Flare Chat</h1>
          </div>
          
          {showRegister ? (
            <Register 
              onRegister={handleLogin}
              onSwitch={() => setShowRegister(false)}
            />
          ) : (
            <Login 
              onLogin={handleLogin}
              onSwitch={() => setShowRegister(true)}
            />
          )}
        </div>
      </div>
    );
  }

  return <Chat currentUser={currentUser} onLogout={() => setIsAuthenticated(false)} />;
}

export default App;