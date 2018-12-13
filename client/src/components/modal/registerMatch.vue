<template>
  <div>
    <b-form @submit="onRegister" class="m-1 mt-20">
      <div class="d-flex flex-row mb-3">
        <label class="pt-2">선호장소</label>
        <b-form-input v-model="location" type="text" required placeholder="ex) 아주대"></b-form-input>
      </div>
      <hr>
      <div class="d-flex flex-row mb-3">
        <label class="pt-2">경기일정</label>
        <datepicker placeholder="날짜선택" v-model="date"></datepicker>
      </div>
      <hr>
      <b-button class="float-center" type="submit" variant="primary">매치 등록</b-button>
    </b-form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import config from "../../../config/config";
export default {
  data() {
    return {
      location: null,
      date: null
    };
  },
  methods: {
    hide(){
      this.$emit("exit",true)

    },
    async onRegister(event) {

      event.preventDefault(); //prevent reload page
      const myteam = await this.$http.post(`${config.uri}/users/getUserInfo`, {
        id: this.$store.getters.id
      });
      console.log("내팀", myteam.data.teamName);
      await this.$http.post(`${config.uri}/match/register`, {
        team: myteam.data.teamName,
        location: this.location,
        date: this.date
      });
      this.clear();
      this.$emit("exit",true)

    },
    clear() {
      (this.location = ""), (this.date = null);
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>
label {
  width: 100%;
}
</style>
