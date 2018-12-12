<template>
    <div>
      <div class="border border-secondary mt-4">
        <b-row class= "m-1">
          <b-col cols="6" class="ml-10">
            <b-img left src="https://picsum.photos/125/125/?image=43" rounded="circle" height='70%' width='70%'  class="mr-3 mt-1"/>
          </b-col>
          <p class="text-left mt-4" >{{this.$store.getters.id}}</p>
        </b-row>
      </div>
      <hr>
      <b-container fluid>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3" ><label :for="`type-${type}`"> {{ type }}:</label></b-col>
          <b-col sm="9"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
          <hr>
        </b-row>
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     :options="{ '1': 'BasketBall', '2': 'Soccer', '3': 'BaseBall' }"
                     id="inlineFormCustomSelectPref">
                     <option slot="first" :value="null">Category</option>
        </b-form-select>
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
          <b-form-input v-model="email" type="text" required placeholder="ex) 타자"></b-form-input>
          <label class="pt-2">region</label>
          <b-form-input v-model="email" type="text" required placeholder="ex) 경기 수원시 팔달구"></b-form-input>
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
      </b-form>
      <hr>
      -->
      <b-button class="float-center" type="submit" variant="primary">Apply</b-button>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  data() {
    return {
      email: "",
      date: null,
      selected: null,

      /*options: [
        { value: null, text: '종목' },
        { value: 'a', text: '축구' },
        { value: 'b', text: '농구' },
        { value: 'c', text: '야구' },
      ],
      components: {
        Datepicker
      },*/
      types: [
        'position','region', 'date', `time`,'selected'
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
  }
};
</script>

<style>
label {
  width: 26%;
}
</style>
