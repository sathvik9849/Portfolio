/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverBuildTarget: "vercel",
  appDirectory: "app",
  serverBuildPath: "build/server/index.js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};
