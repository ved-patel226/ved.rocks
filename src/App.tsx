import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import CardContainer from "./components/CardContainer";
import Marquee from "./components/Marquee";
import InteractiveScroll from "./components/InteractiveScroll";
import ContactMe from "./components/contactMe";
import MobileView from "./components/mobileView";

function App() {
  let isMobile: boolean = window.innerWidth <= 768;

  const isTablet = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return Boolean(
      userAgent.includes("ipad") ||
        (userAgent.includes("android") && !userAgent.includes("mobile")) ||
        (navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 1 &&
          window.innerWidth <= 1024)
    );
  };

  console.log("Mobile:", isTablet());

  isMobile = isMobile || isTablet();

  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
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

          <hr className="w-3/4 mx-auto my-20 border-2 border-primary" />
          <h1 className="text-center font-bold text-5xl text-primary">
            Achievments
          </h1>

          <InteractiveScroll />
          <ContactMe />

          <Footer name="Ved Patel" />
        </>
      )}
    </>
  );
}

export default App;