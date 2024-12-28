import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { s as script } from "./index-BLmzC9fX.js";
import { EnvelopeOpenIcon, CalendarIcon, ClockIcon, MapPinIcon, InformationCircleIcon, UsersIcon, GiftIcon, MusicalNoteIcon, TrophyIcon } from "@heroicons/vue/24/outline";
import { u as useSupabaseClient, a as useFetch, b as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "@primeuix/utils/object";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "@supabase/ssr";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@primeuix/utils/eventbus";
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/dom";
import "@primeuix/utils/uuid";
import "@primeuix/utils/zindex";
import "@headlessui/vue";
const defaultAvatarUrl = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { id } = useRoute().params;
    const { auth } = useSupabaseClient();
    const {
      data: { user }
    } = ([__temp, __restore] = withAsyncContext(() => auth.getUser()), __temp = await __temp, __restore(), __temp);
    const userId = user == null ? void 0 : user.id;
    const runtimeConfig = useRuntimeConfig();
    const { data: celebration, error: celebrationError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
      "$ci8EVDZZMN"
    )), __temp = await __temp, __restore(), __temp);
    if (celebrationError.value) {
      console.error("Failed to fetch celebration data", celebrationError.value);
    }
    const { data: guestsList, error: guestsListError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/guests/celebration/${id}`,
      "$Cixiz2D6g0"
    )), __temp = await __temp, __restore(), __temp);
    if (guestsListError.value) {
      console.error(
        "Failed to fetch nb of guest celebration",
        guestsListError.value
      );
    }
    const nbGuests = computed(() => guestsList.value.nb_guests || 0);
    const guestInfoList = computed(() => guestsList.value.guests_list || []);
    const checkAndRegisterInvitedUser = async () => {
      const response = await $fetch(`/api/guest`, {
        method: "POST",
        body: {
          user_id: userId,
          celebration_id: id
        }
      });
      if (response.error) {
        console.error(
          `Erreur lors de la création de l'invitation :`,
          response.error
        );
        return;
      }
    };
    checkAndRegisterInvitedUser();
    const { data: isComing, error: isComingError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/guest/${userId}/${id}`,
      "$inWnIFKy7d"
    )), __temp = await __temp, __restore(), __temp);
    if (isComingError.value) {
      console.error("Failed to fetch guest response data", isComingError.value);
    }
    async function updateIsComingGuestInDatabase(guestResponse) {
      const response = await $fetch(`/api/guest/${userId}/${id}`, {
        method: "POST",
        body: {
          userId,
          celebrationId: id,
          isComing: guestResponse
        }
      });
      if (response.error) {
        console.error(
          `Erreur lors de la mise à jour de la réponse :`,
          response.error
        );
        return;
      }
      isComing.value = guestResponse;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-ee577e12><div class="bg-white" data-v-ee577e12><div class="grid grid-cols-1 sm:grid-cols-2" data-v-ee577e12><div id="photo-title-celebration" data-v-ee577e12><h1 class="text-3xl font-bold sm:text-4xl" data-v-ee577e12>${ssrInterpolate((_a = unref(celebration)) == null ? void 0 : _a.name)}</h1><img${ssrRenderAttr("src", (_b = unref(celebration)) == null ? void 0 : _b.celebration_type.picture)} alt="photo de ballons" class="photo-celebration" data-v-ee577e12><p id="celebration-author-name" class="mt-4 text-gray-500" data-v-ee577e12>${ssrInterpolate(_ctx.$t("celebration.created"))} ${ssrInterpolate((_c = unref(celebration)) == null ? void 0 : _c.author.firstname)}</p></div><div id="important-info" class="content-center" data-v-ee577e12><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(EnvelopeOpenIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12>${ssrInterpolate(_ctx.$t("celebration.answer"))}</div></div><div id="celebration-answer" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(script), {
        icon: "pi pi-check",
        severity: "success",
        rounded: "",
        "aria-label": "Filter",
        class: { "opacity-40": unref(isComing) !== true },
        onClick: ($event) => updateIsComingGuestInDatabase(true)
      }, null, _parent));
      _push(ssrRenderComponent(unref(script), {
        icon: "pi pi-bell",
        severity: "warn",
        rounded: "",
        "aria-label": "Notification",
        class: { "opacity-40": unref(isComing) !== null },
        onClick: ($event) => updateIsComingGuestInDatabase(null)
      }, null, _parent));
      _push(ssrRenderComponent(unref(script), {
        icon: "pi pi-times",
        severity: "danger",
        rounded: "",
        "aria-label": "Cancel",
        class: { "opacity-40": unref(isComing) !== false },
        onClick: ($event) => updateIsComingGuestInDatabase(false)
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(CalendarIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12>${ssrInterpolate(_ctx.$t("celebration.date"))}</div></div><div class="text-sm text-gray-500 self-center" data-v-ee577e12>${ssrInterpolate(_ctx.$d((_d = unref(celebration)) == null ? void 0 : _d.date, { year: "numeric", month: "long", day: "numeric" }))}</div></div><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(ClockIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12>${ssrInterpolate(_ctx.$t("celebration.hour"))}</div></div><div class="text-sm text-gray-500 self-center" data-v-ee577e12>${ssrInterpolate(_ctx.$d(/* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}T${(_e = unref(celebration)) == null ? void 0 : _e.hour}`), { hour: "2-digit", minute: "2-digit" }))}</div></div><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(MapPinIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12>${ssrInterpolate(_ctx.$t("celebration.address"))}</div></div><div class="text-sm text-gray-500 self-center" data-v-ee577e12>${ssrInterpolate((_f = unref(celebration)) == null ? void 0 : _f.address)}</div></div><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12> Info annexes </div></div><div class="text-sm text-gray-500 self-center" data-v-ee577e12> blablabla </div></div></div></div><h3 class="text-2xl text-gray-900 text-center" data-v-ee577e12>${ssrInterpolate((_g = unref(celebration)) == null ? void 0 : _g.description)}</h3><div id="option-info" class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4" data-v-ee577e12><div class="flex items-center" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(UsersIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="font-medium text-gray-900 flex px-2" data-v-ee577e12>${ssrInterpolate(unref(nbGuests))} ${ssrInterpolate(_ctx.$t("celebration.guests"))}</div></div><div class="flex space-x-1" data-v-ee577e12><!--[-->`);
      ssrRenderList(unref(guestInfoList), (guest, index) => {
        _push(`<div data-v-ee577e12><div style="${ssrRenderStyle({
          backgroundImage: `url(${guest.user_id.avatar.picture || defaultAvatarUrl})`
        })}"${ssrRenderAttr(
          "alt",
          guest.user_id.avatar.picture_description || "User avatar"
        )} class="${ssrRenderClass([{
          "ring-green-500": guest.is_coming === true,
          "ring-red-500": guest.is_coming === false,
          "ring-gray-500": guest.is_coming === null
        }, "inline-block size-12 rounded-full ring-2 guest-avatar"])}" data-v-ee577e12></div><p class="mt-2 text-xs text-gray-900 text-center" data-v-ee577e12>${ssrInterpolate(guest.user_id.alias)}</p></div>`);
      });
      _push(`<!--]--></div><div class="border-t border-gray-200 pt-4 flex" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(GiftIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="flex items-center" data-v-ee577e12><div class="font-medium text-gray-900 flex px-2" data-v-ee577e12> Lien cagnotte </div></div></div><div class="border-t border-gray-200 pt-4 flex" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(MusicalNoteIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="flex items-center" data-v-ee577e12><div class="font-medium text-gray-900 flex px-2" data-v-ee577e12> Playlist participative </div></div></div><div class="border-t border-gray-200 pt-4 flex" data-v-ee577e12>`);
      _push(ssrRenderComponent(unref(TrophyIcon), { class: "icon rounded-lg size-8 text-white p-1.5" }, null, _parent));
      _push(`<div class="flex items-center" data-v-ee577e12><div class="font-medium text-gray-900 flex px-2" data-v-ee577e12> Concours déguisement </div></div></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/celebration/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee577e12"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-DkTxbVBa.js.map
