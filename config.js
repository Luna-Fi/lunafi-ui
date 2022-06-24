const path = require('path');

module.exports = {
    alias: {
        src: path.resolve(__dirname, 'src/'),
        '@/styles': path.resolve(__dirname, 'src/styles/'),
        '@/img': path.resolve(__dirname, 'src/img/'),
    },
};
