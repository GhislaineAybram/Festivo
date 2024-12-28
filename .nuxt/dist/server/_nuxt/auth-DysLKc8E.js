import { k as defineNuxtRouteMiddleware, j as useSupabaseUser } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
const auth = defineNuxtRouteMiddleware((_to, _from) => {
  useSupabaseUser();
});
export {
  auth as default
};
//# sourceMappingURL=auth-DysLKc8E.js.map
