<script setup>
defineProps({
  errors: {
    type: Object,
    required: false,
  },
  name: {
    type: [String, null],
    required: true,
  },
  email: {
    type: [String, null],
    required: true,
  },
  address: {
    type: [String, null],
    required: true,
  },
  suggestion: {
    type: [String, null],
    required: true,
  },
});

const emit = defineEmits([
  "submit",
  "update:name",
  "update:email",
  "update:address",
  "update:suggestion",
]);
</script>
<template>
  <form class="flex flex-col space-y-4">
    <div class="flex flex-col">
      <label class="dark:text-gray-300" for="name">Nama</label>
      <input
        type="text"
        id="name"
        :value="name"
        class="rounded-md dark:bg-gray-800 dark:text-gray-300"
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
        class="rounded-md dark:bg-gray-800 dark:text-gray-300"
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
      <label class="dark:text-gray-300" for="address">Alamat</label>
      <textarea
        id="address"
        class="rounded-md dark:bg-gray-800 dark:text-gray-300 h-24"
        :value="address"
        :class="{
          'border-red-500': errors?.address,
        }"
        @input="$emit('update:address', $event.target.value)"
      />
      <span class="mt-1 text-red-500" v-if="errors?.address">
        {{ errors.address[0] }}
      </span>
    </div>
    <div class="flex flex-col">
      <label class="dark:text-gray-300" for="address">Masukan</label>
      <textarea
        id="suggestion"
        class="rounded-md dark:bg-gray-800 dark:text-gray-300 h-24"
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

    <button
      @click.prevent="$emit('submit')"
      class="
        p-2
        mt-4
        w-full
        rounded-md
        text-white
        bg-indigo-500
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        dark:focus:ring-offset-gray-900
      "
    >
      Kirim Masukan
    </button>
  </form>
</template>