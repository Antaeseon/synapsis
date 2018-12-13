<template>
  <div>
    <h4>게시글 상세보기</h4>
      <b-container class = "textarea1">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-title">제목:</label></b-col>
        <b-col sm="9">
          <b-form-text id="post-title">{{posts[0].title}}</b-form-text>
        </b-col>
      </b-row>
    </b-container>
    <b-container class = "textarea2">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-text">내용:</label></b-col>
        <b-col sm="9">
        <b-form-text id="post-text" type="text" placeholder="Enter context" :rows="20" :max-rows="20">{{posts[0].context}}</b-form-text>
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
.textarea1{
  margin-top: 5%;
  font-size: 20px;
}
.textarea2{
  margin-top: 20px;
  font-size: 20px;
  height: 200px;
}
#submit{
  margin-top: 20px;
}
</style>
