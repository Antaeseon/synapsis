<template>
  <div id="app">
    <PageHeader/>
    <router-view/>

        <b-modal no-close-on-backdrop centered ref="registerRef"
        size="md" title="회원가입" hide-footer id="registerModal">
    </b-modal>

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
}
</style>
