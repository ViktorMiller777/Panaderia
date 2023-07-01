<script setup>


</script>
<template>

    <div class="hero">
        <div class="img"></div>
        <div class="cuadro">
            <p>Bienvenido a Nuestra Panaderia</p>
            <p>En Nuestra Panaderia Podras Encontrar
                Los Mejores Panes y Pasteles que Deseas  
            </p>
        </div>

    
    </div>
</template>
           <style>
            .hero{
    min-height: 98vh;
    background-image: url("img/fondo.jpg");
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
}
.img-centro{
    text-align: center;
}


.cuadro{
    color: white;
    padding: 1px;
    text-align: center;
    font-size: 45px;
    align-items: center;
}
.img{
    background-image: url(img/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    height:10px;
    width: 10px;
    display: flex;
    justify-content: center;
}
           </style>