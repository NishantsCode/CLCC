// Chat service - simplified, all church data is now handled in backend
export const sendChatMessage = async (userMessage, conversationHistory) => {
  try {
    // Call backend API (context is handled server-side now)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: conversationHistory
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Chat error:', error);
    throw error;
  }
};
