<template>
<div>
    <div v-show="this.data.isChecked==1">
      <h1>채용신청한 팀 : {{this.data.teamName}}</h1>
      <h2>경기날짜 : {{this.data.date}}</h2>
      <h4>보내는 메세지 : {{this.data.comment}}</h4>
      <b-button class="float-center" type="submit" variant="primary"  @click="accept">채용 승락</b-button>
      <b-button class="float-center" type="submit" variant="primary" @click="deny">채용 거절</b-button>
    </div>
    <div v-show="this.data.isChecked==2">
      <h1>채용이 완료 되었습니다. 취소는 불가능 합니다.</h1>
    </div>
    <div v-show="this.data.isChecked==0">
      <h1>현재 용병채용을 요청한 팀이 없습니다. </h1>
    </div>
</div>
</template>

<script>
import axios from "axios";
import config from "../../../config/config";


export default {
  data() {
    return {
      data: [],  // 채용신청한 아이디,
    };
   },
   async created() {
    alert('ss');
    axios.post(`http://localhost:3000/person/message`, {
          user_id: this.$store.getters.id, // 채용 신청한 아이디 post
        })
        .then(response => {
          this.data = response.data;
    });
  },
  methods: {
     accept(event) {
      event.preventDefault(); //prevent reload page
      axios.post("http://localhost:3000/person/accept", {
        user_id: this.$store.getters.id
      });
      this.clear();
    },
    //  deny(event) {
    //   event.preventDefault(); //prevent reload page
    //   axios.post("http://localhost:3000/person/accept", {
    //     user_id: this.$store.getters.id,

    //   });
    //   this.clear();
    // }
  }
};
</script>

<style>
label {
  width: 26%;
}
</style>
