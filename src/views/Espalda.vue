<template>
  <q-page class="q-pa-lg row justify-center">
    <div class="full-width" style="max-width: 1200px;">
      <h3 class="text-h4 text-weight-bold text-center q-mb-xl">RUTINA DE <span class="text-neon">ESPALDA</span></h3>

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
  { nombre: 'Dominadas (Pull-ups)', descripcion: 'Excelente constructor de amplitud en V. Eleva tu cuerpo usando la fuerza de tus dorsales.', videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
  { nombre: 'Remo con Barra', descripcion: 'Aporta densidad a la espalda media. Mantén el torso inclinado de forma estable y jala al ombligo.', videoUrl: 'https://www.youtube.com/embed/vT2GjY_Umpw' },
  { nombre: 'Jalón al Pecho en Polea', descripcion: 'Alternativa controlada para activar los dorsales anchos llevando la barra firmemente al pecho.', videoUrl: 'https://www.youtube.com/embed/CAwf7n6Luuc' },
  { nombre: 'Remo Gironda', descripcion: 'Trabaja romboides y trapecios. Evita balancear excesivamente la espalda baja al jalar.', videoUrl: 'https://www.youtube.com/embed/zw61pfKk2QA?si=TtX717HDInJTwJrM' }
])
</script>