// const optimizedImages = require("next-optimized-images");

// module.exports = optimizedImages;

// Plugins
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// Dynamic path for assets prefix
const USER = process.env.USER;
const isLocal = process.env.NVM_DIR == "/home/" + USER + "/.nvm"; // using NVM on Linux

const nextConfig = {
  assetPrefix: isLocal ? "/" : "/alexchong.github.io/",
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
