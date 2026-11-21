/*
  Time helpers built on Intl, the browser's built-in formatting API.
  No date library needed: Intl knows every time zone and its daylight
  saving rules.
*/

// Splits a time into parts so each can be styled separately:
// { hour: '04', minute: '05', second: '20', period: 'pm' }
export function timeParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(date);

  const get = (type) => parts.find((p) => p.type === type)?.value ?? '';
  return {
    hour: get('hour'),
    minute: get('minute'),
    second: get('second'),
    period: get('dayPeriod').toLowerCase(),
  };
}

// Minutes a time zone is ahead of UTC right now, e.g. Taipei → 480.
function offsetMinutes(date, timeZone) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'longOffset' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName').value; // e.g. "GMT+08:00", or "GMT" for UTC

  const match = name.match(/([+-])(\d{2}):(\d{2})/);
  if (!match) return 0;
  const [, sign, h, m] = match;
  return (sign === '-' ? -1 : 1) * (Number(h) * 60 + Number(m));
}

// "7 hours ahead of you", "1 hour behind you", "Same time as you".
// Uses the visitor's own time zone, so it's personal to each visitor.
export function relativeToVisitor(date, timeZone) {
  const visitorOffset = -date.getTimezoneOffset(); // JS reports this inverted
  const diffHours = (offsetMinutes(date, timeZone) - visitorOffset) / 60;

  if (diffHours === 0) return 'Same time as you';
  const amount = Math.abs(diffHours);
  const unit = amount === 1 ? 'hour' : 'hours';
  return `${amount} ${unit} ${diffHours > 0 ? 'ahead of' : 'behind'} you`;
}
