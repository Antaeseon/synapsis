<template>
<div id="appp">
    <div id="topheader">
   <b-link to="/" id="maintitle">League of Sports</b-link>

    <div>
    <b-btn variant="primary" class="float-right" id="btnSignup" to='/signup'  v-if="!Token"> sign-up</b-btn>    
    <b-btn v-b-modal.modalPrevent variant="primary" class="float-right"  v-if="!Token">sign-in</b-btn>
    <b-btn variant="primary" class="float-right" @click="logout"  v-if="Token"> logout</b-btn>    
    
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="Login"
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


   </div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="d-flex w-50 order-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <b-btn class="nav-link" variant="outline-primary" to="/"> 내 팀 전적보기</b-btn>
                </li>
                <li class="nav-item">
                    <b-btn class="nav-link" variant="outline-primary" to="/">팀 매칭</b-btn>
                </li>
                <li class="nav-item">
                    <b-btn class="nav-link" variant="outline-primary" to="/">랭킹 정보</b-btn>
                </li>
                <li class="nav-item">
                    <b-btn class="nav-link" variant="outline-primary" to="/">용병 정보</b-btn>
                </li>
                <li class="nav-item">
                    <b-btn class="nav-link" variant="outline-primary" to="/">게시판</b-btn>
                </li>
            </ul>
        </div>
        <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
    </nav>

    <!-- 여기서부터 body -->
    <body>

    </body>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  data () {
    return {
      id: '',
      password: ''
    }
  },
 computed :{
     ...mapGetters([
          'Token'
      ])
  },
  methods: {
    logout(){
        this.$store.dispatch('signOut')
    },
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
    async handleSubmit () {
        console.log('들어옴')
      console.log(this.id,this.password)
      try{
         await this.$store.dispatch('login',{
             id:this.id,
             password:this.password
         })
    //   await this.$http.post('http://localhost:3000/login',{
    //       id : this.id,
    //       password : this.password
    //     })
      }
      catch(err){
        console.log(err)
        alert('login failed')
      }
      this.clearName()
      this.$refs.modal.hide()
    }
  }
}

</script>
    
<style>
@import url(http://fonts.googleapis.com/css?family=Roboto);
.nav-link{
    width: 200px;
    margin-left: 5px;
}
b-button{
    border: 1mm black;
}
.form-control{
    width:200px;
}
#app{
    margin-top: 10px;
}
#topheader{
    margin-left: 20px;
    margin-bottom:50px;
    margin-top: 20px;
    font-size: 30px;
}
body{
    padding: 10px;
}
.abc{
      margin-left: 10px;
}
#btnSignup{
    margin-left:15px;
    margin-right:15px;
}
#maintitle{
    color:black;
    font-size: 40px;
}
</style>

