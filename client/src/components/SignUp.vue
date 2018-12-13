<template>
  <div class="sign text-center">
    <b-form-input
      v-model.trim="id"
      id="inputLive"
      :state="nameState"
      aria-describedby="inputLiveFeedback"
      type="text"
      placeholder="Enter your id"
      class="inputform"
    ></b-form-input>

    <b-form-invalid-feedback id="inputLiveFeedback">
      <!-- This will only be shown if the preceeding input has an invalid state -->
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <b-form-input
      v-model.trim="password"
      id="inputLive"
      :state="passwordState"
      aria-describedby="inputLiveFeedback"
      type="text"
      placeholder="Enter your password"
      class="inputform"
    ></b-form-input>

    <b-form-invalid-feedback id="inputLiveFeedback">
      <!-- This will only be shown if the preceeding input has an invalid state -->
      Enter at least 8 letters
    </b-form-invalid-feedback>

    <b-form-input
      v-model="teamname"
      type="text"
      placeholder="Enter your Team Name"
      class="inputform"
    ></b-form-input>

    <b-form-input
      v-model="position"
      type="text"
      placeholder="Enter your Position"
      class="inputform"
    ></b-form-input>

    <div class="categorydiv">
      <b-form-select v-model="selected" :options="options" class="mt-1 "/>
    </div>

    <div class="mt-5">
      <b-form-group label="Is team Leader?">
        <b-form-radio-group
          id="radios1"
          v-model="teamLeader"
          :options="teamoptions"
          name="radioOpenions"
        ></b-form-radio-group>
      </b-form-group>
    </div>

    <b-button class="inputButton" variant="primary" @click="register">submit</b-button>
    <b-button to="/" class="inputButton" variant="primary">home</b-button>
    <b-button class="inputButton" variant="primary" @click="test">testbutton</b-button>
  </div>
</template>

<script>
import config from "../../config/config"
export default {
  computed: {
    nameState() {
      return this.id.length > 2 ? true : false;
    },
    passwordState() {
      return this.password.length > 7 ? true : false;
    }
  },
  data() {
    return {
      id: "",
      password: "",
      teamname: "",
      position: "",
      selected: null,
      teamLeader: false,
      options: [
        { value: null, text: "Category" },
        { value: "BasketBall", text: "BasketBall" },
        { value: "BaseBall", text: "BaseBall" },
        { value: "Soccer", text: "Soccer" }
      ],
      teamoptions: [{ value: true, text: "Yes" }, { value: false, text: "No" }]
    };
  },
  methods: {
    async register() {
      if (this.id.length < 3) {
        alert("Please fill Id");
        return;
      } else if (this.password.length < 8) {
        alert("Please fill Password");
        return;
      } else if (!this.selected) {
        alert("Please check category");
        return;
      }
      console.log(this.id, this.password);
      try {
        await this.$http.post(`${config.uri}/register`, {
          id: this.id,
          password: this.password,
          teamName: this.teamname,
          position: this.position,
          sportsCategory: this.selected,
          isTeamLeader: this.teamLeader
        });
      } catch (error) {
        console.log(error.response.data.message);
        alert(error.response.data.message);
        return
      }
      try {
        await this.$store.dispatch("login", {
          id: this.id,
          password: this.password
        });
      } catch (err) {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
        this.$router.push("/");

    },
    test() {
      console.log(this.teamLeader);
    }
  }
};
</script>

<style>
.categorydiv {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 30rem;
}

#sText {
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
