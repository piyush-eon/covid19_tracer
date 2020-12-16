require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
  ],
});

require("./server");
