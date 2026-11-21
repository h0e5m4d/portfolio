/*
  Weather APIs describe conditions with WMO codes (a world standard):
  0 = clear sky, 61 = light rain, 95 = thunderstorm, and so on.
  This turns a code into a label for screen readers and an icon name.
*/
const conditions = [
  { codes: [0], label: 'Clear', icon: 'clear' },
  { codes: [1, 2], label: 'Partly cloudy', icon: 'partly' },
  { codes: [3], label: 'Overcast', icon: 'cloud' },
  { codes: [45, 48], label: 'Fog', icon: 'fog' },
  { codes: [51, 53, 55, 56, 57], label: 'Drizzle', icon: 'rain' },
  { codes: [61, 63, 65, 66, 67, 80, 81, 82], label: 'Rain', icon: 'rain' },
  { codes: [71, 73, 75, 77, 85, 86], label: 'Snow', icon: 'snow' },
  { codes: [95, 96, 99], label: 'Thunderstorm', icon: 'storm' },
];

export function describeWeather(code) {
  return conditions.find((c) => c.codes.includes(code)) ?? { label: 'Unknown', icon: 'cloud' };
}
