<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title class="text-center">Registro</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="nombre" label="Ingresa tu nombre" required></v-text-field>
              <v-text-field v-model="apellidopa" label="Apellido Paterno" required></v-text-field>
              <v-text-field v-model="apellidoma" label="Apellido Materno" required></v-text-field>
              <v-text-field v-model="correo" label="Correo Electrónico" type="email" required></v-text-field>
              <v-text-field v-model="telefono" label="Ingrese su numero de telefono" type="number" required></v-text-field>
              <v-text-field v-model="contrasena" label="Contraseña" type="password" required></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirmar Contraseña" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Registrar</v-btn>
              <v-btn ><RouterLink to="login" style="text-decoration: none;"><li>Iniciar sesion</li></RouterLink></v-btn>
              <v-alert :color="color" :type="type" :title="title" :text="text" v-if="showAlert"></v-alert>
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
import bcrypt from 'bcryptjs';
import { RouterLink } from 'vue-router';

const id = ref('');
const nombre = ref('');
const apellidopa = ref('');
const apellidoma = ref('');
const correo = ref('');
const telefono = ref('');
const tipo_user = ref('1');
const contrasena = ref('');
const confirmPassword = ref('');

const title = ref('');
const text = ref('');
const color = ref('');
const type = ref('');

const showAlert = ref(false);


const register = async () => {
  if (!nombre.value || !apellidopa.value || !apellidoma.value || !telefono.value || !correo.value || !contrasena.value || !confirmPassword.value) {
    title.value = 'Error';
    text.value = 'Por favor, complete todos los campos.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    return;
  }
  if (contrasena.value !== confirmPassword.value) {
    title.value = 'Error';
    text.value = 'Las contraseñas no coinciden.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    return;
  }

  const hashedPassword = await bcrypt.hash(contrasena.value, 10);
  try{
    const formData = {
      id: id.value,
      nombre: nombre.value,
      apellidopa: apellidopa.value,
      apellidoma: apellidoma.value,
      correo: correo.value,
      telefono: telefono.value,
      tipo_user: tipo_user.value,
      contrasena: hashedPassword,
      confirmPassword: hashedPassword,
    };
    const response = await axios.post('http://localhost/empleadosin', formData);

    title.value = 'Registro Exitoso';
    text.value = 'Producto agregado con éxito.';
    color.value = 'success';
    type.value = 'success';
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);

    id.value='null';
    nombre.value = '';
    apellidopa.value = '';
    apellidoma.value = '';
    correo.value = '';
    telefono.value = '';
    tipo_user.value = '1';
    contrasena.value = '';
    confirmPassword.value = '';
  } catch (error) {
    title.value = 'Error';
    text.value = 'Hubo un error al registrar al usuario.';
    color.value = 'error';
    type.value = 'error';
    showAlert.value = true;

    console.error('Error al registrar usuario:', error);

    setTimeout(() => {
      showAlert.value = false;
    }, 5000);
  }
};
</script>


<style>
.text-center {
  text-align: center;
}
</style>
