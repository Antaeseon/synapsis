<template>
  <div>
    <div v-for="data in dataList" v-bind:key="data.id">
      <div id="msgList" v-show="data.isChecked==1">
        <h3>신청번호{{data.index}}</h3>
        채용신청한 팀 : {{data.teamName}}
        <br>
        경기날짜 : {{data.date}}
        <br>
        보내는 메세지 : {{data.comment}}
        <br>
        <b-button
          class="float-center"
          type="submit"
          variant="primary"
          @click="accept(data.index)"
        >채용 승락</b-button>
        <b-button
          class="float-center"
          type="submit"
          variant="primary"
          @click="deny(data.index)"
        >채용 거절</b-button>
      </div>
      <div id="msgList" v-show="data.isChecked == 0">
        <h3>신청번호 {{data.index}}</h3>현재 당신에게 채용을 요청한 팀이 없습니다.
      </div>

      <div id="msgList" v-show="data.isChecked == 2">
        <h3>신청번호 {{data.index}}</h3>
        <h5>상태:채용완료</h5>
        채용된 팀: {{data.teamName}}
        <br>
        경기날짜: {{data.date}}
        <br>
        보내는 메세지: {{data.comment}}
        <br>
        <b-button
          class="float-center"
          type="submit"
          variant="primary"
          @click="start(data.index)"
        >경기시작</b-button>
        <b-button class="float-center" type="submit" variant="primary" @click="del(data.index)">취소하기</b-button>
      </div>

      <div id="msgList" v-show="data.isChecked == 3">
        <h3>신청번호 {{data.index}}</h3>
        <h5>상태:경기종료</h5>
        채용된 팀: {{data.teamName}}
        <br>
        경기날짜: {{data.date}}
        <br>
        보내는 메세지: {{data.comment}}
        <br>
        <b-button class="float-center" type="submit" variant="primary" @click="del(data.index)">삭제하기</b-button>
      </div>
    </div>

    <!-- <div v-show="this.data.isChecked==2">
      <h1>채용이 완료 되었습니다. 취소는 불가능 합니다.</h1>
    </div>
    <div v-show="this.data.isChecked==0">
      <h1>현재 용병채용을 요청한 팀이 없습니다. </h1>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import config from "../../../config/config";

export default {
  data() {
    return {
      dataList: [] // 채용신청한 아이디,
    };
  },
  async created() {
    this.dataList = null;
    axios
      .post(`http://localhost:3000/person/message`, {
        user_id: this.$store.getters.id // 채용 신청한 아이디 post
      })
      .then(response => {
        this.dataList = response.data;
      });
  },
  methods: {
    accept(idx) {
      //event.preventDefault(); //prevent reload page
      axios.post("http://localhost:3000/person/accept", {
        user_id: this.$store.getters.id,
        index: idx
      });
      this.clear();
      this.$emit("exit", true);
    },
    deny(idx) {
      axios.post("http://localhost:3000/person/deny", {
        index: idx
      });
      this.clear();
      this.$emit("exit", true);
    },
    del(idx) {
      axios.post("http://localhost:3000/person/del", {
        user_id: this.$store.getters.id,
        index: idx
      });
      alert("삭제하였습니다.");
      this.$emit("exit", true);
    },
    start(idx) {
      axios.post("http://localhost:3000/person/start", {
        index: idx
      });
      alert("경기시작!!");
      this.$emit("exit", true);
    },
    clear() {
      alert("저장완료");
    }
  }
};
</script>

<style>
label {
  width: 26%;
}
#msgList {
  background-color: lightblue;
  border: 1px solid black;
}
</style>

