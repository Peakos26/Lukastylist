import { callGetWeather } from './firebase';

export interface WeatherDay {
  date: string;
  temp_min: number;
  temp_max: number;
  condition: string;
  icon_code: string;
  description: string;
  suggestion: string;
}

function getSuggestion(temp_max: number, condition: string): string {
  if (condition === 'rain' || condition === 'thunderstorm') {
    return 'Leve um guarda-chuva e prefira sapatos fechados';
  }
  if (temp_max < 15) return 'Vista-se em camadas — casaco e bota são essenciais';
  if (temp_max < 20) return 'Blazer ou jaqueta leve resolve o dia';
  if (temp_max < 26) return 'Confortável — jeans e blusa são perfeitos';
  return 'Dia quente! Aposte em peças leves e respiráveis';
}

export async function getWeekWeather(lat: number, lng: number): Promise<WeatherDay[]> {
  try {
    const result = await callGetWeather({ lat, lng });
    const data = result.data as any;

    const byDay: Record<string, any[]> = {};
    for (const item of data.list) {
      const date = item.dt_txt.split(' ')[0];
      if (!byDay[date]) byDay[date] = [];
      byDay[date].push(item);
    }

    return Object.entries(byDay).slice(0, 7).map(([date, items]) => {
      const temps = items.map(i => i.main.temp);
      const conds = items.map(i => i.weather[0].main.toLowerCase());
      const condition = conds.includes('rain') ? 'rain'
        : conds.includes('thunderstorm') ? 'thunderstorm'
        : conds.includes('snow') ? 'snow'
        : conds.includes('clear') ? 'clear'
        : 'clouds';

      const temp_min = Math.round(Math.min(...temps));
      const temp_max = Math.round(Math.max(...temps));

      return {
        date,
        temp_min,
        temp_max,
        condition,
        icon_code: items[0].weather[0].icon,
        description: items[0].weather[0].description,
        suggestion: getSuggestion(temp_max, condition),
      };
    });
  } catch (e) {
    return [];
  }
}

export function weatherEmoji(condition: string): string {
  const map: Record<string, string> = {
    rain: '🌧', thunderstorm: '⛈', snow: '❄️',
    clear: '☀️', clouds: '☁️',
  };
  return map[condition] ?? '🌤';
}
