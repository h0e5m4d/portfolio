// TEMPORARY: a preview of the design tokens from Step 0, so you can
// check fonts, sizes and colors in the browser (light and dark).
// The real Home page replaces this in Step 6.

const swatches = [
  'bg',
  'surface',
  'text',
  'text-muted',
  'text-subtle',
  'text-faint',
  'border',
  'focus',
];

export default function Home() {
  return (
    <main style={{ padding: 'var(--page-gutter)', display: 'grid', gap: 'var(--space-7)' }}>
      <section style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: 'var(--text-max)' }}>
        <p className="label" style={{ color: 'var(--color-text-subtle)' }}>
          Step 0 · Token preview
        </p>
        <h1 style={{ fontSize: 'var(--text-2xl)' }}>I&apos;m Linh, a product design student.</h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--color-text-muted)' }}>
          I design digital experiences defined by clarity, precision and thoughtful interaction.
          This paragraph is set in Geist Sans for easy reading, while labels stay in Geist Mono.
        </p>
        <p className="label">Currently: Interface design student</p>
      </section>

      <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        {swatches.map((name) => (
          <div key={name} style={{ display: 'grid', gap: 'var(--space-2)', width: '7rem' }}>
            <div
              style={{
                height: '3rem',
                background: `var(--color-${name})`,
                border: '1px solid var(--color-border)',
              }}
            />
            <span className="label" style={{ fontSize: 'var(--text-xs)' }}>
              {name}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
