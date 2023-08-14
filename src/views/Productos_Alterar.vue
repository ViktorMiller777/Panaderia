<template>
  <v-container>
    <h2>Actualizar Producto</h2>
    <v-form @submit.prevent="actualizarProducto">
          <v-text-field v-model="id" label="Ingresa el ID" required type="number"></v-text-field>
          <v-text-field v-model="producto" label="Nombre del Producto" required></v-text-field>
          <v-text-field v-model="categoria" type="number" label="Categoría" required></v-text-field>
          <v-text-field v-model="existencias" label="Existencias" type="number" required></v-text-field>
      <v-btn type="submit" color="primary">Actualizar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const id = ref('');
const producto = ref('');
const categoria = ref('');
const existencias = ref(0);

const actualizarProducto = async () => {
  const ProductData = {
    producto: producto.value,
    categoria: categoria.value,
    existencias: existencias.value
  };
  try {

    const response = await axios.put(`http://localhost/productosa/${id.value}`, ProductData);
    console.log(ProductData);
    
    id.value = '';
    producto.value = '';
    categoria.value = '';
    existencias.value = 0;

  } catch (error) {
    console.error();
  }
};
</script>

 <style scoped>
.botones{
  display: flex;
  justify-content: space-between;
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
</style>