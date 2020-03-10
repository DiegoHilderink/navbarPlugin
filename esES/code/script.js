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
        ,    'id' : '1-1-1'
        ,    'css': { backgroundColor : 'blue' }
        , 'class' : 'primary'
        ,  'text' : 'Boton de Prueba'
    }

    var navBig = {
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
                'id': '3'
            }
    }

    // btns
    // $().neptune('addElem', 'body', conf)
    // $('body').neptune('killElem', conf, 'asdkjflkj')
    // $('body').neptune('killElem', 'btn')

    // Por el momento no es posible ocultar elementos mediante el método addHiden
    // Solo los menús
    // Navbar
    // $('body').neptune('addNav', 'body', navBig)
    // $('body').neptune('addHiden', hiddens)
    // $('body').neptune('addElem', '.navDiv', conf)

    // Add Formualrio
    $('body').neptune('addForm', 'body', 'prefForm')
    
    // Kill navbar
    // $('body').neptune('killElem', navba, 'body')
    // $('body').neptune('killElem', elem)

    // backgrounds
    // $('body').neptune('addBack', 'body', 'aaa')
    // $('body').neptune('addBack', 'body', 'rgb(254,255,98)')
    // $('body').neptune('addBack', 'body', 'https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg')
    // $('body').neptune('addBack', 'body', 'img/flor.png')

    // volcado de warnings
    // Permite la búsqueda por tipo: 'omit', 'type' 
    // getWarns()
    // getWarns('omit')
    // getWarns('type')
});
