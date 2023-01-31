const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const shareAll = mf.shareAll;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/shell/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "mfe1": "http://localhost:5000/remoteEntry.js",
            "mfe2": "http://localhost:7000/remoteEntry.js",
        },

        shared: {
          ...shareAll({
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto',
            eager:true
          
        }),
        ...sharedMappings.getDescriptors()
      }
      
    }),
    sharedMappings.getPlugin()
  ],
};
