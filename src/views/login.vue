<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-center">Inicio de Sesión</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="correo" label="Usuario" required></v-text-field>
                <v-text-field v-model="contrasena" label="Contraseña" type="password" required></v-text-field>
                <v-btn type="submit" color="primary">Iniciar Sesión</v-btn>
                <v-btn v-if="!isLoggedIn" to="/login" color="primary">Cerrar Sesión</v-btn>
                <v-btn v-else @click="logout" color="primary">Cerrar Sesión</v-btn>
                <v-btn to="/register" color="primary">Registrar usuario</v-btn>
              </v-form>
              <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const correo = ref('');
const contrasena = ref('');
const errorMessage = ref('');
let isLoggedIn = ref(false);

const login = async () => {
  try {
    const response = await axios.post('http://localhost/login', {
      correo: correo.value,
      contrasena: contrasena.value
    });

    localStorage.setItem('jwtToken', response.data.data_token);
    isLoggedIn = true;
    
    // Redirigir a la vista deseada después del inicio de sesión exitoso
    router.push('/almacen');
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    // Mostrar un mensaje de error al usuario
    errorMessage.value = 'Error al iniciar sesión. Verifica tus credenciales.';
  }
};

async function logout() {
  localStorage.removeItem('jwtToken'); // Elimina el token del localStorage
  isLoggedIn = false; // Cambia el estado de inicio de sesión
  // Aquí puedes agregar cualquier otra lógica de limpieza necesaria
  router.push('/login'); // Redirigir a la página de inicio de sesión después del cierre de sesión
}

const checkLocalStorage = () => {
  const token = localStorage.getItem('jwtToken');

  if (token) {
    console.log('Token almacenado:', token);
  } else {
    console.log('No se encontró ningún token en el localStorage');
  }
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
