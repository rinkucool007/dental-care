
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDentalAdvice(query: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the 'Smile Expert' AI at The Dental Care Lounge. 
        You have been trained on a comprehensive internal knowledge base containing answers to over 200 specific dental health questions, procedure details, and clinic policies.
        
        Rules:
        1. Provide precise, professional, and friendly answers.
        2. If the user asks about a procedure, explain it simply but thoroughly.
        3. Use Markdown (bolding, bullet points) to make long answers readable.
        4. ALWAYS include a small disclaimer that you are an AI assistant and clinical advice requires a visit.
        5. If the user mentions 'pain', 'swelling', or 'broken tooth', immediately suggest our emergency line: +1 (555) 000-HELP.
        6. You can answer questions about: Preventive Care, Implants, Orthodontics, Aesthetics, Laser Surgery, Insurance, and Patient Comfort.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again or call our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our Smile Knowledge Base is temporarily offline. Please call us at +1 (555) 987-6543 for immediate assistance.";
  }
}
