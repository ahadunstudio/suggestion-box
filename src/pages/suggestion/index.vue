<script setup>
import { reactive, ref } from "vue";
import config from "./config.json";
import { storeToRefs } from "pinia";
import { loadFull } from "tsparticles";
import { useSuggestion } from "~/stores/suggestion";

const modal = ref();

const suggestion = useSuggestion();
const { loading, error, success } = storeToRefs(suggestion);

const form = reactive({
  name: null,
  nip: null,
  rank: null,
  unit: null,
  participant: null,
  errors: null,
});

const onSubmit = async () => {
  await suggestion.send(form);
  modal.value.openModal();
};
</script>
<template>
  <div>
    <div class="container max-w-xl mx-auto">
      <v-suggestion-form
        @submit="onSubmit"
        :loading="loading"
        :errors="form.errors"
        v-model:name="form.name"
        v-model:nip="form.nip"
        v-model:rank="form.rank"
        v-model:unit="form.unit"
        v-model:participant="form.participant"
      />
    </div>

    <Particles
      id="tsparticles"
      :options="config"
      :particlesInit="async (engine) => loadFull(engine)"
    />

    <v-modal ref="modal" />
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