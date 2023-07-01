<template>
  <div>
    <h1>Sucursales</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Empleado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sucursal, index) in sucursales" :key="sucursal.id">
          <td>{{ sucursal.nombre }}</td>
          <td>{{ sucursal.direccion }}</td>
          <td>{{ sucursal.telefono }}</td>
          <td>{{ sucursal.empleado }}</td>
        </tr>
        <tr v-if="!sucursales.length">
          <td colspan="4" class="empty-row">No hay sucursales registradas</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sucursales: [
        {
          id: 1,
          nombre: 'Sucursal Juarez',
          direccion: 'Ciudad nazas #813 Col Arboledas',
          telefono: '8717997718',
          empleado: 'Juan Pérez'
        },
        {
          id: 2,
          nombre: 'Sucursal Revolucion',
          direccion: 'Ciudad nazas #813 Col Arboledas',
          telefono: '8717997718',
          empleado: 'María Gómez'
        },
        // Agrega más sucursales aquí si lo deseas
      ]
    };
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ba8cf7;
}

th {
  background-color: #f2f2f2;
}

.empty-row {
  text-align: center;
  font-style: italic;
  color: #cf74c8;
}
</style>
