require('ignore-styles')
require('@babel/register')({
    ignore:[/(node_module)/],
    presets:['@babel/preset-react','@babel/preset-env']
})

require('./server')