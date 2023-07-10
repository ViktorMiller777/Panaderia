
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

<template>

    <center><h1>Sucursales Disponibles</h1></center>
  <div class="cont-card1">
    <center> <h3>Sucursal 1</h3></center>
  <v-card id="suc1" 
    class="mx-auto"
    max-width="400"
    color="orange"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Bromo
    </v-card-subtitle>

    <v-card-text>
      <div>Bromo Av Siempre viva #987 col El Niño</div>

      <div>8714253694</div>
    </v-card-text>
 
  </v-card>
  </div>
  <br>
  <br>
  <div>
    <center><h3>sucursal 2</h3></center>
  <v-card id="suc2"
    class="mx-auto"
    max-width="400"
    color="orange "
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Juarez
    </v-card-subtitle>

    <v-card-text>
      <div>Ciudad nazas #813 Col Arboledas</div>

      <div>8717997718</div>
    </v-card-text>

   
  </v-card>
  </div>
  
</template>

<style>
.cont-card1{
  padding-top: 20px;
}
#suc1{
  border: 3px solid black;
}

#suc2{
  border: 3px solid black;
}
</style>
