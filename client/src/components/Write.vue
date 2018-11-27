<template>
  <div id='write'>
    <h4>새로운 게시글 작성하기</h4>
      <b-container textarea1>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-default">제목:</label></b-col>
        <b-col sm="8">
          <b-form-input id="input-default" type="text" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container textarea2>
      <b-row class="my-2">
        <b-col sm="2"><label for="textarea1">내용:</label></b-col>
        <b-col sm="8">
        <b-form-textarea id="textarea1" v-model="text" placeholder="Enter something" :rows="3" :max-rows="6"></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
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
  margin: 10px;
}
.textarea2{
  margin: 10px;
}
</style>