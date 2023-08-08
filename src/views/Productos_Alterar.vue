<template>
  <v-container>
    <h2>Actualizar Producto</h2>
    <v-form @submit.prevent="actualizarProducto">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="producto.producto" label="Nombre del Producto"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select v-model="producto.categoria" :items="categorias" item-text="categoria" item-value="id" label="Categoría"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="producto.existencias" label="Existencias" type="number"></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary">Actualizar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Importa useRoute

import axios from 'axios';

const producto = ref({
  id: '',
  producto: '',
  categoria: '', // Asegúrate de que la categoría predeterminada esté en blanco
  existencias: ''
});

const categorias = ref([]);

const cargarDatosProducto = async () => {
  try {
    const route = useRoute('http://localhost/productos');
    const productoId = route.params.id;
    const response = await axios.get(`http://localhost/productos ${productoId}`);
    producto.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const cargarCategorias = async () => {
  try {
    const response = await axios.get('http://localhost/categorias');
    categorias.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const actualizarProducto = async () => {
  try {
    const response = await axios.post(`'http://localhost/productos/actualizar' .${producto.value.id}`, producto.value);
    // Manejo de éxito y redirección si es necesario
  } catch (error) {
    console.error(error);
    // Manejo de errores, muestra un mensaje de error si la actualización falla
  }
};

onMounted(() => {
  cargarCategorias();
  cargarDatosProducto();
});
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