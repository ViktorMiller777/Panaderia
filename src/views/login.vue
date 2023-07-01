<template><br>
    <center><h1>Login</h1></center>
   <div class="register">
       <div class="form">
           <br>
           <center><div><input class="name" type="text" placeholder="email"></div></center><br>
           <center><div><input class="name" type="text" placeholder="passwd"></div></center><br>
           <p>¿No tienes una cuenta? Registrate aqui...<a style="font-size: 20px;" href="/register">Registrate</a></p>

       </div>
   </div>
</template>
<style scoped>
.register{
   width: 100%;
   height: 50%;
   display: flex;
   justify-content: center;
}
.form{
   display: flex;
   flex-direction: column;
   align-content: center;
   border: solid 1px;
   border-radius: 10px;
}
.name{
   width: 250px;
   height: 30px;
   size: 10px;
   border:solid 0.5px;
   border-radius: 5px;
}
</style>