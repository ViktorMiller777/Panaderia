<template>
  <v-app  id="inspire">
    <v-navigation-drawer style="background-color:rgb(255, 160, 52) ;" :rail="drawer">
      <nav>
<<<<<<< HEAD
  <div class="menu">
      <ul>
        <RouterLink to="login"><img class="perfil" src="/src/img/perfil.png" alt=""></RouterLink><br><br>
        <li><img class="foto" src="/src/img/home.png" alt=""><RouterLink class="rutas" to="inicio">Inicio</RouterLink></li><br>
        <li><img class="foto" src="/src/img/almacen.png" alt=""><RouterLink class="rutas" to="almacen">Almacen</RouterLink></li><br>
        <li><img class="foto" src="/src/img/store.png" alt=""><RouterLink class="rutas" to="sucursales">Sucursales</RouterLink></li><br>
      </ul>
    </div>
=======
        <v-sheet
        color="grey-lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>
        <div>bolillo@gmail.com</div>
      </v-sheet>
<v-list>
  <v-list-item>
    <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/home.png" alt=""><RouterLink class="rutas" to="inicio">Inicio</RouterLink></li></v-btn><br><br>
    <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/almacen.png" alt=""><RouterLink class="rutas" to="almacen">Almacen</RouterLink></li></v-btn><br><br>
    <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/store.png" alt=""><RouterLink class="rutas" to="sucursales">Sucursales</RouterLink></li></v-btn><br><br>
  </v-list-item>
</v-list>
 
>>>>>>> 996b4fd3cff09f3b509a685ee5254d276e851586
</nav>
    </v-navigation-drawer >
    <v-app-bar style="background-color: rgb(255, 125, 18);">
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Lagupan</v-toolbar-title>
      <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn style="background-color: rgb(255, 207, 119)"
          color="black"
          v-bind="props"
        >
          Configuracion
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <RouterLink to="login" style="text-decoration: none;"><li>Inicar sesion</li></RouterLink>
          <RouterLink to="register" style="text-decoration: none;"><li>Registar usuario</li></RouterLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>

</template>

<script setup>
  import { ref } from 'vue'
</script>

<script scoped>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style>
.menu{
  display: flex;
  list-style: none;
  display: none;
}
.barra
{
  background-color: rgb(255, 207, 119);
}
.perfil{
margin-left: 0px;
width: 35px;
height: 35px;
}
.rutas{
 
  font-size: 25px;
  text-decoration: none;
  font-style: oblique;
  color:black;
} 
.li:hover {
  background-color: rgb(255, 125, 18);
  transition: background-color .3s;
  height: 40px;
  width: 300px;
}
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: #fca04a;
    flex: 1;
    padding: 0 .5em;
    color:black;
    cursor:pointer;
    font-size: 5px;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 li{
  list-style: none;
 }
 .select {
    position: relative;
    display: flex;
    width: 16em;
    height: 3em;
    line-height: 3;
    background:  rgb(255, 125, 18);
    overflow: hidden;
    border-radius: .25em;
 }
 .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background:#ff5900;
    cursor:pointer;
    pointer-events:none;
    transition:.25s all ease;
 }
 .select:hover::after {
    color:white;
 }
 .foto{
  margin-right: 10px;
  width: 27px;
  height: 27px;

 }

</style>