// The drawn ornament of the theme: icon sprite, rangolis, peacock feathers, the lotus mandala, lamps and jhandis.
// All of it is decoration and is hidden from assistive technology.

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <linearGradient id="flame-g" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#e8730c" /><stop offset=".55" stopColor="#ffd35c" /><stop offset="1" stopColor="#fff6cf" /></linearGradient>
      <linearGradient id="brass-g" x1="0" x2="1"><stop offset="0" stopColor="#8a5a00" /><stop offset=".45" stopColor="#f0d48a" /><stop offset="1" stopColor="#b98416" /></linearGradient>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#feda75" /><stop offset=".25" stopColor="#fa7e1e" /><stop offset=".5" stopColor="#d62976" /><stop offset=".75" stopColor="#962fbf" /><stop offset="1" stopColor="#4f5bd5" /></linearGradient>
      <symbol id="ic-yt-red" viewBox="0 0 24 24"><rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#ff0000" /><path d="M10 8.8v6.4l5.5-3.2z" fill="#fff" /></symbol>
      <symbol id="ic-ig-color" viewBox="0 0 24 24"><rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="url(#ig-grad)" /><rect x="6" y="6" width="12" height="12" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.9" fill="none" stroke="#fff" strokeWidth="1.6" /><circle cx="15.6" cy="8.4" r=".9" fill="#fff" /></symbol>
      <symbol id="ic-fb-color" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#1877f2" /><path d="M13.3 22.3v-7.4h2.4l.4-2.9h-2.8v-1.8c0-.8.3-1.4 1.5-1.4h1.4V6.200c-.3 0-1.100-.1-2.100-.1-2.200 0-3.600 1.300-3.600 3.700V12H8.100v2.900h2.400v7.400z" fill="#fff" /></symbol>
    </svg>
  );
}

const petal = (a: number, b: number, w: number) => {
  const h = b - a;
  return `M0,${-a}C${w},${-(a + h * 0.3)} ${w * 0.75},${-(b - h * 0.28)} 0,${-b}C${-w * 0.75},${-(b - h * 0.28)} ${-w},${-(a + h * 0.3)} 0,${-a}Z`;
};
const turns = (n: number, offset = 0) => Array.from({ length: n }, (_, i) => (360 / n) * i + offset);

const PALETTES = {
  a: ['#d81b60', '#f5b301', '#0a8f86', '#7b1fa2', '#e8730c'],
  b: ['#1a5fb4', '#e8730c', '#d81b60', '#f5b301', '#7b1fa2'],
  c: ['#e8730c', '#d81b60', '#7b1fa2', '#0a8f86', '#3c9a3c'],
  d: ['#7b1fa2', '#0a8f86', '#e8730c', '#d81b60', '#1a5fb4'],
} as const;

/** Rangoli: rings of coloured petals, the pattern drawn in powder at a doorway on festival days. */
export function Rangoli({ variant }: { variant: keyof typeof PALETTES }) {
  const p = PALETTES[variant];
  return (
    <svg className={`rangoli rg-${variant}`} viewBox="-110 -110 220 220" aria-hidden="true">
      <circle r="108" fill={p[4]} /><circle r="100" fill="#fff8ec" />
      {turns(24).map((r) => <path key={'o' + r} fill={p[2]} d={petal(74, 99, 7.5)} transform={`rotate(${r})`} />)}
      {turns(16, 11.25).map((r) => <path key={'m' + r} fill={p[1]} d={petal(46, 78, 11)} transform={`rotate(${r})`} />)}
      {turns(8).map((r) => <path key={'i' + r} fill={p[0]} d={petal(16, 50, 13)} transform={`rotate(${r})`} />)}
      <circle r="15" fill={p[3]} /><circle r="5" fill="#fff" />
      {turns(24).map((r) => { const t = (r * Math.PI) / 180; return <circle key={'d' + r} cx={(Math.sin(t) * 104).toFixed(1)} cy={(-Math.cos(t) * 104).toFixed(1)} r="1.8" fill="#fff" stroke="none" />; })}
    </svg>
  );
}

/** Peacock feathers: a stem, fine barbs, and the eye in green, bronze, blue and indigo. */
export function Feathers() {
  return (
    <svg className="feathers" viewBox="0 0 300 230" aria-hidden="true">
      {[-52, -28, -4, 20, 44].map((turn, n) => {
        const long = 150 - Math.abs(n - 2) * 14;
        const barbs = Array.from({ length: 16 }, (_, i) => {
          const y = -long + 46 + i * 5.5, len = 26 - i * 1.2;
          return `M0 ${y}q${-len * 0.6} -6 ${-len} -16M0 ${y}q${len * 0.6} -6 ${len} -16`;
        }).join('');
        return (
          <g key={turn} transform={`translate(150 215) rotate(${turn})`}>
            <path className="stem" d={`M0 0V${-long + 20}`} /><path className="barb" d={barbs} />
            <ellipse cx="0" cy={-long} rx="23" ry="32" fill="#2e9e6b" /><ellipse cx="0" cy={-long + 2} rx="16" ry="23" fill="#c9962a" />
            <ellipse cx="0" cy={-long + 4} rx="11" ry="16" fill="#1e86c8" /><ellipse cx="0" cy={-long + 8} rx="6.5" ry="9" fill="#1b1f6e" />
          </g>
        );
      })}
    </svg>
  );
}

/** A quiet lotus: two rings of petals inside one circle. */
export function Mandala() {
  return (
    <svg className="mandala" viewBox="-110 -110 220 220" aria-hidden="true">
      <circle r="106" />
      {turns(16).map((r) => <path key={'o' + r} className="p" d={petal(50, 100, 15)} transform={`rotate(${r})`} />)}
      {turns(8, 22.5).map((r) => <path key={'i' + r} className="p fill" d={petal(16, 50, 15)} transform={`rotate(${r})`} />)}
    </svg>
  );
}

export function LampSVG({ n }: { n?: number }) {
  return (
    <svg viewBox="0 0 40 50" aria-hidden="true">
      <path className="fl" style={n === undefined ? undefined : ({ '--n': n } as React.CSSProperties)} d="M20 30C12 22 17 14 20 4C23 14 28 22 20 30Z" />
      <path className="bowl" d="M4 32h32c0 9-7 14-16 14S4 41 4 32z" />
    </svg>
  );
}

/** Jhandis: the flags on bamboo poles raised after a puja. */
export function Jhandi() {
  const tall = [38, 14, 50, 24, 8, 42, 20], tint = ['#7a1528', '#e8730c', '#d9a021'];
  return (
    <svg className="jhandi" viewBox="0 0 230 130" aria-hidden="true">
      {tall.map((top, n) => {
        const x = 14 + n * 32;
        return (
          <g key={n}>
            <line x1={x} y1={top} x2={x} y2="128" />
            <path style={{ '--n': n, transformOrigin: `${x}px ${top + 9}px` } as React.CSSProperties} fill={tint[n % 3]} d={`M${x} ${top + 1}l27 8-27 8z`} />
          </g>
        );
      })}
    </svg>
  );
}

export function Shikhara() {
  return (
    <svg className="shikhara" viewBox="0 0 240 124" aria-hidden="true">
      <path d="M0 122H240M90 122V82h6V68h6V54Q120 12 138 54v14h6v14h6v40M120 33V16l11 4-11 4M40 122V94h6V84q14-26 28 0v10h6v28M160 122V94h6V84q14-26 28 0v10h6v28M110 122v-20q10-14 20 0v20M54 122v-12q6-8 12 0v12M174 122v-12q6-8 12 0v12" />
    </svg>
  );
}

export const Garland = () => <div className="garland" aria-hidden="true" />;
