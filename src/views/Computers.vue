<template>
  <el-table :data="tableData" stripe>
    <el-table-column label="Nom" sortable prop="name"></el-table-column>
    <el-table-column label="Entité" prop="entity"></el-table-column>
    <el-table-column label="Statut" prop="status"></el-table-column>
    <el-table-column label="Fabricant" prop="maker"></el-table-column>
    <el-table-column label="N° série" prop="serial"></el-table-column>
    <el-table-column label="Modèle" prop="model"></el-table-column>
    <el-table-column label="Système d'exploitation" prop="os"></el-table-column>
    <el-table-column label="Lieu" prop="place"></el-table-column>
    <el-table-column
      label="Dérnière modification"
      prop="lastModified"
    ></el-table-column>
    <el-table-column label="Processeur" prop="cpu"></el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class extends Vue {
  tableData: any[] = [];
  datum = {
    name: "",
    entity: "root entity > computer",
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
