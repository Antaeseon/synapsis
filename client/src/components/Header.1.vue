<template>
<div id="appp">
    <div id="topheader">

        <span>League of Sports</span>



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
                    <a class="nav-link" href="#/login">내 팀 전적보기</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">팀 매칭</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">랭킹 정보</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">용병 정보</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">게시판</a>
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
export default {
  data(){
     return{
            id:"",
            password:"",
            authenticated:false
        }
    },
    methods:{
    clearName () {
      this.id = '',
      this.password=''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.id) {
        alert('Please enter your id')
      }else if(!this.password){
        alert('Please enter your password')
      }
       else {
        this.handleSubmit()
      }
    },
    async handleSubmit () {
        this.clearName()
    }
  }

}
</script>
    
<style>
@import url(http://fonts.googleapis.com/css?family=Roboto);
.nav-link{
    width: 200px;
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
</style>
