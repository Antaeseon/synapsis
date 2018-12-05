<template>
  <div id='write' v-on:submit="addPost">
    <h4>새로운 게시글 작성하기</h4>
      <b-container class = "textarea1">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-title">제목:</label></b-col>
        <b-col sm="11">
          <b-form-input id="post-title" v-model="title" type="text" placeholder="Enter title"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container class = "textarea2">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-text">내용:</label></b-col>
        <b-col sm="11">
        <b-form-textarea id="post-text" v-model="context" placeholder="Enter context" :rows="20" :max-rows="20"></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
    <b-button id="submit">등록</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      context: ''
    }
  },
  methods: {
    addPost(){
      axios.post("http://localhost:3000/posting/register", {'user_id': user_id, 'title': this.title, 'context': this.context, 'date': Date.now, 'count': 0})
    }
  }
}
</script>

<style scoped>
h4{
  text-align: center;
  margin: 20px;
}
.textarea1{
  margin-top: 50px;
}
.textarea2{
  margin-top: 20px;
}
#submit{
  margin-top: 20px;
}
</style>
