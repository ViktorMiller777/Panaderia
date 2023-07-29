      
<template>
    <v-sheet width="300" class="mx-auto">
    <v-form>
       <center><h1>Orden proveedores</h1></center>
        
        <div>  
            <v-h1 aria-flowto="sports">proveedor</v-h1>
       <div class="select" justify="center" justify-content="center" >
      
        <select name="format" id="format">
            <option value="panimart">Panimart</option>
            <option value="coberturasmym">Coberturas MyM</option>
            <option value="materiasprimas">Materia Prima</option>
            <option value="interventas">Interventas</option>
            <option value="americandonuts">American Donuts</option>
            <option value="pacasdepapel">Pacas de papel</option>
            <option value="productosdelimpieza">Productos de limpieza</option>
        </select>
        
    </div>
   </div>
   <br>
   <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
          Fab Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
        >
          <v-list-item-title v-text="'Item '"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
      
       <v-text-field
         label="producto"
         required
       ></v-text-field>
 
       <v-text-field
         
         
       
         label="cantidad"
         required
       ></v-text-field>


       <v-container grid-list-md >
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="true"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="380px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="fecha pedido"
              hint="fromato: Mes/Dia/año"
              persistent-hint
              prepend-icon="event"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
        <p>fecha actual <strong>{{ date }}</strong></p>
      </v-flex>
    </v-layout>
        </v-container>
        <div class="d-flex flex-column">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click=""
          >
          guardar
          </v-btn>

         <RouterLink to="/almacen"> 
            <v-btn
            color="warning"
            class="mt-4"
            block
            @click=""
          >
            cancelar
          </v-btn></RouterLink>
        </div>
      </v-form>
    </v-sheet>
  </template>
  <script>
  export default {
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  }
</script>