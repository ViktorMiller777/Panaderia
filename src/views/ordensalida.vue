<template>
    <div>
        <h1>Ordenes realizadas</h1>
        <div class="botones">
        <div class="select">
    </div>
    <v-col class="justy-center" cols="2" sm="6" md="4">
       <v-row justify="center">
      <RouterLink to="/pedido"><v-btn 
        block rounded="xl" 
        size="x-large" 
        color="success">Pedir a Proveedor</v-btn></RouterLink>
       </v-row> 
      </v-col>
      <v-col class="justy-center" cols="2" sm="6" md="4">
       <v-row justify="center">
      <RouterLink to="/productos"><v-btn 
        block rounded="xl" 
        size="x-large" 
        color="success">Ingresar Productos</v-btn></RouterLink>
       </v-row> 
      </v-col>
    </div><br>
  <div class="table-container">
        <table>
      <thead>
        <tr>
          <th>sucursal_origen</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
    <tr v-for="orden in ordenes" :key="orden.id">
      <td>{{ orden.sucursal_origen }}</td>
      <td>{{ orden.fecha }}</td>
    </tr>
  </tbody>
    </table>
  </div>
  </div>
  </template>
    
    <script setup>
   import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const ordenes = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/orden_salida');
      ordenes.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(fetchData);
    </script>
    <style scoped>
    .botones{
      display: flex;
      justify-content: space-between;
    }
    .select {
      margin-bottom: 10px;
    }
    table {
    width: 100%;
    border-collapse: collapse;
    }
    
    th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #401902;
    }
    
    th {
    background-color: #ff5900;
    }
    
    .empty-row {
    text-align: center;
    font-style: italic;
    color: #cf74c8;
    }
    .btn{
    background-color: #ff5900;
    }
    .br{
    background-color: #ff5900;
    }
    .brt{
    background-color: #ff5900;
    }
    
    .table-container {
      overflow-x: auto;
      margin-top: 20px;
    }
    
    /* Estilos específicos para diferentes tamaños de pantalla */
    @media (min-width: 600px) {
      .botones {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    
    @media (max-width: 600px) {
      table {
        font-size: 14px;
      }
    }
    </style>
    
    