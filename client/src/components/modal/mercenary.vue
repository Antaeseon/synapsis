<template>
    <div>
        <b-form @submit="onRegister" class="m-1 mt-20">
            <div class="d-flex flex-row mb-3">
                <label class="pt-2">상태팀명</label>
                <b-form-input v-model="email" type="text" required
                        placeholder="ex) 상연짱짱맨"></b-form-input>
            </div>
            <hr>
            <div class="d-flex flex-row mb-3">
                <label class="pt-2">경기일정</label>
                <datepicker placeholder="날짜선택" v-model="date"></datepicker>
            </div>
            <hr>
            <div class="d-flex flex-row mb-3">
                <label class="pt-2">스코어</label>

                <label class="pt-2">우리팀</label>
                <b-form-select v-model="ourScore" :options="options" class="mb-3 pt-2" required/>
                <label class="pt-2">상대팀</label>
                <b-form-select v-model="counterScore" :options="options" class="mb-3 pt-2" required/>

            </div>
            <hr>
            <b-button class="float-center" type="submit" variant="primary">용병 등록</b-button>
        </b-form>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  data() {
    return {
      email: "",
      date: null,
      ourScore: null,
      counterScore: null,

      options: [
        { value: null, text: "score" },
        { value: "0", text: "0" },
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
        { value: "4", text: "4" },
        { value: "5", text: "5" },
        { value: "6", text: "6" },
        { value: "7", text: "7" },
        { value: "8", text: "8" },
        { value: "9", text: "9" }
      ]
    };
  },
  methods: {
    onRegister(event) {
      event.preventDefault(); //prevent reload page
      this.clear();
    },
    clear() {
      _.forEach(this.form, (value, key) => {
        this.form[key] = "";
      });
      this.pwCheckText = "";
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>
label {
  width: 26%;
}
</style>
