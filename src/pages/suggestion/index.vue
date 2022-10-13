<script setup>
import { reactive } from "vue";
import config from "./config.json";
import { storeToRefs } from "pinia";
import { loadFull } from "tsparticles";
import { useSuggestion } from "~/stores/suggestion";

const suggestion = useSuggestion();
const { loading, error, success } = storeToRefs(suggestion);

const form = reactive({
  name: null,
  email: null,
  suggestion: null,
  errors: null,
});
</script>
<template>
  <div>
    <div class="container max-w-xl mx-auto">
      <v-suggestion-form
        :loading="loading"
        :errors="form.errors"
        v-model:name="form.name"
        v-model:email="form.email"
        v-model:suggestion="form.suggestion"
        @submit="async () => await suggestion.send(form)"
      />
    </div>

    <Particles
      id="tsparticles"
      :options="config"
      :particlesInit="async (engine) => loadFull(engine)"
    />

    <v-modal :isOpen="success ? true : false" />
  </div>
</template>
<style lang="css" scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>