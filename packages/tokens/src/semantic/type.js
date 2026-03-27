export const type = {
  family: {
    body: { $value: "{type.family.sans}", $type: "fontFamily" },
    heading: { $value: "{type.family.sans}", $type: "fontFamily" },
    code: { $value: "{type.family.mono}", $type: "fontFamily" }
  },
  size: {
    body: { $value: "{type.size.body}", $type: "fontSize" },
    bodyLarge: { $value: "{type.size.lead}", $type: "fontSize" },
    heading: { $value: "{type.size.title}", $type: "fontSize" },
    display: { $value: "{type.size.display}", $type: "fontSize" }
  },
  weight: {
    body: { $value: "{type.weight.regular}", $type: "fontWeight" },
    emphasis: { $value: "{type.weight.strong}", $type: "fontWeight" },
    heading: { $value: "{type.weight.bold}", $type: "fontWeight" }
  },
  lineHeight: {
    body: { $value: "{type.lineHeight.body}", $type: "number" },
    heading: { $value: "{type.lineHeight.compact}", $type: "number" }
  }
};
