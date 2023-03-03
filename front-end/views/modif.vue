<script setup lang="ts">
import { useLink } from "vue-router";
import ButtonModif from "../components/button.vue";
import InputText from "../components/input-text.vue";

const { navigate } = useLink({ to: "/:id" });

function editProfile() {
  //si bouton Modifier, enregistrer modif dans bdd, sinon retour Home
  navigate();
}

const formContent = [
  {
    name: "toto",
    surname: "totototo",
    email: "toto@toto.com",
    password: "Admin",
    passwordConf: "Admin",
  },
];
</script>

<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-red-800"
        >
          Modifier
        </h2>
        <div
          class="-space-y-px rounded-md shadow-sm"
          v-for="item in formContent"
          :key="item.name"
          :surname="item.surname"
          :email="item.email"
          :password="item.password"
          :passwordConf="item.passwordConf"
        >
          <InputText
            :placeholder="item.name"
            id="name"
            name="name"
            type="text"
          />
          <InputText
            :placeholder="item.surname"
            id="surname"
            name="surname"
            type="text"
          />
          <InputText
            :placeholder="item.email"
            id="email"
            name="email"
            type="email"
          />
          <InputText
            :placeholder="item.password"
            id="password"
            name="password"
            type="password"
          />
          <InputText
            :placeholder="item.passwordConf"
            id="password"
            name="password"
            type="password"
          />
        </div>

        <div class="grid grid-cols-5 gap-4">
          <ButtonModif @click="editProfile"> Modifier</ButtonModif>
          <ButtonModif @click="editProfile"> Annuler</ButtonModif>
        </div>
      </form>
    </div>
  </div>
</template>
