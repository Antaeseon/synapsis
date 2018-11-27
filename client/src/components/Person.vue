<template>
    <div id="board">
        <h4 align-h="center">용병 구하기</h4>
        <b-row>
            <b-col cols="9"/>
            <b-col cols="2">
                <b-button id = "write_board"  size = "sm" class ="mr-30">용병 신청하기</b-button>
            </b-col>
        </b-row>
        <div id = "board_main">
        <b-container class="content_row">
        <b-row class="text-center" align-h= "center">
            <b-col >번호</b-col>
            <b-col cols="5">제목</b-col>
            <b-col>작성자</b-col>
            <b-col cols="2">등록일</b-col>
            <b-col>조회수</b-col>
        </b-row>  
        <hr>   
        <div v-for="item in boards" v-bind:key="item.id">
            <b-row class="text-center">
            <b-col >{{item.id}}</b-col>
            <b-col cols="5">
                <router-link to = "/board/view">
                <b-button id= "title_button">{{item.title}}</b-button>
                </router-link>
            </b-col>
            <b-col>{{item.writer}}</b-col>
            <b-col cols="2">{{item.date}}</b-col>
            <b-col>{{item.cnt}}</b-col>
            </b-row>
            <hr>
        </div>
        <div id = "paging">
            <b-pagination-nav base-url="#" align = "center" :total-rows="10" :number-of-pages="10" v-model="currentPage" />
        </div>
        </b-container>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                boards:[
                    {id:1,writer:"dd",title:"dfasdf",date:33,cnt:1}
                ],
                currentPage:1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
    margin-top: 30px;
}
#board_main {
  margin-top: 50px;
  margin-left: 300px;
  margin-right:400px;
 }
 #title_button{
   float: center;
   color:black;
   background-color:transparent;
   border:0;
   outline:0;
 }
 .searchFunction{
    margin-top:50px;
    width:80%; height:100%;
    margin-bottom:50px;
 } 
 .search{
   width:70rem;
   margin-left:330px;
   padding-right:30px;
 }
 .content_row {
   width:70rem;
 }
 #searchBar{
   width:40rem;
 }
 hr{
   width:70rem;
 }
 #paging{
     margin-top: 500px;
 }
 
</style>

