<template>
  <div id="board">
    <h1 class="text-left">자유게시판</h1>
    <div class = "searchFunction">
      <b-container class="container-example">
        <b-row class="search">
          <b-col sm="3.5">
                <b-form-select v-model="selected" :options="options" class="mb-3" size = "sm" />
          </b-col>
          <b-col sm="3.5">
            <b-form-input v-model="searchText" type="text" placeholder="Search" size = "sm" id="searchBar" />
          </b-col>
          <b-col sm="0.5">
            <b-button id="searchButton" type="submit" size = "sm">Search</b-button>
          </b-col>
          <b-col>
            <b-button id = "write_board"  size = "sm" class ="mr-30" to='/postpage/write' variant="primary" >글쓰기</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container fluid class="content_row">
      <b-row align-h= "center" >
        <b-col >번호</b-col>
        <b-col cols="5">제목</b-col>
        <b-col>작성자</b-col>
        <b-col cols="2">등록일</b-col>
        <b-col>조회수</b-col>
      </b-row>  
      <hr>   
      <div v-for="item in boards" v-bind:key="item.id"> 
        <b-row align-h="center">
          <b-col >{{item.index}}</b-col>
          <b-col cols="5">
            <router-link :to="{name: 'board',params:{idx: item.index}}"> {{item.title}} </router-link>
          </b-col>
          <b-col>{{item.user_id}}</b-col>
          <b-col cols="2">{{item.date}}</b-col>
          <b-col>{{item.count}}</b-col>
        </b-row>
        <hr>
      </div>
    </b-container> 
    <div id = "paging">
        <b-pagination-nav 
          base-url="#" 
          align = "center" 
          :total-rows="10" 
          :number-of-pages="10" 
          v-model="currentPage" />
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
      selected:'',
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
.search{
    margin-top : 50px;
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
   margin-top: 50px;
 }
 hr{
   width: 70rem;
 }
 #paging{
    position: relative;
    margin-top : 3px; 
 } 
</style>
