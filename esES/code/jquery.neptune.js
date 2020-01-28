// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 2020

//Constantes de error
const errors = {
    'method'  : "That method is not supported",
    'config'  : "The configuration is wrong or missing",
    'exists'  : "That element doesn't exists",
    'father'  : "Father element doesn't exists in the document",
    'paramNum': "The number of arguments are wrong",
    'error'   : "That error is not supported",
}

//Constantes de aviso
const warnings = {
    'type'    : "That kind of element is not defined.",
    'omit'    : "Omiting attribute",
}


//TODO this
const types = {
    // 'id' :
}

//Array de configuración simple para un menu
const prefNav = {
    'op1': 'Menu',
    'op2': 'Contactos',
    'op3': 'Productos',
    'op4': 'Ayuda'
}

//Constantes de metodos.
//Puedes llamarlos mediante el métoddo $('body').neptune('metodo', 'padre', configuracion)
const methods = {
    addElem: (father, config) => {

        if (checkArguments(father, config, 3)){
            errorExit('paramNum')
            return
        }

        if (checkFather(father)) {
            errorExit('father')
            return
        }

        $.isEmptyObject(config) ? errorExit('config') : config

        config['mark'] ? lecturaConf(config).appendTo($(father)) : errorExit('config');
    },
    killElem: (elem) => {
        if (checkArguments(elem, 2)){
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
            //errorExit('type')     
            
            if ('id' in elem) {
                remvElem('#' + elem['id'])
            } else if ('class' in elem) {
                remvElem('.' + elem['class'])
            } else {
                errorExit('config')
            }
        }
    },
    addNav: (father, config) => {
        if (checkArguments(father, config, 3)){
            errorExit('paramNum')
            return
        }

        if (checkFather(father)) {
            errorExit('father')
            return
        }

        $.isEmptyObject(config) ? config = prefNav : config

        if (father === 'body'){
            $('<div>').append(
                $('<ul>').addClass('navbar')
            ).addClass('navDiv').appendTo($(father));

            genList(config, '.navbar', '');
        } else {

            var id = 'subMenu'+father.substr(1)+'Son'
            $('<ul>').addClass('subMenu').attr({id: id})
            .appendTo($(father))

            id = '#'+id
            genList(config, id, 'subMenu')
       }
    },
    addHiden: (father) =>{
        if (checkArguments(father, 2)){
            errorExit('paramNum')
            return
        }

        if (checkFather(father)) {
            errorExit('father')
            return
        }

        var aux = $(father)
        var son = father+' #subMenu'+aux.attr('id')+'Son' 
        
        aux.attr('show', false)
        $(son).hide() && aux.attr('show', true)
        aux.mouseenter(() => {
            aux.attr('show') === 'false' ?  
                $(son).hide(1500) && aux.attr('show', true)
            :   $(son).show(1500) && aux.attr('show', false)
        })

        //Esto son modificaciones que serán implementadas en un posible futuro
        // $(son).hide()
        // aux.mouseenter(() => {
        //     $(son).hide(1500)
        // })
        // aux.mouseleave(() =>{
        //     $(son).show(1500) && aux.attr('show', false)
        // })
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

function genList(config, father, id){
    $.each(config, (k, v) => {
        $('<li>')
            .attr('id', id+k).append($('<a>').text(v))
            .addClass('liNav')
            .appendTo($(father));

        });
}

//Solve This 
function checkThis(father){
    if(typeof(father) === 'string'){ 
        if(father[0] === '#'){
            remvElem('#' + father)
        } else if (elem[0] === '.'){
            remvElem('.' + elem)
        } else if (!checkFather(elem)){
            remvElem(elem)
        }else{
            errorExit('config')
        }
    } else {
        errorExit('type')     
        
        //Implementar
        // if ('id' in elem) {
        //     remvElem('#' + elem['id'])
        // } else if ('class' in elem) {
        //     remvElem('.' + elem['class'])
        // } else {
        //     errorExit('config')
        // }
    }
}

function isIn(k, config) {
    return k in config;
}

function remvElem(mark) {
    $(mark).length ? $(mark).remove() : errorExit('exists')
}

function checkArguments(...names){
    if(typeof(names[2]) === 'number'){
        return !(names[2] == arguments.length)
    }else{
        wranExit('type')
    }
}

function checkFather(father) {
    return !$(father).length 
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