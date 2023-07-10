
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
        {
          id:3,
          nombre:'Sucursal Matamoros',
          direccion: 'Ciudad nazas #813 Col Arboledas',
          telefono: '8717997718',
          empleado: 'Roberto Lopez'
        }
      ]
    };
  }
};
</script>

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
        <tr v-for="(sucursal, ) in sucursales" :key="sucursal.id">
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

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #130921;
}

th {
  background-color: #ff5900;
}

.empty-row {
  text-align: center;
  font-style: italic;
  color: #d758cc;
}
</style>
