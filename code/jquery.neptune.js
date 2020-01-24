//Error constants
const errors = {
        'method': "That method is not supported"
    ,   'config': "The configuration is wrong"
    // ,     'type': "That kind of element is not defined."
    ,    'error': "That error is not supported"
}

//Methods const
//ATENTION: THE CONFIGURATION OF THE METHOD HAS TO BE AN ASOCIATIVE ARRAY
//WHICH HAS AS FIRST ELEMENT THE TYPE OF THE ELEMENT
//EXAMPLE:
// var conf = {
//      'mark': '<button>'
//     , 'css': {width: '100%'}
//     , class: 'important'
// }
const methods = {
    addItem: ( config, father ) => {
        console.log(config)
        config['mark'] ? lecturaConf(config).appendTo($(father)) : errorExit('config');
    }
}

$.fn.neptune = function (method) {
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
    } else {
        errorExit('method')
    }

    return $this
};

function lecturaConf(config){
    return $(config['mark'])
        //.css(getValue(config['css']))
       .attr(getValue(config['class']))
       .text(getValue(config['text']))
}

function getValue(v){
    return v === undefined || v === null 
            ? '' : v;
}

function errorExit(error) {
    var aux = errors[error];
    aux ? console.error(aux) : errorExit('error');
}