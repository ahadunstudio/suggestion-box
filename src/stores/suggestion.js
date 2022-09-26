import axios from "~/api/axios";
import { defineStore } from "pinia";

export const useSuggestion = defineStore("suggestion", {
  state: () => ({
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async send(form) {
      this.loading = true;

      try {
        const response = await axios.post(`/v1/suggestions`, form);
        if (response.status !== 201) {
          const { errors } = response.response.data;
          form.errors = errors;
        }

        if (response.status === 201) {
          this.success = response.data.message;

          // reset form
          Object.keys(form).forEach(function (key) {
            form[key] = null;
          });
        }
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
