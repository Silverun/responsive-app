module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            "@images": "./assets/images",
          },
        },
      ],
    ],
  };
};
