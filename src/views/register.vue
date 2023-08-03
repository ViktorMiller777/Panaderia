<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const empleados = ref([])

const fetchData = async() =>{
try{
  const response = await axios.get('http://localhost/productos');
  empleados.value = response.data.data;
}catch(error){
  console.log(error)
}
}
onMounted(fetchData)
</script>
<template><br>
<center><v-span class="text-h5 font-weight-light">Registrar nuevo empleado</v-span></center>
<v-form>

   <v-row justify="center">
   
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Agrega un nombre']"
            :error-messages="errorMessages"
            label="Nombre completo"
            placeholder="Nombre(s) Apellidos"
            required
          ></v-text-field>        
          <v-text-field
            ref="Direccion"
            v-model="Direccion"
            :rules="[() => !!Direccion || 'campo bacio']"
            label="Direccion"
            placeholder="col. calle, #casa"
            required
          ></v-text-field>
          <v-text-field
            ref="state"
            v-model="state"
            label="Correo"
            required
            placeholder="uncorreo@correo.com"
          ></v-text-field>
          <v-text-field
            ref="cel"
            v-model="cel"
            label="Contacto"
            required
            placeholder="Num"
          ></v-text-field>
          <v-text-field
            ref="tip"
            v-model="tip"
            :rules="[() => !!tip || 'Es necesario el tipo de empleado']"
            label="Tipo de Usuario"
            required
            placeholder="#tipo de Usuario"
          ></v-text-field>
          <v-text-field
            ref="sucursal"
            v-model="sucursal"
            :rules="[() => !!sucursal || 'Escribe el numero de sucursal del nuevo empleado']"
            label="Num de sucursal"
            required
            placeholder="1,2,3,4"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
        <RouterLink to="/login"> <v-btn>
            Cancelar registro
          </v-btn></RouterLink> 
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              location="left"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            variant="text"
            @click="submit"
          >
            guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-form>
</template>
<script setup>

</script>
