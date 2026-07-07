import { callClaude } from './firebase';

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string | Array<{ type: string; [key: string]: any }>;
}

export async function analyzeClothingItem(imageBase64: string): Promise<{
  category: string;
  subcategory: string;
  colors: string[];
  color_names: string[];
  season: string[];
  occasion: string[];
  style_tags: string[];
  suggested_name: string;
}> {
  const messages: ClaudeMessage[] = [{
    role: 'user',
    content: [
      {
        type: 'image',
        source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 }
      },
      {
        type: 'text',
        text: `Analise esta peça de roupa e retorne APENAS JSON válido sem markdown:
{
  "category": "top|bottom|dress|outerwear|shoes|bag|accessory",
  "subcategory": "blazer|camiseta|jeans|vestido|ankle_boot|etc",
  "colors": ["#hex1", "#hex2"],
  "color_names": ["nome_cor_1", "nome_cor_2"],
  "season": ["spring","summer","fall","winter"],
  "occasion": ["casual","work","formal","sport","party"],
  "style_tags": ["minimalist","romantic","classic","etc"],
  "suggested_name": "Nome descritivo curto da peça em português"
}`
      }
    ]
  }];

  const result = await callClaude({
    messages,
    system_prompt: 'Você é especialista em análise de peças de moda. Responda APENAS com JSON válido, nunca com markdown ou texto extra.'
  });

  const text = (result.data as any).content;
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

export async function analyzeAvatarPhoto(imageBase64: string): Promise<{
  skin_tone: string;
  hair_color: string;
  hair_length: string;
  body_shape: string;
  style_detected: string[];
}> {
  const messages: ClaudeMessage[] = [{
    role: 'user',
    content: [
      {
        type: 'image',
        source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 }
      },
      {
        type: 'text',
        text: `Analise a aparência desta pessoa para criação de avatar de moda.
Retorne APENAS JSON válido sem markdown:
{
  "skin_tone": "light|medium|tan|dark",
  "hair_color": "black|brown|blonde|red|gray|other",
  "hair_length": "short|medium|long",
  "body_shape": "hourglass|pear|apple|rectangle|inverted_triangle",
  "style_detected": ["casual","minimalist","romantic","etc"]
}
Foque APENAS em características visualmente relevantes para moda.
Nunca faça comentários sobre peso, tamanho ou aparência negativa.`
      }
    ]
  }];

  const result = await callClaude({ messages, system_prompt: 'Responda APENAS com JSON válido.' });
  const text = (result.data as any).content;
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

export async function chatWithStylist(
  history: ClaudeMessage[],
  userMessage: string,
  wardrobeContext: string
): Promise<string> {
  const messages: ClaudeMessage[] = [
    ...history,
    { role: 'user', content: userMessage }
  ];

  const result = await callClaude({
    messages,
    system_prompt: `Você é Alta, a estilista pessoal da usuária no app Find My Wear.
Você conhece o guarda-roupa dela: ${wardrobeContext}
Seja calorosa, criativa e empolgante — como uma amiga fashionista de verdade.
Sugira looks específicos com as peças que ela já tem.
Nunca faça comentários negativos sobre corpo ou peso.
Responda em português brasileiro, máximo 3 parágrafos.`
  });

  return (result.data as any).content;
}
