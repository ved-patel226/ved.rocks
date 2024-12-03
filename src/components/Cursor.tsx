import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "rgb(187, 186, 186)",
        zIndex: 9999,
      }}
      outerStyle={{
        border: "3px solid rgb(187, 186, 186)",
        zIndex: 9999,
      }}
      clickables={[".click", "a"]}
    />
  );
}
