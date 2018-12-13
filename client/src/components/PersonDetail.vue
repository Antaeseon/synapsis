<template>
  <div>
    <h1>용병 상세페이지</h1>
    <h4>용병정보</h4>
      <b-container class = "textarea1">
      <b-row align-h="center">
        <b-col sm="12">
        아이디: {{persons[0].user_id}}지역: {{persons[0].region}}포지션:{{persons[0].position}} 경기가능날짜,time   : {{persons[0].date}},{{persons[0].time   }}
        </b-col>
        <b-col sm="11">
          <b-form-text id="post-title"></b-form-text>
        </b-col>
      </b-row>
    </b-container>
    <h4>comment</h4>
    <b-container class = "textarea2">
      <b-row align-h="center">
        <b-col sm="12"><label for="post-text">{{persons[0].comment}}</label></b-col>
        <b-form-text id="post-text" type="text" placeholder="Enter context" :rows="20" :max-rows="20"></b-form-text>
      </b-row>
    </b-container>
    <b-button class="personApply" type="submit" variant="primary" block @click="accept">용병 채용하기</b-button>
  </div>
</template>


<script>
import axios from "axios";
import config from "../../config/config";

export default {
  name: "PersonDetail",
  async created() {
    await axios
      .get(`http://localhost:3000/person/${this.$route.params.idx}`)
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
    };
  },
  methods: {
   accept() {
     alert('해당 용병에게 채용신청을 성공했습니다.');
      axios
        .post(`http://localhost:3000/person/apply`, {
          user_id: this.$store.getters.id, // 채용 신청한 아이디 post
          index : this.$route.params.idx
        })
        .then(response => {
          if (response.data.result == 1) {
            console.log(response);
            alert("저장성공");
          } else if (response.data.result == 0) {
            alert("저장실패 : 로그인후 사용하세요.");
          }
    });
   }
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
.textarea1{
  margin-top: 50px;
  background-color: antiquewhite;
  font-size: 30px;
}
.textarea2{
  margin-top: 20px;
  background-color: antiquewhite;
  font-size: 30px;
  height: 200px;
}
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
.personApply{
 
    position: relative;
    left:47%;
    width:120px;
    top:18px;

    
}
</style>
