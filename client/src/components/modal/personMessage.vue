<template>
<div>
    <div v-for="data in dataList" v-bind:key="data.id" >
      <div id="msgList" v-show="data.isChecked==1">
        <h1>신청번호{{data.index}}</h1> 
        <h4>채용신청한 팀 : {{data.teamName}}</h4>
        <h4>경기날짜 : {{data.date}}</h4>
        <h4>보내는 메세지 : {{data.comment}}</h4>
        <h4>index:{{data.index}}</h4>
        <b-button class="float-center" type="submit" variant="primary"  @click="accept(data.index)" >채용 승락</b-button>
        <b-button class="float-center" type="submit" variant="primary" @click="deny(data.index)">채용 거절</b-button>
      </div>
      <div id="msgList" v-show="data.isChecked == 0" >
        <h3>신청번호 {{data.index}} :   </h3>
        <h4>현재 당신에게 채용을 요청한 팀이 없습니다.</h4>
      </div>
      <div id="msgList" v-show="data.isChecked == 2">
        <h3> 신청번호 {{data.index}} : </h3>
        채용완료 <b-button class="float-center" type="submit" variant="primary" @click="del(data.index)">삭제하기</b-button>
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
      alert('채용을 수락 하셨습니다.');
      this.clear();
    },
     deny(idx) {
      axios.post("http://localhost:3000/person/deny", {
        user_id: this.$store.getters.id,
        index : idx
      });
      this.clear();
    },
    del(idx){
       axios.post("http://localhost:3000/person/del", {
        user_id: this.$store.getters.id,
        index : idx
      });
      alert('삭제하였습니다.');
    }
  }
};
</script>

<style>
label {
  width: 26%;
}
#msgList {
  background-color: beige;
   border : 1px solid black;
}
</style>
