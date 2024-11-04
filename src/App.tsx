import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import CardContainer from "./components/CardContainer";
import Marquee from "./components/Marquee";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 w-full h-full">
          <div className="p-5 text-center bg-black text-white shadow-lg w-full h-full flex flex-col justify-center">
            <h2 className="text-xl font-bold">
              This site is best viewed on a desktop.
            </h2>
            <p>Please switch to a desktop for a better experience.</p>
          </div>
        </div>
      )}
      <div className="mb-12">
        <NavBar>
          <button className="btn btn-ghost btn-circle">
            <img
              className="w-8 rounded-3xl cursor-pointer"
              src="/imgs/emoji.png"
              alt=""
            />
          </button>
        </NavBar>
      </div>
      <Hero />
      <hr className="w-3/4 mx-auto my-20 border-2 border-primary" />
      <h1 className="text-center font-bold text-5xl text-primary">
        Highlighted Projects:
      </h1>

      <CardContainer direction={false} file={1} />
      <CardContainer direction={true} file={2} />

      <hr className="w-3/4 mx-auto my-20 border-2 border-primary" />

      <Marquee />

      <Footer project="ved.rocks" name="Ved Patel" />
    </>
  );
}

export default App;
