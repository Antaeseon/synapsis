<template>
    <div class="main-component">
<iframe class="video-play" width="45%" height="500 40%" src="https://www.youtube.com/embed/TFF5sPd09Ow?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


  <calendar-view id="calendar"
      :show-date="showDate"
      class="theme-default holiday-us-traditional holiday-us-official">
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate" />
  </calendar-view>
  <div>
      게시판
</div>
  </div>

</template>


<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
// The next two lines are processed by webpack. If you're using the component without webpack compilation,
// you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");

export default {
  name: "app",
  data: function() {
    return { showDate: new Date() };
  },
  components: {
    CalendarView,
    CalendarViewHeader
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    }
  }
};
</script>

<style>
.main-component {
  margin-top: 60px;
  margin-left: 50px;
  text-align: left;
}
#calendar {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 500px;
  width: 45%;
  display: inline-block;
  margin-left: 80px;
  margin-right: 50px;
}
.vedio-paly {
  display: inline-block;
}
</style>
