import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { subscribeToMessages, sendMessage } from '../services/parseConfig';
import { Message } from '../types';

interface ChatProps {
  currentUser: { username: string; avatar: string } | null;
  onLogout: () => void;
}

function Chat({ currentUser, onLogout }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    const query = subscribeToMessages((results) => {
      const newMessages = results.map((result: any) => ({
        id: result.id,
        text: result.get('text'),
        sender: result.get('sender'),
        avatar: result.get('avatar'),
        timestamp: result.get('createdAt')
      }));
      setMessages(newMessages);
    });

    setSubscription(query);

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const handleSendMessage = async (text: string) => {
    if (currentUser) {
      try {
        await sendMessage(text, currentUser.username, currentUser.avatar);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950">
      <ChatHeader currentUser={currentUser} onLogout={onLogout} />
      <MessageList messages={messages} currentUser={currentUser} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chat;