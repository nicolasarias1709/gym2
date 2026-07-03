<template>
  <q-page class="q-pa-lg row justify-center">
    <div class="full-width" style="max-width: 1200px;">
      <h3 class="text-h4 text-weight-bold text-center q-mb-xl">RUTINA DE <span class="text-neon">PECHO</span></h3>

      <div class="row q-col-gutter-xl">
        <div 
          v-for="(ejercicio, index) in ejercicios" 
          :key="index" 
          class="col-12 col-md-6"
        >
          <q-card class="gym-card text-white overflow-hidden">
            <q-video
              :ratio="16/9"
              :src="ejercicio.videoUrl"
            />

            <q-card-section>
              <div class="text-h5 text-weight-bold text-neon q-mb-xs">
                {{ index + 1 }}. {{ ejercicio.nombre }}
              </div>
              <div class="text-body2 text-grey-4 q-mt-sm">
                {{ ejercicio.descripcion }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const ejercicios = ref([
  { nombre: 'Press de Banca Plano', descripcion: 'El estándar de oro para la fuerza del pectoral. Retrae las escápulas antes de sacar la barra.', videoUrl: 'https://www.youtube.com/embed/gRVjAtPip0Y' },
  { nombre: 'Press Inclinado con Mancuernas', descripcion: 'Enfocado en el pecho superior. Las mancuernas permiten un rango de movimiento más profundo.', videoUrl: 'https://www.youtube.com/embed/8iPEnn-ltC8' },
  { nombre: 'Aperturas en Polea Alta', descripcion: 'Tensión constante en el pectoral. Cruza las manos al frente simulando un abrazo exigente.', videoUrl: 'https://www.youtube.com/embed/taI4XduLpTk' },
  { nombre: 'Fondos enfocados en Pecho', descripcion: 'Inclina el torso ligeramente hacia adelante en las paralelas para transferir el esfuerzo al pectoral inferior.', videoUrl: 'https://www.youtube.com/embed/vKOqCgfWzPs?si=vcgEZ3fdh5jtx_1O' }
])
</script>