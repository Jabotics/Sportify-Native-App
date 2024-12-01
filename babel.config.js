module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel", // For NativeWind utility classes
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            "@constants": "./src/services/@constants.ts",
          },
        },
      ],
    ],
  };
};
