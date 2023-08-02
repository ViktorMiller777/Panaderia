<template>
  <div>
    <v-btn class="btn">PRODUCTOS</v-btn>
<v-btn class="br">PROVEEDORES</v-btn>
<v-btn class="brt">ALMACENES</v-btn>
<v-btn class="btn">CONTACTO</v-btn>
      <h1>Productos</h1>
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
  <br>
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
      <tr v-if="!productos.length">
        <td colspan="3" class="empty-row">No hay productos registrados</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const productos = ref([])

const fetchData = async() =>{
try{
  const response = await axios.get('http://localhost/productos');
  productos.value = response.data.data;
}catch(error){
  console.log(error)
}
}
onMounted(fetchData)
</script>

<style scoped>
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
</style>
