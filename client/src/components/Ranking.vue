<template>
    <div id = 'Ranking' >
        <span>
          <h3> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ranking</h3>
        </span>
        <div>
            <el class = "medalFrame">
                <el class = "SilverMedalImg">
                    <img src="@/assets/silver.png" width="65" height="65"/>
                    <div class="SilverMedalFrame">
                        <div>팀이름 : {{teams[1].team_name}}</div>
                        <div>랭크점수 : {{teams[1].score}}</div>
                        <div>승률 : {{(teams[1].win/(teams[1].win+teams[1].lose))*100}}%</div>
                        <div>순위 : 2</div>
                    </div>
                </el>
                

                <el class = "GoldMedalImg" >
                    <img src="@/assets/gold.png" width="120" height="120"/>
                    <div class="GoldMedalFrame">
                        <div>팀이름 : {{teams[0].team_name}}</div>
                        <div>랭크점수 : {{teams[0].score}}</div>
                        <div>승률 : {{(teams[0].win/(teams[0].win+teams[0].lose))*100}}%</div>
                        <div>순위 : 1</div>
                    </div>
                </el>

                <el class = "BronzeMedalImg">
                    <img src="@/assets/bronze.png" width="35" height="35"/>
                    <div class="BronzeMedalFrame">
                        <div>팀이름 : {{teams[2].team_name}}</div>
                        <div>랭크점수 : {{teams[2].score}}</div>
                        <div>승률 : {{ (((teams[2].win/(teams[2].win+teams[2].lose))*100).toFixed(2)) }}%</div>
                        <div>순위 : 3</div>
                    </div>
                </el>
            </el>
        </div>
        <div>
            <el class='listFrame1'>
                <b-row>
                    <b-col>팀이릉</b-col>
                    <b-col>랭크점수</b-col>
                    <b-col>승률</b-col>
                    <b-col>순위</b-col>
                </b-row>
            </el>
            <el class='listFrame2'>
                <div style="overflow-y:scroll; height:400px;">
                <el class="list" v-for="(team,index) in teams" :key="team.team_name">
                    <b-row>
                        <b-col> {{team.team_name}} </b-col>
                        <b-col> {{team.score}} </b-col>
                        <b-col> {{(team.win/(team.win+team.lose))*100}}% </b-col>
                        <b-col> {{ index+1 }} </b-col>
                    </b-row>
                </el>
                </div>
            </el>   
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
        created () {
            axios.get(`http://localhost:3000/ranking`)
            .then(response => {
                this.teams = response.data;
                })
            .catch(e => {
            this.errors.push(e) 
                })
    },
    data(){ 
        return{
            teams:[]
        }
    }
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Roboto);
.listFrame1{
    position: relative;
    top : 45px;
    float: left;
    width: 90%;
    height: 25px;
    background-color: dodgerblue;
    border : 2px solid black;
    box-sizing: content-box;
    font-size : 20px;
  
    color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.listFrame2{
    position: relative;
    top : 45px;
    float: left;
    width: 90%;
    height: 400px;
    background-color: white;
    border : 1.5px solid black;
    box-sizing: content-box;
    
}
.list{
    float: left;
    width: 90%;
    font-size: 18px;
}
.medalFrame{
    float: left;
    width: 90.5%;
    height: 215px;
    /* border : 2px solid black;
    box-sizing: content-box; */
}

.GoldMedalImg{
    position: relative;
    float: left;
    width: 33%;
    height: 100%;
}
.SilverMedalImg{
    position: relative;
    top:90px;
    float: left;
    width: 33%;
    height: 100%;
}
.BronzeMedalImg{
    position: relative;
    top:135px;
    float: left;
    width: 34%;
    height: 80%;
}
h3{ /*랭킹*/
    text-align: left;
    font-size: 50px;
}

.GoldMedalFrame{
    border : 2px solid black;
    width : 99%;
    position: relative;
    align-items: center;
    height: 61%;
    font-size : 20px;
    display: table; margin-right: auto; margin-left: auto;
}
.SilverMedalFrame{
    border : 2px solid black;
    width: 99.5%;
    position: relative;
    height: 44.5%;
    font-size: 15px;
}
.BronzeMedalFrame{
    font-size: 12.3px;
    border : 2px solid black;
    width: 99%;
    position: relative;
    height: 47%;
}
</style>
