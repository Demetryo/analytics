<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
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
          Connectez vous 📊
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
            placeholder="Mot de passe"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <ButtonConnect @click="submitLogin" id="login-submit">
            <LockClosedIcon
              class="h-5 w-5 text-orange-500 group-hover:text-orange-400"
              aria-hidden="true"
            />
            Se connecter
          </ButtonConnect>
        </div>
        <div class="text-center">
          <TextLink to="/register">S'inscrire</TextLink>
        </div>
      </form>
    </div>
  </div>

</template>
