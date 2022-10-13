<script setup>
import { ref, onMounted } from "vue";
import { currentTheme, switchTheme } from "~/composables/theme.js";
import { SunIcon, MoonIcon, ArchiveIcon } from "@heroicons/vue/outline";
</script>
<template>
  <header
    class="
      z-10
      flex
      top-0
      left-0
      w-full
      absolute
      items-center
      bg-transparent bg-[#104068]
      dark:bg-[#0a2942]
    "
  >
    <div class="container mx-auto p-4">
      <div class="flex items-center justify-center px-4">
        <img src="../assets/img/pk.png" class="w-64 h-full" alt="Logo" />
      </div>
    </div>
  </header>

  <div class="p-6 pt-[110px] min-h-screen dark:bg-gray-900">
    <router-view />
  </div>
</template>
