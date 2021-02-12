const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const isLocalDev = process.env.NVM_DIR === "/home/" + user + "/.nvm";

const nextConfig = {
  basePath: "",
  assetPrefix: isLocalDev ? "." : "/alexchong.github.io/",
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
