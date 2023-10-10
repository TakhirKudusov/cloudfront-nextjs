"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      width="100vw"
      height="100vh"
      options={{
        preset: "links",
        fullScreen: {
          enable: false,
        },
      }}
      style={{
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParticlesBg;
