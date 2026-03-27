export const motion = {
  duration: {
    instant: { $value: "80ms", $type: "duration" },
    quick: { $value: "160ms", $type: "duration" },
    smooth: { $value: "240ms", $type: "duration" },
    deliberate: { $value: "360ms", $type: "duration" }
  },
  easing: {
    standard: {
      $value: "cubic-bezier(0.2, 0, 0, 1)",
      $type: "cubicBezier"
    },
    entrance: {
      $value: "cubic-bezier(0.16, 1, 0.3, 1)",
      $type: "cubicBezier"
    },
    exit: {
      $value: "cubic-bezier(0.7, 0, 1, 1)",
      $type: "cubicBezier"
    }
  }
};
