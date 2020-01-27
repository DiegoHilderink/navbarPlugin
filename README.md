# **Neptune Plugin**

##### Esta documentación ha sido elaborada con el fin de facilitar el empleo de este plugin en tu proyecto. Dicho plugin está escrito en JQuery. 

###### **ATENCIÓN:** 

<p>
Cualquier cambio que se realice en el código fuente, será resposabilidad suya. Las comprobaciones de errores ya han sido implementadas por mi parte para facilitarle al programador la implementación del codigo.

Antes de nada hay que dar a entender que la idea de este plugin trata de permitir la creación de barras de menús dinámicos. Además implementa otras funcionalidades como la de añadir o eliminar elementos específicos del documento html.
</p>

#### **Inicio:**

La llamada a sus métodos se realiza mediante la línea de código:

    $('body').neptune.('method', 'father', conf);
* ###### 'method': Es la llamada al tipo de método requerido.
* ###### 'father': Es el padre del elemento. Ya sea un #id, una .class o un <etiqueta>.
* ###### 'conf': Es la configuración del elemento que queremos trabajar.

#### **Elementos**:

<p>
 Como hemos visto, 'conf' es la configuració de un elemento, está estructurado por un array asociativo que contiene una serie de claves que deberás tener en cuenta en función de lo que quieras añadir a dichos elementos.
</p>

###### Ejemplos:


```
//Array de configuración de un botón 
var conf = {
        'mark': 'button'
    ,    'id' : 'btn'
    , 'class' : 'primary'
    ,  'text' : 'Botón de Prueba'
}

//Array de elementos de un menu estandar
var nav  = {
        'op1'  : 'Menu'
    ,   'op2'  : 'Contactos'
    ,   'op3'  : 'Contactos'
}
```

#### **Lista de métodos:**

<p>
* 'addElem' : Permite según la configuración que le pases un elemento bajo un padre. 
* 'killElem' : Este método permite pasarle una configuración completa para eliminar un  objeto lo más concreto posible, o si quieres una cadena, ya sea un id, una etiqueta o una clase.
* 'addNav' : Genera un menu de navegación según la configuración que se le dé. En caso de que no se le pase configuración alguna, se cargará una configuración predefinida.
* 'addHiden' : Confiere a la BARRA DE NAVEGACIÓN el evento de ocultación mediante hover.
</p>

### Ejemplo de Código:

```
$(window).on('load', () => {
    var conf = {
        'mark': 'button'
    ,    'id' : 'btn'
    , 'class' : 'primary'
    ,  'text' : 'Boton de Prueba'
    }
    
    $('body').neptune('addElem', 'body', conf)
}
```

<address style='font-size: 12px'>
    @Author: Diego Hilderink Domínguez <br>
    @License: GNU License 2020 <br>
    @Mail: diego.hilderink@iesdonana.org
</address>