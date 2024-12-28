import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_i18n_t = resolveComponent("i18n-t");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-d495a1b8><div class="privacy" data-v-d495a1b8><h1 class="text-2xl font-bold mb-12" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.title"))}</h1><p id="updated" class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.version", { edited: "03/12/2024", updated: "03/12/2024" }))}</p><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.title"))}</h3><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_1", { website: "Festivo" }))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_2"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_3"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_4"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_5"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_1.text_6"))}</li></ul><p class="mb-4" data-v-d495a1b8>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "privacy.article_1.text_7" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://festivo-tawny.vercel.app/legal" data-v-d495a1b8${_scopeId}>https://festivo-tawny.vercel.app/legal</a>`);
      } else {
        return [
          createVNode("a", { href: "https://festivo-tawny.vercel.app/legal" }, "https://festivo-tawny.vercel.app/legal")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.title"))}</h3><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_1"))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_2"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_3"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_4"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_5"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_6"))}</li></ul><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_7"))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_8"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_9"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_2.text_10"))}</li></ul><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.title"))}</h3><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_1"))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_2"))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_3"))}</li></ul><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_4"))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_5", { website: "Festivo" }))}</li><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_1.text_6"))}</li></ul><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_2.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_2.text_1"))}</p><ul class="list-disc list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_2.text_2"))}</li></ul><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_2.text_3", { nb: "3" }))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_2.text_4"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_3.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_3.subarticle_3.text_1"))}</p><ul class="list-inside mb-4" data-v-d495a1b8><li class="mb-2" data-v-d495a1b8> Supabase Inc. </li><li class="mb-2" data-v-d495a1b8> 970 Toa Payoh N </li><li class="mb-2" data-v-d495a1b8> #07-04 </li><li class="mb-2" data-v-d495a1b8> Singapore </li><li class="mb-2" data-v-d495a1b8> support@supabase.com </li></ul><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.title"))}</h3><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_1.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_1.text_1", { website: "Festivo" }))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_1.text_2"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_1.text_3", { email: "g.aybram.festivo@gmail.com" }))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_2.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_2.text_1"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_2.text_2"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_2.text_3"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_4.subarticle_2.text_4"))}</p><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.title"))}</h3><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.text_1"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.text_2"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.text_3", { nb: "30" }))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_1.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_1.text_1"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_1.text_2"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_2.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_2.text_1"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_3.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_3.text_1"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_3.text_2"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_4.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_4.text_1"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_5.title"))}</h4><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_5.text_1"))}</p><h4 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_5.subarticle_6.title"))}</h4><p class="mb-4" data-v-d495a1b8>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "privacy.article_5.subarticle_6.text_1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://www.cnil.fr/" data-v-d495a1b8${_scopeId}>https://www.cnil.fr</a>`);
      } else {
        return [
          createVNode("a", { href: "https://www.cnil.fr/" }, "https://www.cnil.fr")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 class="text-xl font-bold mb-2" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_6.title"))}</h3><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_6.text_1", { website: "Festivo" }))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_6.text_2"))}</p><p class="mb-4" data-v-d495a1b8>${ssrInterpolate(_ctx.$t("privacy.article_6.text_3"))}</p></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d495a1b8"]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-D9C9cYvZ.js.map
