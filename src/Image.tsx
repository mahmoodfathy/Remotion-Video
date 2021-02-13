import styled from "styled-components";
export const Image: React.FC<{ src: string; style: Object }> = ({
  src,
  style,
}) => {
  const Frame = styled.div`
    border-radius: 50%;
    width: 400px;
    height: 400px;
    border: 2px solid rgba(0, 0, 0, 0.14);
    overflow: hidden;
  `;
  return (
    <Frame style={{ color: "", ...style }}>
      <img src={src} alt="description" />
    </Frame>
  );
};
