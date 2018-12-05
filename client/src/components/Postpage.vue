<template>
  <div id="board">
    <h4 align-h="center">게시판</h4>
    <div class = "searchFunction">
      <b-container class="container-example">
        <b-row class="search">
          <b-col>
                <b-form-select v-model="selected" :options="options" class="mb-3" size = "sm" />
          </b-col>
          <b-col>
            <b-form-input v-model="searchText" type="text" placeholder="Search" size = "sm" id="searchBar" />
          </b-col>
          <b-col>
            <b-button id="searchButton" type="submit" size = "sm" >Search</b-button>
          </b-col>
          <b-col>
            <b-button id = "write_board"  size = "sm" class ="mr-30" to='/postpage/write'>글쓰기</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="board">
      <div id = "board_main">
        <b-container fluid class="content_row">
          <b-row class="text-center" align-h= "center">
              <b-col >번호</b-col>
              <b-col cols="5">제목</b-col>
              <b-col>작성자</b-col>
              <b-col cols="2">등록일</b-col>
              <b-col>조회수</b-col>
          </b-row>  
          <hr>   
          <div v-for="(item,index) in boards" v-bind:key="item.id"> 
            <b-row class="text-center">
              <b-col >{{index+1}}</b-col>
              <b-col cols="5">
                  <router-link to = "/board/view">
                    <b-button id= "title_button">{{item.title}}</b-button>
                  </router-link>
              </b-col>
              <b-col>{{item.user_id}}</b-col>
              <b-col cols="2">{{item.date}}</b-col>
              <b-col>{{item.count}}</b-col>
            </b-row>
            <hr>
          </div>
        </b-container>
        <div id = "paging">
            <b-pagination-nav base-url="#" align = "center" :total-rows="10" :number-of-pages="10" v-model="currentPage" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  async created(){
    await axios.get('http://localhost:3000/posting')
    .then(response=>{
      this.boards = response.data;
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  data () {
    return {
      currentPage : 1,
      searchText:'',
      boards: [], 
      options: [
        { text: '전체' },
        { text: '제목' },
        { text: '작성자' },
        { text: '게시물 번호' }
      ]
    }
  },
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
 .content_row {
   width:70rem;
 }
 /* .searchFunction{
    margin-top:50px;
    width:80%; height:100%;
    margin-bottom:50px;
 } */
.search{
    margin-top : 50px;
 }
 hr{
   width:80rem;
 }
 #paging{
     margin-top: 500px;
 } 
</style>

