const user = process.env.USER;
const isLocalDev = process.env.NVM_DIR === "/home/" + user + "/.nvm";

module.exports = {
  basePath: isLocalDev ? "" : "/alexchong.github.io",
  assetPrefix: isLocalDev ? "." : "/alexchong.github.io/",
};
