<template>
  <el-menu mode="horizontal">
    <el-menu-item>
      <el-input
        placeholder="Rechercher"
        prefix-icon="el-icon-search"
        v-model="searchQuery"
      >
      </el-input>
    </el-menu-item>

    <el-menu-item style="float: right" @click="logout()">
      <span>
        <i class="el-icon-switch-button"></i>
        Deconnexion
      </span>
    </el-menu-item>
    <el-menu-item style="float: right">
      <span v-text="this.$store.state.auth.user.username"></span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class extends Vue {
  searchQuery = null;

  logout() {
    this.$store.commit("logout");
    this.$router.push("/login");
  }
}
</script>
