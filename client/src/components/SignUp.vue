<template>
    <div>
      <b-form-group
        label-for="input1"
        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :state="state"
      >
        <b-form-input v-model.trim="id"
        type="text"
        placeholder="Enter your id" id ='input1' class="inputform" :state="state"></b-form-input>
      </b-form-group>
      <b-form-group
        label-for="input1"
        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :state="state"
      >

      <b-form-input v-model="password"
      type="text"
      placeholder="Enter your password" class="inputform"></b-form-input>
     </b-form-group>

      <b-form-input v-model="teamname"
      type="text"
      placeholder="Enter your Team Name" class="inputform"></b-form-input>

      <b-form-input v-model="position"
      type="text"
      placeholder="Enter your Position" class="inputform"></b-form-input>

      <div class="categorydiv">
        <b-form-select v-model="selected" :options="options" class="mt-1" />
      </div>

      <div class="mt-5">
        <b-form-group label="Is team Leader?">
          <b-form-radio-group id="radios1" v-model="teamLeader" :options="teamoptions" name="radioOpenions">
          </b-form-radio-group>
        </b-form-group>
      </div>

      <b-button class="inputButton" variant="primary"  @click="register">submit</b-button>
      <b-button to="/" class="inputButton" variant="primary">home</b-button>
      <b-button class="inputButton" variant="primary"  @click="test">testbutton</b-button>


  </div>
</template>

<script>
import config from "../../config/config";
export default {
  computed:{
    state () {
      return this.id.length >= 4 ? true : false
    },
      invalidFeedback () {
        console.log(this.id)
      if (this.id.length > 4) {
        return ''
      } else if (this.id.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data() {
    return {
      id: "",
      password: "",
      teamname:"",
      position:"",
      selected: null,
      teamLeader: false,
      options: [
        { value: null, text: 'Category'},
        { value: 'BasketBall', text: 'BasketBall' },
        { value: 'BaseBall', text: 'BaseBall' },
        { value: 'Soccer', text: 'Soccer' },
      ],
      teamoptions:[
        {value : true , text : 'Yes'},
        {value : false , text : 'No'}

      ]
    };
  },
  methods: {
    async register() {
      console.log(this.id, this.password);
      try {
        await this.$http.post(`${config.uri}/register`, {
          id: this.id,
          password: this.password,
          teamName: this.teamname,
          position:this.position,
          sportsCategory: this.selected,
          isTeamLeader : this.teamLeader
        });
        this.$router.push("/");
      } catch (error) {
        console.log(error.response.data.message)
        alert(error.response.data.message);
      }
    },
    test(){
      console.log(this.teamLeader)
    }
  }
};
</script>

<style>
.categorydiv{
  margin-left: 1px;
  margin-top: 10px;
}

#sText{
  font-size: 20px;
  text-align: center;
}

.inputform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 30%;
}
.inputButton {
  margin-top: 30px;
}
</style>
