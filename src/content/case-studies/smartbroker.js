/*
  SMARTBROKER+ CASE STUDY

  Currently listed under `drafts` in ./index.js: visible only on your
  computer (npm run dev). The live site shows the header + "coming soon".
  Move it to `published` in index.js when the text and images are final.

  Everything in [brackets] is a writing prompt for you to replace.
  The images are the cover as a stand-in until you add real ones:
  put files in src/assets/projects/smartbroker/ and import them here.

  Suggested story arc (recruiters skim, so lead with the outcome):
    context → problem → research → process → solution →
    why it works (psychology) → outcome → reflection
*/
import cover from '../../assets/projects/smartbroker.webp';

export default {
  // Extra facts for the header, shown next to role, team, year.
  facts: {
    Duration: '[e.g. 14 weeks]',
    Tools: '[e.g. Figma, Miro, Maze]',
  },

  // Longer than the card summary: the 2–3 sentence version.
  intro:
    '[Linh: The 2–3 sentence version of the whole project. What did your team redesign, for whom, and what changed for them? A recruiter who reads only this should understand the project.]',

  blocks: [
    {
      type: 'stats',
      items: [
        { value: '[12]', label: '[Interviews]' },
        { value: '[3]', label: '[Iterations]' },
        { value: '[5]', label: '[New features]' },
      ],
    },
    {
      type: 'text',
      label: '01 — Context',
      heading: '[The brief]',
      body: [
        '[What did Smartbroker+ ask your team to do? Who uses the app: first-time investors, experienced traders, both?]',
        '[What was your part in the team? Be specific: "I led the onboarding flow and ran the usability tests".]',
      ],
    },
    {
      type: 'image',
      src: cover,
      alt: '[Describe what the image shows]',
      caption: '[Caption: what should the viewer notice?]',
      ratio: '16 / 9',
    },
    {
      type: 'text',
      label: '02 — Problem',
      heading: '[What wasn’t working]',
      body: ['[What did people struggle with in the current app? Use evidence: a quote, a number, an observation.]'],
      list: ['[Pain point one]', '[Pain point two]', '[Pain point three]'],
    },
    {
      type: 'quote',
      text: '[A real line from an interview or test that captures the problem]',
      cite: '[Participant 3, user interview]',
    },
    {
      type: 'text',
      label: '03 — Process',
      heading: '[How you got there]',
      body: ['[Research methods, key insight, what you tried that didn’t work, and how testing changed the design.]'],
    },
    {
      type: 'gallery',
      columns: 2,
      images: [
        { src: cover, alt: '[Early wireframe]' },
        { src: cover, alt: '[Later iteration]' },
      ],
      caption: '[From wireframe to iteration: what changed and why]',
    },
    {
      type: 'text',
      label: '04 — Solution',
      heading: '[What you designed]',
      body: ['[The key screens and features. One paragraph per important decision.]'],
    },
    {
      type: 'beforeAfter',
      before: { src: cover, alt: '[The original screen]' },
      after: { src: cover, alt: '[Your redesigned screen]' },
      caption: '[Drag to compare: the original vs. the redesign]',
    },
    {
      type: 'insight',
      principle: '[The psychological principle, e.g. "Friction for risky actions"]',
      body: '[Why this decision works for the human using it. Trading apps can push people into impulsive trades; how does your design support calm, informed decisions instead?]',
    },
    {
      type: 'text',
      label: '05 — Outcome',
      heading: '[What happened]',
      body: [
        '[Results: test findings, client feedback, what Smartbroker+ took forward.]',
        '[Reflection: what you learned, and what you would do differently.]',
      ],
    },
  ],
};
