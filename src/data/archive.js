/*
  ARCHIVE: work made by hand, grouped by medium.
  To add a piece: put the image in src/assets/archive/, import it, and
  add { src, alt } to a group. To add a group, copy one group object.
  `alt` describes what the artwork shows, for people who can't see it.
*/
import lettering1 from '../assets/archive/lettering-1.webp';
import lettering2 from '../assets/archive/lettering-2.webp';
import lettering3 from '../assets/archive/lettering-3.webp';
import lettering4 from '../assets/archive/lettering-4.webp';
import lettering5 from '../assets/archive/lettering-5.webp';
import sketch1 from '../assets/archive/sketch-1.webp';
import sketch2 from '../assets/archive/sketch-2.webp';
import sketch3 from '../assets/archive/sketch-3.webp';
import sketch4 from '../assets/archive/sketch-4.webp';
import sketch5 from '../assets/archive/sketch-5.webp';
import painting1 from '../assets/archive/painting-1.webp';
import painting2 from '../assets/archive/painting-2.webp';
import painting3 from '../assets/archive/painting-3.webp';
import walnut1 from '../assets/archive/walnut-1.webp';
import walnut2 from '../assets/archive/walnut-2.webp';
import walnut3 from '../assets/archive/walnut-3.webp';
import walnut4 from '../assets/archive/walnut-4.webp';
import walnut5 from '../assets/archive/walnut-5.webp';

export const archiveIntro = 'Sketches, paintings and type experiments, made by hand.';

export const archiveGroups = [
  {
    id: 'lettering',
    title: 'Lettering',
    items: [
      { src: lettering1, alt: 'Lettering poster in black and blue, with letters tangled around a music staff' },
      { src: lettering2, alt: 'Lettering poster mixing many hand-drawn letter styles in blue and black, with two glowing blue orbs' },
      { src: lettering3, alt: 'Lettering poster with swirling multicoloured letters drawn like ribbons' },
      { src: lettering4, alt: 'Lettering poster with large rainbow-gradient letters and small doodles around them' },
      { src: lettering5, alt: 'Densely packed lettering poster in bright red, yellow, blue and pink' },
    ],
  },
  {
    id: 'sketches',
    title: 'Sketches',
    items: [
      { src: sketch1, alt: 'Charcoal sketch of draped fabric on a box, with an unfinished outline beside it' },
      { src: sketch2, alt: 'Charcoal drawing of a tuk-tuk on a tree-lined street' },
      { src: sketch3, alt: 'Ink drawing of garlic bulbs under a dark hatched shadow' },
      { src: sketch4, alt: 'Ink sketch of a still life with fruit and objects on a table' },
      { src: sketch5, alt: 'Charcoal drawing of a chicken standing in a doorway' },
    ],
  },
  {
    id: 'paintings',
    title: 'Paintings',
    items: [
      { src: painting1, alt: 'Acrylic painting of a yellow spray bottle on purple fabric' },
      { src: painting2, alt: 'Acrylic painting of a banana and a glass on teal fabric' },
      { src: painting3, alt: 'Acrylic painting of a glass jar on pink and red fabric' },
    ],
  },
  {
    id: 'walnuts',
    title: 'Walnut studies',
    items: [
      { src: walnut1, alt: 'Pencil study of a whole walnut with detailed shading' },
      { src: walnut2, alt: 'Bold black ink study of a walnut half, reduced to thick shapes' },
      { src: walnut3, alt: 'Fine ink hatching study of a walnut shell' },
      { src: walnut4, alt: 'Graphic black outline study of a walnut cut in half' },
      { src: walnut5, alt: 'Charcoal study of a cracked walnut shell' },
    ],
  },
];
