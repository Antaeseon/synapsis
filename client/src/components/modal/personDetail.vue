<template>
  <div>
    <div class="border border-secondary mt-4">
      <b-row class="m-1">
        <b-col cols="6" class="ml-10">
          <b-img
            left
            src="https://picsum.photos/125/125/?image=43"
            rounded="circle"
            height="70%"
            width="70%"
            class="mr-3 mt-1"
          />
        </b-col>
        <p class="text-left mt-4">{{this.$store.getters.id}}</p>
      </b-row>
    </div>
    <hr>
    <b-container fluid>
      <div>
        <b-row class="m-1">
          <b-col sm="3">
            <label class="pt-2">position:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="position" type="text" required placeholder="ex) 미드필더"></b-form-input>
          </b-col>
          <b-col sm="3">
            <label class="pt-2">region:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="region" type="text" required placeholder="ex) 경기 수원시 팔달구"></b-form-input>
          </b-col>
          <b-col sm="3">
            <label class="pt-2">time:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="time" type="text" required placeholder="ex) 오전 9시"></b-form-input>
          </b-col>
          <b-col sm="3">
            <label class="pt-2">comment:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="comment" type="text" required placeholder="ex) 열심히 뛰겠습니다."></b-form-input>
          </b-col>
          <b-col sm="3">
            <label class="pt-2">Category:</label>
          </b-col>
          <b-col sm="9">
            
            <b-form-select
              class="mb-2 mr-sm-2 mb-sm-0"
              :value="null"
              :options="{ '1': 'BasketBall', '2': 'Soccer', '3': 'BaseBall' }"
              id="inlineFormCustomSelectPref"
              v-model="sportsCategory"
            >
              <option slot="first" :value="null">Category</option>
            </b-form-select>

          
              
            
          </b-col>
          <b-col sm="3">
                <label class="pt-2">date:</label>
          </b-col>
          <b-col sm="9">
               <datepicker placeholder="원하는 경기날짜를 선택" v-model="date"></datepicker>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <hr>
    <!--
        <b-form @submit="onRegister" class="m-1 mt-20">

            <div class="d-flex flex-row mb-3">
              <b-form-select v-model="selected" :options="options" class="mb-3" />
              <div>Selected: <strong>{{ selected }}</strong></div>
            </div>
            <div>
              <label class="pt-2">position</label>
              <b-form-input v-model="email" type="text" required
                      placeholder="ex) 타자"></b-form-input>
              <label class="pt-2">region</label>
              <b-form-input v-model="email" type="text" required
                              placeholder="ex) 경기 수원시 팔달구"></b-form-input>
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
    -->
    <hr>
    <b-button class="float-center" type="submit" variant="primary" block @click="apply">Apply</b-button>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import axios from "axios";
import config from "../../../config/config";

export default {
  data() {
    return {
      position: "",
      region: "",
      time: "",
      comment: "",
      date: null,
      sportsCategory: "",
      /*options: [
        { value: null, text: '종목' },
        { value: 'a', text: '축구' },
        { value: 'b', text: '농구' },
        { value: 'c', text: '야구' },
      ],
      components: {
        Datepicker
      },*/
      types: [`date`, "comment"]
    };
  },
    components: {
    Datepicker
  },
  methods: {
    apply(event) {
      event.preventDefault(); //prevent reload page
      axios.post("http://localhost:3000/person/register", {
        user_id: this.$store.getters.id,
        position: this.position,
        region: this.region,
        time: this.time,
        date: this.date,
        comment: this.comment,
        sportsCategory: this.sportsCategory
      });
      this.clear();
    },
    clear() {
      alert('저장완료');
      this.user_id= null,
      this.position= null,
      this.region= null,
      this.time= null,
      this.date= null,
      this.comment= null,
      this.sportsCategory= null
    }
  }
};
</script>

<style>
label {
  width: 26%;
}
</style>
