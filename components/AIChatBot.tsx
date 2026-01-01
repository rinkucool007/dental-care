
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getDentalAdvice } from '../services/gemini';
import { SUGGESTED_QUESTIONS } from '../constants';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: "Welcome to the Dental Lounge! I have answers to over 200+ dental questions. How can I help you improve your smile today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend;
    if (!textOverride) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getDentalAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-all z-40 group"
      >
        <div className="relative">
           <MessageSquare size={24} />
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
           </span>
        </div>
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Ask our Smile Expert!
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden border border-slate-200 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-5 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Sparkles size={20} />
              </div>
              <div>
                <span className="font-bold block leading-tight">Smile Assistant</span>
                <span className="text-[10px] text-teal-100 uppercase tracking-widest font-bold">200+ Topic Knowledge Base</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end space-x-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-br-none shadow-md' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-bl-none prose prose-sm prose-slate'
                  }`}>
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 rounded-bl-none flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 bg-white border-t border-slate-100">
             <div className="flex overflow-x-auto pb-2 scrollbar-hide space-x-2 no-scrollbar">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 transition-colors"
                  >
                    {q}
                  </button>
                ))}
             </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-100 rounded-2xl px-4 py-1 focus-within:ring-2 focus-within:ring-teal-500/20 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our database anything..."
                className="flex-1 bg-transparent border-none py-3 text-sm focus:outline-none text-slate-700"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="text-teal-600 p-2 rounded-full hover:bg-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Powered by Dental Lounge AI Expert Core.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatBot;
