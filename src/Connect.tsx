import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { Title } from "./Title";

const Container = styled.div`
  flex: 1;
  background-color: white;
`;

export const Connect: React.FC = () => {
  const { fps, width } = useVideoConfig();
  const frame = useCurrentFrame();

  const pos = spring({
    fps: fps,
    frame: frame - 10,
    config: {
      stiffness: 100,
      mass: 0.5,
      damping: 50,
    },
  });
  const pos2 = spring({
    fps: fps,
    frame: frame,
    config: {
      stiffness: 100,
      mass: 0.5,
      damping: 50,
    },
  });

  return (
    <Container>
      <AbsoluteFill
        style={{
          opacity: pos2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title style={{ fontSize: 100 }} title="Feel Free to Contact me at" />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: pos,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          style={{
            fontSize: 100,
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          title="📧 mahmoodfathy26@gmail.com"
        />
      </AbsoluteFill>
    </Container>
  );
};
