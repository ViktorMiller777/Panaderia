<template>
    <v-container>
      <v-card>
        <v-card-title>Registro de Productos</v-card-title>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field ref="productNameInput" v-model="producto" label="Nombre del producto" required></v-text-field>
          <v-text-field ref="categoryInput" v-model="categoria" label="Categoria del producto" type="number" required></v-text-field>
          <v-text-field ref="stockInput" v-model="existencias" label="Existencias o Unidades" type="number" required></v-text-field>
          <v-btn type="submit" color="primary">Registrar Productos</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const producto = ref('');
const categoria = ref('');
const existencias = ref(0);

const handleSubmit = async () => {
  const productData = {
    producto: producto.value,
    categoria: categoria.value,
    existencias: existencias.value
  };
  
  try {
    
    const response = await axios.post('http://localhost/producto', productData);

    
    console.log('Producto Agregado:', response.data);

   
    producto.value = '';
    categoria.value = '';
    existencias.value = 0;
  } catch (error) {
   
    console.error('Error al agregar producto:', error);
  }
};
</script>