<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <nav>
  <div>
      <ul>
        <center><li><RouterLink class="rutas" to="/login"><img class="foto" src="/src/img/perfil.png" alt=""></RouterLink></li></center><br>
        <center><li><RouterLink class="rutas" to="/almacen">Almacen</RouterLink></li></center><br>
        <center><li><RouterLink class="rutas" to="/sucursales">Sucursales</RouterLink></li></center><br>
        <center><li><RouterLink class="rutas" to="/categorias">Categorias</RouterLink></li></center><br>
        
      </ul>
  </div>
</nav>

    </v-navigation-drawer >

    <v-app-bar style="background-color: orchid;">
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

</style>