import { MyComposition } from "./Composition";
import { DarshanComposition } from "./Darshan";
import { DonateLoopComposition } from "./DonateLoop";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <DarshanComposition />
      <DonateLoopComposition />
    </>
  );
};
