import React from 'react';
import { LogOut } from 'lucide-react';

interface ChatHeaderProps {
  currentUser: { username: string; avatar: string } | null;
  onLogout: () => void;
}

function ChatHeader({ currentUser, onLogout }: ChatHeaderProps) {
  return (
    <div className="bg-red-950/50 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src={currentUser?.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-white font-semibold">{currentUser?.username}</span>
      </div>
      <button
        onClick={onLogout}
        className="text-white hover:text-red-300 transition-colors"
      >
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
}

export default ChatHeader;