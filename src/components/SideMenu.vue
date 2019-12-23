<template>
  <el-menu :collapse="collapsed">
    <el-menu-item @click="collapse()">
      <i
        :class="[collapsed ? 'el-icon-caret-right' : 'el-icon-caret-left']"
      ></i>
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-s-home"></i>
        <span>Parc</span>
      </template>
      <el-menu-item index="1-1">Ordinateurs</el-menu-item>
      <el-menu-item index="1-2">Moniteurs</el-menu-item>
      <el-menu-item index="1-1">Logiciels</el-menu-item>
      <el-menu-item index="1-1">Matériels réseau</el-menu-item>
      <el-menu-item index="1-1">Périphériques</el-menu-item>
      <el-menu-item index="1-1">Imprimantes</el-menu-item>
      <el-menu-item index="1-1">Cartouches</el-menu-item>
      <el-menu-item index="1-1">Consommables</el-menu-item>
      <el-menu-item index="1-1">Téléphones</el-menu-item>
      <el-menu-item index="1-1">Baies</el-menu-item>
      <el-menu-item index="1-1">Châssis</el-menu-item>
      <el-menu-item index="1-1">PDU</el-menu-item>
      <el-menu-item index="1-1">Global</el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template #title>
        <i class="el-icon-s-help"></i>
        <span>Assistance</span>
      </template>
      <el-menu-item index="2-1">Ticket</el-menu-item>
      <el-menu-item index="2-1">Créer ticket</el-menu-item>
      <el-menu-item index="2-1">Problèmes</el-menu-item>
      <el-menu-item index="2-1">Changements</el-menu-item>
      <el-menu-item index="2-1">Planning</el-menu-item>
      <el-menu-item index="2-1">Statistiques</el-menu-item>
      <el-menu-item index="2-1">Tickets récurrents</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template #title>
        <i class="el-icon-s-management"></i>
        <span>Gestion</span>
      </template>
      <el-menu-item index="3-1">Licenses</el-menu-item>
      <el-menu-item index="3-1">Budgets</el-menu-item>
      <el-menu-item index="3-1">Fournisseurs</el-menu-item>
      <el-menu-item index="3-1">Contacts</el-menu-item>
      <el-menu-item index="3-1">Contrat</el-menu-item>
      <el-menu-item index="3-1">Documents</el-menu-item>
      <el-menu-item index="3-1">Lignes</el-menu-item>
      <el-menu-item index="3-1">Certificats</el-menu-item>
      <el-menu-item index="3-1">Centre de données</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template #title>
        <i class="el-icon-s-tools"></i>
        <span>Outils</span>
      </template>
      <el-menu-item index="4-1">Projets</el-menu-item>
      <el-menu-item index="4-1">Notes</el-menu-item>
      <el-menu-item index="4-1">Flux RSS</el-menu-item>
      <el-menu-item index="4-1">Base de connaissances</el-menu-item>
      <el-menu-item index="4-1">Résérvations</el-menu-item>
      <el-menu-item index="4-1">Rapports</el-menu-item>
      <el-menu-item index="4-1">Recherches sauvegardées</el-menu-item>
    </el-submenu>

    <template v-if="!isUser()">
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-s-cooperation"></i>
          <span>Administration</span></template
        >
        <el-menu-item index="5-1">Utilisateurs</el-menu-item>
        <el-menu-item index="5-1">Profils</el-menu-item>
        <el-menu-item index="5-1">Groupes</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template #title>
          <i class="el-icon-setting"></i>
          <span>Configuration</span>
        </template>
        <el-menu-item index="6-1">Intitulés</el-menu-item>
        <el-menu-item index="6-1">Composants</el-menu-item>
        <el-menu-item index="6-1">Niveaux de services</el-menu-item>
        <el-menu-item index="6-1">Liens externes</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SideMenu extends Vue {
  collapsed = true;

  isUser() {
    return this.$store.state.auth.user.username === "user";
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
}
</script>
