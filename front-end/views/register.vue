<script setup lang="ts">
import { ref } from "vue";
import { useLink } from "vue-router";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import InputText from "../components/input-text.vue";
import ButtonConnect from "../components/button.vue";
import TextLink from "../components/text-link.vue";
import { register } from "../api";

const { navigate } = useLink({ to: "/" });

const registerData = {
  email: "",
  password: "",
  passwordVerif: "",
  firstName: "",
  lastName: "",
};
const error = ref<string | undefined>();

async function submitRegister() {
  const email = registerData.email.trim();
  const password = registerData.password.trim();
  const passwordVerif = registerData.passwordVerif.trim();
  const firstName = registerData.email.trim();
  const lastName = registerData.password.trim();
  if (
    email.length === 0 ||
    password.length === 0 ||
    passwordVerif.length === 0 ||
    firstName.length === 0 ||
    lastName.length === 0
  ) {
    error.value = "L'email et le mot de passe doivent être rempli";
    return;
  }

  const result = await register({ email, password, firstName, lastName });
  if (!result || !("token" in result)) {
    error.value = result?.error_message;
    return;
  }

  localStorage.setItem("access_token", result.token);
  localStorage.setItem("refresh_token", result.refresh_token);
  // enregistrer utilisateur dans bdd
  navigate();
}
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
          Inscrivez vous
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
            v-model="registerData.email"
          />
          <InputText
            placeholder="Nom"
            id="name"
            name="name"
            type="text"
            v-model="registerData.firstName"
          />
          <InputText
            placeholder="Prénom"
            id="surname"
            name="surname"
            type="text"
            v-model="registerData.lastName"
          />
          <InputText
            placeholder="Mot de passe"
            id="password"
            name="password"
            type="password"
            v-model="registerData.password"
          />
          <InputText
            placeholder="Confirmez le mot de passe"
            id="password-verif"
            name="password-verif"
            type="password"
            v-model="registerData.passwordVerif"
          />
        </div>

        <div>
          <ButtonConnect @click="submitRegister">
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
