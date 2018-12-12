<template>
<div>
    <div v-for="data in dataList" v-bind:key="data.id" >
      <div v-show="data.isChecked==1">
        <h1>채용신청한 팀 : {{data.teamName}}</h1>
        <h2>경기날짜 : {{data.date}}</h2>
        <h4>보내는 메세지 : {{data.comment}}</h4>
        <h4>index:{{data.index}}</h4>
        <b-button class="float-center" type="submit" variant="primary"  @click="accept(data.index)" >채용 승락</b-button>
        <b-button class="float-center" type="submit" variant="primary" @click="deny">채용 거절</b-button>
      </div>
      <div v-show="data.isChecked == 0">
        <h1>현재 용병채용을 요청한 팀이 없습니다. </h1> 
      </div>
      <div v-show="data.isChecked == 2">
        <h1>채용완료.</h1> 
      </div>
    </div>

      
  
    <!-- <div v-show="this.data.isChecked==2">
      <h1>채용이 완료 되었습니다. 취소는 불가능 합니다.</h1>
    </div>
    <div v-show="this.data.isChecked==0">
      <h1>현재 용병채용을 요청한 팀이 없습니다. </h1>
    </div> -->
</div>
</template>

<script>
import axios from "axios";
import config from "../../../config/config";


export default {
  data() {
    return {
      dataList: []  // 채용신청한 아이디,
    };
   },
   async created() {
    this.dataList=null;
    axios.post(`http://localhost:3000/person/message`, {
          user_id: this.$store.getters.id, // 채용 신청한 아이디 post
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
        index : idx
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
