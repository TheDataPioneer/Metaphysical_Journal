// utils/kua.js

export const getKuaNumber = (birthDate, gender) => {
  if (!birthDate || !gender) return null;

  gender = gender.toUpperCase();
  const year = parseInt(birthDate.split('-')[0], 10);
  let sum = year % 100;
  sum = (sum % 10) + Math.floor(sum / 10); // digit sum

  let kua;
  if (year >= 2000) {
    kua = gender === 'M' ? (9 - sum || 9) : ((6 + sum > 9) ? (6 + sum) % 9 || 9 : 6 + sum);
  } else {
    kua = gender === 'M' ? (10 - sum) : ((5 + sum > 9) ? (5 + sum) % 9 || 9 : 5 + sum);
  }

  // Adjust transitional Kua 5
  if (kua === 5) kua = gender === 'M' ? 2 : 8;

  return {
    number: kua,
    ...kuaMeanings[kua]
  };
};


const kuaMeanings = {
  1: {
    name: 'Kan (Water)',
    group: 'East',
    favorableDirections: ['North', 'South', 'East', 'Southeast'],
    energy: 'Flow, adaptability, communication, and strategic thinking. Those with Kua 1 are resourceful and thrive on mental and emotional movement.',
  },
  2: {
    name: 'Kun (Earth)',
    group: 'West',
    favorableDirections: ['Northeast', 'West', 'Northwest', 'Southwest'],
    energy: 'Nurturing and dependable, Kua 2 represents stability and steady progress. These individuals are practical and grounded.',
  },
  3: {
    name: 'Zhen (Thunder)',
    group: 'East',
    favorableDirections: ['North', 'South', 'East', 'Southeast'],
    energy: 'Represents action, growth, and leadership. Kua 3 people initiate projects and bring energy to new ventures.',
  },
  4: {
    name: 'Xun (Wind)',
    group: 'East',
    favorableDirections: ['North', 'South', 'East', 'Southeast'],
    energy: 'Compassionate and team-oriented, Kua 4 types are flexible, diplomatic, and cooperative in social environments.',
  },
  6: {
    name: 'Qian (Heaven)',
    group: 'West',
    favorableDirections: ['Northeast', 'West', 'Northwest', 'Southwest'],
    energy: 'Kua 6 symbolizes leadership, vision, and strength. These individuals are natural strategists and planners.',
  },
  7: {
    name: 'Dui (Lake)',
    group: 'West',
    favorableDirections: ['Northeast', 'West', 'Northwest', 'Southwest'],
    energy: 'Joyful and expressive, Kua 7 people are sociable, artistic, and communicative.',
  },
  8: {
    name: 'Gen (Mountain)',
    group: 'West',
    favorableDirections: ['Northeast', 'West', 'Northwest', 'Southwest'],
    energy: 'Symbolizing stillness and reflection, Kua 8 types are introspective, wise, and value inner growth.',
  },
  9: {
    name: 'Li (Fire)',
    group: 'East',
    favorableDirections: ['North', 'South', 'East', 'Southeast'],
    energy: 'Radiant and passionate, Kua 9 individuals bring clarity, inspiration, and charisma to their environment.',
  },
};
