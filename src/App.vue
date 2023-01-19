<template>
  <div>

    <nav>
      <router-link v-if="userStore.userData" to="/">Home</router-link>|
      <router-link v-if="!userStore.userData" to="/login">Login</router-link>|
      <router-link v-if="!userStore.userData" to="/register">Register</router-link>|
      <button v-if="userStore.userData" @click="userStore.sigOut">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>

// import {useRoute, useRouter} from 'vue-router'
import {useUserStore} from "@/store/User.js"

// const router = useRouter()
const userStore = useUserStore();


// const salir = () => {
//   if(userStore.sigOut()){
//     alert("su sesión ha terminado")

//     router.push("/login")

//   }
// }

</script>



<style scoped>

</style>
