<template>
  <div>
    <el-card>
      <template #header>
        <span>Editer - Ordinateur</span>
      </template>
      <el-form label-position="left" label-width="200px" v-model="form">
        <el-row type="flex" justify="space-around">
          <el-col>
            <el-form-item label="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Lieu">
              <el-select v-model="form.lieu">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Reponsable technique">
              <el-select v-model="form.rpt" style="margin-right: 4em">
                <el-option></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Groupe technique">
              <el-select v-model="form.grptech">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Usager numéro">
              <el-input v-model="form.usagerNum"></el-input>
            </el-form-item>
            <el-form-item label="Usager">
              <el-input v-model="form.usager"></el-input>
            </el-form-item>

            <el-form-item label="Utilistaeur">
              <el-select v-model="form.utilisateur" style="margin-right: 4em">
                <el-option></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Groupe">
              <el-select v-model="form.groupe">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Domaine">
              <el-select v-model="form.domaine">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="UUID">
              <el-input v-model="form.uuid"></el-input>
            </el-form-item>

            <el-form-item label="Source de mise à jour">
              <el-select v-model="form.srcMaj">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>
          </el-col>

          <el-col :span="2">
            <el-divider direction="vertical"></el-divider>
          </el-col>

          <el-col>
            <el-form-item label="status">
              <el-select v-model="form.status">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Type">
              <el-select v-model="form.type">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="maker">
              <el-select v-model="form.maker">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Modèle">
              <el-select v-model="form.model">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Numéro de série">
              <el-input v-model="form.serial"></el-input>
            </el-form-item>

            <el-form-item label="Numéro d'inventaire">
              <el-input v-model="form.numInv"></el-input>
            </el-form-item>

            <el-form-item label="Réseau">
              <el-select v-model="form.reseau">
                <el-option></el-option>
              </el-select>
              <el-button
                icon="el-icon-plus"
                circle
                style="margin-left: 1em"
              ></el-button>
            </el-form-item>

            <el-form-item label="Commentaires">
              <el-input type="textarea" rows="2" v-model="form.comm"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-button native-type="submit">Mettre à jour</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class extends Vue {
  computer = this.$store.state.computers[0];

  form = {
    name: this.computer.name,
    usager: "",
    usagerNum: "",
    uuid: "",
    serial: "",
    numInv: "",
    comm: "",
    lieu: "",
    rpt: "",
    grptech: "",
    utilisateur: "",
    groupe: "",
    domaine: "",
    srcMaj: "",
    status: this.computer.status,
    type: "",
    maker: this.computer.maker,
    model: this.computer.model,
    reseau: ""
  };
}
</script>

<style lang="scss" scoped>
.el-select {
  margin-left: -2.5em;
}
</style>
