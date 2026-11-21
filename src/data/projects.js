/*
  PROJECTS: the single source of truth for your work.

  The Projects page, the homepage's selected work (Step 6) and the case
  studies (Step 5) all read from this list. To add a project: copy one
  object, change the values, add a cover image. No layout code needed.

  The ORDER of this array is the order on the site. Put your strongest,
  most relevant work first.

  Fields
  ──────
  slug          URL name: /projects/<slug>. Lowercase, dashes, never change
                it once published (old links would break).
  title         Project name.
  summary       One sentence: what it is. Shown on cards.
  year          e.g. '2024' or '2025/26'.
  role          Your role, e.g. 'Product Designer'.
  team          'Solo' or 'Team'.
  collaboration Partner company, or null.
  context       'Industry collaboration' | 'Academic' | 'Internship' | 'Personal'
  disciplines   Used for the filter buttons. Spell them consistently!
  featured      true → also shown on the homepage.
  cover         { src, alt, fit } — fit 'cover' fills the frame (may crop),
                'contain' shows the whole image with space around it.
*/
import smartbrokerCover from '../assets/projects/smartbroker.webp';
import rollsRoyceCover from '../assets/projects/rolls-royce.webp';
import hanoiMetroCover from '../assets/projects/hanoi-metro.webp';
import boinkCover from '../assets/projects/boink.webp';

export const projects = [
  {
    slug: 'smartbroker',
    title: 'Smartbroker+',
    summary: 'Redesigning the Smartbroker+ trading app and designing new features.',
    year: '2025/26',
    role: 'Product Designer',
    team: 'Team',
    collaboration: 'Smartbroker+',
    context: 'Industry collaboration',
    disciplines: ['UX/UI', 'Product Design'],
    featured: true,
    cover: {
      src: smartbrokerCover,
      alt: 'The redesigned Smartbroker+ profile and documents screen on a laptop',
      fit: 'contain',
    },
  },
  {
    slug: 'rolls-royce',
    title: 'Rolls-Royce Motor Cars',
    summary: 'Designing wellbeing and health into iconic Rolls-Royce cars.',
    year: '2025/26',
    role: 'UX/UI Designer',
    team: 'Team',
    collaboration: 'Rolls-Royce Motor Cars',
    context: 'Industry collaboration',
    disciplines: ['UX/UI', 'Product Design'],
    featured: true,
    cover: {
      src: rollsRoyceCover,
      alt: 'A row of sculptural interior objects in black, navy, burgundy and silver',
      fit: 'contain',
    },
  },
  {
    slug: 'hanoi-metro',
    title: 'Hanoi Metro Ticket Machine',
    summary: 'A research-led redesign of the ticket machine interface for Hanoi’s metro.',
    year: '2024',
    role: 'UX/UI & HCI Research',
    team: 'Solo',
    collaboration: null,
    context: 'Academic', // TODO(Linh): confirm this was a university project
    disciplines: ['UX/UI', 'HCI'],
    featured: true,
    cover: {
      src: hanoiMetroCover,
      alt: 'The redesigned ticket machine with its touchscreen showing four ticket options',
      fit: 'contain',
    },
  },
  {
    slug: 'boink',
    title: 'Boink+ Banking in 2030',
    summary: 'A speculative banking app for 2030, with AI built into everyday money decisions.',
    year: null, // TODO(Linh): add the year
    role: 'Product Designer', // TODO(Linh): confirm role
    team: null, // TODO(Linh): 'Solo' or 'Team'
    collaboration: null,
    context: 'Academic', // TODO(Linh): confirm
    disciplines: ['UX/UI', 'Product Design', 'AI'],
    featured: false,
    cover: {
      src: boinkCover,
      alt: 'The Boink+ app on a phone, showing a personal account and savings pots',
      fit: 'contain',
    },
  },
];
