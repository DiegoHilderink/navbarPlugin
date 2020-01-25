// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 2020

//Error constants
const errors = {
    'method': "That method is not supported",
    'config': "The configuration is wrong or missing",
    'error' : "That error is not supported",
    'exists': "That element doesn't exists",
    'omit'  : "Omiting attribute",
    'father': "Father element doesn't exists in the document",
    'type'  : "That kind of element is not defined."
}

//Prefer configuration for navbars
const prefNav = {
    'op1': 'Menu',
    'op2': 'Contactos',
    'op3': 'Productos',
    'op4': 'Ayuda'
}


//Methods const
//ATENTION: THE CONFIGURATION OF THE METHOD HAS TO BE AN ASOCIATIVE ARRAY
//WHICH HAS AS FIRST ELEMENT THE TYPE OF THE ELEMENT


//TODO => Documentation
const methods = {
    addElem: (father, config) => {
        if (checkFather()) {
            errorExit('father')
            return
        }

        $.isEmptyObject(config) ? errorExit('config') : config

        config['mark'] ? lecturaConf(config).appendTo($(father)) : errorExit('config');
    },
    killElem: (elem) => {

        if ('id' in elem) {
            remvElem('#' + elem['id'])
        } else if ('class' in elem) {
            remvElem('.' + elem['class'])
        } else {
            errorExit('config')
        }
    },
    addNav: (father, config) => {
        if (checkFather()) {
            errorExit('father')
            return
        }

        $.isEmptyObject(config) ? config = prefNav : config

        $('<div>').append(
            $('<ul>').addClass('navbar')
        ).appendTo($(father))

        $.each(config, (k, v) => {
            $('<li>')
                .attr('id', (k)).append($('<a>').text(v))
                .addClass('liNav')
                .appendTo($('.navbar'));
        });
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


//This are auxiliar methods that you shouldn't care about.
//I suggest you strongly to not change anything from here.
function lecturaConf(config) {
    aux = $('<' + config['mark'] + '>')

    isIn('attr', config) ? aux.attr(config['attr']) : errorExit('omit')
    isIn('id', config) ? aux.attr('id', config['id']) : errorExit('omit')
    isIn('class', config) ? aux.addClass(config['class']) : errorExit('omit')
    isIn('text', config) ? aux.text(config['text']) : errorExit('omit')

    return aux
}

function isIn(k, config) {
    return k in config;
}

function remvElem(mark) {
    $(mark).length ? $(mark).remove() : errorExit('exists')
}

function checkFather(father) {
    return $(father).length
}

//Change this
function errorExit(error) {
    var aux = errors[error];
    aux ? console.warn(aux) : errorExit('error');
}