import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';
import { ChatInput } from './components/ChatInput';
import { DisclaimerModal } from './components/DisclaimerModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useChat } from './hooks/useChat';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat();

  useEffect(() => {
    const accepted = localStorage.getItem('medical-disclaimer-accepted');
    if (accepted === 'true') {
      setDisclaimerAccepted(true);
    } else {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('medical-disclaimer-accepted', 'true');
    setDisclaimerAccepted(true);
    setShowDisclaimer(false);
  };

  const handleSendMessage = (message: string) => {
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
      return;
    }
    sendMessage(message);
  };

  return (
    <ErrorBoundary>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        
        <main className="flex flex-col flex-1 max-w-4xl mx-auto w-full">
          <ChatContainer messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </main>

        {error && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <DisclaimerModal
          isOpen={showDisclaimer}
          onClose={() => setShowDisclaimer(false)}
          onAccept={handleAcceptDisclaimer}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;