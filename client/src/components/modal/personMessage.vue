<template>
  <div>
    <h1>채용신청한 팀 : </h1>
    <h2>경기날짜 : </h2>
    <b-button class="float-center" type="submit" variant="primary">채용승락</b-button>
  </div>


</template>

<script>
import axios from "axios";
import config from "../../../config/config";

export default {
  data() {
    return {
      team:[]  // 채용신청한 팀의 정보
    };
  },
    components: {
    Datepicker
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
