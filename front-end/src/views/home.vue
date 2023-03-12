<script setup lang="ts">
import UserCard from "../components/userCard.vue";
</script>

<template>
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-orange-900">
          Liste des utilisateurs
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="grid grid-cols-5 gap-4">
          <UserCard>
            <p>ilrbfq</p>
            <p>oiyqgrf</p>
            <p>qyuerf</p>
            <p>uyqgzref</p>
            <p>qyzusegbvf</p>
          </UserCard>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
