<template>
  <div id="board">
    <h4 align-h="center">용병 구하기</h4>
    <div class = "searchFunction">
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
          <b-btn v-b-modal.myModal variant="primary" size="sm">용병 신청하기</b-btn>
        </b-col>
      </b-row>
    </div>
    <div id = "board_main">
      <b-row>
        <b-col col="3">
        <div id = "person">
          <b-modal no-close-on-backdrop centered id="myModal" size="md"  hide-footer title="용병 등록하기">
          <personpop></personpop>
          </b-modal>
        </div>
        </b-col>
      </b-row>
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
import personpop from './modal/personpop'


export default {
  name: 'Board',
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
  components:{
    personpop
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
  margin-right:100px;
 }
 #title_button{
   float: center;
   color:black;
   background-color:transparent;
   border:0;
   outline:0;
 }
 /* .searchFunction{
    margin-top:50px;
    width:80%; height:100%;
    margin-bottom:50px;
 }
 .search{
   width:70rem;
   margin-left:330px;
   padding-right:30px;
 } */
 .content_row {
   width:70rem;
 }
 /* #searchBar{
   width:40rem;
 } */
 hr{
   width:70rem;
 }
 #paging{
     margin-top: 500px;
 }
</style>
