<template>
  <div id="card">
    <div class="image">
      <b-img src="https://picsum.photos/1024/400/?image=38" fluid-grow alt="Responsive image"/>
    </div>
    <hr>
    <div class="info-container">
      <p class="p-2 text-center">
        <b-row>
          <b-col cols="2">TEAM</b-col>
          <b-col class="font-weight-bold" cols="5">{{match.team1}}</b-col>
          <b-col class="font-weight-bold" cols="5">{{match.team2}}</b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="2">SCORE</b-col>
          <b-col class="font-weight-bold" cols="5">{{match.team1_score}}</b-col>
          <b-col class="font-weight-bold" cols="5">{{match.team2_score}}</b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="2">DATE</b-col>
          <b-col>{{match.date.slice(0,10)}}</b-col>
        </b-row>
        <!-- Title : {{trade.title}}<br> -->
        <!-- Edition : {{trade.edition}}<br> -->
        <!-- Author: {{trade.author}}<br> -->
        <!-- price: {{trade.price}}원<br> computed 사용해서 ,찍어서 보여주기 -->
        <!-- tag : {{trade.tag}} computed 사용해서 좀 더 보기 좋게 만들기 -->
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      teamInfo: this.match
    };
  },
  props: ["match"],
  name: "book-card"
};
</script>


<style>
#card {
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  background: #1b4f72;
  border-radius: 10px;
  padding: 10px 5px 10px 5px;
  color: #ebf5fb;
}
.image {
  height: calc(60% - 20px);
  background: #ebf5fb;
}
.info-container {
  margin-top: 10px;
  height: calc(40% - 20px);
  text-overflow: ellipsis;
  font-size: 13pt;
}
p {
  text-align: left;
}
</style>
