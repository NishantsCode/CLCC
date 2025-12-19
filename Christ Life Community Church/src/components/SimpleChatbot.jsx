import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { quickActions, responses, keywords } from '../data/chatbotData';
import QRCode from '../assets/QR.png';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Welcome to Grace Community Church. How can I assist you today?',
      showActions: true
    }
  ]);
  const [input, setInput] = useState('');
  const [prayerRequest, setPrayerRequest] = useState({ name: '', email: '', message: '' });
  const [showPrayerForm, setShowPrayerForm] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Find response based on keywords
  const findResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check each keyword category
    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(word => input.includes(word))) {
        return { category, ...responses[category] };
      }
    }
    
    return { category: 'default', ...responses.default };
  };

  // Handle quick action click
  const handleQuickAction = (actionId) => {
    const action = quickActions.find(a => a.id === actionId);
    if (!action) return;

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: action.text
    }]);

    // Add bot response
    setTimeout(() => {
      const response = responses[actionId] || responses.default;
      setMessages(prev => [...prev, {
        type: 'bot',
        text: response.text,
        actions: response.actions,
        followUp: response.followUp,
        showQR: response.showQR,
        showPrayerForm: response.showPrayerForm,
        showActions: false
      }]);
      
      // Show prayer form if needed
      if (response.showPrayerForm) {
        setShowPrayerForm(true);
      }
    }, 500);
  };

  // Handle prayer request submission - Send directly to WhatsApp
  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    if (!prayerRequest.name || !prayerRequest.message) {
      alert('Please fill in your name and prayer request');
      return;
    }

    // Church WhatsApp number (remove all non-numeric characters)
    const churchWhatsApp = '18257338785'; // +1 825 733 8785
    
    // Format the message for WhatsApp
    const whatsappMessage = `🙏 *Prayer Request*\n\n*From:* ${prayerRequest.name}\n${prayerRequest.email ? `*Email:* ${prayerRequest.email}\n` : ''}\n*Prayer Request:*\n${prayerRequest.message}\n\n_Submitted via Church Website_\n_${new Date().toLocaleString()}_`;
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${churchWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show confirmation message
    setMessages(prev => [...prev, {
      type: 'bot',
      text: `Thank you, ${prayerRequest.name}! Click the button below to send your prayer request directly to our prayer team via WhatsApp. 🙏`,
      actions: [
        { text: '📱 Send to WhatsApp', link: whatsappURL }
      ],
      showActions: false
    }]);
    
    // Reset form and close
    setPrayerRequest({ name: '', email: '', message: '' });
    setShowPrayerForm(false);
    
    // Optional: Auto-open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  // Handle text input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: userMessage
    }]);

    // Find and add bot response
    setTimeout(() => {
      const response = findResponse(userMessage);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: response.text,
        actions: response.actions,
        followUp: response.followUp,
        showQR: response.showQR,
        showActions: false
      }]);
    }, 500);
  };

  // Handle follow-up question click
  const handleFollowUp = (question) => {
    setInput(question);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-purple to-gold text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-105 transition-all z-50 flex items-center gap-2 sm:gap-3"
        >
          <MessageCircle size={24} className="sm:w-6 sm:h-6" />
          <span className="hidden sm:inline font-semibold text-sm sm:text-base">Chat with Us</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:bottom-6 sm:right-6 sm:inset-auto w-full sm:w-[400px] h-full sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col z-50 sm:max-w-[calc(100vw-3rem)] border-2 border-purple/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple to-gold text-white p-4 sm:p-5 sm:rounded-t-2xl flex justify-between items-center flex-shrink-0">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Christ Life Community Church</h3>
              <p className="text-xs sm:text-sm text-white/90">Virtual Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index}>
                {/* Message bubble */}
                <div
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple to-gold text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-md rounded-bl-none border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                  </div>
                </div>

                {/* QR Code */}
                {message.showQR && (
                  <div className="flex justify-start mt-3 ml-2">
                    <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                      <img 
                        src={QRCode} 
                        alt="Contact QR Code" 
                        className="w-32 h-32 object-contain"
                      />
                      <p className="text-xs text-center text-gray-600 mt-2">Scan to connect</p>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                {message.actions && message.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-2">
                    {message.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.link}
                        target={action.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 bg-purple/10 text-purple hover:bg-purple hover:text-white rounded-full transition-colors border border-purple/30"
                      >
                        {action.text}
                      </a>
                    ))}
                  </div>
                )}

                {/* Follow-up questions */}
                {message.followUp && message.followUp.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-2">
                    {message.followUp.map((question, i) => (
                      <button
                        key={i}
                        onClick={() => handleFollowUp(question)}
                        className="text-xs px-3 py-1.5 bg-gold/10 text-gold hover:bg-gold hover:text-white rounded-full transition-colors border border-gold/30"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                {/* Quick actions (only on first message) */}
                {message.showActions && (
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {quickActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action.id)}
                        className="p-3 bg-white hover:bg-gradient-to-r hover:from-purple/10 hover:to-gold/10 rounded-lg transition-all text-left text-sm border border-gray-200 hover:border-purple/30 hover:shadow-md font-medium text-gray-700 hover:text-gray-900"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Prayer Request Form */}
            {showPrayerForm && (
              <div className="bg-white p-4 rounded-lg shadow-md border border-purple/20">
                <form onSubmit={handlePrayerSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={prayerRequest.name}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, name: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={prayerRequest.email}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, email: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prayer Request *
                    </label>
                    <textarea
                      value={prayerRequest.message}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, message: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-sm resize-none"
                      rows="4"
                      placeholder="Share your prayer request..."
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple to-gold text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                    >
                      📱 Send to WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPrayerForm(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t bg-white sm:rounded-b-2xl flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-gradient-to-r from-purple to-gold text-white p-3 rounded-full hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-transform shadow-lg"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SimpleChatbot;
