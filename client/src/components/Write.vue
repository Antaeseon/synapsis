<template>
  <div>
    <h4>새로운 게시글 작성하기</h4>
    <form id="write" @submit="sendPost">
      <b-container class="textarea1">
        <b-row align-h="center">
          <b-col sm="1">
            <label for="post-title">제목:</label>
          </b-col>
          <b-col sm="11">
            <b-form-input id="post-title" v-model="title" type="text" placeholder="Enter title"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="textarea2">
        <b-row align-h="center">
          <b-col sm="1">
            <label for="post-text">내용:</label>
          </b-col>
          <b-col sm="11">
            <b-form-textarea
              id="post-text"
              v-model="context"
              type="text"
              placeholder="Enter context"
              :rows="20"
              :max-rows="20"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-container>
      <button>등록</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      context: ""
    };
  },
  methods: {
    sendPost() {
      axios
        .post(`http://localhost:3000/posting/register`, {
          context: this.context,
          title: this.title,
          user_id: this.$store.getters.id
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

<style scoped>
h4 {
  text-align: center;
  margin: 20px;
}
.textarea1 {
  margin-top: 50px;
}
.textarea2 {
  margin-top: 20px;
}
#submit {
  margin-top: 20px;
}
</style>
