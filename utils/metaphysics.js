export const getWesternZodiac = (month, day) => {
  const zodiacs = [
    { sign: 'Capricorn', end: 19 },
    { sign: 'Aquarius', end: 18 },
    { sign: 'Pisces', end: 20 },
    { sign: 'Aries', end: 19 },
    { sign: 'Taurus', end: 20 },
    { sign: 'Gemini', end: 20 },
    { sign: 'Cancer', end: 22 },
    { sign: 'Leo', end: 22 },
    { sign: 'Virgo', end: 22 },
    { sign: 'Libra', end: 22 },
    { sign: 'Scorpio', end: 21 },
    { sign: 'Sagittarius', end: 21 },
  ];
  return day <= zodiacs[month - 1].end ? zodiacs[month - 1].sign : zodiacs[month % 12].sign;
};
