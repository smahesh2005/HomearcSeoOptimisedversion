import React, { useState } from 'react';
import './floating-chat.css';
import chatMessages, { chatSequence } from '../data/chatMessages';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(chatMessages);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(1);

  const handleToggle = () => setIsOpen((open) => !open);

  const handleSend = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // User message
    const newMessage = { id: Date.now(), sender: 'user', type: 'text', text: trimmed };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'support',
          type: 'text',
          text: 'Thank you! We have noted this down. An expert will review your enquiry and respond shortly. You can also click the WhatsApp button above to connect directly and schedule immediately.',
        },
      ]);
    }, 1000);
  };

  const handleOptionSelect = (messageId, option) => {
    setMessages((prev) => {
      const updated = prev.map((msg) =>
        msg.id === messageId ? { ...msg, answered: true } : msg
      );

      const newMessages = [
        ...updated,
        { id: Date.now() + 1, sender: 'user', type: 'text', text: option }
      ];

      if (step < chatSequence.length) {
        const nextQ = chatSequence[step];
        newMessages.push({
          id: Date.now() + 2,
          sender: 'support',
          type: 'mcq',
          text: nextQ.text,
          options: nextQ.options,
        });
        setStep(step + 1);
      } else {
        newMessages.push({
          id: Date.now() + 2,
          sender: 'support',
          type: 'text',
          text: 'Thank you for the details! Please type any final requests below or click WhatsApp to connect immediately.',
        });
      }

      return newMessages;
    });
  };

  return (
    <div className="floating-chat-container">
      <div className="floating-chat-actions">
        <a
          className="whatsapp-quick-link"
          href="https://wa.me/919087654321?text=Hi!%20I%20need%20help%20with%20HomeArc%20services."
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width="26"
            height="26"
            style={{ display: 'block' }}
          />
        </a>
      </div>
      {isOpen && (
        <div className="floating-chat-panel">
          <div className="floating-chat-header">
            <span>HomeArc Chat</span>
            <button className="floating-chat-close" onClick={handleToggle} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="floating-chat-body">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`floating-chat-message ${message.sender === 'user' ? 'user-message' : 'support-message'}`}
              >
                <p>{message.text}</p>
                {message.sender === 'support' && message.type === 'mcq' && !message.answered && (
                  <div className="mcq-options">
                    {message.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="mcq-option"
                        onClick={() => handleOptionSelect(message.id, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="floating-chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <div className="floating-chat-btn" onClick={handleToggle} aria-label="Open chat">
        {isOpen ? '✕' : '💬'}
      </div>
    </div>
  );
};

export default FloatingChat;
