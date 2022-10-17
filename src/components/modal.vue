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
            <img src="../assets/img/landing.jpg" alt="Image" />

            <div class="mt-3 text-center">
              <h1 class="text-xl font-bold leading-6 text-gray-900">
                Selamat Datang di Acara Raker Korporat 2022
              </h1>
              <div class="mt-3">
                <p class="text-sm text-gray-500">
                  Untuk para audiens yang cantik dan tampan, silahkan sampaikan
                  pesan indah kalian ke form yang telah disediakan. Jujurly kami
                  akan sangat senang jika masukan itu apa adanya, seperti kamu
                  yang menerima aku apa adanya.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                px-4
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
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>