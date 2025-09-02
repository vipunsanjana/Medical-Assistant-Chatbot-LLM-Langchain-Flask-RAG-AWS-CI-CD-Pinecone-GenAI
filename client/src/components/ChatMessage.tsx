import React from 'react';
import { User, Stethoscope } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex gap-4 p-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'
        }`}>
          {isUser ? <User size={20} /> : <Stethoscope size={20} />}
        </div>
        
        <div className={`rounded-2xl px-4 py-3 shadow-sm ${
          isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-white border border-gray-200 text-gray-800'
        }`}>
          <p className="text-sm leading-relaxed">{message.content}</p>
          <span className={`text-xs mt-2 block opacity-70 ${
            isUser ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};