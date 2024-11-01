import React from 'react';
import { format } from 'date-fns';
import MessageBubble from './MessageBubble';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  currentUser: { username: string; avatar: string } | null;
}

function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(message => (
        <MessageBubble
          key={message.id}
          message={message}
          isCurrentUser={message.sender === currentUser?.username}
        />
      ))}
    </div>
  );
}

export default MessageList;