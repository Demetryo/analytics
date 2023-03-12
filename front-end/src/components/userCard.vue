<script setup lang="ts">
import { UserCircleIcon, TrashIcon, PencilIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    class="rounded-lg shadow-lg border-4 border-orange-700 hover:border-orange-700 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150"
  >
    <div class="text-orange-700 flex flex-col items-start relative xl:p-2">
      <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
      <slot></slot>
      <div class="grid grid-cols-5 gap-4">
        <TrashIcon
          class="cursor-pointer my-4 h-6 w-6 rounded-lg hover:text-white hover:bg-orange-700 border-2 border-orange-700 transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-150"
        />
        <PencilIcon
          class="cursor-pointer my-4 h-6 w-6 rounded-lg hover:text-white hover:bg-orange-700 border-2 border-orange-700 transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-150"
        />
      </div>
    </div>
  </div>
</template>
