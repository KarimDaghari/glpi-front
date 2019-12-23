<template>
  <div id="app">
    <el-container>
      <el-header>
        <template v-if="this.$store.state.auth.isLoggedIn">
          <Menu></Menu>
        </template>
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Menu from "@/components/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-row {
  padding-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
