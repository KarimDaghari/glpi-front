<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col></el-col>
      <el-alert title="Comptes" center>
        <template #default>
          <p><strong>Administrateur</strong>: admin/admin</p>
          <p><strong>Technicien</strong>: tech/tech</p>
          <p><strong>Utilisateur</strong>: user/user</p>
        </template>
      </el-alert>
      <el-col></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-card>
        <el-form>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-user"
              placeholder="Nom d'utilisateur"
              v-model="username"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="Mot de passe"
              v-model="password"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-select v-model="lang">
              <el-option
                v-for="(lang, i) in langs"
                :key="i"
                :label="lang.value"
                :value="lang.value"
              >
                <span>
                  <img
                    :src="
                      `https://www.countryflags.io/${lang.code}/flat/16.png`
                    "
                    style="margin-bottom: -0.2em; margin-right: 0.2em"
                  />
                  {{ lang.value }}
                </span>
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" round @click="onSubmit()"
              >Continuer</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Login extends Vue {
  username: string = "";
  password: string = "";
  access: string[] = ["admin", "tech", "user"];
  langs: any[] = [
    {
      value: "Français",
      code: "fr"
    },
    {
      value: "Anglais (GB)",
      code: "gb"
    },
    {
      value: "Anglais (US)",
      code: "us"
    },
    {
      value: "Espagnol",
      code: "es"
    }
  ];
  lang: any = "Français";

  onSubmit() {
    const usernameIsValid = this.access.includes(this.username);
    const passwordIsValid = this.access.includes(this.password);

    if (usernameIsValid && passwordIsValid) {
      this.$store.commit("login", { username: this.username });
      this.$router.push("/");
    } else {
      this.$notify.error({
        title: "Erreur",
        message: "Le nom d'utilisateur/mot de passe est invalide."
      });
    }
  }
}
</script>

<style scoped>
li {
  list-style-image: "";
}
</style>
