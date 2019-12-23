<template>
  <div id="app">
    <el-container>
      <template v-if="isLoggedIn()">
        <el-header>
          <Menu></Menu>
        </el-header>
      </template>

      <el-container>
        <template v-if="isLoggedIn()">
          <el-aside width="">
            <side-menu></side-menu>
          </el-aside>
        </template>
        <el-main>
          <router-view />
        </el-main>
      </el-container>

      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Menu from "@/components/Menu.vue";
import SideMenu from "@/components/SideMenu.vue";

@Component({
  components: {
    Menu,
    SideMenu
  }
})
export default class extends Vue {
  isLoggedIn() {
    return this.$store.state.auth.isLoggedIn;
  }
}
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
