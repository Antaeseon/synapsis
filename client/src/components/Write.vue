<template>
  <div id='write'>
    <h4>새로운 게시글 작성하기</h4>
      <b-container textarea1>
      <b-row class="my-1">
        <b-col sm="2"><label for="post-title">제목:</label></b-col>
        <b-col sm="8">
          <b-form-input id="post-title" type="text" placeholder="Enter title"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container textarea2>
      <b-row class="my-2">
        <b-col sm="2"><label for="post-text">내용:</label></b-col>
        <b-col sm="8">
        <b-form-textarea id="post-text" v-model="text" placeholder="Enter context" :rows="3" :max-rows="6"></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
    <b-button>등록</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
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
  margin: 10px;
}
.textarea2{
  margin: 10px;
}
</style>