<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLink } from "vue-router";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import InputText from "../components/input-text.vue";
import ButtonConnect from "../components/button.vue";
import TextLink from "../components/text-link.vue";
import { login } from "../api";

const { navigate } = useLink({ to: "/:id" });

const credentials = reactive({ email: "", password: "" });
const error = ref<string | undefined>();

/*async function submitLogin() {
  const email = credentials.email.trim();
  const password = credentials.password.trim();
  if (email.length === 0 || password.length === 0) {
    error.value = "L'email et le mot de passe doivent être rempli";
    return;
  }

  const result = await login({ email, password });
  if (!result || !("token" in result)) {
    error.value = result?.error_message;
    return;
  }

  localStorage.setItem("access_token", result.token);
  localStorage.setItem("refresh_token", result.refresh_token);
  navigate();
}*/
</script>

<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img src="../images/logo-titre128.png" />

        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-red-800"
        >
          Connectez vous
        </h2>
      </div>
      <div v-if="error" id="login-error">Erreur: {{ error }}</div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <InputText
            placeholder="Adresse mail"
            id="email"
            name="email"
            type="email"
            v-model="credentials.email"
          />
          <InputText
            placeholder="Mot de passe"
            id="password"
            name="password"
            type="password"
            v-model="credentials.password"
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
