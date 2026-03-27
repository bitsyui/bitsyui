export const motion = {
  duration: {
    feedback: { $value: "{motion.duration.quick}", $type: "duration" },
    transition: { $value: "{motion.duration.smooth}", $type: "duration" },
    emphasize: { $value: "{motion.duration.deliberate}", $type: "duration" }
  },
  easing: {
    standard: { $value: "{motion.easing.standard}", $type: "cubicBezier" },
    entrance: { $value: "{motion.easing.entrance}", $type: "cubicBezier" },
    exit: { $value: "{motion.easing.exit}", $type: "cubicBezier" }
  }
};
