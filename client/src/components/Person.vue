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
          <b-col>번호</b-col>
          <b-col>지역</b-col>
          <b-col>종목</b-col>
          <b-col>신청 날짜</b-col>
          <b-col>매칭 유/무</b-col>
        </b-row>
        <hr>
        <div v-for="item in persons" v-bind:key="item.id">
          <b-row class="text-center">
            <b-col>{{item.index}}</b-col>
            <b-col>{{item.region}}</b-col>
            <b-col>
              <router-link :to="{name: 'persons', params:{idx: item.index}}">{{item.category}}</router-link>
            </b-col>
            <b-col>{{item.date}}</b-col>
            <b-col>{{item.selected}}</b-col>
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
import axios from 'axios'

export default {
  async created(){
    await axios.get('http://localhost:3000/person')
    .then(response=>{
      this.persons = response.data;
    })
    .catch(e =>{
      this.errors.push(e)
    })
},
data () {
  return {
  currentPage : 1,
  searchText:'',
  persons: [],
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
 .content_row {
   width:70rem;
 }

 hr{
   width:70rem;
 }
 #paging{
     margin-top: 500px;
 }
</style>
