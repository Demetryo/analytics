<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <div class="text-sm">
    <RouterLink :to="to" class="font-medium text-red-600 hover:text-red-400">
      <slot></slot>
    </RouterLink>
  </div>
</template>
