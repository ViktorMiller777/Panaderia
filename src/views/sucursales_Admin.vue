<script setup>
import {ref} from 'vue';
import axios from 'axios';
const sucursal=ref();
const direccion=ref();
const telefono=ref();
const showAlert = ref(false);

const handleSubmit = async () => {
  if (!sucursal.value || !direccion.value || !telefono.value) {
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

  const sucuData = {
    id: id.value,
    sucursal: sucursal.value,
    direccion: direccion.value,
    telefono: telefono.value
  };
  
  try {
    const response = await axios.post('URL', sucuData);

    title.value = 'Registro Exitoso';
    text.value = 'Sucursal agregada con éxito.';
    color.value = 'success';
    type.value = 'success';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    id.value='null';
    sucursal.value = '';
    direccion.value = '0';
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
<template>
     <v-container>
    <v-card>
      <v-card-title>Registro de sucursales</v-card-title>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field v-model="sucursal" label="Nombre de la sucursal" required></v-text-field>
        <v-text-field v-model="direccion" label="Direccion" type="number" required></v-text-field>
        <v-text-field v-model="telefono" label="Telefono" type="number" required></v-text-field>
        <v-btn type="submit" color="primary">Registrar sucursal</v-btn>
        <v-alert :color="color" :type="type" :title="title" :text="text" v-if="showAlert"></v-alert>
      </v-form>
    </v-card>
  </v-container>
</template>
<style scoped>
</style>