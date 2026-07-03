<template>
  <q-page class="q-pa-lg row justify-center">
    <div class="full-width" style="max-width: 1200px;">
      <h3 class="text-h4 text-weight-bold text-center q-mb-xl">RUTINA DE <span class="text-neon">PIERNA</span></h3>

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
  { nombre: 'Sentadilla Libre', descripcion: 'El rey de los ejercicios de pierna. Trabaja cuádriceps y glúteos rompiendo el paralelo.', videoUrl: 'https://www.youtube.com/embed/Dy28eq2PjcM' },
  { nombre: 'Prensa de Piernas', descripcion: 'Permite cargar pesado aislando la musculatura de los cuádriceps sin comprometer la zona lumbar.', videoUrl: 'https://www.youtube.com/embed/xvCynwyNoP4?si=LBl77ZsH5Ew3EYzg' },
  { nombre: 'Peso Muerto Rumano', descripcion: 'Enfoque masivo en la cadena posterior. Empuja la cadera hacia atrás manteniendo la espalda recta.', videoUrl: 'https://www.youtube.com/embed/HwMngJ1DWO8?si=0QEyFVSu7UyN-jTV' },
  { nombre: 'Extensiones de Cuádriceps', descripcion: 'Aislamiento puro. Sostén un segundo la contracción en la parte más alta del movimiento.', videoUrl: 'https://www.youtube.com/embed/-P1C-foX6V8?si=CoXUE-ZnvugFfzua' }
])
</script>