<template>
  <div>
    <h1>Sucursales</h1>
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
  <div>
      <h1>Entradas a Sucursal</h1>
      <v-table class="sucursales-table">
    <thead>
      <th>Detalle de orden</th>
      <th>Cantidad</th>
      <th>Fecha</th>
    </thead>
    <tr v-if="sucursales.length === 0">
          <td colspan="4">No se encontraron sucursales</td>
        </tr>
  </v-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const sucursales = ref([])

const fetchData = async() =>{
  try{
    const response = await axios.get('http://localhost/sucursales');
    sucursales.value = response.data.data;
  }catch(error){
    console.log(error)
  }
}
onMounted(fetchData)
</script>

<style>
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
