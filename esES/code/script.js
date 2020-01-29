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
    , 'class' : 'primary'
    ,  'text' : 'Boton de Prueba'
    }

    var elem = {'id'   : 'btn'}
    var nav  = {'op1'  : 'Menu'
              , 'op2'  : 'Contactos'
              , 'op3'  : 'Contactos'}
    
    var navba = {'class' : 'navbar' }
    var subMenu1 = {
        'op1': 'Tus gustos',
        'op2': 'Calendario',
        'op3': 'Tu academia',
    }

    var subMenu2 = {
        'op1': 'Compra',
        'op2': 'Venta',
    }

    //btns
    $('#body').neptune('pruebaPlug', conf)
    // $('body').neptune('killElem', conf, 'asdkjflkj')
    // $('body').neptune('killElem', 'btn')

    //Por el momento no es posible ocultar elementos mediante el método addHiden
    //Solo los menús

    //Navbar
    // $().neptune('addNav', 'body')
    // $().neptune('addNav', '#op1', subMenu1)
    // $().neptune('addNav', '#op2', subMenu2)
    // $().neptune('addHiden', '#op1')
    // $().neptune('addHiden', '#op2')

    // $().neptune('killElem', 'ul')
    // $().neptune('adsñlfkasñlkasfkñl', 'ul')
    
    //Kill navbar
    //$('body').neptune('killElem', navba, 'body')
    //$('body').neptune('killElem', elem)
});


