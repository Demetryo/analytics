<template>
  <button
    type="button"
    class="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
  >
    <span
      class="h-5 w-5 text-orange-500 group-hover:text-orange-400"
      aria-hidden="true"
    >
    </span>
    <slot></slot>
  </button>
</template>
