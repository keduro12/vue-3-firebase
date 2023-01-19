<template>
    <div>
        <h1>Login</h1>

        {{ userStore.userData}}
        <button>Ingresar</button>
        <div>
            <form @submit.prevent="handSubmit">
                <input type="email" placeholder="Ingrese Email" v-model.trim="email">
                <input type="password" placeholder="Ingrese Password" v-model.trim="password">
                <button :disabled="userStore.loadingUser" type="submit">Acceso</button>

            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
// import {useRoute, useRouter} from 'vue-router'
import {useUserStore} from "@/store/User.js"

const userStore = useUserStore();
// const router = useRouter()

const email = ref('keduro12@gmail.com')
const password = ref('123456')




const handSubmit = async () =>{

    if(email.value == "" || password.value =="" && password.value.length > 6){
        alert("llena los campos")
    }
    await userStore.loginUser(email.value, password.value)

    // router.push("/")
}



</script>

<style  scoped>

</style>