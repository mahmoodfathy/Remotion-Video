export const Title: React.FC<{ title: string; style: Object }> = ({
  title,
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,

        fontSize: 200,
        ...style,
      }}
    >
      {title}
    </div>
  );
};
