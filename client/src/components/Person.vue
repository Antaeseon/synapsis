<template>
    <div id="board">
    <h4 align-h="center">용병 게시판</h4>
    <div class = "searchFunction">
      <b-container class="container-example">
        <b-row class="search">
          <b-col  sm="3.5">
                <b-form-select v-model="selected" :options="options" class="mb-3" size = "sm" />
          </b-col>
         <b-col sm="1">
          <b-button id="searchButton" type="submit" size="sm">Search</b-button>
        </b-col >
        <b-col>
          <b-btn v-b-modal.myModal variant="primary"  size="sm">용병 신청하기</b-btn>
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
      <b-container class="content_row" align-h="center">
        <b-row align-h="center">
          <b-col sm = "1">번호</b-col>
          <b-col sm = "2">스포츠타입</b-col> 
          <b-col sm = "2">지역</b-col>
          <b-col sm = "3">날짜</b-col>
          <b-col sm = "2">계약상태</b-col>
          <b-col> 상세보기 </b-col>
        </b-row>
        <hr>
        <div v-for="item in persons" v-bind:key="item.id">
          <b-row align-h="center">
            <b-col>{{item.index}}</b-col>
            <b-col>{{item.sportsCategory}}</b-col>
            <b-col >{{item.region}}</b-col>
            <b-col >{{item.date}}</b-col>
            <b-col v-show="item.isChecked=='0'">채용안됨</b-col>
            <b-col v-show="item.isChecked=='1'">협상중..</b-col>
            <b-col v-show="item.isChecked=='2'">채용완료</b-col>
            <b-col v-show="item.isChecked=='3'">만료</b-col>
            <b-col v-show="item.isChecked=='4'">경기종료</b-col>
            <b-col>
              <b-button :to="{name: 'personDetail', params:{idx: item.index}}" variant="primary" size="sm">상세보기</b-button>
            </b-col>
          </b-row>
          <hr>
        </div>
      </b-container>
      <div id="paging">
          <b-pagination-nav
            base-url="#"
            align="center"
            :total-rows="10"
            :number-of-pages="10"
            v-model="currentPage"
          />
        </div>
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
      selected:'',
      persons: [],
      currentPage: 1,
      searchText: "",
      boards: [],
      options: [
        { text: "서울" },
        { text: "수원" },
        { text: "분당" },
        { text: "오산"}
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
.search{
    margin-top : 50px;
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
.content_row {
  width: 100rem;
  margin-top: 30px;
}
hr {
  width: 75rem;
}
#paging {
  position: relative;
  margin-top : 30%; 
}
</style>
