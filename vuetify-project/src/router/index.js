// Composables
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import SignUp from '../views/SignUp.vue'
import AddCard from '../views/AddCard.vue'
import BuyBook from '../views/BuyBook.vue'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {

        path:'/login',
        name:'Login',
        component:LoginForm

      },
      {
        path:'/signUp',
        name:'signup',
        component:SignUp
      }, 
      {
        path:'/BuyBook',
        name:'Buybook',
        component:BuyBook
      }
    ],
    
  },
  {
    path:'/AddCard',
    name:'Addcard',
    component:AddCard
  },
  {
    path:'/BuyBook',
    name:'Buybook',
    component:BuyBook
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
