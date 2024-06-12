'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '../Spinner';
import flow from './flow';

const ChatBot = dynamic(() => import('react-chatbotify'), {
  loading: Spinner,
});

export const MyChatBot = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <Suspense fallback={<Spinner />}>
          <ChatBot
            options={{
              botBubble: { avatar: '/logo.png', showAvatar: true },
              chatButton: { icon: '/chat-text.svg' },
              mobileEnabled: true,
              openChat: { isOpen: false },
              audio: { disabled: true },

              chatInput: { disabled: true },
              tooltip: { mode: 'NEVER' },
              footer: { text: 'DeEspacios.' },
              sendButtonStyle: { display: 'none' },
              header: {
                title: '¿Como te puedo ayudar?',
                avatar: '/logo.png',
              },
            }}
            flow={flow}
          />
        </Suspense>
      )}
    </>
  );
};
export default MyChatBot;
