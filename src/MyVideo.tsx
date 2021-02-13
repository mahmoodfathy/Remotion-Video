import {
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Connect } from "./Connect";
import Github from "./Github.png";
import { Image } from "./Image";
import pic from "./pci.jpg";
import { WebTechnologies } from "./Technologies";
import { Title } from "./Title";
import { Transition } from "./Transition";
export const MyVideo: React.FC = () => {
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const opacity2 = interpolate(frame, [100, 150], [1, 0], {
    extrapolateRight: "clamp",
  });
  const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame,
  });

  const translation = interpolate(
    spring({
      frame: frame - 25,
      fps: videoConfig.fps,
      config: {
        damping: 100,
        mass: 0.5,
      },
    }),
    [0, 1],
    [0, -150]
  );
  let changedY = interpolate(frame, [197.8, 200], [0, -60]);
  let changedY2 = interpolate(frame, [197.8, 200], [0, 46]);

  let changedWidth = interpolate(frame, [150, 200], [1920, 500]);
  if (changedY2 > 234.18181818181915) {
    changedY2 = 234.18181818181915;
  }
  if (changedY < -305.45454545454675) {
    changedY = -305.45454545454675;
  }

  if (changedWidth < 500) {
    changedWidth = 500;
  }
  const style = {
    transform: ` scale(${scale}) translateY(${translation}px)`,
    opacity: opacity,
    justifyContent: "center",
    alignItems: "center",
  };
  const style2 = {
    marginTop: "215px",
    transform: ` scale(${scale}) `,
    justifyContent: "center",
    alignItems: "center",
  };
  const style3 = {
    marginLeft: "100px",
    color: "white",
    zIndex: 1,
  };
  const style4 = {
    backgroundColor: "#00B0EB",
    width: `${changedWidth}px`,
  };

  const style6 = {
    color: "black",
    marginTop: "300px",
    marginLeft: "-410px",
    transform: `translateY(${changedY}px`,
  };
  const style7 = {
    color: "black",
    transform: `translateY(${changedY2}px`,
    marginLeft: "-180px",
  };
  const imageStyle = {
    transform: ` scale(${scale}) `,
    opacity: opacity,
  };
  const hiStyle = {
    transform: ` scale(${scale}) translateY(${translation}px)`,
    opacity: opacity,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-400px",
  };
  const GithubStyle = {
    width: "400px",
    height: "400px",
    border: "0",
    position: "absolute",
    marginTop: "800px",
    marginLeft: "750px",
  };

  return (
    <div style={{ flex: 1, backgroundColor: "white" }}>
      <Sequence from={0} durationInFrames={100}>
        <Title style={hiStyle} title="Hi 👋" />
      </Sequence>
      <Sequence from={0} durationInFrames={100}>
        <Title style={style} title="It's Mahmood" />
      </Sequence>
      <Sequence from={40} durationInFrames={100}>
        <Title style={style2} title="Fathy" />
      </Sequence>
      <Sequence from={50} durationInFrames={100}>
        <Transition type="in">
          <Image style={{}} src={pic} />
        </Transition>
      </Sequence>

      <Sequence from={100} durationInFrames={Infinity}>
        <Transition type="in">
          <Title style={style4} title="" />
        </Transition>
      </Sequence>
      <Sequence from={197.8} durationInFrames={50}>
        <Title style={style3} title="I am"></Title>

        <Title
          style={{ marginTop: "240px", marginLeft: "-500px" }}
          title="a Devel"
        ></Title>
        <Title style={style7} title="oper"></Title>
        <Title style={{ marginLeft: "-1000px" }} title="Soft"></Title>
        <Title style={style6} title="ware"></Title>
      </Sequence>
      <Sequence from={210} durationInFrames={70}>
        <Title
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 60,
            marginTop: "400px",
          }}
          title="You Can check out my work at my  https://github.com/mahmoodfathy"
        />
        <Image style={GithubStyle} src={Github} />
      </Sequence>
      <Sequence from={230} durationInFrames={60}>
        <Title
          title="My Most Used Technologies Include"
          style={{
            position: "absolute",
            fontSize: 90,
            marginLeft: "370px",
            fontWeight: "bold",
            fontFamily: `  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
          }}
        />
        <WebTechnologies />
      </Sequence>
      <Sequence from={290} durationInFrames={Infinity}>
        <Connect />
      </Sequence>
    </div>
  );
};
