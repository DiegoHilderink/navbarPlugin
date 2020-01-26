// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 202


//To make a good use of these plugin, you have do design an associative array
//which contains the attributes of the elemnts.

//In case you want to set the navbar up, you'll desing an array wich conteins
//his options an the plugin will make the rest.

//You can add elements with 'addElem' or just kill it with 'killElem'
//Here i'll set a few examples of how you need to desing your code.
$(window).on('load', () => {
    
    //Examples
    var conf = {
        'mark': 'button'
    ,    'id' : 'btn'
    , 'class' : 'primary'
    ,  'text' : 'Boton de Prueba'}

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
    // $('body').neptune('addElem', 'body', conf)
    // $('body').neptune('killElem', conf)
    // $('body').neptune('killElem', 'btn')

    //Right now in this version you cannot set events of hidding on sepparate elements

    //Navbar
    $('body').neptune('addNav', 'body')
    $('body').neptune('addNav', '#op1', subMenu1)
    $('body').neptune('addNav', '#op2', subMenu2)
    $('body').neptune('addHiden', '#op1')
    $('body').neptune('addHiden', '#op2')
    
    //Kill navbar
    //$('body').neptune('killElem', navba, 'body')
    //$('body').neptune('killElem', elem)
});


