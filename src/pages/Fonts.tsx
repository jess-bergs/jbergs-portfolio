import { useState } from 'react'

type Candidate = {
  name: string
  css: string
  note?: string
  weights?: number[]
  hosted: 'self' | 'google'
  category: 'transitional' | 'humanist' | 'didone' | 'slab' | 'modern' | 'caslon' | 'garamond'
  vibes?: ('anthropic' | 'coefficient')[]
}

const CANDIDATES: Candidate[] = [
  { name: 'Charter (current, self-hosted)', css: '"Charter", serif', note: 'Bitstream / Matthew Carter, 1987', weights: [400, 700], hosted: 'self', category: 'transitional' },
  { name: 'Playfair Display', css: '"Playfair Display", serif', note: 'Editorial didone', weights: [400, 500, 600, 700], hosted: 'google', category: 'didone' },
  { name: 'Bodoni Moda', css: '"Bodoni Moda", serif', note: 'High-contrast didone', weights: [400, 500, 600, 700], hosted: 'google', category: 'didone' },
  { name: 'DM Serif Display', css: '"DM Serif Display", serif', note: 'Modern editorial display', weights: [400], hosted: 'google', category: 'didone' },
  { name: 'Italiana', css: '"Italiana", serif', note: 'Italian display, very high contrast', weights: [400], hosted: 'google', category: 'didone' },
  { name: 'Libre Caslon Display', css: '"Libre Caslon Display", serif', note: 'Caslon for headlines', weights: [400], hosted: 'google', category: 'caslon' },
  { name: 'Marcellus', css: '"Marcellus", serif', note: 'Classical Roman, stone-cut', weights: [400], hosted: 'google', category: 'modern' },
  { name: 'Cormorant Garamond', css: '"Cormorant Garamond", serif', note: 'Refined Garamond reinterpretation', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'Cormorant', css: '"Cormorant", serif', note: 'Narrower variant', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'EB Garamond', css: '"EB Garamond", serif', note: 'Faithful Garamond', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'Cardo', css: '"Cardo", serif', note: 'Humanist Renaissance', weights: [400, 700], hosted: 'google', category: 'humanist' },
  { name: 'Source Serif 4', css: '"Source Serif 4", serif', note: 'Adobe modern transitional', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional', vibes: ['anthropic', 'coefficient'] },
  { name: 'Newsreader', css: '"Newsreader", serif', note: 'Warm editorial', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional', vibes: ['anthropic'] },
  { name: 'Spectral', css: '"Spectral", serif', note: 'Digital-first transitional, Klim foundry', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional', vibes: ['anthropic'] },
  { name: 'Crimson Pro', css: '"Crimson Pro", serif', note: 'Refined modernised Garamond', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional', vibes: ['anthropic'] },
  { name: 'Crimson Text', css: '"Crimson Text", serif', note: 'Book-typography classical', weights: [400, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Literata', css: '"Literata", serif', note: 'Google Books reading face', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Lora', css: '"Lora", serif', note: 'Calligraphic-flavoured', weights: [400, 500, 600, 700], hosted: 'google', category: 'humanist' },
  { name: 'Vollkorn', css: '"Vollkorn", serif', note: 'Oldstyle workhorse', weights: [400, 500, 600, 700], hosted: 'google', category: 'humanist' },
  { name: 'Bitter', css: '"Bitter", serif', note: 'Slab-flavoured contemporary', weights: [400, 500, 600, 700], hosted: 'google', category: 'slab' },
  { name: 'PT Serif', css: '"PT Serif", serif', note: 'ParaType, modern transitional', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Merriweather', css: '"Merriweather", serif', note: 'High-readability screen serif', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Libre Baskerville', css: '"Libre Baskerville", serif', note: 'Web-tuned Baskerville', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Lusitana', css: '"Lusitana", serif', note: 'Quiet humanist serif', weights: [400, 700], hosted: 'google', category: 'humanist' },
  { name: 'Noto Serif', css: '"Noto Serif", serif', note: 'Google Noto family', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Fraunces', css: '"Fraunces", serif', note: 'Variable display soft-flair', weights: [400, 500, 600], hosted: 'google', category: 'modern' },
  { name: 'Roboto Slab', css: '"Roboto Slab", serif', note: 'Google geometric slab', weights: [400, 500, 600, 700], hosted: 'google', category: 'slab' },
  { name: 'Sanchez', css: '"Sanchez", serif', note: 'Slab serif', weights: [400], hosted: 'google', category: 'slab' },
  { name: 'Alegreya', css: '"Alegreya", serif', note: 'Calligraphic warmth, big text family', weights: [400, 500, 600, 700], hosted: 'google', category: 'humanist' },
  { name: 'Cinzel', css: '"Cinzel", serif', note: 'Roman caps, very classical', weights: [400, 500, 600, 700], hosted: 'google', category: 'modern' },
  { name: 'Cormorant Infant', css: '"Cormorant Infant", serif', note: 'Softer Cormorant variant', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'Cormorant SC', css: '"Cormorant SC", serif', note: 'Small-caps Cormorant', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'Cormorant Upright', css: '"Cormorant Upright", serif', note: 'No italicness', weights: [400, 500, 600, 700], hosted: 'google', category: 'garamond' },
  { name: 'Frank Ruhl Libre', css: '"Frank Ruhl Libre", serif', note: 'Modernised Hebrew/Latin serif', weights: [400, 500, 600, 700], hosted: 'google', category: 'modern', vibes: ['anthropic'] },
  { name: 'Gelasio', css: '"Gelasio", serif', note: 'Charter-adjacent reading face', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Inria Serif', css: '"Inria Serif", serif', note: 'Inria Foundry, calm modern', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Old Standard TT', css: '"Old Standard TT", serif', note: 'Modernised 19th-century classical', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Quattrocento', css: '"Quattrocento", serif', note: 'Wide humanist', weights: [400, 700], hosted: 'google', category: 'humanist' },
  { name: 'Slabo 27px', css: '"Slabo 27px", serif', note: 'Optimised for 27px display', weights: [400], hosted: 'google', category: 'slab' },
  { name: 'Domine', css: '"Domine", serif', note: 'Sturdy reading serif', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Yrsa', css: '"Yrsa", serif', note: 'Modern Indic-Latin', weights: [400, 500, 600, 700], hosted: 'google', category: 'modern' },
  { name: 'Yeseva One', css: '"Yeseva One", serif', note: 'Display-only flair', weights: [400], hosted: 'google', category: 'didone' },
  { name: 'BioRhyme', css: '"BioRhyme", serif', note: 'Slab-flavoured display', weights: [400, 700], hosted: 'google', category: 'slab' },
  { name: 'IM Fell English', css: '"IM Fell English", serif', note: '17th-century revival', weights: [400], hosted: 'google', category: 'humanist' },
  { name: 'Trocchi', css: '"Trocchi", serif', note: 'Heavy contemporary slab', weights: [400], hosted: 'google', category: 'slab' },
  { name: 'Petrona', css: '"Petrona", serif', note: 'Argentine humanist', weights: [400, 500, 600, 700], hosted: 'google', category: 'humanist', vibes: ['anthropic'] },
  { name: 'Lustria', css: '"Lustria", serif', note: 'Quiet, hairline serifs', weights: [400], hosted: 'google', category: 'modern' },
  { name: 'Rufina', css: '"Rufina", serif', note: 'High-contrast didone', weights: [400, 700], hosted: 'google', category: 'didone' },
  { name: 'Volkhov', css: '"Volkhov", serif', note: 'Cyrillic-friendly modern', weights: [400, 700], hosted: 'google', category: 'transitional' },
  { name: 'Trirong', css: '"Trirong", serif', note: 'Thai-Latin, refined hairlines', weights: [400, 500, 600, 700], hosted: 'google', category: 'didone' },
  { name: 'Halant', css: '"Halant", serif', note: 'Devanagari-Latin reading face', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Eczar', css: '"Eczar", serif', note: 'Display-flavoured Devanagari/Latin', weights: [400, 500, 600, 700], hosted: 'google', category: 'humanist' },
  { name: 'Hahmlet', css: '"Hahmlet", serif', note: 'Korean-Latin slab adjacent', weights: [400, 500, 600, 700], hosted: 'google', category: 'slab' },
  { name: 'Judson', css: '"Judson", serif', note: 'Wide humanist book serif', weights: [400, 700], hosted: 'google', category: 'humanist' },
  { name: 'Habibi', css: '"Habibi", serif', note: 'Heavy display character', weights: [400], hosted: 'google', category: 'modern' },
  { name: 'Brawler', css: '"Brawler", serif', note: 'Robust display serif', weights: [400, 700], hosted: 'google', category: 'modern' },
  { name: 'Almendra', css: '"Almendra", serif', note: 'Decorative classical', weights: [400, 700], hosted: 'google', category: 'humanist' },
  { name: 'Markazi Text', css: '"Markazi Text", serif', note: 'Persian-Latin reading face', weights: [400, 500, 600, 700], hosted: 'google', category: 'transitional' },
  { name: 'Sorts Mill Goudy', css: '"Sorts Mill Goudy", serif', note: 'Goudy classical revival', weights: [400], hosted: 'google', category: 'humanist' },
]

const CATEGORIES = ['all', 'transitional', 'humanist', 'didone', 'garamond', 'caslon', 'modern', 'slab'] as const
const VIBES = ['anthropic-vibe', 'coefficient-vibe'] as const
type CategoryFilter = (typeof CATEGORIES)[number]
type VibeFilter = (typeof VIBES)[number] | null

const Fonts = () => {
  const [weight, setWeight] = useState<number>(500)
  const [filter, setFilter] = useState<CategoryFilter>('all')
  const [vibe, setVibe] = useState<VibeFilter>('anthropic-vibe')

  const byCategory = filter === 'all' ? CANDIDATES : CANDIDATES.filter((c) => c.category === filter)
  const visible = vibe
    ? byCategory.filter((c) => c.vibes?.includes(vibe.replace('-vibe', '') as 'anthropic' | 'coefficient'))
    : byCategory

  return (
    <section className="py-10">
      <header className="mb-8">
        <h1 className="mb-2 text-2xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
          Serif font scout
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
          “Jess Bergs” rendered in {visible.length} candidates. Click a name to copy the CSS
          font-family.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span style={{ color: 'var(--color-ink-mute)' }}>Weight:</span>
          {[400, 500, 600, 700].map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => setWeight(w)}
              className={`filter-pill${weight === w ? ' filter-pill--on' : ''}`}
            >
              {w}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span style={{ color: 'var(--color-ink-mute)' }}>Style:</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`filter-pill${filter === c ? ' filter-pill--on' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span style={{ color: 'var(--color-ink-mute)' }}>Vibe:</span>
          <button
            type="button"
            onClick={() => setVibe(null)}
            className={`filter-pill${vibe === null ? ' filter-pill--on' : ''}`}
          >
            any
          </button>
          {VIBES.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVibe(v)}
              className={`filter-pill${vibe === v ? ' filter-pill--on' : ''}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
        {visible.map((c) => {
          const supportsWeight = !c.weights || c.weights.includes(weight)
          return (
            <li
              key={c.name}
              className="m-0 rounded-xl border p-5"
              style={{
                background: 'rgba(255,255,255,0.65)',
                borderColor: 'var(--color-line)',
              }}
            >
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(c.css)}
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-sans)' }}
                  title="Copy CSS font-family"
                >
                  {c.name}
                </button>
                <span className="text-xs" style={{ color: 'var(--color-ink-mute)' }}>
                  {c.hosted === 'self' ? 'self-hosted' : 'Google Fonts'} ·{' '}
                  {c.weights ? c.weights.join('/') : 'all'} {!supportsWeight && '· faux'}
                </span>
              </div>
              <div
                style={{
                  fontFamily: c.css,
                  fontWeight: weight,
                  fontSize: 'clamp(2.5rem, 6.2vw, 4.1rem)',
                  lineHeight: 1.05,
                  letterSpacing: '0.005em',
                  color: 'var(--color-ink)',
                }}
              >
                Jess Bergs
              </div>
              {c.note && (
                <p className="mt-2 text-xs" style={{ color: 'var(--color-ink-mute)' }}>
                  {c.note}
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Fonts
