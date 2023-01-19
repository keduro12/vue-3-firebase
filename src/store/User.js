import {defineStore}  from "pinia"
import { getAuth, createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "@/firebaseConfig.js";
import { async } from "@firebase/util";
import router from "@/router/index.js"

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        userData: null,
        loadingUser : false,
    }),
    
    actions:{
        async registerUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid:user.uid}
                router.push("/");
                console.log(user)
            } catch (error) {
               console.log(error) 
            }
            finally{
                this.loadingUser = false
            }
        },

        async loginUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid:user.uid}
                router.push("/");
            } catch (error) {
                console.log(error)
            }
            finally{
                this.loadingUser = false
            }
        },

        async sigOut(){
            this.loadingUser = true
            try {
                await signOut(auth)
                this.userData = null
                router.push("/login");
            } catch (error) {
                console.log(error)
            }
            finally{
                this.loadingUser = false
            }
        },

        currentUser(){
            return new Promise((resolve, reject) =>{
                const unSuscribe = onAuthStateChanged(auth, (user) =>{
                    if(user){
                        this.userData = {email: user.email, uid:user.uid}
                    }else{
                        this.userData = null
                    }
                    resolve(user)
                }, e => reject(e))
                unSuscribe()
            })
        }

    }
})