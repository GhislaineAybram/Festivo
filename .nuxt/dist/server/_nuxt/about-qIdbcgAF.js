import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@supabase/ssr";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@vue/devtools-api";
import "@primeuix/utils/eventbus";
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/utils/dom";
import "@primeuix/utils/uuid";
import "@primeuix/utils/zindex";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
const _imports_0 = "" + __buildAssetsURL("logo-vertical-Festivo-indigo.B_EzoJ1x.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-e6099b17><div class="about" data-v-e6099b17><h1 class="text-3xl font-bold mb-12" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.title"))}</h1><h3 class="text-xl font-bold mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.history.title", { website: "Festivo" }))}</h3><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.history.text_1"))}</p><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.history.text_2"))}</p><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.history.text_3", { website: "Festivo" }))}</p><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.history.text_4", { website: "Festivo" }))}</p><blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white text-center" data-v-e6099b17><svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14" data-v-e6099b17><path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" data-v-e6099b17></path></svg><div class="relative z-10" data-v-e6099b17><h4 class="text-gray-800 sm:text-xl dark:text-white" data-v-e6099b17><em data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.quote.text_1"))}</em></h4><h4 class="text-gray-800 sm:text-xl dark:text-white" data-v-e6099b17><em data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.quote.text_2", { website: "Festivo" }))}</em></h4></div><svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14" data-v-e6099b17><path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" data-v-e6099b17></path></svg></blockquote><h3 class="text-xl font-bold mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.values.title"))}</h3><ul class="list-disc list-inside mb-4" data-v-e6099b17><li class="mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.values.text_1"))}</li><li class="mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.values.text_2"))}</li><li class="mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.values.text_3", { website: "Festivo" }))}</li></ul><h3 class="text-xl font-bold mb-2" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.after.title"))}</h3><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.after.text_1", { website: "Festivo" }))}</p><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.after.text_2"))}</p><p class="mb-4" data-v-e6099b17>${ssrInterpolate(_ctx.$t("about.after.text_3"))}</p><img class="mx-auto h-36 w-auto"${ssrRenderAttr("src", _imports_0)} alt="Logo Festivo" data-v-e6099b17></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e6099b17"]]);
export {
  about as default
};
//# sourceMappingURL=about-qIdbcgAF.js.map
