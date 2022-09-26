<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useSuggestion } from "~/stores/suggestion";

const suggestion = useSuggestion();
const { loading, error, success } = storeToRefs(suggestion);

const form = reactive({
  name: null,
  email: null,
  address: null,
  suggestion: null,
  errors: null,
});
</script>
<template>
  <div class="container mx-auto">
    <div v-show="error" class="text-center mb-10">{{ error }}</div>
    <div v-show="success" class="text-center mb-10">{{ success }}</div>

    <v-suggestion-form
      :errors="form.errors"
      v-model:name="form.name"
      v-model:email="form.email"
      v-model:address="form.address"
      v-model:suggestion="form.suggestion"
      @submit="async () => await suggestion.send(form)"
    />
  </div>
</template>