<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title class="text-center">Registro</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="formData.username" label="Ingresa tu nombre"></v-text-field>
              <v-text-field v-model="formData.apellidopa" label="Apellido Paterno"></v-text-field>
              <v-text-field v-model="formData.apellidoma" label="Apellido Materno"></v-text-field>
              <v-text-field v-model="formData.email" label="Correo Electrónico" type="email"></v-text-field>
              <v-text-field v-model="formData.password" label="Contraseña" type="password"></v-text-field>
              <v-text-field v-model="formData.confirmPassword" label="Confirmar Contraseña" type="password"></v-text-field>
              <v-btn type="submit" color="primary">Registrar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const emit = defineEmits();
const { id,username,apellidopa,apellidoma, email, password, confirmPassword } = defineProps(['username', 'email', 'password', 'confirmPassword']);
const formData = { id: id.value, username: nombre.value, apellidopa: apellidopa.value,apellidoma: '', email: '', password: '', confirmPassword: '' };


  try {
    const response = await axios.post('http://localhost/empleadosi', formData);
  }catch(error){
    console.error('Error al agregar producto:', error);
  }

const register = async () => {
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Emitir evento de registro exitoso
  emit('registered');

  alert('Registro exitoso');
};

</script>

<style>
.text-center {
  text-align: center;
}
</style>
