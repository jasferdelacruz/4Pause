import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { chatWithGuide } from '../services/geminiService';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your mindful guide for Nueva Vizcaya. How can I assist your journey today?", sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithGuide(input);
    const botMsg: Message = { id: Date.now() + 1, text: response, sender: 'bot' };
    
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary hover:bg-emerald-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open AI Assistant"
      >
        <Sparkles className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-100 transform transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="font-bold">Mindful Guide</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-stone-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-80 overflow-y-auto bg-stone-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === 'user'
                    ? 'bg-secondary text-white rounded-br-none'
                    : 'bg-white text-stone-800 shadow-sm border border-stone-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="bg-white text-stone-400 text-xs px-4 py-2 rounded-2xl border border-stone-100 animate-pulse">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-stone-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about trips..."
            className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-primary text-white p-2 rounded-full hover:bg-emerald-800 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GeminiAssistant;
