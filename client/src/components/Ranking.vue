<template>
  <div id="Ranking">
    <div>
      <h1 class="title">Ranking</h1>
    </div>
    <br>
    <div>
      <div class="medalFrame">
        <div class="SilverMedalImg">
          <img
            src="@/assets/silver.png"
            style="margin-left: auto; margin-right: auto; display: block;"
            width="65"
            height="65"
          >
          <div class="SilverMedalFrame">
            <div>팀이름 : {{teams[1].team_name}}</div>
            <div>랭크점수 : {{teams[1].point}}</div>
            <div>승률 : {{parseInt((teams[1].win/(teams[1].win+teams[1].lose))*100)}}%</div>
            <div>순위 : 2</div>
          </div>
        </div>

        <div class="GoldMedalImg">
          <img
            src="@/assets/gold.png"
            style="margin-left: auto; margin-right: auto; display: block;"
            width="120"
            height="120"
          >

          <div class="GoldMedalFrame">
            <div>팀이름 : {{teams[0].team_name}}</div>
            <div>랭크점수 : {{teams[0].point}}</div>
            <div>승률 : {{parseInt((teams[0].win/(teams[0].win+teams[0].lose))*100)}}%</div>
            <div>순위 : 1</div>
          </div>
        </div>

        <div class="BronzeMedalImg">
          <img
            src="@/assets/bronze.png"
            style="margin-left: auto; margin-right: auto; display: block;"
            width="35"
            height="35"
          >
          <div class="BronzeMedalFrame">
            <div>팀이름 : {{teams[2].team_name}}</div>
            <div>랭크점수 : {{teams[2].point}}</div>
            <div>승률 : {{ parseInt(((teams[2].win/(teams[2].win+teams[2].lose))*100)) }}%</div>
            <div>순위 : 3</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="listFrame1">
        <b-row class="text-center">
          <b-col cols="3">팀이름</b-col>
          <b-col cols="3">랭크점수</b-col>
          <b-col cols="3">승률</b-col>
          <b-col cols="3">순위</b-col>
        </b-row>
      </div>
      <div class="listFrame2">
        <div style="overflow-y:scroll; height:400px;">
          <div class="list" v-for="(team,index) in teams" :key="team.team_name">
            <b-row class="text-center">
              <b-col cols="3">{{team.team_name}}</b-col>
              <b-col cols="3">{{team.point}}</b-col>
              <b-col
                cols="3"
                v-show="team.win+team.lose!=0"
              >{{parseInt((team.win/(team.win+team.lose))*100)}}%</b-col>
              <b-col cols="3" v-show="team.win+team.lose==0">0%</b-col>
              <b-col cols="3">{{ index+1 }}</b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get(`http://localhost:3000/ranking`)
      .then(response => {
        this.teams = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      teams: []
    };
  }
};
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Roboto);
@import url("https://fonts.googleapis.com/css?family=Roboto");
.listFrame1 {
  position: relative;
  top: 45px;
  height: 25px;
  margin-left: 4%;
  margin-right: 4%;
  background-color: dodgerblue;
  border: 2px solid black;
  box-sizing: content-box;
  font-size: 20px;
  color: aliceblue;
  font-family: "Roboto", sans-serif;
  text-align: left;
}
.listFrame2 {
  position: relative;
  width: 92%;
  top: 45px;
  margin-left: 4%;
  margin-right: 4%;
  height: 400px;
  background-color: white;
  border: 1.5px solid black;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
}
.list {
  width: 100%;
  font-size: 18px;
  text-align: left;
  font-family: "Roboto", sans-serif;
}
.medalFrame {
  margin-left: 4%;
  margin-right: 4%;
  right: 14%;
  height: 215px;
  /* border : 2px solid black;
    box-sizing: content-box; */
}

.GoldMedalImg {
  position: relative;
  float: left;
  width: 33%;
  height: 100%;
}
.SilverMedalImg {
  position: relative;
  top: 90px;
  float: left;
  width: 33%;
  height: 100%;
}
.BronzeMedalImg {
  position: relative;
  top: 135px;
  float: left;
  width: 34%;
  height: 80%;
}
h3 {
  /*랭킹*/
  text-align: left;
  font-size: 50px;
}

.GoldMedalFrame {
  border: 2px solid black;
  width: 99%;
  position: relative;
  align-items: center;
  height: 61%;
  font-size: 20px;
  display: table;
  margin-right: auto;
  margin-left: auto;
}
.SilverMedalFrame {
  border: 2px solid black;
  width: 99.5%;
  position: relative;
  height: 44.5%;
  font-size: 15px;
}
.BronzeMedalFrame {
  font-size: 12.3px;
  border: 2px solid black;
  width: 99%;
  position: relative;
  height: 47%;
}
#Ranking {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}
</style>
