import React from 'react';
import { format } from 'date-fns';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

function MessageBubble({ message, isCurrentUser }: MessageBubbleProps) {
  return (
    <div
      className={`flex items-start space-x-2 ${
        isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''
      }`}
    >
      <img
        src={message.avatar}
        alt={message.sender}
        className="w-8 h-8 rounded-full"
      />
      <div
        className={`max-w-[70%] ${
          isCurrentUser
            ? 'bg-red-600 text-white'
            : 'bg-white/10 text-white'
        } rounded-lg p-3`}
      >
        <div className="font-semibold text-sm mb-1">{message.sender}</div>
        <p className="text-sm">{message.text}</p>
        <div className="text-xs opacity-75 mt-1">
          {format(message.timestamp, 'HH:mm')}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;