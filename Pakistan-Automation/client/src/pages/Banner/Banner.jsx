import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Banner.css";
// import { Link } from "react-router-dom";
import BannerContent from "../../components/BannerContent/BannerContent";

const Banner = () => {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <section className="banner">
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={loadParticles}
          options={{
            fullScreen: {
              enable: true,
              //   zIndex: -1,
            },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                //   onClick: {
                //     enable: true,
                //     mode: "push",
                //   },
                //   onHover: {
                //     enable: true,
                //     mode: "repulse",
                //   },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                // value: "#ffffff",
                value: "#ff0000",
              },
              links: {
                // color: "#ffffff",
                color: "#ff0000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <BannerContent />
    </section>
  );
};

export default Banner;
