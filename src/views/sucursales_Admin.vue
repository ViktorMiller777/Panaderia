<template>
    <v-container>
   <v-card>
     <v-card-title>Registro de sucursales</v-card-title>
     <v-form @submit.prevent="handleSubmit">
       <v-text-field v-model="nombre" label="Nombre de la sucursal" required></v-text-field>
       <v-text-field v-model="direccion" label="Direccion" required></v-text-field>
       <v-text-field v-model="telefono" label="Telefono" type="number" required></v-text-field>
       <v-btn type="submit" color="primary">Registrar sucursal</v-btn>
       <v-alert :color="color" :type="type" :title="title" :text="text" v-if="showAlert"></v-alert>
     </v-form>
   </v-card>
 </v-container>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

const id=ref('');
const nombre=ref('');
const direccion=ref('');
const telefono=ref('');

const title = ref('');
const text = ref('');
const color = ref('');
const type = ref('');

const showAlert = ref(false);

const handleSubmit = async () => {
  if (!nombre.value || !direccion.value || !telefono.value) {
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

  const sucuData = {
    id: id.value,
    nombre: nombre.value,
    direccion: direccion.value,
    telefono: telefono.value
  };
  
  try {
    const response = await axios.post('http://localhost/sucursalesi', sucuData);
    title.value = 'Registro Exitoso';
    text.value = 'Sucursal agregada con éxito.';
    color.value = 'success';
    type.value = 'success';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    id.value='null';
    nombre.value = '';
    direccion.value = '';
    telefono.value = 0;
  } catch (error) {
    title.value = 'Error';
    text.value = 'Hubo un error al agregar sucursal.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    console.error('Error al agregar sucursal:', error);
  }
};
</script>
<style scoped>
</style>