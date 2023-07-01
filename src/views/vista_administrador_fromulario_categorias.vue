<!--falta hacer la vista del administrado para registrar un empleado(realizarlo con un formulario y llenando los datos necesarios desde la base de datos).


Administrador formulario para agregar categorias (realizarlo con un form donde pida los datos de categorias)-->
<template>
<form action="" class="fromulario_catego">
<div class="categoria">
     <h2>ingresa por favor la categoria</h2>

<input type="text" placeholder="categoria">
</div>
<input type="submit" value="Enviar">
</form>

</template>
<style>
    .fromulario_catego {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .categoria {
      margin-bottom: 20px;
    }

    h2 {
      color: #007bff;
    }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #007bff;
    }

    input[type="submit"] {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #0056b3;
    }
</style>