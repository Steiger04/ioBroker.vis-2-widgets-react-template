const makeShared = pkgs => {
    const result = {};
    pkgs.forEach(
        packageName => {
            result[packageName] = {
                requiredVersion: '*',
                singleton: true,
            };
        },
    );
    return result;
};

module.exports = {
    name: 'DemoWidget',
    filename: 'customWidgets.js',
    exposes: {
        './DemoWidget': './src/DemoWidget',
    },
    shared:
        makeShared([
            'react',
            'react-dom',
            '@mui/material',
            '@mui/styles',
            '@mui/icons-material',
            'prop-types',
            '@iobroker/adapter-react-v5',
        ]),
};
