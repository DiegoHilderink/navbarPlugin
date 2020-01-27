# **Neptune Plugin**

### en/EN

##### This API has been written in order to simplify the use of this plugin in you own project. It's written in JQuery.

###### **WARNING**

<p>
   Any change that you make in the original code, it'll be your responsability. The errors have already been implemented, so you can code without any worries.

   Before anything, I need you to understand that the objetive of this plugin is to generate dynamically a new navbar. The code also allows you to use other funcionalities like adding or deleting any specific elements in the html document. 
</p>

#### **Starting:**

The callable is made by the specific line code:

    $('body').neptune.('method', 'father', conf);
* ###### 'method': Method that you want to use.
* ###### 'father': The father of the element. It has to be an id, a class or a mark.
* ###### 'conf': The conf of the element.

#### **Elements:**

<p>
    As I said before the 'conf' parameter, contains the configuration of the elements. It's an assossciative array that has keys, rules that you'll need to have in mind at the time you when you design a new element. Elements are treated like objects with attributes.
</p>

###### Examples:


```
//configuration of a button 
var conf = {
        'mark': 'button'
    ,    'id' : 'btn'
    , 'class' : 'primary'
    ,  'text' : 'Example Name'
}

//Navbar elements
var nav  = {
        'op1'  : 'Menu'
    ,   'op2'  : 'Help'
    ,   'op3'  : 'Contacts'
}
```

#### **Method list:**

<p>
   
* 'addElem' : Create an element bellow the father with the configuration that you designed. 
   
* 'killElem' : Delete an element that you want. It might be a 'conf', an id, a class or even a mark.

* 'addNav' : Creates a navbar with the options provide. If the 'conf' is null, it'll charge a prefferred menu.

* 'addHiden' : Allows a navbar to be hidden or shown.

</p>

### Code examples:

```
$(window).on('load', () => {
    var conf = {
        'mark': 'button'
    ,    'id' : 'btn'
    , 'class' : 'primary'
    ,  'text' : 'Example Button'
    }
    
    $('body').neptune('addElem', 'body', conf)
}
```

### es/ES

##### Esta documentación ha sido elaborada con el fin de facilitar el empleo de este plugin en tu projecto. Dicho plugin está escrito en JQuery. 

###### **ATENCIÓN:** 

<p>
Cualquier cambio que se realice en el código fuente, será resposabilidad suya. Las comprobaciones de errores ya han sido implementadas para facilitarte la implementación del codigo.

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
 Como hemos visto, 'conf' es la configuración de un elemento, está estructurado por un array asociativo que contiene una serie de claves que deberás tener en cuenta en función de lo que quieras añadir a dichos elementos.
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
