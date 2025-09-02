import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatMessage as ChatMessageType } from '../types/chat';

interface ChatContainerProps {
  messages: ChatMessageType[];
  isLoading: boolean;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
          <div className="bg-white rounded-full p-6 shadow-lg mb-6">
            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to Medical Assistant
          </h3>
          <p className="text-gray-600 max-w-md mb-6">
            Ask any medical question and get informed answers. Please note that this is for informational purposes only and should not replace professional medical advice.
          </p>
          <p className="text-sm text-gray-500">
            Developed by <span className="font-medium text-gray-700">Vipun Sanjana</span>
          </p>
        </div>
      ) : (
        <div className="py-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start p-4">
              <div className="flex gap-3 max-w-[80%]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
