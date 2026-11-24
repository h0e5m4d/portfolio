/*
  ABOUT PAGE CONTENT
  Bio text is from your old Framer About page; the timeline, skills and
  languages are from your CV. Edit freely: the page only arranges this.
*/
import portrait from '../assets/about/portrait.webp';
import photo1 from '../assets/about/photo-1.webp';
import photo2 from '../assets/about/photo-2.webp';
import photo3 from '../assets/about/photo-3.webp';
import photo4 from '../assets/about/photo-4.webp';

export const portraitImage = {
  src: portrait,
  alt: 'Linh in a black top against a clear blue sky, making a peace sign',
};

export const bio = [
  'I’m Linh, a product design student focused on creating thoughtful and meaningful digital experiences.',
  'Before starting my Bachelor’s degree, I spent a gap year exploring the world and gaining practical experience in different fields. During that time, I also completed a voluntary internship at Fuenfwerken Design in Berlin, where I gained valuable insight into real-world design processes and worked on projects for clients such as Ernst & Young, Landeshauptstadt Potsdam, SCC Events, and ABS Team.',
];

export const outsideDesign =
  'I’m driven by curiosity, creativity, and connection. Outside of design, I find inspiration in music — playing piano and guitar and losing track of time in late-night karaoke sessions. I love listening to music, exploring ideas through reading, and especially diving into literature that shapes how I see people and the world.';

// Quick facts at the top of the page.
export const facts = [
  ['Based in', 'Taipei · Berlin'],
  ['Studying', 'Interface Design, FH Potsdam'],
  ['Focus', 'UX/UI, HCI, research'],
  ['Available', 'Internships from April 2027'],
];

// Newest first. `dates` is shown in mono on the left.
export const timeline = [
  {
    dates: '09/2026 – 01/2027',
    title: 'Exchange Semester, Interaction Design',
    org: 'National Taipei University of Technology',
  },
  {
    dates: '2023 – exp. 03/2028',
    title: 'B.A. Interface Design',
    org: 'University of Applied Sciences Potsdam',
  },
  {
    dates: '05/2023 – 08/2023',
    title: 'Design Intern',
    org: 'Fuenfwerken Design, Berlin',
    detail: 'Vector illustration for EY’s Tax & Law magazine, workshop for the City of Potsdam’s rebranding, research and moodboards for UX/UI and brand concepts.',
  },
  {
    dates: '2022',
    title: 'Abitur',
    org: 'Johann-Gottfried-Herder-Gymnasium',
  },
];

export const skills = [
  {
    group: 'UX & Research',
    items: ['User interviews', 'Usability testing', 'Journey mapping', 'Personas', 'Benchmark analysis', 'Heuristic evaluation'],
  },
  {
    group: 'Design',
    items: ['UI & interaction design', 'Design systems', 'Wireframing', 'Prototyping', 'Visual & brand design', 'Vector illustration'],
  },
  { group: 'Development', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  {
    group: 'Tools',
    items: ['Figma', 'Framer', 'Miro', 'Illustrator', 'Photoshop', 'InDesign', 'Blender', 'Lens Studio', 'Reality Composer'],
  },
];

// CEFR levels: A1 (beginner) … C2 (mastery). 'native' fills every dot.
export const languages = [
  { name: 'Vietnamese', level: 'native' },
  { name: 'German', level: 'C2' },
  { name: 'English', level: 'C1–C2', score: 'C1' }, // dots shown for the lower bound
  { name: 'French', level: 'A2' },
  { name: 'Mandarin', level: 'A1', note: 'Traditional, studying in Taipei' },
];

export const photos = [
  { src: photo1, alt: 'A chessboard mid-game on a bamboo table, next to an iced drink' },
  { src: photo2, alt: 'A red neon shop sign on an old colonial building in Hanoi, framed by trees' },
  { src: photo3, alt: 'A moss-covered stone with a small vase, tied with straw rope' },
  { src: photo4, alt: 'A rain-soaked temple courtyard with misty mountains behind' },
];
