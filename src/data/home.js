/*
  HOMEPAGE CONTENT
  All the words on the homepage live here, so you can rewrite them
  without touching any layout code. Placeholders are fine for now.
*/
import film1 from '../assets/film/film-1.webp';
import film2 from '../assets/film/film-2.webp';
import film3 from '../assets/film/film-3.webp';
import film4 from '../assets/film/film-4.webp';
import film5 from '../assets/film/film-5.webp';

// The hero greeting cycles through these: your languages.
// `lang` tells browsers (and screen readers) which language it is.
export const greetings = [
  { text: 'Xin chào', lang: 'vi' },
  { text: 'Hallo', lang: 'de' },
  { text: 'Hello', lang: 'en' },
  { text: 'Bonjour', lang: 'fr' },
  { text: '你好', lang: 'zh-Hant' },
];

export const hero = {
  name: 'Linh',
  lead: 'I design digital experiences defined by clarity, precision and thoughtful interaction.',
};

// Your values. Edit freely; the order is the order on the page.
export const values = [
  'I believe design starts by questioning how things are.',
  'I believe in aiming for the best possible outcome, and in evolving to get there.',
  'I believe design shapes everyday life, and that impact is what makes it meaningful to me.',
  'I believe reaching many people means carrying responsibility for them.',
  'I believe a designer connects fields, and I love getting to be many things at once.',
];

// "On repeat" music widget. `colors` paint the placeholder cover art
// (real album covers are copyrighted, so we draw our own).
export const songs = [
  {
    title: 'Open Arms',
    artist: 'SZA',
    colors: ['#c9b8a6', '#6f5b4b'],
    url: 'https://open.spotify.com/search/Open%20Arms%20SZA',
  },
  {
    title: 'Nói Gì Nữa',
    artist: 'Thịnh Suy',
    colors: ['#a9c2d6', '#2f4858'],
    url: 'https://open.spotify.com/search/N%C3%B3i%20G%C3%AC%20N%E1%BB%AFa%20Th%E1%BB%8Bnh%20Suy',
  },
];

// Film photos for the photo-stack widget (from the old About page).
export const filmPhotos = [
  { src: film1, alt: 'A colourful temple tower full of painted figures against a pale sky' },
  { src: film2, alt: 'Diners at a restaurant window overlooking a hillside town' },
  { src: film3, alt: 'People with umbrellas walking past a traditional gate' },
  { src: film4, alt: 'A busy street crossing with a bus and shop signs' },
  { src: film5, alt: 'Temple roofs in front of misty forested mountains' },
];

// "Currently" widget.
export const currently = [
  { label: 'Exchange', value: 'Interaction Design, NTUT Taipei', detail: 'until 01/2027' },
  { label: 'Studying', value: 'B.A. Interface Design, FH Potsdam', detail: 'until 03/2028' },
  { label: 'Learning', value: 'Mandarin (Traditional), React', detail: 'every day' },
];
