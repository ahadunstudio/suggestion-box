<script setup>
import { SparklesIcon } from "@heroicons/vue/solid";

defineProps({
  errors: {
    type: Object,
    required: false,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  name: {
    type: [String, null],
    required: true,
  },
  email: {
    type: [String, null],
    required: true,
  },
  suggestion: {
    type: [String, null],
    required: true,
  },
});

defineEmits(["submit", "update:name", "update:email", "update:suggestion"]);
</script>
<template>
  <form class="flex flex-col space-y-4">
    <div class="flex flex-col">
      <label class="dark:text-gray-300" for="name">Nama</label>
      <input
        type="text"
        id="name"
        :value="name"
        class="
          rounded-md
          dark:bg-gray-800 dark:text-gray-300
          focus:ring-[#1d68a6]
        "
        :class="{
          'border-red-500': errors?.name,
        }"
        @input="$emit('update:name', $event.target.value)"
      />
      <span class="mt-1 text-red-500" v-if="errors?.name">
        {{ errors.name[0] }}
      </span>
    </div>
    <div class="flex flex-col">
      <label class="dark:text-gray-300" for="email">Email</label>
      <input
        id="email"
        type="email"
        class="
          rounded-md
          dark:bg-gray-800 dark:text-gray-300
          focus:ring-[#1d68a6]
        "
        :value="email"
        :class="{
          'border-red-500': errors?.email,
        }"
        @input="$emit('update:email', $event.target.value)"
      />
      <span class="mt-1 text-red-500" v-if="errors?.email">
        {{ errors.email[0] }}
      </span>
    </div>
    <div class="flex flex-col">
      <label class="dark:text-gray-300" for="address">Masukan</label>
      <textarea
        id="suggestion"
        class="
          rounded-md
          dark:bg-gray-800 dark:text-gray-300
          focus:ring-[#1d68a6]
          h-24
        "
        :value="suggestion"
        :class="{
          'border-red-500': errors?.suggestion,
        }"
        @input="$emit('update:suggestion', $event.target.value)"
      />
      <span class="mt-1 text-red-500" v-if="errors?.suggestion">
        {{ errors.suggestion[0] }}
      </span>
    </div>

    <div class="w-full">
      <button
        @click.prevent="$emit('submit')"
        class="
          p-2
          mt-2
          flex
          w-full
          rounded-md
          justify-center
          items-center
          text-white
          bg-[#1d68a6]
          space-x-1
          dark:focus:ring-offset-gray-900
          disabled:bg-opacity-75 disabled:cursor-not-allowed
          focus:ring-2 focus:ring-offset-2 focus:ring-[#1d68a6]
        "
      >
        <SparklesIcon v-if="!loading" class="w-5 h-5" />
        <v-loading :state="true" class="mr-1" v-else />

        <span v-if="loading">Loading..</span>
        <span v-else>Kirim Masukan</span>
      </button>
    </div>

    <div class="mt-6 flex flex-col items-center justify-center">
      <div class="flex flex-col justify-center items-center space-y-2 mt-8">
        <span class="font-bold dark:text-gray-200">Organized By:</span>
        <img src="../../assets/img/logo.png" class="w-52 -ml-4" alt="Logo" />
      </div>
    </div>
  </form>
</template>