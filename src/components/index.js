import ImgBlur from "~/components/img.vue";
import Alert from "~/components/alert.vue";
import Loading from "~/components/loading.vue";
import Container from "~/components/container.vue";
import VueMarkdown from "vue-markdown-render";
import SuggestionForm from "~/components/suggestion/form.vue";

export default {
  install(app, config) {
    // common
    app.component("v-img", ImgBlur);
    app.component("v-alert", Alert);
    app.component("v-loading", Loading);
    app.component("v-container", Container);
    app.component("vue-markdown", VueMarkdown);
    app.component("v-suggestion-form", SuggestionForm);
  },
};
