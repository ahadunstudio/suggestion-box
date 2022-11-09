<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openModal = () => (isOpen.value = true);
const closeModal = () => (isOpen.value = false);

defineExpose({
  openModal,
  closeModal,
});
</script>
<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-show="isOpen"
  >
    <div class="fixed inset-0 bg-gray-800/50 backdrop-blur-sm"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="p-4 flex min-h-full justify-center text-center items-center">
        <div
          class="
            relative
            transform
            rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            overflow-hidden
            sm:my-8 sm:w-full sm:max-w-lg
          "
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-24 h-24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>

            <div class="mt-3 text-center">
              <h1 class="text-xl font-bold leading-6 text-gray-900">
                Berhasil melakukan registrasi peserta
              </h1>
            </div>
          </div>
          <div
            class="
              bg-gray-50
              px-4
              py-3
              min-full
              flex
              justify-center
              items-center
            "
          >
            <button
              @click.prevent="closeModal"
              type="button"
              class="
                inline-flex
                w-full
                justify-center
                rounded-md
                border border-transparent
                bg-red-600
                px-[50px]
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                hover:bg-red-700
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                focus:ring-offset-2
                sm:ml-3 sm:w-auto sm:text-sm
              "
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>