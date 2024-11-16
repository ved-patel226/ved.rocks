import Typewriter from "./codeTyper";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-40vh)]">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-primary">I'm Ved</h1>
        <h2 className="text-4xl font-bold text-primary">And I code</h2>
      </div>

      <div className="mockup-code bg-transparent shadow-xl backdrop-blur-xl min-w-[20%] min-h-[50%]">
        <Typewriter />
      </div>
    </div>
  );
}

export default Hero;
