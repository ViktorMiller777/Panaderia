<template>
    <div>
        <h1>Productos</h1>
        <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Categoria</th>
          <th>Existencias</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(almacen, ) in Productos" :key="almacen.id">
          <td>{{ almacen.Producto }}</td>
          <td>{{ almacen.Categoria }}</td>
          <td>{{ almacen.Existencias }}</td>
        </tr>
        <tr v-if="!Productos.length">
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
      Productos: [
        {
          id: 1,
          Producto: 'MANTEQUILLA PURA DE VACA ASTURIAS 10KG',
          Categoria: '2',
          Existencias: '40'
        },
        {
          id: 2,
          Producto: 'ACEITE TOLTECA',
          Categoria: '1',
          Existencias: '45'
        },
        {
          id: 3,
          Producto: 'COCOA KGA',
          Categoria: '3',
          Existencias: '50'
        },
        // Agrega más sucursales aquí si lo deseas
      ]
    };
  }
};
</script>

<style scoped>
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
</style>
