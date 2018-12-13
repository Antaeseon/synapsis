<template>
  <div class="statC">
    <br>
    <h1 class="text-left">Team Matching</h1>
    <br>
    <br>
    <div class="border border-info mt-4" style="width:40%">
      <b-row class="m-1">
        <b-col cols="4" class="ml-10">
          <b-img
            left
            src="https://picsum.photos/125/125/?image=43"
            rounded="circle"
            height="70%"
            width="70%"
            class="mr-3 mt-1"
          />
        </b-col>
        <b-col cols="8">
          <b-row class="border border-info w-50 mt-3">
            <b-col cols="6" class="bg-second text-black mt-1">
              <p class="text-center">{{myTeamInfo.team_name}}</p>
            </b-col>
            <b-col cols="6" class="bg-second text-black mt-1">
              <p class="text-center">{{myTeamInfo.point}} points</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <hr>
    <br>
    <div>
      <b-btn v-b-modal.myCheck variant="primary" class="float-md-right col-2 ml-10">매칭 등록</b-btn>
      <b-modal
        no-close-on-backdrop
        centered
        id="myCheck"
        size="md"
        ref="matchModal"
        hide-footer
        title="매칭 등록"
      >
        <team-matching @exit="closemodal"></team-matching>
      </b-modal>
    </div>
    <br>
    <br>
    <b-form-radio-group
      id="radios1"
      v-model="selected"
      :options="options"
      name="radioOpenions"
      class="wid-50"
    ></b-form-radio-group>

    <div>
      <table class="table">
        <thead>
          <tr v-if="selected==0">
            <th scope="col">팀명</th>
            <th scope="col">경기 시간</th>
            <th scope="col">선호장소</th>
            <th scope="col">매치</th>
          </tr>
          <tr v-else-if="selected==1">
            <th scope="col">팀명</th>
            <th scope="col">경기 시간</th>
            <th scope="col">경기장소</th>
          </tr>
        </thead>
        <tbody v-if="selected==0">
          <tr v-for="list in similarList" :key="list._id" v-show="list.isAdmit==false">
            <td>{{list.myteam}}</td>
            <td>{{list.date}}</td>
            <td>{{list.location}}</td>
            <td>
              <button @click="chooseMatch(list._id)">Click!!</button>
            </td>
          </tr>
        </tbody>
        <tbody v-if="selected==1">
          <tr v-for="list in similarList" :key="list._id" v-show="list.isAdmit==true">
            <td>{{list.myteam}}</td>
            <td>{{list.date}}</td>
            <td>{{list.location}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <ul class="list-group w-50 mx-auto"> -->
    <!-- <b-col> -->
    <!-- <li class="list-group-item list-group-item-info m-1" v-for="item in items">{{item}}</li> -->
    <!-- </b-col> -->
    <!-- </ul> -->
  </div>
</template>

<script>
import teamMatching from "./modal/registerMatch";
import config from "../../config/config";
import matchCard from "./card/matchCard";

export default {
  data() {
    return {
      teamname: "",
      user: {},
      items: ["dd", "aa"],
      myTeamInfo: {},
      matchList: {},
      similarList: {},
      options: [
        { text: "매칭 구함", value: 0 },
        { text: "매칭 완료", value: 1 }
      ],
      selected: 0
    };
  },
  async created() {
    let user = await this.$http.post(`${config.uri}/users/getUserInfo`, {
      id: this.$store.getters.id
    });
    user = user.data;
    this.user = user;
    console.log("스코어", user);
    let team = await this.$http.post(`${config.uri}/users/getTeamInfo`, {
      teamName: user.teamName
    });
    let score = await this.$http.post(`${config.uri}/score/getAllScore`, {
      teamName: user.teamName
    });
    console.log("이쪽 팀", score);
    if (team) {
      this.myTeamInfo = team.data;
      this.matchList = score.data;
    } else {
    }
    this.teamname = team.data.team_name;
    let tempList = await this.$http.post(`${config.uri}/match/getMatchList`, {
      team: team.data.team_name
    });
    console.log(tempList.data);
    this.similarList = tempList.data;
  },
  computed: {
    percent() {
      if (this.myTeamInfo.win + this.myTeamInfo.lose == 0) {
        return 0;
      } else {
        return (
          (this.myTeamInfo.win / (this.myTeamInfo.win + this.myTeamInfo.lose)) *
          100
        );
      }
    },
    tier() {
      if (this.user.score < 500) {
        return "bronze";
      } else {
        return "none";
      }
    }
  },
  components: {
    teamMatching
  },
  methods: {
    registerMatch() {
      console.log("등록됨");
    },
    closemodal() {
      this.$refs.matchModal.hide();
    },
    async chooseMatch(id) {
      let tempList = await this.$http.post(`${config.uri}/match/SelectMatch`, {
        id: id,
        team: this.teamname
      });
      let tList = await this.$http.post(`${config.uri}/match/getMatchList`, {
        team: this.teamname
      });
      this.similarList = tList.data;
    }
  }
};
</script>

<style>
.modal-dialog.modal-fullsize {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#myInfo {
  border: 0.1px black;
}
.statC {
  margin-left: 2%;
  margin-right: 2%;
}
.card-container {
  width: 20%;
  margin: 1%;
}
</style>
