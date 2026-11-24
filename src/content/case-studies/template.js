/*
  The writing template: what a case study looks like before it's written.

  While developing (npm run dev), every project without its own case
  study file shows this, so you can see each page's structure and know
  what to write. It never reaches the live site (see index.js).

  Everything in [brackets] is a prompt to replace with your own words.
*/
export function caseStudyTemplate(project) {
  const image = project.cover.src;

  return {
    intro: `[The 2–3 sentence version of ${project.title}: what you designed, for whom, and what changed for them. A recruiter who reads only this should understand the project.]`,
    facts: {
      Duration: '[e.g. 12 weeks]',
      Tools: '[e.g. Figma, Miro]',
    },
    blocks: [
      {
        type: 'text',
        label: '01 — Context',
        heading: '[The brief]',
        body: ['[What was the task, who was it for, and what was your part in it?]'],
      },
      { type: 'image', src: image, alt: '[Describe what the image shows]', ratio: '16 / 10' },
      {
        type: 'text',
        label: '02 — Problem',
        heading: '[What wasn’t working]',
        body: ['[The problem, backed by evidence: a quote, a number, an observation.]'],
      },
      {
        type: 'text',
        label: '03 — Process',
        heading: '[How you got there]',
        body: ['[Research, ideas, iterations, testing. What changed along the way, and why?]'],
      },
      {
        type: 'text',
        label: '04 — Solution',
        heading: '[What you designed]',
        body: ['[The key screens or decisions, one paragraph each.]'],
      },
      {
        type: 'insight',
        principle: '[The psychological principle behind a key decision]',
        body: '[Why this works for the human using it.]',
      },
      {
        type: 'text',
        label: '05 — Outcome',
        heading: '[What happened]',
        body: ['[Results, feedback, and what you learned.]'],
      },
    ],
  };
}
