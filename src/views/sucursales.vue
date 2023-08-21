<template>
  <div>
    <div class="boton">
      <h1>Sucursales</h1>
      <div>
        <RouterLink to="/aggsucu"><v-btn 
      color="success">Agregar Sucursal</v-btn></RouterLink>
      </div>
    </div>
    <input type="text" v-model="filtro" placeholder="Filtrar sucursales">
    <v-table class="sucursales-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sucursal in sucursales" :key="sucursal.id">
          <td>{{ sucursal.nombre }}</td>
          <td>{{ sucursal.direccion }}</td>
          <td>{{ sucursal.telefono }}</td>
        </tr>
        <tr v-if="sucursales.length === 0">
          <td colspan="4">No se encontraron sucursales</td>
        </tr>
      </tbody>
      </v-table>
      </div>
  <div class="table-container">
      <h1>Entradas</h1>
      <table>
        <thead>
        <th>Detalles de salidas</th>
        <th>Cantidad</th>
        <th>Fecha</th>
        </thead>
        <tbody>
          <tr v-for="entrada in entrada_sucursal" :key="entrada.id">
            <td>{{ entrada.detalle_orden_salida }}</td>
            <td>{{ entrada.cantidad }}</td>
            <td>{{ entrada.fecha }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const sucursales = ref([]);
const entrada_sucursal = ref([]);

const fetchData = async() =>{
  try{
    const response = await axios.get('http://localhost/sucursales');
    sucursales.value = response.data.data;

    const responseEntrada = await axios.get('http://localhost/susucursal');
    entrada_sucursal.value = responseEntrada.data.data;
  }catch(error){
    console.log(error)
  }
}
onMounted(fetchData)
</script>

<style>
.boton{
  display: flex;
  justify-content: space-between;
  margin-left:30px;
  margin-top:30px;
}
.sucursales-table {
  width: 100%;
  border-collapse:collapse;

}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #000000;
}

th {
  background-color:#ff5900;
}
</style>
