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
            pref ? $('body').neptune('addElem', father, pref): errorExit('const')
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

        if (typeof(config) === 'string'){
            config = getPref(config)
            config ? $('body').neptune('addNav', father, config): errorExit('const')
        } else  {
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

        // father ? $('body').neptune('addNav', father, config): errorExit('const')
        
        if (typeof(father)==='string'){
            if (getPref(father)){
                father = getPref(father)
                $('body').neptune('addHiden', father)
            } else{
                checkFather(father) ? errorExit('father') : hidden(father)
            }
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

    isIn('attr', config) ? aux.attr(config['attr']) : warnExit('omit')
    isIn('css', config) ? aux.css(config['css']) : warnExit('omit')
    isIn('id', config) ? aux.attr('id', config['id']) : warnExit('omit')
    isIn('class', config) ? aux.addClass(config['class']) : warnExit('omit')
    isIn('text', config) ? aux.text(config['text']) : warnExit('omit')

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
    
    aux.attr('show', true)
    $(son).hide() && aux.attr('show', false)
    aux.hover(() => {
        aux.attr('show') === 'true' ?  
            $(son).hide(1500) && aux.attr('show', false)
        :   $(son).show(1500) && aux.attr('show', true)
    })
}

function getPref(k){
    return pref[k] !== undefined && pref[k] !== null ?
         pref[k] : false;
    
}
