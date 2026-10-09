import React from "react";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/TiroDevanagariHindi";

// Hero film for the homepage mockup. 12 seconds, loops seamlessly:
// logo on indigo -> the altar with a greeting in each of the site's three
// languages -> back to the logo. It carries no facts (no dates, no times), so
// it never goes out of date and needs no translation.

const { fontFamily } = loadFont("italic", {
  weights: ["400"],
  subsets: ["latin", "devanagari"],
});
loadFont("normal", { weights: ["400"], subsets: ["latin", "devanagari"] });

const FPS = 30;
const DURATION = 360;
const WIDTH = 1280;
const HEIGHT = 720;

// The dark ground, as red, green, blue. Indigo by default; the peacock variant passes its own.
type Ground = [number, number, number];
const INDIGO: Ground = [20, 22, 63];
const PEACOCK: Ground = [10, 43, 41];
const GroundContext = React.createContext<Ground>(INDIGO);
const tone = (g: Ground, alpha = 1) =>
  `rgba(${g[0]}, ${g[1]}, ${g[2]}, ${alpha})`;
const GOLD = "#d9a021";
const GOLD_SOFT = "#f0d48a";
const IVORY = "#fbf6ea";

// Timeline, in frames.
const INTRO_END = 80; // logo holds until here
const ALTAR_IN = 112; // altar fully visible
const ALTAR_OUT = 298; // altar starts to leave
const OUTRO_START = 330; // logo fully back; identical to frame 0

const GREETINGS = [
  { text: "Namaste", lang: "nl", italic: true },
  { text: "नमस्ते", lang: "hi", italic: false },
  { text: "Welkom", lang: "nl", italic: true },
];
const GREETING_FRAMES = (ALTAR_OUT - ALTAR_IN) / GREETINGS.length;

const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
const ease = Easing.bezier(0.2, 0.7, 0.2, 1);

// 1 while the logo scene is on screen, 0 while the altar is.
const useLogoScene = () => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [INTRO_END, ALTAR_IN, ALTAR_OUT, OUTRO_START],
    [1, 0, 0, 1],
    { ...clamp, easing: Easing.inOut(Easing.cubic) },
  );
};

const petal = (a: number, b: number, w: number) => {
  const h = b - a;
  return `M0,${-a}C${w},${-(a + h * 0.3)} ${w * 0.75},${-(b - h * 0.28)} 0,${-b}C${-w * 0.75},${-(b - h * 0.28)} ${-w},${-(a + h * 0.3)} 0,${-a}Z`;
};

// The same quiet two-ring lotus the page uses behind its headings.
const Lotus: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScene = useLogoScene();
  // 45 degrees over the loop: the lotus repeats every 45, so the loop is seamless.
  const rotate = (frame / DURATION) * 45;
  const x = interpolate(logoScene, [0, 1], [330, WIDTH / 2]);
  const size = interpolate(logoScene, [0, 1], [760, 600]);
  const opacity = interpolate(logoScene, [0, 1], [0.45, 0.9]);

  return (
    <svg
      viewBox="-110 -110 220 220"
      style={{
        position: "absolute",
        left: x - size / 2,
        top: HEIGHT / 2 - size / 2,
        width: size,
        height: size,
        opacity,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <circle r={106} fill="none" stroke={GOLD} strokeWidth={0.5} />
      {new Array(16).fill(true).map((_, i) => (
        <path
          key={`outer-${i}`}
          d={petal(50, 100, 15)}
          transform={`rotate(${i * 22.5})`}
          fill="none"
          stroke={GOLD}
          strokeWidth={0.5}
        />
      ))}
      {new Array(8).fill(true).map((_, i) => (
        <path
          key={`inner-${i}`}
          d={petal(16, 50, 15)}
          transform={`rotate(${i * 45 + 22.5})`}
          fill={GOLD_SOFT}
          fillOpacity={0.1}
          stroke={GOLD}
          strokeWidth={0.5}
        />
      ))}
    </svg>
  );
};

const Altar: React.FC = () => {
  const frame = useCurrentFrame();
  const ground = React.useContext(GroundContext);
  const logoScene = useLogoScene();
  // Slow push in across the whole time the altar is visible.
  const scale = interpolate(
    frame,
    [INTRO_END, OUTRO_START],
    [1.06, 1.2],
    clamp,
  );
  const drift = interpolate(frame, [INTRO_END, OUTRO_START], [0, -28], clamp);

  return (
    <AbsoluteFill style={{ opacity: 1 - logoScene }}>
      <Img
        src={staticFile("altar.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale}) translateX(${drift}px)`,
          transformOrigin: "58% 45%",
        }}
      />
      {/* Indigo falls away from the left so the greeting has a ground to sit on. */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(90deg, ${tone(ground)} 0%, ${tone(ground, 0.94)} 30%, ${tone(ground, 0.35)} 62%, ${tone(ground, 0.1)} 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};

const Greeting: React.FC<{
  text: string;
  lang: string;
  italic: boolean;
  index: number;
}> = ({ text, lang, italic, index }) => {
  const frame = useCurrentFrame();
  const start = ALTAR_IN + index * GREETING_FRAMES;
  const end = start + GREETING_FRAMES;
  const enter = interpolate(frame, [start, start + 16], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const exit = interpolate(frame, [end - 12, end], [1, 0], clamp);

  return (
    <div
      lang={lang}
      style={{
        position: "absolute",
        left: 104,
        top: 250,
        fontFamily,
        fontStyle: italic ? "italic" : "normal",
        fontSize: 168,
        lineHeight: 1.1,
        color: IVORY,
        opacity: enter * exit,
        transform: `translateY(${(1 - enter) * 28}px)`,
      }}
    >
      {text}
    </div>
  );
};

// The page's lotus line, drawn once under the greetings.
const LotusLine: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScene = useLogoScene();
  const draw = interpolate(frame, [ALTAR_IN, ALTAR_IN + 40], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 104,
        top: 478,
        display: "flex",
        alignItems: "center",
        gap: 16,
        opacity: 1 - logoScene,
      }}
    >
      <svg viewBox="0 0 72 30" style={{ width: 86, height: 36 }}>
        <g
          fill={GOLD_SOFT}
          fillOpacity={0.45}
          stroke={GOLD}
          strokeWidth={1.1}
          strokeLinejoin="round"
        >
          <path d="M36 24C27 25 19 22 15 15C23 15 31 18 36 24ZM36 24C45 25 53 22 57 15C49 15 41 18 36 24Z" />
          <path d="M36 24C30 22 25 17 24 9C30 11 34 17 36 24ZM36 24C42 22 47 17 48 9C42 11 38 17 36 24Z" />
          <path d="M36 4C41 10 41 18 36 24C31 18 31 10 36 4Z" />
        </g>
      </svg>
      <div
        style={{
          width: 420 * draw,
          height: 2,
          background: `linear-gradient(90deg, ${GOLD}, rgba(217, 160, 33, 0))`,
        }}
      />
    </div>
  );
};

const Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScene = useLogoScene();
  // A slow breath of light behind the trishul; two full breaths per loop.
  const glow =
    0.55 + 0.45 * Math.sin((frame / DURATION) * Math.PI * 4 - Math.PI / 2);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        opacity: logoScene,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(240, 212, 138, ${0.34 * glow}), rgba(240, 212, 138, 0) 62%)`,
        }}
      />
      <Img
        src={staticFile("logo.png")}
        style={{
          height: 330,
          transform: `scale(${interpolate(logoScene, [0, 1], [0.94, 1])})`,
        }}
      />
    </AbsoluteFill>
  );
};

export const HeroFilm: React.FC<{ ground?: Ground }> = ({
  ground = INDIGO,
}) => {
  return (
    <GroundContext.Provider value={ground}>
      <AbsoluteFill style={{ backgroundColor: tone(ground) }}>
        <Altar />
        <Lotus />
        {GREETINGS.map((g, i) => (
          <Greeting key={g.text} index={i} {...g} />
        ))}
        <LotusLine />
        <Logo />
      </AbsoluteFill>
    </GroundContext.Provider>
  );
};

export const MyComposition = () => {
  return (
    <>
      <Composition
        id="HeroFilm"
        component={HeroFilm}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ ground: INDIGO }}
      />
      <Composition
        id="HeroFilmPeacock"
        component={HeroFilm}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ ground: PEACOCK }}
      />
    </>
  );
};
