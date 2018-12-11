<template>
    <div id="board">
    <h2 align-h="center">용병 게시판</h2>
    <div class = "searchFunction">
      <b-container class="container-example">
        <b-row class="search">
          <b-col  sm="3.5">
                <b-form-select v-model="selected" :options="options" class="mb-3" size = "sm" />
          </b-col>
          <b-col  sm="3.5">
            <b-form-input v-model="searchText" type="text" placeholder="Search" size = "sm" id="searchBar" />
          </b-col>
         <b-col sm="0.5">
          <b-button id="searchButton" type="submit" size="sm">Search</b-button>
        </b-col >
        <b-col  >
          <b-btn v-b-modal.myModal variant="primary" size="sm">용병 신청하기</b-btn>
        </b-col>
        <b-col>
          <b-btn v-b-modal.personMsg variant="primary" size="sm">채용 메세지함</b-btn>
        </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="board_main">
      <b-row>
        <b-col col="3">
          <div id="person">
            <b-modal
              no-close-on-backdrop
              centered
              id="myModal"
              size="md"
              hide-footer
              title="용병 등록하기">
              <personpop></personpop>
            </b-modal>
            <b-modal no-close-on-backdrop centered id="personMsg" size="md" hide-footer title="채용 메세지">
                <personmsg></personmsg>
            </b-modal>
          </div>
          
        </b-col>
      </b-row>
      <b-container class="content_row">
        <b-row align-h="center">
          <b-col sm = "2">번호</b-col>
          <b-col sm = "2">스포츠타입</b-col> 
          <b-col sm = "1">지역</b-col>
          <b-col sm = "4">날짜</b-col>
          <b-col sm = "1">계약상태</b-col>
          <b-col> 상세보기 </b-col>
        </b-row>
        <hr>
        <div v-for="item in persons" v-bind:key="item.id">
          <b-row align-h="center">
            <b-col>{{item.index}}</b-col>
            <b-col>{{item.sportsCategory}}</b-col>
            <b-col >{{item.region}}</b-col>
            <b-col >{{item.date}}</b-col>
            <b-col>{{item.isChecked}}</b-col>
            <b-col>
              <b-button :to="{name: 'personDetail', params:{idx: item.index}}">상세보기</b-button>
            </b-col>
          </b-row>
          <hr>
        </div>
        <div id="paging">
          <b-pagination-nav
            base-url="#"
            align="center"
            :total-rows="10"
            :number-of-pages="10"
            v-model="currentPage"
          />
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import personpop from "./modal/personpop";
import personmsg from "./modal/personMessage";
import axios from "axios";

export default {
  name: "person",
  props: ["index"],
  async created() {
    await axios
      .get("http://localhost:3000/person")
      .then(response => {
        this.persons = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  async beforeUpdate() {
    await axios
      .get("http://localhost:3000/person")
      .then(response => {
        this.persons = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      persons: [],
      currentPage: 1,
      searchText: "",
      boards: [],
      options: [
        { text: "전체" },
        { text: "제목" },
        { text: "작성자" },
        { text: "게시물 번호" }
      ]
    };
  },
  components: {
    personpop,personmsg
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin-top: 30px;
}
#board_main {
  margin-top: 50px;
  margin-right: 100px;
}
#title_button {
  float: center;
  color: black;
  background-color: transparent;
  border: 0;
  outline: 0;
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
  width: 70rem;
}
/* #searchBar{
   width:40rem;
 } */
hr {
  width: 70rem;
}
#paging {
  margin-top: 500px;
}
</style>
