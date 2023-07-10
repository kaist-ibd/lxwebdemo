exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet/,
            use: loaders.null(),
          },
          {
            test: /leaflet/,
            use: loaders.null(),
          },
          {
            test: /react-leaflet-marker/,
            use: loaders.null(),
          }
        ]
      }
    })
  }
};
