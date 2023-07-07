<template>
   <v-container>
      <v-row align="center" justify="center">
         <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10">
               <v-window v-model="step">
               <v-window-item :value="1">
                  <v-row>
                     <v-col cols="12" sm="6">
                        <v-card-text class="mt-12">
                        <h4 class="text-center">Logeate con tu cuenta</h4>
                           <h6 class="grey-text">Logeate con tu cuenta para empezar a trabajar<br></h6>
                        <v-row align="center" justify="center">
                           <v-col cols="12" sm="8">
                              <v-text-field label="Email" outlined dense color="blue" autocomplete="false" class="mt-16"></v-text-field>
                              <v-text-field label="Password" outlined dense color="blue" autocomplete="false" tipe="password" class="mt-16"></v-text-field>
                              <v-row>
                                 <v-col cols="12" sm="7">
                                    <v-checkbox label="Recuerdame" class="mt-n1" color="blue"></v-checkbox>
                                 </v-col>
                                 <v-col cols="12" sm="5">
                                    <span class="caption blue--text">Olvidaste tu contraseña</span>
                                 </v-col>
                              </v-row>
                              <v-btn color="blue" dark block tile>Iniciar Sesion</v-btn>
                              <h5 class="text-center grey--text mt-4 mb-3">O inicia sesion con</h5>
                              <div class="d-flex justify-space-between align-center mx-10 mb-16">
                                 <v-btn depressed outlined color="grey">
                                    <v-icon color="red">fab fa-google</v-icon>
                                 </v-btn>
                                 <v-btn depressed outlined color="grey">
                                    <v-icon color="blue">fab fa-facebook-f</v-icon>
                                 </v-btn>
                                 <v-btn depressed outlined color="grey">
                                    <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                                 </v-btn>
                              </div>
                           </v-col>
                        </v-row>
                        </v-card-text>
                     </v-col>
                     <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                        <div style="text-align: center; padding: 180px 0;">
                           <v-card-text class="white--text">
                              <h3 class="text-center">No tengo una cuenta aun</h3>
                              <h6 class="text-center">
                                Vayamos a crear tu primera<br>cuenta
                              </h6>
                           </v-card-text>
                           <div class="text-center">
                              <v-btn tile outlined dark @click="step++">Registrate</v-btn>
                           </div>
                        </div>
                     </v-col>
                  </v-row>
               </v-window-item>
               <v-window-item :value="2">
               <v-row>
                  <v-col cols></v-col>
               </v-row>
               </v-window-item>
               </v-window>
            </v-card>
         </v-col>
      </v-row>
   </v-container>

</template>
<script >
export default {
   data: () => ({
      step:1
   }),
   propos: {
      source: String
   }
}
import { createVuetify } from 'vuetify'
//import Icon from '@mdi/react';
//import { mdiAccount } from '@mdi/js';

export const vuetify = createVuetify({
   theme: { defaultTheme: 'light'},
})
</script>
<style scoped>
v-appication .rounded-bl-xl {
   border-bottom-left-radius: 300px !important;
}
v-appication .rounded-bl-xl {
   border-bottom-left-radius: 300px !important;
}

.register{
   display: flex;
   width: 600px;
   height: 500px;
   justify-content:right;
}
.form{
   display: flex;
   width: 450px;
   height: 500px;
   flex-direction: column;
   align-items: center;
   border: solid 1px;
   border-radius: 50px;
}
.name{
   width: 350px;
   height: 35px;
   size: 10px;
   border:solid 0.5px;
   border-radius: 5px;
}
</style>