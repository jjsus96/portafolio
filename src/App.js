import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      <h1>Hello Coders!</h1>

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fpsLimit: 60,
        backgroundMode: {
          enable: true
        },
        background: {
          color: "#111"
        },
        particles: {
          // canvas borders bounce factors
          bounce: {
            horizontal: {
              value: 1.01
            },
            vertical: {
              value: 1.01
            }
          },
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
            // collisions bounce factors
            bounce: {
              horizontal: {
                value: 1.5
              },
              vertical: {
                value: 1.5
              }
            }
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 3
          }
        },
        detectRetina: true
      }}
    />
    </div>
  );
}