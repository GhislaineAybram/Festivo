import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
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
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-fc9271e6><div class="legal" data-v-fc9271e6><h1 class="text-3xl font-bold mb-12" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.title"))}</h1><p class="mb-4" data-v-fc9271e6>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "legal.introduction.text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164" data-v-fc9271e6${_scopeId}>${ssrInterpolate(_ctx.$t("legal.introduction.link_text"))}</a>`);
      } else {
        return [
          createVNode("a", { href: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164" }, toDisplayString(_ctx.$t("legal.introduction.link_text")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.edition.title"))}</h3><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.edition.text_1", { url: "https://festivo-tawny.vercel.app" }))}</p><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.edition.text_2", { director: "Ghislaine AYBRAM", address: "1 avenue Victor Hugo 92190 MEUDON" }))}</p><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.edition.text_3", { director: "Ghislaine AYBRAM" }))}</p><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.hosting.title"))}</h3><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.hosting.text"))}</p><ul class="list-inside mb-4" data-v-fc9271e6><li class="mb-2" data-v-fc9271e6> Vercel Inc. </li><li class="mb-2" data-v-fc9271e6> 440 N Barranca Avenue #4133 </li><li class="mb-2" data-v-fc9271e6> Covina, CA 91723 </li><li class="mb-2" data-v-fc9271e6> United States </li><li class="mb-2" data-v-fc9271e6> +1 559-288-7060 </li></ul><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.properties.title"))}</h3><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.properties.text_1", { director: "Ghislaine AYBRAM" }))}</p><p class="mb-4" data-v-fc9271e6>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "legal.properties.text_2.text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082" data-v-fc9271e6${_scopeId}>${ssrInterpolate(_ctx.$t("legal.properties.text_2.link_text"))}</a>`);
      } else {
        return [
          createVNode("a", { href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082" }, toDisplayString(_ctx.$t("legal.properties.text_2.link_text")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.contact.title"))}</h3><ul class="list-inside mb-4" data-v-fc9271e6><li class="mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.contact.text_1", { phone: "+336 80 78 52 38" }))}</li><li class="mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.contact.text_2", { email: "g.aybram.festivo@gmail.com" }))}</li><li class="mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.contact.text_3", { address: "1 avenue Victor Hugo 92190 MEUDON" }))}</li></ul><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.privacy.title"))}</h3><p class="mb-4" data-v-fc9271e6>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "legal.privacy.text_1.text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000886460/LEGISCTA000037804929/" data-v-fc9271e6${_scopeId}>${ssrInterpolate(_ctx.$t("legal.privacy.text_1.link_text"))}</a>`);
      } else {
        return [
          createVNode("a", { href: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000886460/LEGISCTA000037804929/" }, toDisplayString(_ctx.$t("legal.privacy.text_1.link_text")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="mb-4" data-v-fc9271e6>`);
  _push(ssrRenderComponent(_component_i18n_t, { keypath: "legal.privacy.text_2.text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="https://festivo-tawny.vercel.app/privacy" data-v-fc9271e6${_scopeId}>${ssrInterpolate(_ctx.$t("legal.privacy.text_2.link_text"))}</a>`);
      } else {
        return [
          createVNode("a", { href: "https://festivo-tawny.vercel.app/privacy" }, toDisplayString(_ctx.$t("legal.privacy.text_2.link_text")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 class="text-xl font-bold mb-2" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.jurisdiction.title"))}</h3><p class="mb-4" data-v-fc9271e6>${ssrInterpolate(_ctx.$t("legal.jurisdiction.text", { url: "https://festivo-tawny.vercel.app" }))}</p></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const legal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fc9271e6"]]);
export {
  legal as default
};
//# sourceMappingURL=legal-DwM0xIWH.js.map
