
$(window).on('load', () => {
    var ulconf = {'mark': '<ul>', 'class' : 'list', 'text' : 'h'}
   
    var liconf = {'mark': '<li>'
              , 'class' : 'opt'
              ,  'text' : ' '}

    $('body').neptune('addItem', ulconf, 'body');
    // $('body').neptune('addItem', liconf, 'ul');
    // $('body').neptune('addItem', liconf, 'ul');
    // $('body').neptune('addItem', liconf, 'ul');
    // $('body').neptune('addItem', liconf, 'ul');
    // $('body').neptune('addItem', liconf, 'ul');
});
