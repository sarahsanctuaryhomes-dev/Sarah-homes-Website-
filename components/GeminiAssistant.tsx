import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize and Load History
  useEffect(() => {
    const init = async () => {
      const saved = localStorage.getItem('sarah_chat_history');
      let initialMessages: ChatMessage[] = [];

      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          initialMessages = parsed.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }));
        } catch (e) {
          console.error("Failed to parse chat history", e);
        }
      }

      if (initialMessages.length === 0) {
        initialMessages = [{
          id: 'welcome',
          role: 'model',
          text: "Hello! I'm Kiboko, your virtual real estate assistant. How can I help you with properties or construction in Kampala today?",
          timestamp: new Date()
        }];
      }

      setMessages(initialMessages);

      // Convert to Gemini History Format
      const historyForGemini = initialMessages
        .filter(m => m.id !== 'welcome') // Exclude the welcome message from context usually
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      await initializeChat(historyForGemini);
      setIsInitialized(true);
    };

    init();
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (isInitialized && messages.length > 0) {
      localStorage.setItem('sarah_chat_history', JSON.stringify(messages));
    }
  }, [messages, isInitialized]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-96 mb-4 flex flex-col h-[500px] max-h-[70vh] border border-gray-200 animate-in fade-in slide-in-from-bottom-10 duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex justify-between items-center text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="h-16 w-16" />
            </div>
            <div className="flex items-center space-x-3 z-10">
              <div className="bg-white/10 p-2 rounded-full ring-1 ring-white/20 backdrop-blur-sm">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base tracking-wide">QUICK HELP ASSISTANT</h3>
                <div className="flex items-center text-xs text-brand-100 font-medium">
                   <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                   Online • Gemini AI
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 z-10">
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/80 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-700 text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white text-gray-800 rounded-2xl rounded-tl-sm border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-100 shadow-sm flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-1 py-1 border border-transparent focus-within:border-brand-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-100 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about properties..."
                className="flex-1 bg-transparent border-0 px-4 py-2 text-sm focus:ring-0 text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-brand-900 text-white rounded-full hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md transform active:scale-95"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
            <div className="text-[10px] text-center text-gray-400 mt-2 font-medium space-y-1">
               <p>Powered by Google Gemini</p>
               <p className="opacity-80">To serve you better, this conversation may be recorded for quality assurance.</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? 'bg-gray-900 rotate-90 scale-90' : 'bg-brand-600 hover:bg-brand-500 hover:scale-110 animate-bounce'
          } text-white p-4 rounded-full shadow-[0_8px_30px_rgba(22,163,74,0.3)] transition-all duration-300 flex items-center justify-center z-50`}
          aria-label="Toggle Chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </button>
        {!isOpen && (
           <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
             Chat with AI
           </span>
        )}
      </div>
    </div>
  );
};

export default GeminiAssistant;