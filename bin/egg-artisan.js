'use strict';

const getMainCommand = require('../main');
getMainCommand().then(MainCommand => {
    new MainCommand().start();
})
