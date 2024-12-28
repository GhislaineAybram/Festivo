import { _ as _export_sfc, e as __nuxt_component_0$1, u as useSupabaseClient, n as navigateTo, a as useFetch, b as useRuntimeConfig } from "../server.mjs";
import { defineComponent, computed, useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, createCommentVNode, withAsyncContext, watchEffect, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { s as script } from "./index-BLmzC9fX.js";
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
function getMonth$1(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long" });
}
function getDay$1(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}
const _sfc_main$2 = defineComponent({
  name: "CelebrationsList",
  props: {
    celebrations: {
      type: Array,
      required: true
    },
    userId: {
      type: String
    }
  },
  setup(props) {
    const formattedCelebrations = computed(
      () => props.celebrations.map((celebration) => ({
        ...celebration,
        dateMonth: getMonth$1(celebration.date),
        dateDay: getDay$1(celebration.date)
      }))
    );
    return { formattedCelebrations };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  if (_ctx.celebrations && _ctx.formattedCelebrations.length > 0) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-3" }, _attrs))} data-v-22ffb695><!--[-->`);
    ssrRenderList(_ctx.formattedCelebrations, (celebration) => {
      _push(`<div class="parent" data-v-22ffb695><div class="card" data-v-22ffb695><div class="card-image" style="${ssrRenderStyle({ backgroundImage: `url(${celebration.celebration_type.picture})` })}" data-v-22ffb695></div><div class="title" data-v-22ffb695><div class="category line-clamp-2" data-v-22ffb695>${ssrInterpolate(celebration.name)}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/celebrationadmin/${celebration.celebration_id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (celebration.author === _ctx.userId) {
              _push2(`<button class="edit-button" data-v-22ffb695${_scopeId}><svg class="edit-svgIcon" viewBox="0 0 512 512" data-v-22ffb695${_scopeId}><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" data-v-22ffb695${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              celebration.author === _ctx.userId ? (openBlock(), createBlock("button", {
                key: 0,
                class: "edit-button"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "edit-svgIcon",
                  viewBox: "0 0 512 512"
                }, [
                  createVNode("path", { d: "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" })
                ]))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="date-box" data-v-22ffb695><span class="date" data-v-22ffb695>${ssrInterpolate(celebration.dateDay)}</span><span class="month" data-v-22ffb695>${ssrInterpolate(celebration.dateMonth)}</span></div><div class="heading line-clamp-3" data-v-22ffb695>${ssrInterpolate(celebration.description)}</div><a class="action place-content-between"${ssrRenderAttr("href", `/celebration/${celebration.celebration_id}`)} data-v-22ffb695>${ssrInterpolate(_ctx.$t("welcome.event_link"))} <span aria-hidden="true" data-v-22ffb695>→</span></a></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-22ffb695><p data-v-22ffb695>${ssrInterpolate(_ctx.$t("celebration.no-celebration-created"))}</p></div>`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CelebrationCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-22ffb695"]]);
function getMonth(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long" });
}
function getDay(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}
const _sfc_main$1 = defineComponent({
  name: "CelebrationsList",
  props: {
    celebrations: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const formattedCelebrations = computed(
      () => props.celebrations.map((celebration) => ({
        ...celebration,
        dateMonth: getMonth(celebration.date),
        dateDay: getDay(celebration.date)
      }))
    );
    return { formattedCelebrations };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.celebrations && _ctx.formattedCelebrations.length > 0) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-3" }, _attrs))} data-v-88488648><!--[-->`);
    ssrRenderList(_ctx.formattedCelebrations, (celebration) => {
      _push(`<div class="parent" data-v-88488648><div class="card" data-v-88488648><div class="finished" data-v-88488648>${ssrInterpolate(_ctx.$t("celebration.finished"))}</div><div class="card-image" style="${ssrRenderStyle({ backgroundImage: `url(${celebration.celebration_type.picture})` })}" data-v-88488648></div><div class="category line-clamp-2" data-v-88488648>${ssrInterpolate(celebration.name)}</div><div class="date-box" data-v-88488648><span class="date" data-v-88488648>${ssrInterpolate(celebration.dateDay)}</span><span class="month" data-v-88488648>${ssrInterpolate(celebration.dateMonth)}</span></div><div class="heading line-clamp-3" data-v-88488648>${ssrInterpolate(celebration.description)}</div><a class="action place-content-between"${ssrRenderAttr("href", `/celebration/${celebration.celebration_id}`)} data-v-88488648>${ssrInterpolate(_ctx.$t("welcome.event_link"))} <span aria-hidden="true" data-v-88488648>→</span></a></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CelebrationCardPast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88488648"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { auth } = useSupabaseClient();
    const { data: { user } } = ([__temp, __restore] = withAsyncContext(() => auth.getUser()), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (!user) {
        return navigateTo("/login");
      }
    });
    const runtimeConfig = useRuntimeConfig();
    const { data: celebrationsByAuthor, error: celebrationsByAuthorError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/celebrations/author/${user.id}`,
      "$pqtWcjQkdb"
    )), __temp = await __temp, __restore(), __temp);
    if (celebrationsByAuthorError.value) {
      console.error(
        "Failed to fetch celebrations by author",
        celebrationsByAuthorError.value
      );
    }
    const { data: celebrationsByGuest, error: celebrationsByGuestError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/celebrations/guest/${user.id}`,
      "$cmRBlMwAGX"
    )), __temp = await __temp, __restore(), __temp);
    if (celebrationsByGuestError.value) {
      console.error(
        "Failed to fetch celebrations by guest",
        celebrationsByGuestError.value
      );
    }
    const celebrationsListByAuthor = computed(() => {
      var _a, _b;
      if (celebrationsByAuthor.value && "upcoming" in celebrationsByAuthor.value) {
        return {
          upcoming: ((_a = celebrationsByAuthor.value) == null ? void 0 : _a.upcoming) ?? [],
          past: ((_b = celebrationsByAuthor.value) == null ? void 0 : _b.past) ?? []
        };
      }
      return { upcoming: [], past: [] };
    });
    const celebrationsListByGuest = computed(() => {
      if (celebrationsByGuest.value && "upcoming" in celebrationsByGuest.value) {
        return {
          upcoming: celebrationsByGuest.value.upcoming ?? [],
          past: celebrationsByGuest.value.past ?? []
        };
      }
      return { upcoming: [], past: [] };
    });
    const upcomingCelebrationsCreated = computed(
      () => celebrationsListByAuthor.value.upcoming
    );
    const pastCelebrationsCreated = computed(
      () => celebrationsListByAuthor.value.past
    );
    const upcomingCelebrationsInvited = computed(
      () => celebrationsListByGuest.value.upcoming
    );
    const pastCelebrationsInvited = computed(
      () => celebrationsListByGuest.value.past
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CelebrationCard = __nuxt_component_0;
      const _component_CelebrationCardPast = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Button = script;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-37f7be3e>`);
      if (unref(user)) {
        _push(`<div data-v-37f7be3e><h1 class="w-full text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:tracking-tight" data-v-37f7be3e>${ssrInterpolate(_ctx.$t("welcome.events"))}</h1><div class="celebrations-gallery" data-v-37f7be3e>`);
        _push(ssrRenderComponent(_component_CelebrationCard, {
          celebrations: unref(upcomingCelebrationsCreated),
          "user-id": unref(user).id
        }, null, _parent));
        _push(`</div><div class="celebrations-gallery" data-v-37f7be3e>`);
        _push(ssrRenderComponent(_component_CelebrationCardPast, { celebrations: unref(pastCelebrationsCreated) }, null, _parent));
        _push(`</div><h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight" data-v-37f7be3e>${ssrInterpolate(_ctx.$t("welcome.invitations"))}</h1><div class="celebrations-gallery" data-v-37f7be3e>`);
        _push(ssrRenderComponent(_component_CelebrationCard, { celebrations: unref(upcomingCelebrationsInvited) }, null, _parent));
        _push(`</div><div class="celebrations-gallery" data-v-37f7be3e>`);
        _push(ssrRenderComponent(_component_CelebrationCardPast, { celebrations: unref(pastCelebrationsInvited) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-37f7be3e><h1 data-v-37f7be3e>${ssrInterpolate(_ctx.$t("welcome.not_logged"))}</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "Login with password",
                class: "mt-2 button-validation"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  label: "Login with password",
                  class: "mt-2 button-validation"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37f7be3e"]]);
export {
  index as default
};
//# sourceMappingURL=index-BrgOzg4t.js.map
