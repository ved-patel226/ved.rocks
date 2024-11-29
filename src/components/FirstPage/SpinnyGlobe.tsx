import { useEffect, useRef } from "react";
import Globe from "globe.gl";

const SpinnyGlobe = () => {
  const globeContainerRef = useRef(null);
  const globeInstanceRef = useRef<ReturnType<typeof Globe> | null>(null);

  useEffect(() => {
    if (globeContainerRef.current) {
      const globe = Globe()(globeContainerRef.current);
      globeInstanceRef.current = globe;
      globe.backgroundColor("hsla(0, 0%, 0%, 0.25)");
      globe
        .globeImageUrl(
          "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        )
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

      const myLocation = {
        lat: 40.60821,
        lng: -74.27755,
        size: 0.25,
        color: "red",
      };

      globe.pointsData([myLocation]).pointAltitude("size").pointColor("color");

      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2;
      globe.controls().enableZoom = false;
      globe.showAtmosphere(false);

      const handleResize = () => {
        if (globeContainerRef.current) {
          const { clientWidth, clientHeight } = globeContainerRef.current;
          globe.width(clientWidth);
          globe.height(clientHeight);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      ref={globeContainerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    />
  );
};

export default SpinnyGlobe;
