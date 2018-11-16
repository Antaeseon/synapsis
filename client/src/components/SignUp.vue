<template>
      <div>
    <b-form-input v-model="id"
    type="text"
    placeholder="Enter your id" class="inputform"></b-form-input>

    <b-form-input v-model="password"
    type="text"
    placeholder="Enter your password" class="inputform"></b-form-input>
    <b-button class="inputButton" variant="primary"  @click="register">submit</b-button>
    <b-button to="/" class="inputButton" variant="primary">home</b-button>
                  
  </div>
</template>

<script>
import config from '../../config/config'
export default {
data () {
    return {
      id: '',
      password:''
    }
  },
    methods:{
        register(){
            console.log(`${config.uri}`)
            console.log(this.id,this.password)
            this.$http.post(`${config.uri}/register`,{
                id:this.id,
                password:this.password
            })
    }
}
}
</script>

<style>
    .inputform{
        margin-left: auto;
        margin-right: auto;
        margin-top:10px;
        width:30%;
    }

    .inputButton{
        margin-top: 30px;
    }
</style>
