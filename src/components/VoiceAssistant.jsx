import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Initialize Vapi with the public key from the .env file
const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY || "";
const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID || "";
const vapi = new Vapi(VAPI_PUBLIC_KEY);

const VoiceAssistant = () => {
  const [callStatus, setCallStatus] = useState('inactive'); // inactive, loading, active

  useEffect(() => {
    vapi.on('call-start', () => setCallStatus('active'));
    vapi.on('call-end', () => setCallStatus('inactive'));
    vapi.on('error', (e) => {
      console.error(e);
      setCallStatus('inactive');
    });
    
    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === 'active') {
      vapi.stop();
    } else {
      setCallStatus('loading');
      
      if (!VAPI_ASSISTANT_ID) {
        alert("Please add VITE_VAPI_ASSISTANT_ID to your .env file and restart the server!");
        setCallStatus('inactive');
        return;
      }

      try {
        await vapi.start(VAPI_ASSISTANT_ID);
      } catch (err) {
        console.error("Vapi start error:", err);
        setCallStatus('inactive');
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleCall}
        disabled={callStatus === 'loading'}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          callStatus === 'active' ? 'bg-red-500 hover:bg-red-600' : 'bg-accent-cyan hover:bg-accent-cyan/80'
        }`}
      >
        {callStatus === 'loading' ? (
          <Loader2 className="w-6 h-6 text-white animate-spin" />
        ) : callStatus === 'active' ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-[#090325]" />
        )}
      </motion.button>
    </div>
  );
};

export default VoiceAssistant;
