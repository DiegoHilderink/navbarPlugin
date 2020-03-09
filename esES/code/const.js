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
    ''        : ""
}   

//Constantes de aviso
const warnings = {
    'type'    : "That kind of element is not defined.",
    'omit'    : "Omiting attribute",
}

//Constante de botón
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
        'id'     : '1',
        'Productos' : {'id': '1-1'},
        'Categorias' : {'id': '1-2'},
    },
    'Nosotros' : {
        'id'     : '2',
        'Departamentos' : {'id': '2-1'}, 
    },
    'Ayuda' : {
        'id'     : '3'
    }
}

const hiddens = {1: '#1', 2: '#2', 3: '#3'}

//Constantes de elementos
const pref = {
    'prefBtn' : prefBtn,
    'prefNav' : prefNav,
}

var count = 0;
var salida = []; // salida de errores
