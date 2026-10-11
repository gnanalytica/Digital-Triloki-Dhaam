import React from "react";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/TiroDevanagariHindi";
import { loadFont as loadBody } from "@remotion/google-fonts/Palanquin";

// A looping film for a screen in the mandir. Left half: the appeal for the digital platform, with a QR code to the
// donate page and the bank details. Right half: the new website, scrolling by itself (filmed from the real site).
//
// Facts come from content/temple.yml: the IBAN and the account holder. No amounts are named and no tax-relief claim
// is made. The QR code opens the website's donate page; it is not a bank payment code. When the mandir supplies a
// payment link, regenerate public/donate-qr.svg for it.

const { fontFamily: display } = loadDisplay("normal", { weights: ["400"], subsets: ["latin", "devanagari"] });
loadDisplay("italic", { weights: ["400"], subsets: ["latin", "devanagari"] });
const { fontFamily: body } = loadBody("normal", { weights: ["400", "600"], subsets: ["latin"] });

const FPS = 30;
// The length of public/site-scroll.mp4, in frames. Update when the site is filmed again.
export const SCROLL_FRAMES = 2427;

const C = { marble: "#fdfcfa", ink: "#2b1b24", maroon: "#7a1528", saffron: "#e8730c", sindoor: "#b3470a", haldi: "#d9a021", soft: "#f0d48a", indigo: "#1b1f6e", lead: "#4a3741" };

// What the gifts are for, shown one at a time. The same six as on the brochure.
const PLANS: [string, string][] = [
  ["Een gemeenschap die elkaar vindt", "A community that finds each other"],
  ["Kennis over Sanatan Dharma delen", "Sharing knowledge of Sanatan Dharma"],
  ["Campagnes en sociale media", "Campaigns and social media"],
  ["Eigen video en fotografie", "Our own video and photography"],
  ["Online doneren en afspraken maken", "Giving and booking online"],
  ["Een website die elke week actueel is", "A website kept current every week"],
];

const petal = (a: number, b: number, w: number) => {
  const h = b - a;
  return `M0,${-a}C${w},${-(a + h * 0.3)} ${w * 0.75},${-(b - h * 0.28)} 0,${-b}C${-w * 0.75},${-(b - h * 0.28)} ${-w},${-(a + h * 0.3)} 0,${-a}Z`;
};
const turns = (n: number, offset = 0) => Array.from({ length: n }, (_, i) => (360 / n) * i + offset);

const Rangoli: React.FC<{ size: number; turn: number; style?: React.CSSProperties }> = ({ size, turn, style }) => {
  const p = ["#d81b60", "#f5b301", "#0a8f86", "#7b1fa2", "#e8730c"];
  return (
    <svg viewBox="-110 -110 220 220" width={size} height={size} style={{ position: "absolute", transform: `rotate(${turn}deg)`, ...style }}>
      <circle r="108" fill={p[4]} /><circle r="100" fill="#fff8ec" />
      {turns(24).map((r) => <path key={"o" + r} fill={p[2]} stroke="#b98416" strokeWidth={0.5} d={petal(74, 99, 7.5)} transform={`rotate(${r})`} />)}
      {turns(16, 11.25).map((r) => <path key={"m" + r} fill={p[1]} stroke="#b98416" strokeWidth={0.5} d={petal(46, 78, 11)} transform={`rotate(${r})`} />)}
      {turns(8).map((r) => <path key={"i" + r} fill={p[0]} stroke="#b98416" strokeWidth={0.5} d={petal(16, 50, 13)} transform={`rotate(${r})`} />)}
      <circle r="15" fill={p[3]} /><circle r="5" fill="#fff" />
    </svg>
  );
};

const Lotus: React.FC = () => (
  <svg viewBox="0 0 72 30" width={86} height={36}>
    <g fill={C.soft} fillOpacity={0.5} stroke={C.haldi} strokeWidth={1.1} strokeLinejoin="round">
      <path d="M36 24C27 25 19 22 15 15C23 15 31 18 36 24ZM36 24C45 25 53 22 57 15C49 15 41 18 36 24Z" />
      <path d="M36 24C30 22 25 17 24 9C30 11 34 17 36 24ZM36 24C42 22 47 17 48 9C42 11 38 17 36 24Z" />
      <path d="M36 4C41 10 41 18 36 24C31 18 31 10 36 4Z" />
    </g>
  </svg>
);

const Appeal: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // One plan every five seconds, each fading in and out.
  const each = 5 * FPS, at = Math.floor(frame / each) % PLANS.length, t = frame % each;
  const show = interpolate(t, [0, 18, each - 18, each], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const pulse = 1 + 0.018 * Math.sin((frame / FPS) * Math.PI * 0.8);
  // The rangoli completes a whole number of sixths of a turn over the film, so the loop has no jump (it has 8-fold symmetry at the centre and 24 at the rim; 120 degrees keeps all three rings aligned).
  const turn = (frame / durationInFrames) * 360;

  return (
    <AbsoluteFill style={{ width: 960, background: `linear-gradient(180deg, ${C.marble} 0%, #fff3de 38%, #ffd98a 100%)`, fontFamily: body, color: C.ink, overflow: "hidden" }}>
      <div style={{ height: 14, background: "linear-gradient(90deg, #e8730c, #f5b301, #d81b60, #7b1fa2, #1a5fb4, #0a8f86, #3c9a3c, #f5b301, #e8730c)" }} />
      <Rangoli size={360} turn={turn} style={{ right: -130, top: -110 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 22, padding: "34px 56px 0" }}>
        <Img src={staticFile("logo.png")} style={{ height: 118 }} />
        <div>
          <div style={{ fontFamily: display, fontSize: 34, color: C.maroon, lineHeight: 1.15 }}>Mandir Triloki Dhaam</div>
          <div style={{ fontSize: 21, color: C.lead }}>Eindhoven</div>
        </div>
      </div>

      <div style={{ padding: "34px 56px 0" }}>
        <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 30, color: C.sindoor }}>Raam Raam</div>
        <div style={{ fontFamily: display, fontSize: 62, lineHeight: 1.08, color: C.maroon, marginTop: 6 }}>Bouw mee aan onze digitale mandir</div>
        <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 34, color: C.lead, marginTop: 10 }}>Help us build our digital mandir</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20 }}>
          <Lotus />
          <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${C.haldi}, rgba(217,160,33,0))` }} />
        </div>
      </div>

      <div style={{ padding: "22px 56px 0", height: 150 }}>
        <div style={{ fontSize: 21, color: C.sindoor, fontWeight: 600, letterSpacing: 0.3 }}>Met uw gift bouwen wij · With your gift we build</div>
        <div style={{ opacity: show, transform: `translateY(${(1 - show) * 14}px)`, marginTop: 8 }}>
          <div style={{ fontFamily: display, fontSize: 40, lineHeight: 1.15, color: C.ink }}>{PLANS[at][0]}</div>
          <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 28, color: C.lead, marginTop: 4 }}>{PLANS[at][1]}</div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 396, background: `linear-gradient(180deg, ${C.indigo}, #241a63)`, color: "#f3efe6", padding: "32px 56px", display: "flex", gap: 44, alignItems: "center" }}>
        <div style={{ flex: "none", background: "#fff", padding: 16, transform: `scale(${pulse})`, boxShadow: `0 0 0 4px ${C.haldi}, 0 24px 50px -20px rgba(0,0,0,.6)` }}>
          <Img src={staticFile("donate-qr.svg")} style={{ width: 280, height: 280, display: "block" }} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: display, fontSize: 50, lineHeight: 1.1, color: C.soft }}>Scan om te doneren</div>
          <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 30, color: "#c9c9e2", marginTop: 4 }}>Scan to donate</div>
          <div style={{ fontFamily: display, fontSize: 33, color: "#fff", marginTop: 20, whiteSpace: "nowrap" }}>NL90 INGB 0007 6605 27</div>
          <div style={{ fontSize: 21, marginTop: 8, lineHeight: 1.45 }}>
            <span style={{ color: C.soft }}>t.n.v. </span>Stichting Senskaar Triloki Dhaam<br />
            <span style={{ color: C.soft }}>Omschrijving · Reference: </span>Digitaal platform
          </div>
          <div style={{ fontSize: 19, color: "#c9c9e2", marginTop: 14 }}>Elk bedrag helpt · Every amount helps</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Website: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // The film ends at the bottom of the page and starts at the top: a short fade through the page colour hides the cut.
  const fade = interpolate(frame, [0, 20, durationInFrames - 20, durationInFrames], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ left: 960, width: 960, background: C.marble, overflow: "hidden" }}>
      <OffthreadVideo src={staticFile("site-scroll.mp4")} muted style={{ width: 960, height: 1080, opacity: fade }} />
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: `linear-gradient(180deg, ${C.saffron}, ${C.haldi}, ${C.saffron})` }} />
      <div style={{ position: "absolute", right: 22, bottom: 22, padding: "10px 20px", borderRadius: 99, background: "rgba(27,31,110,.88)", color: "#fff", fontFamily: body, fontSize: 20, fontWeight: 600 }}>
        De nieuwe website · The new website
      </div>
    </AbsoluteFill>
  );
};

const DonateLoop: React.FC = () => (
  <AbsoluteFill style={{ background: C.marble }}>
    <Appeal />
    <Website />
  </AbsoluteFill>
);

export const DonateLoopComposition: React.FC = () => (
  <Composition id="DonateLoop" component={DonateLoop} durationInFrames={SCROLL_FRAMES} fps={FPS} width={1920} height={1080} />
);
