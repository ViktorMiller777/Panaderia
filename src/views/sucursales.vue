<template>
  <div>
    <h1>Sucursales</h1>
    <input type="text" v-model="filtro" placeholder="Filtrar sucursales">
    <v-table class="sucursales-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Empleado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sucursal in sucursalesFiltradas" :key="sucursal.id">
          <td>{{ sucursal.nombre }}</td>
          <td>{{ sucursal.direccion }}</td>
          <td>{{ sucursal.telefono }}</td>
          <td>{{ sucursal.empleado }}</td>
        </tr>
        <tr v-if="sucursalesFiltradas.length === 0">
          <td colspan="4">No se encontraron sucursales</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sucursales: [
        {
          id: 1,
          nombre: 'Juarez',
          direccion: 'Ciudad nazas #813 Col Arboledas',
          telefono: '8717997718',
          empleado: 'Juan Pérez'
        },
        {
          id: 2,
          nombre: 'Revolucion',
          direccion: 'Ciudad nazas #813 Col Arboledas',
          telefono: '8717997718',
          empleado: 'María Gómez'
        },
        // Agrega más sucursales aquí si lo deseas
      ],
      filtro: ''
    };
  },
  computed: {
    sucursalesFiltradas() {
      if (this.filtro === '') {
        return [];
      } else {
        const filtroLower = this.filtro.toLowerCase();
        return this.sucursales.filter(sucursal => {
          return sucursal.nombre.toLowerCase().includes(filtroLower) ||
                 sucursal.direccion.toLowerCase().includes(filtroLower) ||
                 sucursal.telefono.toLowerCase().includes(filtroLower) ||
                 sucursal.empleado.toLowerCase().includes(filtroLower);
        });
      }
    }
  }
};
</script>

<style>
.sucursales-table {
  width: 100%;
  border-collapse:collapse;

}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #000000;
}

th {
  background-color:#ff5900;
}
</style>
