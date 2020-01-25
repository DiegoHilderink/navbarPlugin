
$(window).on('load', () => {
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
    $('body').neptune('addNav', 'body');
    //$('body').neptune('killElem', navba, 'body')


   // $('body').neptune('killElem', elem)
});
