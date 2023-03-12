<script setup lang="ts">
import { ref } from "vue";
import { useLink } from "vue-router";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import InputText from "../components/input-text.vue";
import ButtonConnect from "../components/button.vue";
import TextLink from "../components/text-link.vue";

</script>

<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>

        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-red-800"
        >
          Inscrivez vous
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <InputText
            placeholder="Adresse mail"
            id="email"
            name="email"
            type="email"
          />
          <InputText
            placeholder="Nom"
            id="name"
            name="name"
            type="text"
          />
          <InputText
            placeholder="Prénom"
            id="surname"
            name="surname"
            type="text"
          />
          <InputText
            placeholder="Mot de passe"
            id="password"
            name="password"
            type="password"
          />
          <InputText
            placeholder="Confirmez le mot de passe"
            id="password-verif"
            name="password-verif"
            type="password"
          />
        </div>

        <div>
          <ButtonConnect>
            <CheckCircleIcon
              class="h-5 w-5 text-orange-500 group-hover:text-orange-400"
              aria-hidden="true"
            />
            S'inscrire</ButtonConnect
          >
        </div>
        <div class="text-center">
          <TextLink to="/login">Se connecter</TextLink>
        </div>
      </form>
    </div>
  </div>
</template>
