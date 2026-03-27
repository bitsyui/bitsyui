export const type = {
  family: {
    sans: {
      $value:
        '"Instrument Sans", "Avenir Next", "Segoe UI", sans-serif',
      $type: "fontFamily"
    },
    serif: {
      $value: '"Iowan Old Style", "Palatino Linotype", serif',
      $type: "fontFamily"
    },
    mono: {
      $value: '"JetBrains Mono", "SFMono-Regular", monospace',
      $type: "fontFamily"
    }
  },
  size: {
    caption: { $value: "0.75rem", $type: "fontSize" },
    body: { $value: "1rem", $type: "fontSize" },
    lead: { $value: "1.125rem", $type: "fontSize" },
    title: { $value: "1.5rem", $type: "fontSize" },
    display: { $value: "2.25rem", $type: "fontSize" }
  },
  weight: {
    regular: { $value: "400", $type: "fontWeight" },
    medium: { $value: "500", $type: "fontWeight" },
    strong: { $value: "600", $type: "fontWeight" },
    bold: { $value: "700", $type: "fontWeight" }
  },
  lineHeight: {
    compact: { $value: "1.2", $type: "number" },
    body: { $value: "1.5", $type: "number" },
    relaxed: { $value: "1.7", $type: "number" }
  },
  tracking: {
    tight: { $value: "-0.02em", $type: "letterSpacing" },
    normal: { $value: "0em", $type: "letterSpacing" },
    wide: { $value: "0.04em", $type: "letterSpacing" }
  }
};
