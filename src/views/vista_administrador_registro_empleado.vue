<!--falta hacer la vista del administrado para registrar un empleado(realizarlo con un formulario y llenando los datos necesarios desde la base de datos).


Administrador formulario para agregar categorias (realizarlo con un form donde pida los datos de categorias)-->
<template>
    <form action="" class="from">
        <div class="reg_empleados_admin">
            <h1>registrar nuevo empleado</h1>
               <div> <span>Nombre del empleado:</span> 
                <input type="text" placeholder="nombre"></div>

               <div> 
                <span>Dirrecion:</span> 
                <input type="text" placeholder="direccion">
                </div>

               <div>
                <span>Correo:</span>
                <input type="text" placeholder="correo">
                </div>

                <div>
                    <span>Telefono:</span>
                    <input type="text" placeholder="telefono">
                </div>
               <div>
                <span>Tipo de usuario:</span>
                 <input type="text" placeholder="tipo de empleado">
                </div>
                <div id="boton">
                  <input type="submit" value="Enviar">
                </div>
        </div>
    </form>

</template>
<style>

.from {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .reg_empleados_admin {
      margin-bottom: 20px;
    }

    h1 {
      color: #007bff;
      text-align: center;
    }

    div span {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
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

    #boton {
      text-align: center;
    }

    input[type="submit"] {
      width: 150px;
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