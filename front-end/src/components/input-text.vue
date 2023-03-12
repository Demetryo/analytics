<script setup lang="ts">
defineProps<{
  placeholder?: string;
  id?: string;
  name?: string;
  type?: string;
  modelValue?: string;
}>();
</script>

<template>
  <input
    :placeholder="placeholder"
    :id="id"
    :name="name"
    :type="type"
    class="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
    :value="modelValue"
  />
</template>
