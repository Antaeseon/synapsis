<template>
<div id="app">
    <div id="topheader">
        <span>League of Sports</span>
        <b-form-input v-model="id"
        type="text"
        placeholder="Enter your ID"></b-form-input>
        <b-form-input v-model="password"
        type="text"
        placeholder="Enter your PASSWORD">
        </b-form-input>
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
                    <a class="nav-link" href="#">내 팀 전적보기</a>
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
</div>
</template>

<script>
export default {
  data(){
     return{
            id:"",
            password:""
        }
    }
}
</script>
    
<style>
.nav-link{
    width: 200px;
}
b-button{
    border: 1mm black;
}
.form-control{
    width:200px;
}
#topheader{
    margin-left: 20px;
    margin-bottom:30px;
    font-size: 30px;
}
</style>
