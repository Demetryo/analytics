<script setup lang="ts">
import { computed } from "vue";
import { useLink } from "vue-router";
import ButtonModif from "../components/button.vue";
import InputText from "../components/input-text.vue";
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
        <div class="-space-y-px rounded-md shadow-sm">
          <InputText
            id="name"
            name="name"
            type="text"
          />
          <InputText
            id="surname"
            name="surname"
            type="text"
          />
          <InputText
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div class="grid grid-cols-5 gap-4">
          <ButtonModif> Modifier</ButtonModif>
          <ButtonModif> Annuler</ButtonModif>
        </div>
      </form>
    </div>
  </div>
</template>
