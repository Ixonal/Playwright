var typescript = require("typescript");

module.exports = {
  locations: {
    dist: "dist",
    dts: "dist",
    webserverRoot: "./",
    exampleDist: "example/dist"
  },
  
  globs: {
    src: ["src/**/*.ts", "src/**/*.js"],
    dist: "dist/**/*",
    example: ["example/src/**/*.ts"]
  },
  
  settings: {
    typescript: {
      module: "system",
     	declaration: true,
      removeComments: true,
      emitDecoratorMetadata: true,
      experimentalAsyncFunctions: true,
      experimentalDecorators: true,
      isolatedModules: true,
      allowJs: true,
      typescript: typescript
    },
    uglify: {
      mangle: true,
      compress: {
        drop_debugger: false
      }
    },
    webserver: {
      livereload: true,
      open: "/example"
    }
  }
  
}
