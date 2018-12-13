<template>
  <div>
    <h4>게시글 상세보기</h4>
    <b-container class = "textarea1">
      <b-row align-h="center">
        <b-col sm="2"><label for="post-title">제목:</label></b-col>
        <b-col sm="9">
          <b-card no-body class="post-title">{{posts[0].title}}</b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container class = "textarea2">
      <b-row align-h="center">
      <b-col sm="2"><label for="post-text">내용:</label></b-col>
      <b-col sm="9">
        <b-card no-body class="post-title" type="text" aria-placeholder="Enter context" :rows="30" :max-rows="20">{{posts[0].context}}</b-card>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "board",
      async created(){
          alert('불러오기 성공!!!');
           axios.get(`http://localhost:3000/posting/${this.$route.params.idx}`)
          .then((response)=>{
              this.posts = response.data;
          })
          .catch(e => {
         alert(e);
        }) 
    },
    data : function() {
        return {
            idx : this.$route.params.idx,
            posts: []
        }
    }
}
</script>

<style>
h4{
  margin-top: 30px;
}
.jumbotron{
  width : 80%;
  margin-top: 30px;
  margin-left: 10%;
}
.textarea1{
  margin-top: 5%;
  font-size: 20px;
}
.textarea2{
  margin-top: 20px;
  font-size: 20px;
  height: 200px;
}
</style>
