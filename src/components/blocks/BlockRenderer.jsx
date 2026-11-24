import TextBlock from './TextBlock.jsx';
import ImageBlock from './ImageBlock.jsx';
import GalleryBlock from './GalleryBlock.jsx';
import VideoBlock from './VideoBlock.jsx';
import QuoteBlock from './QuoteBlock.jsx';
import StatsBlock from './StatsBlock.jsx';
import InsightBlock from './InsightBlock.jsx';
import BeforeAfterBlock from './BeforeAfterBlock.jsx';

/*
  BlockRenderer: turns a list of content blocks into components.

  This lookup table is the heart of the system: `type` in the data
  picks the component. To invent a new block type, write a component
  and add one line here.
*/
const components = {
  text: TextBlock,
  image: ImageBlock,
  gallery: GalleryBlock,
  video: VideoBlock,
  quote: QuoteBlock,
  stats: StatsBlock,
  insight: InsightBlock,
  beforeAfter: BeforeAfterBlock,
};

// Every page currently shares one column width, so all blocks render at
// that width. `size` is kept in the data (and as data-size on the
// wrapper) so wider layouts can come back later with CSS alone.
const defaultSize = {
  text: 'content',
  quote: 'content',
  stats: 'content',
  insight: 'content',
  image: 'wide',
  gallery: 'wide',
  video: 'wide',
  beforeAfter: 'wide',
};

export default function BlockRenderer({ blocks, className }) {
  return blocks.map((block, i) => {
    const { type, size, ...props } = block;
    const Component = components[type];

    // A typo in `type` shouldn't crash the page. Warn while developing,
    // skip silently on the live site.
    if (!Component) {
      if (import.meta.env.DEV) console.warn(`Unknown block type "${type}"`, block);
      return null;
    }

    return (
      <div key={i} className={className} data-size={size ?? defaultSize[type]}>
        <Component {...props} />
      </div>
    );
  });
}
