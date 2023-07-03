<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <nav>
  <div>
      <ul>
        <center><li><RouterLink class="rutas" to="/login"><img class="foto" src="/src/img/perfil.png" alt=""></RouterLink></li></center><br>
        <center><li><RouterLink class="rutas" to="/almacen">Almacen</RouterLink></li></center><br>
        <center><li><RouterLink class="rutas" to="/sucursales">Sucursales</RouterLink></li></center><br>
        <div class="select">
        <select name="format" id="format">
            <option selected disabled>Categorias</option>
            <option value="panimart">Panimart</option>
            <option value="coberturasmym">Coberturas MyM</option>
            <option value="materiasprimas">Materia Prima</option>
            <option value="interventas">Interventas</option>
            <option value="americandonuts">American Donuts</option>
            <option value="pacasdepapel">Pacas de papel</option>
            <option value="productosdelimpieza">Productos de limpieza</option>
        </select>
    </div>
        
      </ul>
  </div>
</nav>

    </v-navigation-drawer >

    <v-app-bar style="background-color: rgb(255, 125, 18);">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Lagupan</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script scoped>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
<style>
.barra{
  background-color: rgb(255, 207, 119);
}
.foto{
margin-left: 0px;
width: 35px;
height: 35px;
}
.rutas{
  font-size: 25px;
  text-decoration: none;
  margin: 40px;
  font-style: oblique;
  color:black
}

 select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: #5c6664;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    color:black;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 .select {
    position: relative;
    display: flex;
    width: 16em;
    height: 3em;
    line-height: 3;
    background: #5c6664;
    overflow: hidden;
    border-radius: .25em;
 }
 .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #2b2e2e;
    cursor:pointer;
    pointer-events:none;
    transition:.25s all ease;
 }
 .select:hover::after {
    color:white;
 }
 

</style>