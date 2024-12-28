import { e as __nuxt_component_0, u as useSupabaseClient, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, withAsyncContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { RocketLaunchIcon } from "@heroicons/vue/24/outline";
import { _ as _sfc_main$2 } from "./index-iDB5evnO.js";
import { a as script } from "./index-gd6vYtRz.js";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./index-BLmzC9fX.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertCelebrationCreation",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: open.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-10",
              onClose: ($event) => open.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 z-10 w-screen overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"${_scopeId4}><div class="sm:flex sm:items-start"${_scopeId4}><div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(RocketLaunchIcon), {
                                class: "h-6 w-6 text-green-600",
                                "aria-hidden": "true"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-base font-semibold leading-6 text-gray-900"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("celebration.successfull"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("celebration.successfull")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(_ctx.$t("celebration.success_message"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"${_scopeId5}>${ssrInterpolate(_ctx.$t("button.ok"))}</button>`);
                                  } else {
                                    return [
                                      createVNode("button", {
                                        ref: "cancelButtonRef",
                                        type: "button",
                                        class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                        onClick: ($event) => open.value = false
                                      }, toDisplayString(_ctx.$t("button.ok")), 9, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                  createVNode("div", { class: "sm:flex sm:items-start" }, [
                                    createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                      createVNode(unref(RocketLaunchIcon), {
                                        class: "h-6 w-6 text-green-600",
                                        "aria-hidden": "true"
                                      })
                                    ]),
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("celebration.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("celebration.success_message")), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode(_component_NuxtLink, { to: "/" }, {
                                    default: withCtx(() => [
                                      createVNode("button", {
                                        ref: "cancelButtonRef",
                                        type: "button",
                                        class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                        onClick: ($event) => open.value = false
                                      }, toDisplayString(_ctx.$t("button.ok")), 9, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                createVNode("div", { class: "sm:flex sm:items-start" }, [
                                  createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                    createVNode(unref(RocketLaunchIcon), {
                                      class: "h-6 w-6 text-green-600",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("celebration.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("celebration.success_message")), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode(_component_NuxtLink, { to: "/" }, {
                                  default: withCtx(() => [
                                    createVNode("button", {
                                      ref: "cancelButtonRef",
                                      type: "button",
                                      class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                      onClick: ($event) => open.value = false
                                    }, toDisplayString(_ctx.$t("button.ok")), 9, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 z-10 w-screen overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                          "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                  createVNode("div", { class: "sm:flex sm:items-start" }, [
                                    createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                      createVNode(unref(RocketLaunchIcon), {
                                        class: "h-6 w-6 text-green-600",
                                        "aria-hidden": "true"
                                      })
                                    ]),
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("celebration.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("celebration.success_message")), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode(_component_NuxtLink, { to: "/" }, {
                                    default: withCtx(() => [
                                      createVNode("button", {
                                        ref: "cancelButtonRef",
                                        type: "button",
                                        class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                        onClick: ($event) => open.value = false
                                      }, toDisplayString(_ctx.$t("button.ok")), 9, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                class: "relative z-10",
                onClose: ($event) => open.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 z-10 w-screen overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                createVNode("div", { class: "sm:flex sm:items-start" }, [
                                  createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                    createVNode(unref(RocketLaunchIcon), {
                                      class: "h-6 w-6 text-green-600",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("celebration.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("celebration.success_message")), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode(_component_NuxtLink, { to: "/" }, {
                                  default: withCtx(() => [
                                    createVNode("button", {
                                      ref: "cancelButtonRef",
                                      type: "button",
                                      class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                      onClick: ($event) => open.value = false
                                    }, toDisplayString(_ctx.$t("button.ok")), 9, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertCelebrationCreation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "creation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { auth } = useSupabaseClient();
    const { data: { user } } = ([__temp, __restore] = withAsyncContext(() => auth.getUser()), __temp = await __temp, __restore(), __temp);
    const celebrationTitle = ref("");
    const celebrationType = ref("");
    const celebrationDescription = ref("");
    const celebrationDate = ref();
    const celebrationTime = ref();
    const celebrationAddress = ref("");
    const creationSuccess = ref(false);
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DatePicker = script;
      const _component_AlertCelebrationCreation = _sfc_main$1;
      const _component_AlertNotLoggedIn = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main flex flex-col items-center" }, _attrs))} data-v-ac0358b7>`);
      if (unref(user)) {
        _push(`<div id="celebration-details" data-v-ac0358b7><div class="mx-auto mt-4 max-w-2xl text-center" data-v-ac0358b7><h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.creation-title"))}</h1></div><form method="POST" class="mx-auto mt-10 max-w-xl sm:mt-10" data-v-ac0358b7><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" data-v-ac0358b7><div data-v-ac0358b7><label for="celebration-title" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.title"))}</label><div class="mt-2.5" data-v-ac0358b7><input id="celebration-title"${ssrRenderAttr("value", celebrationTitle.value)} type="text" name="celebration-title" autocomplete="celebration-title" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-ac0358b7></div></div><div data-v-ac0358b7><label for="celebration-type" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.type"))}</label><div class="mt-2.5" data-v-ac0358b7><select id="celebration-type" name="celebration-type" autocomplete="celebration-type" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-ac0358b7><option value="" disabled data-v-ac0358b7${ssrIncludeBooleanAttr(Array.isArray(celebrationType.value) ? ssrLooseContain(celebrationType.value, "") : ssrLooseEqual(celebrationType.value, "")) ? " selected" : ""}> Choisissez un type </option><option value="d016615d-6ca8-42a9-9abb-54a35a3234df" data-v-ac0358b7${ssrIncludeBooleanAttr(Array.isArray(celebrationType.value) ? ssrLooseContain(celebrationType.value, "d016615d-6ca8-42a9-9abb-54a35a3234df") : ssrLooseEqual(celebrationType.value, "d016615d-6ca8-42a9-9abb-54a35a3234df")) ? " selected" : ""}> Anniversary </option><option value="3d41671f-6103-480f-b3ae-16191fb1bd11" data-v-ac0358b7${ssrIncludeBooleanAttr(Array.isArray(celebrationType.value) ? ssrLooseContain(celebrationType.value, "3d41671f-6103-480f-b3ae-16191fb1bd11") : ssrLooseEqual(celebrationType.value, "3d41671f-6103-480f-b3ae-16191fb1bd11")) ? " selected" : ""}> Baby shower </option><option value="1bbb698b-6276-4e1f-91a0-544e045fca71" data-v-ac0358b7${ssrIncludeBooleanAttr(Array.isArray(celebrationType.value) ? ssrLooseContain(celebrationType.value, "1bbb698b-6276-4e1f-91a0-544e045fca71") : ssrLooseEqual(celebrationType.value, "1bbb698b-6276-4e1f-91a0-544e045fca71")) ? " selected" : ""}> New Year </option></select></div></div><div class="sm:col-span-2" data-v-ac0358b7><label for="celebration-description" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.description"))}</label><div class="mt-2.5" data-v-ac0358b7><textarea id="celebration-description" name="celebration-description" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-ac0358b7>${ssrInterpolate(celebrationDescription.value)}</textarea></div></div><div data-v-ac0358b7><label for="celebration-date" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.date"))}</label><div class="mt-2.5" data-v-ac0358b7>`);
        _push(ssrRenderComponent(_component_DatePicker, {
          id: "datepicker-month",
          modelValue: celebrationDate.value,
          "onUpdate:modelValue": ($event) => celebrationDate.value = $event,
          class: "flex-auto",
          "date-format": "dd/mm/yy",
          variant: "filled",
          "show-icon": "",
          fluid: "",
          "show-on-focus": false,
          "input-id": "buttondisplay"
        }, null, _parent));
        _push(`</div></div><div data-v-ac0358b7><label for="celebration-hour" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.hour"))}</label><div class="mt-2.5" data-v-ac0358b7>`);
        _push(ssrRenderComponent(_component_DatePicker, {
          id: "datepicker-timeonly",
          modelValue: celebrationTime.value,
          "onUpdate:modelValue": ($event) => celebrationTime.value = $event,
          "time-only": "",
          fluid: ""
        }, null, _parent));
        _push(`</div></div><div class="sm:col-span-2" data-v-ac0358b7><label for="celebration-address" class="block text-sm font-semibold leading-6 text-gray-900" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.address"))}</label><div class="mt-2.5" data-v-ac0358b7><input id="celebration-address"${ssrRenderAttr("value", celebrationAddress.value)} type="text" name="celebration-address" autocomplete="celebration-address" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-ac0358b7></div></div></div><div class="mt-10" data-v-ac0358b7>`);
        if (errorMsg.value) {
          _push(`<span class="text-sm text-red-500" data-v-ac0358b7>${ssrInterpolate(errorMsg.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button id="celebration-creation" type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-v-ac0358b7>${ssrInterpolate(_ctx.$t("celebration.creation-button"))}</button></div></form>`);
        if (creationSuccess.value) {
          _push(ssrRenderComponent(_component_AlertCelebrationCreation, { class: "alert" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div data-v-ac0358b7>`);
        _push(ssrRenderComponent(_component_AlertNotLoggedIn, { class: "alert" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/celebrationadmin/creation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac0358b7"]]);
export {
  creation as default
};
//# sourceMappingURL=creation-MoygfRXZ.js.map
