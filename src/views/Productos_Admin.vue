<template>
  <v-container>
    <v-card>
      <v-card-title>Registro de Productos</v-card-title>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field ref="productNameInput" v-model="producto" label="Nombre del producto" required></v-text-field>
        <v-text-field ref="categoryInput" v-model="categoria" label="Categoria del producto" type="number" required></v-text-field>
        <v-text-field ref="stockInput" v-model="existencias" label="Existencias o Unidades" type="number" required></v-text-field>
        <v-btn type="submit" color="primary">Registrar Productos</v-btn>
        <v-alert :color="color" :type="type" :title="title" :text="text" v-if="showAlert"></v-alert>
      </v-form>
    </v-card>
  </v-container>
</template> 

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const id=ref('');
const producto = ref('');
const categoria = ref('0');
const existencias = ref(0);

const title = ref('');
const text = ref('');
const color = ref('');
const type = ref('');

const showAlert = ref(false);

const handleSubmit = async () => {
  if (!producto.value || !categoria.value || !existencias.value) {
    // If any of the fields are empty, show an error alert
    title.value = 'Error';
    text.value = 'Por favor, complete todos los campos.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    return; // Prevent form submission
  }

  const productData = {
    id: id.value,
    producto: producto.value,
    categoria: categoria.value,
    existencias: existencias.value
  };
  
  try {
    const response = await axios.post('http://localhost/productosi', productData);
    title.value = 'Registro Exitoso';
    text.value = 'Producto agregado con éxito.';
    color.value = 'success';
    type.value = 'success';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    id.value='null';
    producto.value = '';
    categoria.value = '0';
    existencias.value = 0;
  } catch (error) {
    title.value = 'Error';
    text.value = 'Hubo un error al agregar el producto.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    console.error('Error al agregar producto:', error);
  }
};
</script>
