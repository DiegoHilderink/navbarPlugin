// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 202


//Para hacer un buen uso del plugin, deberás crear un array asociativo que contenga
//los atributos de los elementos. Tambíen puedes añadir atributos css, pero eso es
//cosa del diseñador.

//La creación de  la barra de navegación es una configuración distinta.
//Deberás diseñar un array asociativo como los del ejemplo, que contenga las opciones
//de dicho menu. En caso de no pasar ninguna configuración al método, se insertará
//un menu predefinido.

//Puedes añadir o eliminar elementos aparte con addElem o killElem
$(window).on('load', () => {
    //PON TU CÓDIGO AQUI....

    //Ejemplos
    var conf = {
            'mark': 'button'
        ,    'id' : 'btn'
        ,    'css': { backgroundColor : 'blue' }
        , 'class' : 'primary'
        ,  'text' : 'Boton de Prueba'
    }

    var elem = {'id'   : 'btn'}

    var navBig = {
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

    var hiddens = {1: '#op1', 2: '#op2', 3: '#op3'}

    //btns
    // $().neptune('addElem', 'body', conf)
    // $('body').neptune('killElem', conf, 'asdkjflkj')
    // $('body').neptune('killElem', 'btn')

    // Por el momento no es posible ocultar elementos mediante el método addHiden
    // Solo los menús
    // Navbar
    // $('body').neptune('addNav', 'body', navBig)
    // $('body').neptune('addHiden', hiddens)

    
    // Kill navbar
    // $('body').neptune('killElem', navba, 'body')
    // $('body').neptune('killElem', elem)
});


