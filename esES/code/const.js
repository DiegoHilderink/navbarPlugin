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
    'const'   : "Constante no definida",
    'const'   : "Constante no definida",
    ''        : ""
}   

//Constantes de aviso
const warnings = {
    'type'    : "That kind of element is not defined.",
    'omit'    : "Omiting attribute",
}

var count = 0;

var salida = {

};

const prefBtn = {
    'mark': 'button'
    ,    'id' : 'btn'
    ,    'css': {   backgroundColor : '#555'
                  , borderRadius    : '5%'
                  , border          : '1px solid #333'
                  , color           : 'white'
                  //, fontStyle       : 'italic'
                  , margin          : '1%'
                  , padding         : '1%'
                }
    , 'class' : 'primary'
    ,  'text' : 'Boton de Prueba'
}

// Array de configuración para un menu simple. 
// Se le aplica el hidden despues.
const prefNav = {
    'Menu' : {
        'id'     : 'op1',
        'Productos' : {'id': 'subOp1'},
        'Categorias' : {'id': 'subOp2'},
    },
    'Nosotros' : {
        'id'     : 'op2',
        'Departamentos' : {'id': 'subOp3'}, 
    },
    'Ayuda' : {
        'id': 'op3'
    }
}

const hiddens = {1: '#op1', 2: '#op2', 3: '#op3'}

//Constante de elementos
const pref = {
    'prefBtn' : prefBtn,
    'prefNav' : prefNav,
}