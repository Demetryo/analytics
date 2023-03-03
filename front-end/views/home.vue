<script setup lang="ts">
import UserCard from "../components/userCard.vue";

const cardContent = [
  { name: "toto", surname: "totototo", email: "toto@toto.com", role: "Admin" },
  {
    name: "tata",
    surname: "tatatata",
    email: "tata@tata.com",
    role: "Utilisateur",
  },
  {
    name: "titi",
    surname: "titititi",
    email: "titi@titi.com",
    role: "Utilisateur",
  },
  { name: "tete", surname: "tetetete", email: "tete@tete.com", role: "Admin" },
  {
    name: "tutu",
    surname: "tutututu",
    email: "tutu@tutu.com",
    role: "Utilisateur",
  },
  { name: "tyty", surname: "tytytyty", email: "tyty@tyty.com", role: "Admin" },
];
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
          <UserCard
            v-for="item in cardContent"
            :key="item.name"
            :surname="item.surname"
            :email="item.email"
            :role="item.role"
          >
            <p>{{ item.name }}</p>
            <p>{{ item.surname }}</p>
            <p>{{ item.email }}</p>
            <p>{{ item.role }}</p>
          </UserCard>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
