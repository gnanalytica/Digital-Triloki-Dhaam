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
import { loadFont } from "@remotion/google-fonts/Martel";

// "Darshan": a portrait film for the second design direction. A lamp burns inside
// turning brass rings; the rings open like an aperture onto the altar; a greeting
// appears in each of the site's three languages; the aperture closes on the lamp.
// 10 seconds, loops seamlessly, carries no dates or times.

const { fontFamily } = loadFont("normal", {
  weights: ["300", "800"],
  subsets: ["latin", "devanagari"],
});

const FPS = 30;
const DURATION = 300;
const WIDTH = 1080;
const HEIGHT = 1350;

const NIGHT = "#0a2b29";
const PEACOCK = "#0f3d3a";
const BRASS = "#c9a24b";
const BRASS_LIGHT = "#e8d5a0";
const IVORY = "#f4f1e6";

const CENTRE_X = WIDTH / 2;
const CENTRE_Y = 640;
const APERTURE = 392; // radius of the opening when fully open

const OPEN_START = 36;
const OPEN_END = 96;
const CLOSE_START = 228;
const CLOSE_END = 276;

const GREETINGS = [
  { text: "Namaste", lang: "nl" },
  { text: "नमस्ते", lang: "hi" },
  { text: "Welkom", lang: "nl" },
];
const GREETING_FRAMES = (CLOSE_START - OPEN_END) / GREETINGS.length;

const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

// 0 while the aperture is closed, 1 while it is open.
const useOpen = () => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [OPEN_START, OPEN_END, CLOSE_START, CLOSE_END],
    [0, 1, 1, 0],
    { ...clamp, easing: Easing.inOut(Easing.cubic) },
  );
};

// A value that repeats exactly once per loop, for anything that must be seamless.
const useTurn = () => useCurrentFrame() / DURATION;

const Rings: React.FC = () => {
  const turn = useTurn();
  const open = useOpen();
  // Every ring repeats each 30 degrees, so a 30 degree turn per loop is seamless.
  const rings = [
    { r: 420, ticks: 72, length: 10, direction: 1 },
    { r: 452, ticks: 24, length: 18, direction: -1 },
    { r: 486, ticks: 12, length: 0, direction: 1 },
  ];

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0 }}
    >
      {rings.map((ring) => (
        <g
          key={ring.r}
          transform={`rotate(${turn * 30 * ring.direction} ${CENTRE_X} ${CENTRE_Y})`}
          opacity={interpolate(open, [0, 1], [0.55, 0.95])}
        >
          <circle
            cx={CENTRE_X}
            cy={CENTRE_Y}
            r={ring.r}
            fill="none"
            stroke={BRASS}
            strokeWidth={ring.length ? 1.5 : 1}
          />
          {new Array(ring.ticks).fill(true).map((_, i) => {
            const angle = (i / ring.ticks) * Math.PI * 2;
            const x = Math.sin(angle);
            const y = -Math.cos(angle);
            return ring.length ? (
              <line
                key={i}
                x1={CENTRE_X + x * ring.r}
                y1={CENTRE_Y + y * ring.r}
                x2={CENTRE_X + x * (ring.r + ring.length)}
                y2={CENTRE_Y + y * (ring.r + ring.length)}
                stroke={BRASS}
                strokeWidth={1.5}
              />
            ) : (
              <circle
                key={i}
                cx={CENTRE_X + x * ring.r}
                cy={CENTRE_Y + y * ring.r}
                r={6}
                fill={BRASS_LIGHT}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
};

const Altar: React.FC = () => {
  const frame = useCurrentFrame();
  const open = useOpen();
  const scale = interpolate(frame, [OPEN_START, CLOSE_END], [1.12, 1.3], clamp);
  const size = APERTURE * 2;

  return (
    <div
      style={{
        position: "absolute",
        left: CENTRE_X - APERTURE,
        top: CENTRE_Y - APERTURE,
        width: size,
        height: size,
        clipPath: `circle(${open * APERTURE}px at 50% 50%)`,
      }}
    >
      <Img
        src={staticFile("altar.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "56% 40%",
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(10, 43, 41, 0) 55%, rgba(10, 43, 41, 0.55) 100%)",
        }}
      />
    </div>
  );
};

const Lamp: React.FC = () => {
  const turn = useTurn();
  const open = useOpen();
  // Whole-number frequencies, so the flicker lines up again when the loop restarts.
  const flicker =
    1 +
    0.07 * Math.sin(turn * Math.PI * 2 * 11) +
    0.04 * Math.sin(turn * Math.PI * 2 * 23);
  const sway = 3 * Math.sin(turn * Math.PI * 2 * 7);
  const opacity = interpolate(open, [0, 0.55], [1, 0], clamp);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <defs>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffe9a8" stopOpacity={0.5 * flicker} />
          <stop offset="1" stopColor="#ffe9a8" stopOpacity={0} />
        </radialGradient>
        <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f08a1c" />
          <stop offset="0.55" stopColor="#ffd35c" />
          <stop offset="1" stopColor="#fff6cf" />
        </linearGradient>
      </defs>
      <circle cx={CENTRE_X} cy={CENTRE_Y - 40} r={330} fill="url(#glow)" />
      <g
        transform={`translate(${CENTRE_X} ${CENTRE_Y + 60}) rotate(${sway}) scale(1 ${flicker})`}
      >
        <path
          d="M0 0C-58 -60 -22 -128 0 -214C22 -128 58 -60 0 0Z"
          fill="url(#flame)"
        />
      </g>
      <path
        d={`M${CENTRE_X - 150} ${CENTRE_Y + 66}h300c0 62 -64 100 -150 100s-150 -38 -150 -100z`}
        fill={BRASS}
      />
      <path
        d={`M${CENTRE_X - 150} ${CENTRE_Y + 66}h300`}
        stroke={BRASS_LIGHT}
        strokeWidth={5}
      />
    </svg>
  );
};

const Greeting: React.FC<{ text: string; lang: string; index: number }> = ({
  text,
  lang,
  index,
}) => {
  const frame = useCurrentFrame();
  const start = OPEN_END + index * GREETING_FRAMES;
  const end = start + GREETING_FRAMES;
  const enter = interpolate(frame, [start, start + 14], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.2, 0.7, 0.2, 1),
  });
  const exit = interpolate(frame, [end - 10, end], [1, 0], clamp);

  return (
    <div
      lang={lang}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 1118,
        textAlign: "center",
        fontFamily,
        fontWeight: 800,
        fontSize: 124,
        lineHeight: 1.2,
        color: IVORY,
        opacity: enter * exit,
        transform: `translateY(${(1 - enter) * 24}px)`,
      }}
    >
      {text}
    </div>
  );
};

export const DarshanFilm: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 46%, ${PEACOCK}, ${NIGHT} 70%)`,
      }}
    >
      <Rings />
      <Altar />
      <Lamp />
      <Img
        src={staticFile("logo.png")}
        style={{
          position: "absolute",
          top: 44,
          left: CENTRE_X - 78,
          height: 162,
        }}
      />
      {GREETINGS.map((g, i) => (
        <Greeting key={g.text} index={i} {...g} />
      ))}
    </AbsoluteFill>
  );
};

export const DarshanComposition = () => {
  return (
    <Composition
      id="DarshanFilm"
      component={DarshanFilm}
      durationInFrames={DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
