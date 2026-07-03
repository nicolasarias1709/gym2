<template>
  <q-page class="q-pa-lg row justify-center">
    <div class="full-width" style="max-width: 1200px;">
      <h3 class="text-h4 text-weight-bold text-center q-mb-xl">RUTINA DE <span class="text-neon">BRAZO</span></h3>

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
  {
    nombre: 'Curl de Bíceps con Barra',
    descripcion: 'El constructor de masa por excelencia. Mantén los codos pegados a tus costados y evita balancear el torso para aislar por completo el bíceps.',
    videoUrl: 'https://www.youtube.com/embed/kwG2ipFRgfo'
  },
  {
    nombre: 'Extensiones en Polea Alta',
    descripcion: 'Enfocado en la cabeza lateral del tríceps. Extiende los brazos firmemente hacia abajo y bloquea un segundo abajo para máxima contracción.',
    videoUrl: 'https://www.youtube.com/embed/Zj1h0ObPsp8?si=zdqGjwC5iOiJqaPz" '
  },
  {
    nombre: 'Curl Martillo con Mancuernas',
    descripcion: 'Desarrolla el braquiorradial y el agarre. Mantén las palmas mirándose entre sí (agarre neutro) durante todo el recorrido del levantamiento.',
    videoUrl: 'https://www.youtube.com/embed/vB5OHsJ3EME'
  },
  {
    nombre: 'Fondos en Paralelas',
    descripcion: 'Excelente ejercicio compuesto. Baja controladamente hasta que tus brazos formen un ángulo de 90 grados para reventar los tríceps.',
    videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4'
  }
])
</script>