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
              <v-btn ><RouterLink to="login" style="text-decoration: none;"><li>Iniciar sesion</li></RouterLink></v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  username: '',
  apellidopa: '',
  apellidoma: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const register = async () => {
  if (formData.password !== formData.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  const data = {
    username: formData.username,
    apellidopa: formData.apellidopa,
    apellidoma: formData.apellidoma,
    email: formData.email,
    password: formData.password
  };

  try {
    const response = await axios.post('http://localhost/empleadosi', data);
    alert('Registro exitoso');
  } catch (error) {
    console.error('Error al agregar empleado:', error);
    alert('Hubo un error al registrar el empleado');
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
