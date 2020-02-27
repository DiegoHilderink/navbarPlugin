// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 2020

//Mehods.
//Puedes llamarlos mediante el métoddo $('body').neptune('metodo', 'padre', configuracion)
const methods = {
    addElem: (father, config) => {

        if (!checkArguments(father, config, 3)){
            errorExit('paramNum')
            return
        }

        if (typeof(config) === 'string'){
            var pref = getPref(config)
            pref ? 
            $('body').neptune('addElem', father, pref):
            errorExit('const')
        } else {
            config['mark'] ? lecturaConf(config).appendTo($(father)) : errorExit('config');
        }
    },
    addNav: (father, config) => {
        if (!checkArguments(father, config, 3)){
            errorExit('paramNum')
            return
        }

        if (checkFather(father)) {
            errorExit('father')
            return
        }

        $.isEmptyObject(config) ? config = getPref('prefNav') : config

        if ( !config ){ errorExit('const') }

        if (father === 'body'){
            $('<div>').append(
                $('<ul>').addClass('navbar')
            ).addClass('navDiv').appendTo($(father));

            genList(config, '.navbar');
        } else {
            var id = father.substr(1)+'Son'
            var aux = {'mark':'ul', 'class': 'subMenu', 'id': id}            
            $('body').neptune('addElem', father, aux)
            id = '#'+id
            genList(config, id)
       }
    },
    killElem: (elem) => {
        if (!checkArguments(elem, 2)){
            errorExit('paramNum')
            return
        }

        if(typeof(elem) === 'string'){ 
            if(elem[0] === '#'){
                remvElem('#' + elem)
            } else if (elem[0] === '.'){
                remvElem('.' + elem)
            } else if (!checkFather(elem)){
                remvElem(elem)
            }else{
                errorExit('config')
            }
        } else {
            if ('id' in elem) {
                remvElem('#' + elem['id'])
            } else if ('class' in elem) {
                remvElem('.' + elem['class'])
            } else {
                errorExit('config')
            }
        }
    },
    addHiden: (father) =>{
        if (!checkArguments(father, 2)){
            errorExit('paramNum')
            return
        }

        if (typeof(father)==='string'){
            checkFather(father) ? errorExit('father') : hidden(father)
        } else if (typeof(father) === 'object'){
            $.each(father ,(k, v) =>{
                $('body').neptune('addHiden', v)
            })
        }
    },
    pruebaPlug: (...config) => {
        //Pruebas de codigo
        prueba($(this))
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

    return this;
};

//A partir de aquí solo hay funciones auxiliares de los  que no has de prestar atención.
//Si modificas algo de aqui está bajo tu responsabilidad.
function lecturaConf(config) {
    aux = $('<' + config['mark'] + '>')

    isIn('attr', config) ? aux.attr(config['attr']) : wranExit('omit')
    isIn('css', config) ? aux.css(config['css']) : wranExit('omit')
    isIn('id', config) ? aux.attr('id', config['id']) : wranExit('omit')
    isIn('class', config) ? aux.addClass(config['class']) : wranExit('omit')
    isIn('text', config) ? aux.text(config['text']) : wranExit('omit')

    return aux
}

function genList(config, father){
    $.each(config, (k, v) => {
        if (k === 'id'){
            //Nothing
        }else{
          var opc = {'mark': 'li', 'id': v['id'], 'class': 'liNav'}
          var line = {'mark': 'a', 'text': k}
          $('body').neptune('addElem', father, opc)
          $('body').neptune('addElem', '#'+v['id'], line)
          $('body').neptune('addNav', '#'+v['id'], v)
        }
    });
}

function hidden(father){
    var aux = $(father)
    var son = father+' '+father+'Son' 
    
    aux.attr('show', false)
    $(son).hide() && aux.attr('show', true)
    aux.mouseenter(() => {
        aux.attr('show') === 'false' ?  
            $(son).hide(1500) && aux.attr('show', true)
        :   $(son).show(1500) && aux.attr('show', false)
    })
}

function getPref(k){
    if (pref[k] !== undefined && pref[k] !== null) {
        return pref[k];
    } else { 
        return false;
    } 
}

//Check this
function checkOpened(aux, son){
    aux = 'li[show]:not('+aux+')'
    prueba(aux) 
    $(aux).attr('show', false);
    $(son).hide(1500);
}

//Solve This(?) 
//Comprobar el padre que recibe, si es un id, si es una clase o etiqueta.
// Si es id y existe, negar.
function checkThis(elem){
    if(checkFather(elem.attr('id'))){
        return elem.attr('id')
    } else if (checkFather(elem.attr('class'))){
        return elem.attr('class')
    } else if (checkFather(elem.prev().prop('tagName'))){
        //Esto tiene que ser una etiqueta
        return elem.prev().prop('tagName')
    }else{
        return false
    }
}

function checkFather(father) {
    return !$(father).length 
}

function isIn(k, config) {
    return k in config;
}

function remvElem(mark) {
    $(mark).length ? $(mark).remove() : errorExit('exists')
}

function checkArguments(...names){
    if(typeof(names[1]) === 'number' 
    || typeof(names[2]) === 'number' )
    {
        return parseInt(names[1]) == arguments.length 
            || parseInt(names[2]) == arguments.length
    }else{
        wranExit('type')
    }
}

function errorExit(error) {
    var aux = errors[error];
    aux ? console.error(aux) : errorExit('error');
}

function wranExit(warn){
    var aux = warnings[warn];
    aux ? console.warn(aux) : errorExit('error');
}

function prueba(output){
    console.log(output)
}