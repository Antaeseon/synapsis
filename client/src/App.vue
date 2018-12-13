<template>
  <div id="app container-fluid" class="bg">
    <PageHeader/>
    <router-view/>

    <b-modal
      no-close-on-backdrop
      centered
      ref="registerRef"
      size="md"
      title="회원가입"
      hide-footer
      id="registerModal"
    ></b-modal>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 1%;
  margin-right: 1%;
}

.bg{
    /* The image used */
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

</style>
