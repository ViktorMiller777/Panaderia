<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title class="text-center">Registro</v-card-title>
          <v-card-text>
            <v-form >
              <v-text-field v-model="formData.nombre" label="Ingresa tu nombre"></v-text-field>
              <v-text-field v-model="formData.apellidopa" label="Apellido Paterno"></v-text-field>
              <v-text-field v-model="formData.apellidoma" label="Apellido Materno"></v-text-field>
              <v-text-field v-model="formData.correo" label="Correo Electrónico" type="email"></v-text-field>
              <v-text-field v-model="formData.telefono" label="Ingrese su numero de telefono" type="number" ></v-text-field>
              <v-text-field v-model="formData.contrasena" label="Contraseña" type="password"></v-text-field>
              <v-text-field v-model="formData.confirmPassword" label="Confirmar Contraseña" type="password"></v-text-field>
              <v-btn @click.prevent="register" color="primary">Registrar</v-btn>
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
import { RouterLink } from 'vue-router';

const formData = ref({
  id:'',
  nombre: '',
  apellidopa: '',
  apellidoma: '',
  correo: '',
  telefono:'',
  tipo_user:"1",
  contrasena: '',
  confirmPassword: ''
});

const errorMessage = ref('');

const validateForm = () => {
  errorMessage.value = 'Ingresa todos los datos'; // Restablece el mensaje de error

  if (!formData.nombre || !formData.apellidopa || !formData.apellidoma || !formData.telefono || !formData.correo || !formData.contrasena || !formData.confirmPassword) {
    errorMessage.value = 'Por favor, completa todos los campos.';
    return false;
  }

  return true;
};

const register = async () => {
  if (formData.contrasena !== formData.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    if (!validateForm()) {
      return;
    }


    const response = await axios.post('http://localhost/empleadosi', formData);
    console.log(formData);
    alert('Registro exitoso');
  } catch (error) {
    console.error('Error al agregar empleado:', error);
    alert('Hubo un error al registrar el empleado');
    console.log(error.response);
  }
};
</script>


<style>
.text-center {
  text-align: center;
}
</style>
