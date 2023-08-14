<template>
  <v-app id="inspire">
    <v-app-bar v-if="isLoggedIn" style="background-color: rgb(255, 125, 18);" class="scrollable-bar" :class="{ 'scroll-up': scrollUp, 'scroll-down': scrollDown }">
      <v-toolbar-title>Lagupan</v-toolbar-title>
      <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/almacen.png" alt=""><RouterLink class="rutas" to="almacen">Almacen</RouterLink></li></v-btn>
      <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/almacen.png" alt=""><RouterLink class="rutas" to="update">Update</RouterLink></li></v-btn>
      <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/store.png" alt=""><RouterLink class="rutas" to="sucursales">Sucursales</RouterLink></li></v-btn>
      <v-btn style="width: 300px;"><li class="li"><img class="foto" src="/src/img/store.png" alt=""><RouterLink class="rutas" to="salidas">salidas</RouterLink></li></v-btn>
      <v-menu open-on-hover />
      <template v-slot:activator="{ props }">
        <v-btn style="background-color: rgb(255, 207, 119)"
          color="black"
          v-bind="props"
        >
          Configuracion
        </v-btn>
      </template>
      <v-list/>
        <v-list-item/>
        <v-btn ><RouterLink to="login" style="text-decoration: none;"><li>Iniciar sesion</li></RouterLink></v-btn>
        <v-btn v-if="isLoggedIn"><RouterLink to="login" @click="logout" style="width: 300px;">Cerrar Sesión</RouterLink></v-btn>
        <v-btn><RouterLink to="register" style="text-decoration: none;"><li>Registrar usuario</li></RouterLink></v-btn>
      </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  async mounted() {
    await this.axios.get('/Empleados');
    this.checkLocalStorage();
  },
  data: () => ({
    drawer: null,
    scrollUp: false,
    scrollDown: false,
    lastScrollPosition: 0,
    isLoggedIn: false,
    router: useRouter(),
  }),

  async created() {
    window.addEventListener('scroll', this.handleScroll);
    await this.checkLocalStorage();
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > this.lastScrollPosition) {
        this.scrollUp = false;
        this.scrollDown = true;
      } else {
        this.scrollUp = true;
        this.scrollDown = false;
      }

      this.lastScrollPosition = scrollPosition;
    },
   async checkLocalStorage() {
      const token = localStorage.getItem('jwtToken');

      if (token) {
        this.isLoggedIn = true;
        this.$router.push('/almacen');
      }
    },
    async logout() {
      localStorage.removeItem('jwtToken'); // Elimina el token del localStorage
      this.isLoggedIn = false; // Cambia el estado de inicio de sesión
      // Aquí puedes agregar cualquier otra lógica de limpieza necesaria
    },
  },
};
</script>


<style scoped>
.scrollable-bar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Estilo cuando el usuario hace scroll hacia arriba */
.scroll-up {
  transform: translateY(0);
  transition: transform 0.3s ease-out;
}

/* Estilo cuando el usuario hace scroll hacia abajo */
.scroll-down {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in;
}

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