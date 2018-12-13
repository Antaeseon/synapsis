<template>
  <div id="board">
    <h1>게시글 상세보기</h1>
    <h4 id="info1">제목</h4>
    <b-container class="textarea1">
      <b-row align-h="center">
        <b-col>{{posts[0].title}}</b-col>
      </b-row>
    </b-container>
    <h4 id="info1">내용</h4>
    <b-container class="textarea2">
      <b-row align-h="center">
        <b-col>{{posts[0].context}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "board",
  async created() {
    alert("불러오기 성공!!!");
    axios
      .get(`http://localhost:3000/posting/${this.$route.params.idx}`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        alert(e);
      });
  },
  data: function() {
    return {
      idx: this.$route.params.idx,
      posts: []
    };
  }
};
</script>

<style>
h4 {
  margin-top: 30px;
}
.jumbotron {
  width: 80%;
  margin-top: 30px;
  margin-left: 10%;
}
.textarea1 {
  margin-top: 20px;
  font-size: 22px;
  border: 1px solid black;
  background-color: beige;
}
.textarea2 {
  margin-top: 20px;
  font-size: 22px;
  height: 200px;
  border: 1px solid black;
  background-color: beige;
}
#info1 {
  margin-left: 16%;
}
#board {
  margin-left: 2%;
  margin-top: 2%;
}
</style>
