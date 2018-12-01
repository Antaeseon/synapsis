<template>
  <div id='write'>
    <h1>This is a New page!</h1>
      <b-container textarea1>
      <b-row class="my-1">
        <b-col sm="0.5"><label for="input-default">제목:</label></b-col>
        <b-col sm="8">
          <b-form-input id="input-default" type="text" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container textarea2>
      <b-row class="my-2">
        <b-col sm="0.5"><label for="textarea1">내용:</label></b-col>
        <b-col sm="8">
        <b-form-textarea id="textarea1" v-model="text" placeholder="Enter something" :rows="3" :max-rows="6"></b-form-textarea>
        </b-col>
        <pre class="mt-3">{{ text }}</pre>
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
h1{
  text-align: center;
}
</style>
