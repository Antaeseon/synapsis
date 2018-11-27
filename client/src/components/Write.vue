<template>
  <div id='write'>
    <h4>새로운 게시글 작성하기</h4>
      <b-container class = "textarea1">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-title">제목:</label></b-col>
        <b-col sm="9">
          <b-form-input id="post-title" v-model="title" type="text" placeholder="Enter title"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container class = "textarea2">
      <b-row align-h="center">
        <b-col sm="1"><label for="post-text">내용:</label></b-col>
        <b-col sm="9">
        <b-form-textarea id="post-text" v-model="context" placeholder="Enter context" :rows="3" :max-rows="10"></b-form-textarea>
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