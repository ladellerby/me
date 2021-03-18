export const StarryNight: any = {
  background: {
    color: "#000",
  },
  detectRetina: false,
  fpsLimit: 30,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      density: {
        enable: true,
        area: 1080,
      },
      limit: 0,
      value: 400,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.15,
        speed: 1.25,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 0.25,
      },
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.75,
      },
      value: 1.15,
    },
  },
};
