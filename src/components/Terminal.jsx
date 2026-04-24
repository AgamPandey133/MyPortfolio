import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { terminalData } from '../constants';
import { FaTerminal, FaTimes } from 'react-icons/fa';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Agam OS v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');

      if (!cmd) return;

      const newHistory = [...history, { type: 'user', content: `> ${cmd}` }];

      if (cmd === 'help') {
        newHistory.push({ type: 'system', content: 'Available commands: about, education, experience, skills, projects, achievements, contact, clear' });
      } else if (cmd === 'clear') {
        setHistory([]);
        return;
      } else if (terminalData[cmd]) {
        newHistory.push({ type: 'system', content: terminalData[cmd] });
      } else {
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` });
      }

      setHistory(newHistory);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-surface-200 border border-accent-cyan/30 flex justify-center items-center text-accent-cyan shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] z-50 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Terminal"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <FaTerminal size={24} />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[450px] h-[500px] max-h-[80vh] bg-surface-100 border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col z-50 terminal-text text-sm"
          >
            {/* Header */}
            <div className="bg-surface-200 border-b border-white/10 px-4 py-3 flex justify-between items-center cursor-default">
              <div className="flex items-center gap-2 text-muted">
                <FaTerminal size={14} />
                <span className="font-semibold text-xs tracking-wider uppercase">Ask Agam</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Output Area */}
            <div className="flex-1 p-4 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`mb-2 whitespace-pre-wrap ${
                  line.type === 'user' ? 'text-accent-cyan' : 
                  line.type === 'error' ? 'text-red-400' : 'text-text-secondary'
                }`}>
                  {line.content}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 flex items-center bg-surface-200/50">
              <span className="text-accent-cyan mr-2 font-bold">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-muted/50"
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
