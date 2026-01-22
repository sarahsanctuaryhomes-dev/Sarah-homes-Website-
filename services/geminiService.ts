import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = "AIzaSyCbI0f_uStpp49eVAG0qAGDcsQ1XcmH2ZI";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Kiboko", a friendly and professional AI Real Estate Assistant for "Sarah Sanctuary Homes".
Your goal is to assist website visitors with inquiries about our real estate services in Uganda.

Key Company Info:
- Name: Sarah Sanctuary Homes
- Contact Numbers (WhatsApp available): 0709773348, 0791017140
- Email: sarahsanctuaryhomes@gmail.com
- Social Media: 
  - Facebook: https://www.facebook.com/profile.php?id=61558013535933
  - Instagram: Sarah Sanctuary Homes
  - TikTok: sarah_sanctuaryhomes

Our Services:
1. Buy and sell houses and land.
2. Site management (construction supervision).
3. Property management and rehabilitation.
4. Land surveying.

Guidelines:
- Be polite, professional, and helpful.
- If asked about specific prices not listed in the chat context, give general market ranges for Kampala but encourage contacting us directly.
- Always provide our phone numbers (0709773348 / 0791017140) when users want to proceed or need human assistance.
- Keep responses concise (under 100 words unless detailed explanation is needed).
- Use local context where appropriate (e.g., mentioning specific popular neighborhoods like Kololo, Muyenga, Kira).
- Currency is usually Ugandan Shillings (UGX).
`;

export const initializeChat = async (history?: { role: string; parts: { text: string }[] }[]): Promise<void> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt to re-init if not available, though history might be lost if not passed
    await initializeChat();
    if (!chatSession) {
      return "I'm currently having trouble connecting to the network. Please call us directly on 0709773348 or 0791017140.";
    }
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I understood that, but I couldn't generate a proper response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, but I encountered an error. Please contact us on WhatsApp: 0709773348.";
  }
};