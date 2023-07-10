<template>
  
    <div>
      <v-btn class="btn">PRODUCTOS</v-btn>
  <v-btn class="br">PROVEEDORES</v-btn>
  <v-btn class="brt">ALMACENES</v-btn>
  <v-btn class="btn">CONTACTO</v-btn>
        <h1>Productos</h1>
        <div class="select">
        <select name="format" id="format">
            <option selected style="font-size: 18px;">Productos</option>
            <option value="Proveedores">Proveedores</option>
            <option value="panimart">Panimart</option>
            <option value="coberturasmym">Coberturas MyM</option>
            <option value="materiasprimas">Materia Prima</option>
            <option value="interventas">Interventas</option>
            <option value="americandonuts">American Donuts</option>
            <option value="pacasdepapel">Pacas de papel</option>
            <option value="productosdelimpieza">Productos de limpieza</option>
        </select>
    </div><br>
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
