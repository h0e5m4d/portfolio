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

  // External profiles. The résumé will become '/resume.pdf' once the
  // web version of the PDF is added to the `public/` folder.
  links: [
    {
      label: 'Résumé',
      href: 'https://drive.google.com/file/d/1vGpHemBvDVFPclnhLyAy4TIyUWlkSbrv/view?usp=drive_link',
    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tulinhtrann' },
  ],
};
