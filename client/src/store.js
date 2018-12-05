import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../config/config'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        id: sessionStorage.getItem('id'),
        Token:sessionStorage.getItem('Token')
    },
    getters: {
        id: state => state.id,
        Token: state =>  state.Token,
    },
    mutations: {
        login (state, { id, Token }) {
            state.id = id
            state.Token = Token
            sessionStorage.setItem('Token',Token)
            sessionStorage.setItem('id',id)
        },
        signOut (state) {
            state.Token = null
            state.id = ''
            localStorage.removeItem('Token')
            localStorage.removeItem('id')

            console.log('token 삭제')
        },
    },
    actions: {
        login({commit},{id,password}){
            console.log('여기들어옴')
            console.log('this',id,password)
            return new Promise((resolve,reject)=>{
                axios.post(`${config.uri}/login`,{id,password})
                .then(res=>{
                    const Token=res.data.Token
                    console.log(res)
                    console.log(id,Token)
                    console.log(`${Token} 저장됨...`)
                    commit('login',{id,Token})
                    resolve(res)
                })
                .catch(err=>{
                    console.log("여기서 에러....")
                    localStorage.removeItem('Token')
                    reject(err)
                 })
            })
        },

        signOut ({ commit }) {
            commit('signOut')
        }
    }
})