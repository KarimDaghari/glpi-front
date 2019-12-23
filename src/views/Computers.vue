<template>
  <div>
    <div style="float: left">
      <el-button>Actions</el-button>
      <el-button icon="el-icon-plus" circle></el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="Nom" sortable prop="name"></el-table-column>
      <el-table-column label="Entité" sortable prop="entity"></el-table-column>
      <el-table-column label="Statut" sortable prop="status"></el-table-column>
      <el-table-column
        label="Fabricant"
        sortable
        prop="maker"
      ></el-table-column>
      <el-table-column
        label="N° série"
        sortable
        prop="serial"
      ></el-table-column>
      <el-table-column label="Modèle" sortable prop="model"></el-table-column>
      <el-table-column
        label="Système d'exploitation"
        sortable
        prop="os"
      ></el-table-column>
      <el-table-column label="Lieu" sortable prop="place"></el-table-column>
      <el-table-column
        label="Dérnière modification"
        prop="lastModified"
      ></el-table-column>
      <el-table-column label="Processeur" prop="cpu"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class extends Vue {
  tableData: any[] = [];
  datum = {
    name: "",
    entity: "root entity",
    status: "En attente",
    maker: "DELL",
    serial: "f1qj5uNhMK",
    model: "XPS",
    os: "Windows",
    place: "1",
    lastModified: "2019-12-23",
    cpu: "i7-1056U"
  };

  mounted() {
    for (let i = 0; i < 10; i++) {
      const data = { ...this.datum };
      data.name = `Computer ${i + 1}`;
      data.serial += `${i}`;
      this.tableData.push(data);
    }
  }
}
</script>

<style></style>
