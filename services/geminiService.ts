
import { GoogleGenAI } from "@google/genai";
import { MUNICIPALITIES } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getWellnessTip = async (): Promise<string> => {
  if (!apiKey) return "Take a deep breath and enjoy the moment.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Give me a very short (one sentence) mindful travel tip related to nature or culture in the Philippines context.',
    });
    return response.text || "Pause. Breathe. Explore.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Reconnect with nature today.";
  }
};

export const chatWithGuide = async (message: string): Promise<string> => {
  if (!apiKey) return "I am currently offline, please check back later or contact support.";

  try {
    const municipalitiesList = MUNICIPALITIES.join(', ');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful, calm, and knowledgeable virtual guide for '4Pause', a wellness tourism platform in Nueva Vizcaya, Philippines. 
      
      Context about Nueva Vizcaya:
      - It has 15 municipalities: ${municipalitiesList}.
      - Bayombong is the provincial capital.
      - Kayapa is known as the "summer capital".
      - Currencies are in Philippine Pesos (PHP).
      
      Key Attractions & Data available on the site:
      - Waterfalls: Imugan Falls (Santa Fe), Lintungan Falls (Quezon), Kapitan Falls (Quezon), Mapalyao Falls (Quezon), Edralin Falls (Kasibu), Machelet Falls (Kasibu), Dumli-ing Falls (Kayapa), Maenga Falls (Alfonso Castañeda).
      - Wellness: Nueva VizKawa Wellness Farm (Bayombong), Heavenly Springs Resort (Bambang), Banag's Garden (Alfonso Castañeda).
      - Accommodations: 24/7 Inn (Solano), AM/PM Lodge (Solano), Balai Gloria (Solano), Dinamling Homestay (Kasibu), Gamponia Farm (Bambang), Highlander Hotel (Bayombong/Solano), Saber Inn (Bayombong), Lolita's Homestay (Santa Fe).
      
      Your tone is mindful, earthy, and welcoming.
      User asked: ${message}
      
      Answer concisely (under 100 words). If asking for recommendations, mention specific municipalities and spots from the list above if relevant.`,
    });
    return response.text || "I'm having trouble connecting to the nature guide network.";
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm having a moment of silence. Please try again shortly.";
  }
};
