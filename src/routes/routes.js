import Home from '../views/Home.vue'
import Pierna from '../views/Pierna.vue'
import Brazo from '../views/Brazo.vue'
import Espalda from '../views/Espalda.vue'
import Pecho from '../views/Pecho.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pierna',
    name: 'Pierna',
    component: Pierna
  },
  {
    path: '/brazo',
    name: 'Brazo',
    component: Brazo
  },
  {
    path: '/espalda',
    name: 'Espalda',
    component: Espalda
  },
  {
    path: '/pecho',
    name: 'Pecho',
    component: Pecho
  }
]

export default routes