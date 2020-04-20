module.exports = function(api) {
    if (api) api.cache(true);
    const presets = ["module:metro-react-native-babel-preset"];
    const plugins = [
        [
            "module-resolver",
            {
                cwd: "babelrc",
                root: ["./src/ReactNative"],
                alias: {
                    "@reduxShared": "./build/dist/_store/src",
                    assets: "./src/assets",
                },
            },
        ],
    ];
    return {
        presets,
        plugins,
        sourceMaps: "inline",
    };
};
