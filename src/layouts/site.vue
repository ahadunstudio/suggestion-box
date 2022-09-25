<script setup>
import { ref, onMounted } from "vue";
import { currentTheme, switchTheme } from "~/composables/theme.js";
import { SunIcon, MoonIcon, ArchiveIcon } from "@heroicons/vue/outline";

const navbar = ref(null);

onMounted(() => {
  window.onscroll = function () {
    if (window.pageYOffset > navbar.value?.offsetTop) {
      navbar.value?.classList.add("navbar-fixed");
    } else {
      navbar.value?.classList.remove("navbar-fixed");
    }
  };
});
</script>
<template>
  <header
    ref="navbar"
    class="
      z-10
      flex
      top-0
      left-0
      w-full
      absolute
      bg-white
      items-center
      bg-transparent
      dark:bg-gray-900 dark:bg-transparent
    "
  >
    <div class="container mx-auto p-4">
      <div class="flex items-center justify-between px-4">
        <h1 class="flex flex-row items-center text-gray-700 dark:text-gray-400">
          <ArchiveIcon class="w-8 h-8" />
          <span class="ml-2 text-2xl uppercase font-extrabold">box</span>
        </h1>

        <button
          @click.prevent="switchTheme()"
          class="
            p-1
            bg-gray-200
            dark:bg-gray-700
            rounded-md
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-200
            dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900
          "
        >
          <SunIcon
            v-if="currentTheme == 'light'"
            class="w-5 h-5 text-gray-600"
          />
          <MoonIcon
            v-if="currentTheme == 'dark'"
            class="w-5 h-5 text-gray-200"
          />
        </button>
      </div>
    </div>
  </header>

  <div class="p-6 pt-[110px] min-h-screen dark:bg-gray-900">
    <router-view />
  </div>
</template>
