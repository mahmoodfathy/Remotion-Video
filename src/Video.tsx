import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="myVideo"
        component={MyVideo}
        durationInFrames={350}
        fps={25}
        width={1920}
        height={1080}
      />
    </>
  );
};
