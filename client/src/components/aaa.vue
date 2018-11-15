<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="Submit your name"
             @ok="handleOk"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text"
                      placeholder="Enter your id"
                      v-model="id"></b-form-input>
        <b-form-input type="text"
        placeholder="Enter your password"
        v-model="password"></b-form-input>

      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    clearName () {
      this.id = ''
      this.password=''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.id) {
        alert('Please enter your name')
      } else if(!this.password){
        alert('Please enter your password')
      }
     else{
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.$http.post('/login',{
          id : this.id,
          password : this.password
      })
      this.clearName()
      this.$refs.modal.hide()
    }
  }
}

</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Roboto:400);
body {
  background-color:#fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}

.container {
    padding: 25px;
    position: fixed;
}

.form-login {
    background-color: #EDEDED;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    box-shadow:0 1px 0 #cfcfcf;
}

h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}

.wrapper {
    text-align: center;
}

</style>
