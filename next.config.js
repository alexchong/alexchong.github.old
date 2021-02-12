const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  basePath: "",
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    // Handle Markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = withPlugins([[optimizedImages]], nextConfig);
