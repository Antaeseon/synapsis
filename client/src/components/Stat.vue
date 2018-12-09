<template>
  <div class="statC">
    <div>
      <b-btn v-b-modal.myCheck variant="primary" class="float-md-right col-2 ml-10">전적 확인</b-btn>
      <b-modal no-close-on-backdrop centered id="myCheck" size="md" hide-footer title="전적 확인">
        <check></check>
      </b-modal>

      <b-btn v-b-modal.myModal variant="primary" class="float-md-right col-2 ml-10">전적 등록</b-btn>
      <b-modal no-close-on-backdrop centered id="myModal" size="md" hide-footer title="전적 등록">
        <mercenary></mercenary>
      </b-modal>
    </div>
    <br>
    <div class="border border-secondary mt-4">
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
          <p class="text-left mt-4">{{this.$store.getters.id}}</p>
        </b-col>
        <b-col cols="8">
          <b-row class="border border-info w-50">
            <b-col cols="5" class="bg-primary text-white">
              <p class="text-left">Win : {{myTeamInfo.win}}</p>
            </b-col>
            <b-col cols="5" class="bg-dark text-white">
              <p class="text-right">Lose : {{myTeamInfo.lose}}</p>
            </b-col>
            <b-col cols="2" class="border black">{{percent}}%</b-col>
          </b-row>

          <b-row class="border border-info w-50 mt-1">
            <b-col cols="6">
              <p class="text-left">{{myTeamInfo.score}} points</p>
            </b-col>
            <b-col cols="6">
              <p class="text-left">{{tier}}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <hr>
    <br>
    <div id="align">
        <button v-for="match in matchList" :key="match.id"  class="card-container btn-outline-secondary" disabled >
          <match-card :match="match"></match-card>
        </button>
    </div>

    <!-- <ul class="list-group w-50 mx-auto"> -->
        <!-- <b-col> -->
            <!-- <li class="list-group-item list-group-item-info m-1" v-for="item in items">{{item}}</li> -->
        <!-- </b-col> -->
    <!-- </ul> -->
  </div>
</template>

<script>
import mercenary from "./modal/mercenary";
import check from "./modal/checkScore";
import config from "../../config/config";
import matchCard from "./card/matchCard";

export default {
  data() {
    return {
      user:{},
      items: ["dd", "aa"],
      myTeamInfo: {},
      matchList:{}
    };
  },
  async created() {
    let user = await this.$http.post(`${config.uri}/users/getUserInfo`, {
      id: this.$store.getters.id
    });
    user = user.data;
    this.user=user
    console.log('스코어',user);
    let team = await this.$http.post(`${config.uri}/users/getTeamInfo`, {
      teamName: user.teamName
    });
    let score= await this.$http.post(`${config.uri}/score/getAllScore`,{
      teamName:user.teamName
    })
    // console.log(team)
    if (team) {
      this.myTeamInfo = team.data
      this.matchList=score.data
    } else {
        
    }
  },
  computed: {
    percent() {
      if (this.myTeamInfo.win + this.myTeamInfo.lose == 0) {
        return 0;
      } else {
        return (
          this.myTeamInfo.win / (this.myTeamInfo.win + this.myTeamInfo.lose)
        );
      }
    },
    tier(){
      if(this.user.score<500){
        return 'bronze'
      }else{
        return 'none'
      }
    }
  },
  components: {
    mercenary,
    check,
    matchCard
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
.statC{
    margin-left: 2%;
    margin-right: 2%;
}
.card-container{
    width:20%;
    margin: 1%;
}
</style>
