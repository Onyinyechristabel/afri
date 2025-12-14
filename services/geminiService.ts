import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables. Stylist feature will use mock response.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getStylistAdvice = async (userQuery: string, context: string): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I'm sorry, I can't connect to the stylist server right now. Please ensure your API key is set.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Context: ${context}\n\nUser Question: ${userQuery}`,
      config: {
        systemInstruction: "You are 'Aria', a high-end fashion stylist for 'AfriChic', a luxury brand blending modern design with African heritage. Keep answers concise, elegant, and helpful. Focus on color coordination, fit, and occasion styling. Tone: Sophisticated, Warm, Professional.",
      },
    });

    return response.text || "I'm pondering the best look for you...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently assisting another client. Please try again in a moment.";
  }
};
