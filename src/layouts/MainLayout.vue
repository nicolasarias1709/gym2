<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark text-white">
    <q-header elevated class="bg-black" style="border-bottom: 3px solid #d4ff00;">
      
      <q-toolbar class="justify-center q-py-md">
        <q-toolbar-title class="text-h4 text-weight-bolder text-tracking-widest text-white text-center">
          POWER<span class="text-neon">GYM</span>
        </q-toolbar-title>
      </q-toolbar>

      <div class="nav-scroll-container">
        <div class="row no-wrap justify-start justify-sm-center q-gutter-x-md q-px-md q-pb-sm">
          <q-btn flat no-caps label="Inicio" to="/" active-class="text-neon-active" />
          <q-btn flat no-caps label="Brazo" to="/brazo" active-class="text-neon-active" />
          <q-btn flat no-caps label="Pierna" to="/pierna" active-class="text-neon-active" />
          <q-btn flat no-caps label="Pecho" to="/pecho" active-class="text-neon-active" />
          <q-btn flat no-caps label="Espalda" to="/espalda" active-class="text-neon-active" />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
/* Contenedor para el scroll horizontal */
.nav-scroll-container {
  width: 100%;
  overflow-x: auto; /* Habilita el scroll horizontal */
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch; /* Scroll suave en móviles */
}

/* Ocultar la barra de scroll visualmente pero mantener la función */
.nav-scroll-container::-webkit-scrollbar {
  display: none;
}
.nav-scroll-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Clase para el botón activo */
.text-neon-active {
  color: #d4ff00 !important;
  font-weight: bold;
}

/* Espaciado de letras para el título */
.text-tracking-widest {
  letter-spacing: 0.2em;
}
</style>