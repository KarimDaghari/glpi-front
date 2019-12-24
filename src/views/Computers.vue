<template>
  <div>
    <el-dialog
      title="Actions"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <span>
          Que souhaitez-vous faire ?
        </span>
        <div style="margin-top: 1em">
          <el-select v-model="selectedOption">
            <el-option label="Supprimer" value="deleteItem"></el-option>
            <el-option label="Editer" value="editItem"></el-option>
          </el-select>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Annuler</el-button>
        <el-button type="primary" @click="executeAction">Confirmer</el-button>
      </span>
    </el-dialog>

    <div style="float: left">
      <el-button @click="dialogVisible = true">Actions</el-button>
      <el-button icon="el-icon-plus" circle></el-button>
    </div>
    <el-table :data="tableData" stripe @selection-change="addToList">
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
  dialogVisible = false;
  selectedOption: string = "";
  selectedItems: any[] = [];

  handleClose(done: any) {
    this.$confirm("Etes-vous sûr(e) ?")
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }

  deleteItem(items: any[]) {
    this.tableData = this.tableData.filter(col => !items.includes(col));
  }

  addToList(val: any[]) {
    this.selectedItems = val;
  }

  executeAction() {
    const [action, selectedItems] = [this.selectedOption, this.selectedItems];
    // @ts-ignore
    this[action](selectedItems);
    this.dialogVisible = false;
  }

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
