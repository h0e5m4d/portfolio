/*
  Site-wide facts about you, used by the footer (and later Home/About).
  Change a link or your availability here, and every place updates.
*/
export const site = {
  name: 'Tu Linh Tran',
  email: 'mail@tulinhtran.com',

  // Shown in the footer with a pulsing dot. Set `available: false`
  // once you've found your internship, and the dot turns grey.
  status: {
    available: true,
    text: 'Open for internships',
    detail: 'From April 2027',
  },

  // Résumé and profiles. The CV lives in public/resume.pdf: files in
  // public/ are published as they are, at the same path. To update your
  // CV, replace that file (keep the name) and push.
  links: [
    { label: 'Résumé', href: '/resume.pdf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tulinhtrann' },
  ],
};
