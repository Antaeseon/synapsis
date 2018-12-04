<template>
    <div>
        <b-form @submit="onRegister" class="m-1 mt-20">
            <div class="d-flex flex-row mb-3">
                <label class="pt-2">상태팀명</label>
                <b-form-input v-model="counterTeam" type="text" required
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
            <b-button class="float-center" type="submit" variant="primary">전적 등록</b-button>
        </b-form>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import config from "../../../config/config"
export default {
  data() {
    return {
      counterTeam: "",
      date: null,
      ourScore: null,
      counterScore: null,
      aaa:null,
      myteam:null,
      myList:{},
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
  async created(){
      console.log('이이1')
      const myteam=await this.$http.post(`${config.uri}/users/getUserInfo`,{id:this.$store.getters.id})
      console.log('이이2')
      this.myteam=myteam.data.teamName
      const Cteam=await this.$http.post(`${config.uri}/getMatch`,{teamName:this.myteam})
      this.myList=Cteam.data
      console.log('마운티드',this.myList[0])
  },
  methods: {
    async onRegister(event) {
      event.preventDefault(); //prevent reload page

      const myteam=await this.$http.post(`${config.uri}/users/getUserInfo`,{id:this.$store.getters.id})
      console.log('내팀',myteam.data.teamName)
      let cntTeam=await this.$http.post(`${config.uri}/users/getTeamInfo`,{teamName:this.counterTeam})
      cntTeam=cntTeam.data
      console.log("상대팀",cntTeam)
      if(!cntTeam)
      {
        alert("상대팀이 존재하지 않습니다.")
        return
      }
      try{
      this.$http.post(`${config.uri}/score/createScore`,{
        team1:myteam.data.teamName,
        team2:this.counterTeam,
        team1_score:this.ourScore,
        team2_score:this.counterScore,
        date:this.date
      })
      this.clear();
      }
      catch(error){
        consol.log("이거",error.response.data)
      }
    },
    clear() {
      this.counterTeam= "",
      this.date= null,
      this.ourScore= null,
      this.counterScore= null
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
