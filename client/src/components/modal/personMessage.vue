<template>
  <div>
    <h1>채용신청한 팀 : </h1>
    <h2>경기날짜 : </h2>
    <h4>보내는 메세지 : </h4>
    <b-button class="float-center" type="submit" variant="primary">채용 승락</b-button>
    <b-button class="float-center" type="submit" variant="primary">채용 거절</b-button>
  </div>


</template>

<script>
import axios from "axios";
import config from "../../../config/config";

export default {
  data() {
    return {
      team:[]  // 채용신청한 아이디
    };
  },
  methods: {
  }
};
</script>

<style>
label {
  width: 26%;
}
</style>
