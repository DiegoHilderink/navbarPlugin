# **Neptune Plugin**

### en/EN

##### This API has been written in order to simplify the use of this plugin in you own project. It's written in JQuery.

###### **WARNING**

<p>
   Any possible change on the original code, is on you. Errors have already been implemented, so you can code without any worries.

   I need you to understand beforehand, that the use of this plugin is to dynamically generate a new navbar.
   
   The code also allows you the use of any other funcionality, like adding or deleting any specific element in the html document. 
</p>

#### **Starting:**

The callable follows the this rule:

    $('body').neptune.('method', 'father', conf);

* ###### 'method': Method that you want to use.
* ###### 'father': The father of the element. It has to be an id, a class or a mark.
* ###### 'conf': The conf of the element.

#### **Elements:**

<p>
    As it has been said before, the 'conf' parameter contains the configuration of the elements.
    
    It's an associative array with it's own specific keys.These keys you'll need to keep in mind while you design new elements. These elements are treated like objects with attributes.
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
   
* 'addElem' : Creates an element below the 'father' with the 'conf' that you design. 
   
* 'killElem' : Deletes an element. It might be a 'conf', an id, a class or even a mark.

* 'addNav' : Creates a navbar with the provided options. If the 'conf' is null, it charges a prefferred menu.

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

<p>
 Si al método en cuestión se le pasa un elemento de tipo string, si coincide con una de las configuraciones básicas ya implementadas, la cargará. En caso contrario mostrará un error por falta de configuración.
</p>

###### Constantes de elementos:

```javascript 
   const pref = {
    'prefBtn' : prefBtn,  //boton predefinido
    'prefNav' : prefNav,  //barra de navegación predefinida
}
```

###### Ejemplos:


```javascript
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

* getWarns() : Obtiene por salida todos los warnings que se hayan podido generar.

</p>

### Ejemplo de Código:

```javascript
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
