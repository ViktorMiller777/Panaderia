<template>
  <div>
    <v-btn class="btn">PRODUCTOS</v-btn>
<v-btn class="br">PROVEEDORES</v-btn>
<v-btn class="brt">ALMACENES</v-btn>
<v-btn class="btn">CONTACTO</v-btn>
      <h1>Productos</h1>
      <div class="botones">
      <div class="select">
      <select name="format" id="format">
          <option selected style="font-size: 18px;">Productos</option>
          <option value="Proveedores">Proveedores</option>
          <option value="panimart">Panimart</option>
          <option value="coberturasmym">Coberturas MyM</option>
          <option value="materiasprimas">Materia Prima</option>
          <option value="interventas">Interventas</option>
          <option value="americandonuts">American Donuts</option>
          <option value="pacasdepapel">Pacas de papel</option>
          <option value="productosdelimpieza">Productos de limpieza</option>
      </select>
      
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
        <th>Producto</th>
        <th>Categoria</th>
        <th>Existencias</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="productos in productos" :key="productos.id">
        <td>{{ productos.producto }}</td>
        <td>{{ productos.categoria }}</td>
        <td>{{ productos.existencias }}</td>
      </tr>
      <tr v-if="productos.length === 0">
            <td colspan="3" class="empty-row">No hay productos registrados</td>
      </tr>
    </tbody>
  </table>
    </div>
    <div class="table-container">
      <h1>Entradas</h1>
      <table>
        <thead>
        <th>Detalles de compra</th>
        <th>Cantidad</th>
        <th>Fecha</th>
        </thead>
        <tbody>
          <tr v-for="entrada in entrada_matriz" :key="entrada.id">
            <td>{{ entrada.detalle_orden_compra }}</td>
            <td>{{ entrada.cantidad }}</td>
            <td>{{ entrada.fecha }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
// Import RouterLink from Vue Router

const productos = ref([]);
const entrada_matriz = ref([]);

const fetchData = async () => {
  try {
    const responseProductos = await axios.get('http://localhost/productosv');
    productos.value = responseProductos.data.data;

    const responseEntrada = await axios.get('http://localhost/sumatriz');
    entrada_matriz.value = responseEntrada.data.data;
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
