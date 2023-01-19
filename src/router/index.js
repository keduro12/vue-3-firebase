import { createRouter, createWebHistory } from "vue-router"
import {useUserStore} from "@/store/User.js"



const requireAuth = async (to, from, next) =>{
  const userStore = useUserStore();
  const user = await userStore.currentUser()

  if (user) {
    next()
  }else{
    next("/login")
  }
}

const routes = [
    {
      path: "/",
      name: 'home', 
      beforeEnter: requireAuth,
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/login",
      name: 'login',
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/register",
      name: 'register',
      component: () => import("@/views/Register.vue")
    },
    // {
    //   path: "/favorito",
    //   name: "favorito",
    //   component: () => import("@/views/FavoritoPokemon.vue")
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'noFound',
    //   component: () => import("@/views/NoFound.vue")
    // },
  
  ];



  
  const router = createRouter({
    history: createWebHistory(),
    // linkActiveClass: "active",
    routes
  })

  // router.beforeEach((to, from, next) => {

  //   const userStore = useUserStore()
  //   if (userStore.autenticado){
  //     next()
  //   }else{
      
  //     next("/login")
  //   }
  // })
  
  export default router