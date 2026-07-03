<template>
  <!-- Eliminamos paddings horizontales de la página para permitir el diseño de borde a borde -->
  <q-page class="flex flex-center q-py-xl q-px-none bg-dark text-white full-width">
    <div class="full-width">
      
      <!-- Encabezado -->
      <div class="text-center q-mb-xl q-px-md">
        <h1 class="text-h3 text-weight-bolder q-ma-none tracking-tight">
          ENTRENA CON <span class="text-neon text-italic">PODER</span>
        </h1>
        <p class="text-subtitle1 text-grey-5 text-uppercase q-mt-sm letter-spacing-custom">
          Selecciona la zona muscular a destruir hoy
        </p>
      </div>

      <!-- Contenedor extendido al 100% del ancho de la pantalla -->
      <div class="row q-col-gutter-md full-width q-px-md">
        
        <!-- Tarjeta: Brazos -->
        <div class="col-12 col-sm-6 col-md-3 flex items-stretch">
          <q-card class="gym-card text-center q-pa-lg full-width flex column justify-between">
            <q-card-section class="q-pa-none">
              <div class="text-h5 text-weight-bolder q-mb-md text-tracking">BRAZOS</div>
              <p class="text-grey-4 text-body2">Bíceps y Tríceps de acero para romper tus límites.</p>
            </q-card-section>
            
            <q-card-actions align="center" class="q-pa-none q-mt-lg">
              <q-btn label="Ver Ejercicios" to="/brazo" class="bg-neon text-weight-bold full-width" unelevated />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Tarjeta: Piernas -->
        <div class="col-12 col-sm-6 col-md-3 flex items-stretch">
          <q-card class="gym-card text-center q-pa-lg full-width flex column justify-between">
            <q-card-section class="q-pa-none">
              <div class="text-h5 text-weight-bolder q-mb-md text-tracking">PIERNAS</div>
              <p class="text-grey-4 text-body2">Construye una base sólida y potente.</p>
            </q-card-section>
            
            <q-card-actions align="center" class="q-pa-none q-mt-lg">
              <q-btn label="Ver Ejercicios" to="/pierna" class="bg-neon text-weight-bold full-width" unelevated />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Tarjeta: Pecho -->
        <div class="col-12 col-sm-6 col-md-3 flex items-stretch">
          <q-card class="gym-card text-center q-pa-lg full-width flex column justify-between">
            <q-card-section class="q-pa-none">
              <div class="text-h5 text-weight-bolder q-mb-md text-tracking">PECHO</div>
              <p class="text-grey-4 text-body2">Volumen, fuerza y densidad pectoral total.</p>
            </q-card-section>
            
            <q-card-actions align="center" class="q-pa-none q-mt-lg">
              <q-btn label="Ver Ejercicios" to="/pecho" class="bg-neon text-weight-bold full-width" unelevated />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Tarjeta: Espalda -->
        <div class="col-12 col-sm-6 col-md-3 flex items-stretch">
          <q-card class="gym-card text-center q-pa-lg full-width flex column justify-between">
            <q-card-section class="q-pa-none">
              <div class="text-h5 text-weight-bolder q-mb-md text-tracking">ESPALDA</div>
              <p class="text-grey-4 text-body2">Amplitud y control en la zona posterior.</p>
            </q-card-section>
            
            <q-card-actions align="center" class="q-pa-none q-mt-lg">
              <q-btn label="Ver Ejercicios" to="/espalda" class="bg-neon text-weight-bold full-width" unelevated />
            </q-card-actions>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<style scoped>
.gym-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.gym-card:hover {
  transform: scale(1.02);
  background: rgba(255, 255, 255, 0.05);
  border-color: #00ffcc;
  box-shadow: 0 8px 20px rgba(0, 255, 204, 0.1);
}

.text-tracking {
  letter-spacing: 1px;
}

.letter-spacing-custom {
  letter-spacing: 2px;
}
</style>