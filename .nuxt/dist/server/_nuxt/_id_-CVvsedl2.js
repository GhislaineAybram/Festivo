import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, openBlock, createBlock, Transition, withDirectives, resolveDynamicComponent, createElementVNode, renderSlot, vShow, createCommentVNode, normalizeClass, resolveDirective, resolveComponent, createElementBlock, Fragment, renderList, withAsyncContext, watch, computed, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";
import { _ as _export_sfc, e as __nuxt_component_0$1, B as BaseStyle, s as script$5, R as Ripple, U as UniqueComponentId, a as useFetch, b as useRuntimeConfig, u as useSupabaseClient, n as navigateTo } from "../server.mjs";
import { a as script$6, b as script$7, s as script$8, _ as _sfc_main$4 } from "./index-iDB5evnO.js";
import { findSingle, getAttribute, focus } from "@primeuix/utils/dom";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@supabase/ssr";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@primeuix/utils/eventbus";
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/utils/uuid";
import "@primeuix/utils/zindex";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AlertDeleteAccount",
  __ssrInlineRender: true,
  emits: ["confirm", "cancel"],
  setup(__props) {
    const open = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
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
                        _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-c192253b${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 z-10 w-screen overflow-y-auto" data-v-c192253b${_scopeId2}><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" data-v-c192253b${_scopeId2}>`);
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
                              _push5(`<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" data-v-c192253b${_scopeId4}><div class="sm:flex sm:items-start" data-v-c192253b${_scopeId4}><div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" data-v-c192253b${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(ExclamationTriangleIcon), {
                                class: "h-6 w-6 text-red-600",
                                "aria-hidden": "true"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" data-v-c192253b${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-base font-semibold leading-6 text-gray-900"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("alert.delete_account.title"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("alert.delete_account.title")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2" data-v-c192253b${_scopeId4}><p class="text-sm text-gray-700 mb-4" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("alert.delete_account.subtitle"))}</p><div class="explanation" data-v-c192253b${_scopeId4}><p class="text-sm text-gray-500" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("alert.delete_account.text_1"))}</p><ul class="list-disc list-inside text-sm text-gray-500" data-v-c192253b${_scopeId4}><li class="mb-1" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("alert.delete_account.text_2"))}</li><li class="mb-1" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("alert.delete_account.text_3"))}</li><li class="mb-1" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("alert.delete_account.text_4"))}</li></ul></div></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" data-v-c192253b${_scopeId4}><button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("button.delete"))}</button><button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" data-v-c192253b${_scopeId4}>${ssrInterpolate(_ctx.$t("button.cancel"))}</button></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                  createVNode("div", { class: "sm:flex sm:items-start" }, [
                                    createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                      createVNode(unref(ExclamationTriangleIcon), {
                                        class: "h-6 w-6 text-red-600",
                                        "aria-hidden": "true"
                                      })
                                    ]),
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("alert.delete_account.title")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-700 mb-4" }, toDisplayString(_ctx.$t("alert.delete_account.subtitle")), 1),
                                        createVNode("div", { class: "explanation" }, [
                                          createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("alert.delete_account.text_1")), 1),
                                          createVNode("ul", { class: "list-disc list-inside text-sm text-gray-500" }, [
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_2")), 1),
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_3")), 1),
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_4")), 1)
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                                    onClick: ($event) => _ctx.$emit("confirm")
                                  }, toDisplayString(_ctx.$t("button.delete")), 9, ["onClick"]),
                                  createVNode("button", {
                                    ref: "cancelButtonRef",
                                    type: "button",
                                    class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                    onClick: ($event) => _ctx.$emit("cancel")
                                  }, toDisplayString(_ctx.$t("button.cancel")), 9, ["onClick"])
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
                                  createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                    createVNode(unref(ExclamationTriangleIcon), {
                                      class: "h-6 w-6 text-red-600",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("alert.delete_account.title")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-700 mb-4" }, toDisplayString(_ctx.$t("alert.delete_account.subtitle")), 1),
                                      createVNode("div", { class: "explanation" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("alert.delete_account.text_1")), 1),
                                        createVNode("ul", { class: "list-disc list-inside text-sm text-gray-500" }, [
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_2")), 1),
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_3")), 1),
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_4")), 1)
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                                  onClick: ($event) => _ctx.$emit("confirm")
                                }, toDisplayString(_ctx.$t("button.delete")), 9, ["onClick"]),
                                createVNode("button", {
                                  ref: "cancelButtonRef",
                                  type: "button",
                                  class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                  onClick: ($event) => _ctx.$emit("cancel")
                                }, toDisplayString(_ctx.$t("button.cancel")), 9, ["onClick"])
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
                                    createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                      createVNode(unref(ExclamationTriangleIcon), {
                                        class: "h-6 w-6 text-red-600",
                                        "aria-hidden": "true"
                                      })
                                    ]),
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("alert.delete_account.title")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-700 mb-4" }, toDisplayString(_ctx.$t("alert.delete_account.subtitle")), 1),
                                        createVNode("div", { class: "explanation" }, [
                                          createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("alert.delete_account.text_1")), 1),
                                          createVNode("ul", { class: "list-disc list-inside text-sm text-gray-500" }, [
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_2")), 1),
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_3")), 1),
                                            createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_4")), 1)
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                                    onClick: ($event) => _ctx.$emit("confirm")
                                  }, toDisplayString(_ctx.$t("button.delete")), 9, ["onClick"]),
                                  createVNode("button", {
                                    ref: "cancelButtonRef",
                                    type: "button",
                                    class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                    onClick: ($event) => _ctx.$emit("cancel")
                                  }, toDisplayString(_ctx.$t("button.cancel")), 9, ["onClick"])
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
                                  createVNode("div", { class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                                    createVNode(unref(ExclamationTriangleIcon), {
                                      class: "h-6 w-6 text-red-600",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("alert.delete_account.title")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-700 mb-4" }, toDisplayString(_ctx.$t("alert.delete_account.subtitle")), 1),
                                      createVNode("div", { class: "explanation" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("alert.delete_account.text_1")), 1),
                                        createVNode("ul", { class: "list-disc list-inside text-sm text-gray-500" }, [
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_2")), 1),
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_3")), 1),
                                          createVNode("li", { class: "mb-1" }, toDisplayString(_ctx.$t("alert.delete_account.text_4")), 1)
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                                  onClick: ($event) => _ctx.$emit("confirm")
                                }, toDisplayString(_ctx.$t("button.delete")), 9, ["onClick"]),
                                createVNode("button", {
                                  ref: "cancelButtonRef",
                                  type: "button",
                                  class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                  onClick: ($event) => _ctx.$emit("cancel")
                                }, toDisplayString(_ctx.$t("button.cancel")), 9, ["onClick"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertDeleteAccount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c192253b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AlertDeleteSuccess",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
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
                              _push5(ssrRenderComponent(unref(InformationCircleIcon), {
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
                                    _push6(`${ssrInterpolate(_ctx.$t("delete.success.title"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("delete.success.title")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(_ctx.$t("delete.success.subtitle"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"${_scopeId4}>`);
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
                                      createVNode(unref(InformationCircleIcon), {
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
                                          createTextVNode(toDisplayString(_ctx.$t("delete.success.title")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("delete.success.subtitle")), 1)
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
                                    createVNode(unref(InformationCircleIcon), {
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
                                        createTextVNode(toDisplayString(_ctx.$t("delete.success.title")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("delete.success.subtitle")), 1)
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
                                      createVNode(unref(InformationCircleIcon), {
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
                                          createTextVNode(toDisplayString(_ctx.$t("delete.success.title")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("delete.success.subtitle")), 1)
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
                                    createVNode(unref(InformationCircleIcon), {
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
                                        createTextVNode(toDisplayString(_ctx.$t("delete.success.title")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("delete.success.subtitle")), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertDeleteSuccess.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var classes$3 = {
  root: "p-accordioncontent",
  content: "p-accordioncontent-content"
};
var AccordionContentStyle = BaseStyle.extend({
  name: "accordioncontent",
  classes: classes$3
});
var script$1$3 = {
  name: "BaseAccordionContent",
  "extends": script$5,
  props: {
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionContentStyle,
  provide: function provide() {
    return {
      $pcAccordionContent: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "AccordionContent",
  "extends": script$1$3,
  inheritAttrs: false,
  inject: ["$pcAccordion", "$pcAccordionPanel"],
  computed: {
    id: function id() {
      return "".concat(this.$pcAccordion.id, "_accordioncontent_").concat(this.$pcAccordionPanel.value);
    },
    ariaLabelledby: function ariaLabelledby() {
      return "".concat(this.$pcAccordion.id, "_accordionheader_").concat(this.$pcAccordionPanel.value);
    },
    attrs: function attrs() {
      return mergeProps(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        role: "region",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "accordioncontent",
        "data-p-active": this.$pcAccordionPanel.active
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.$pcAccordionPanel.active
        }
      };
    }
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.asChild ? (openBlock(), createBlock(Transition, mergeProps({
    key: 0,
    name: "p-toggleable-content"
  }, _ctx.ptm("transition", $options.ptParams)), {
    "default": withCtx(function() {
      return [($options.$pcAccordion.lazy ? $options.$pcAccordionPanel.active : true) ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
        key: 0,
        "class": _ctx.cx("root")
      }, $options.attrs), {
        "default": withCtx(function() {
          return [createElementVNode("div", mergeProps({
            "class": _ctx.cx("content")
          }, _ctx.ptm("content", $options.ptParams)), [renderSlot(_ctx.$slots, "default")], 16)];
        }),
        _: 3
      }, 16, ["class"])), [[vShow, $options.$pcAccordion.lazy ? true : $options.$pcAccordionPanel.active]]) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.$pcAccordionPanel.active,
    a11yAttrs: $options.a11yAttrs
  });
}
script$4.render = render$3;
var classes$2 = {
  root: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon"
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: "accordionheader",
  classes: classes$2
});
var script$1$2 = {
  name: "BaseAccordionHeader",
  "extends": script$5,
  props: {
    as: {
      type: [String, Object],
      "default": "BUTTON"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionHeaderStyle,
  provide: function provide2() {
    return {
      $pcAccordionHeader: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "AccordionHeader",
  "extends": script$1$2,
  inheritAttrs: false,
  inject: ["$pcAccordion", "$pcAccordionPanel"],
  methods: {
    onFocus: function onFocus() {
      this.$pcAccordion.selectOnFocus && this.changeActiveValue();
    },
    onClick: function onClick() {
      this.changeActiveValue();
    },
    onKeydown: function onKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
      nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
      prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event) {
      var firstPanel = this.findFirstPanel();
      this.changeFocusedPanel(event, firstPanel);
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var lastPanel = this.findLastPanel();
      this.changeFocusedPanel(event, lastPanel);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      this.changeActiveValue();
      event.preventDefault();
    },
    findPanel: function findPanel(headerElement) {
      return headerElement === null || headerElement === void 0 ? void 0 : headerElement.closest('[data-pc-name="accordionpanel"]');
    },
    findHeader: function findHeader(panelElement) {
      return findSingle(panelElement, '[data-pc-name="accordionheader"]');
    },
    findNextPanel: function findNextPanel(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? panelElement : panelElement.nextElementSibling;
      return element ? getAttribute(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
    },
    findPrevPanel: function findPrevPanel(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? panelElement : panelElement.previousElementSibling;
      return element ? getAttribute(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
    },
    findFirstPanel: function findFirstPanel() {
      return this.findNextPanel(this.$pcAccordion.$el.firstElementChild, true);
    },
    findLastPanel: function findLastPanel() {
      return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild, true);
    },
    changeActiveValue: function changeActiveValue() {
      this.$pcAccordion.updateValue(this.$pcAccordionPanel.value);
    },
    changeFocusedPanel: function changeFocusedPanel(event, element) {
      focus(this.findHeader(element));
    }
  },
  computed: {
    id: function id2() {
      return "".concat(this.$pcAccordion.id, "_accordionheader_").concat(this.$pcAccordionPanel.value);
    },
    ariaControls: function ariaControls() {
      return "".concat(this.$pcAccordion.id, "_accordioncontent_").concat(this.$pcAccordionPanel.value);
    },
    attrs: function attrs2() {
      return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    asAttrs: function asAttrs() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.$pcAccordionPanel.disabled
      } : void 0;
    },
    a11yAttrs: function a11yAttrs2() {
      return {
        id: this.id,
        tabindex: this.$pcAccordion.tabindex,
        "aria-expanded": this.$pcAccordionPanel.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "accordionheader",
        "data-p-disabled": this.$pcAccordionPanel.disabled,
        "data-p-active": this.$pcAccordionPanel.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    },
    ptParams: function ptParams2() {
      return {
        context: {
          active: this.$pcAccordionPanel.active
        }
      };
    }
  },
  components: {
    ChevronUpIcon: script$6,
    ChevronDownIcon: script$7
  },
  directives: {
    ripple: Ripple
  }
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return !_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    onClick: $options.onClick
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {
        active: $options.$pcAccordionPanel.active
      }), renderSlot(_ctx.$slots, "toggleicon", {
        active: $options.$pcAccordionPanel.active,
        "class": normalizeClass(_ctx.cx("toggleicon"))
      }, function() {
        return [$options.$pcAccordionPanel.active ? (openBlock(), createBlock(resolveDynamicComponent($options.$pcAccordion.$slots.collapseicon ? $options.$pcAccordion.$slots.collapseicon : $options.$pcAccordion.collapseIcon ? "span" : "ChevronDownIcon"), mergeProps({
          key: 0,
          "class": [$options.$pcAccordion.collapseIcon, _ctx.cx("toggleicon")],
          "aria-hidden": "true"
        }, _ctx.ptm("toggleicon", $options.ptParams)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($options.$pcAccordion.$slots.expandicon ? $options.$pcAccordion.$slots.expandicon : $options.$pcAccordion.expandIcon ? "span" : "ChevronUpIcon"), mergeProps({
          key: 1,
          "class": [$options.$pcAccordion.expandIcon, _ctx.cx("toggleicon")],
          "aria-hidden": "true"
        }, _ctx.ptm("toggleicon", $options.ptParams)), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "onClick"])), [[_directive_ripple]]) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.$pcAccordionPanel.active,
    a11yAttrs: $options.a11yAttrs,
    onClick: $options.onClick
  });
}
script$3.render = render$2;
var classes$1 = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-accordionpanel", {
      "p-accordionpanel-active": instance.active,
      "p-disabled": props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: "accordionpanel",
  classes: classes$1
});
var script$1$1 = {
  name: "BaseAccordionPanel",
  "extends": script$5,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionPanelStyle,
  provide: function provide3() {
    return {
      $pcAccordionPanel: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "AccordionPanel",
  "extends": script$1$1,
  inheritAttrs: false,
  inject: ["$pcAccordion"],
  computed: {
    active: function active() {
      return this.$pcAccordion.isItemActive(this.value);
    },
    attrs: function attrs3() {
      return mergeProps(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function a11yAttrs3() {
      return {
        "data-pc-name": "accordionpanel",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active
      };
    },
    ptParams: function ptParams3() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs
  });
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-accordionpanel {\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    border-width: ".concat(dt("accordion.panel.border.width"), ";\n    border-color: ").concat(dt("accordion.panel.border.color"), ";\n}\n\n.p-accordionheader {\n    all: unset;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ").concat(dt("accordion.header.padding"), ";\n    color: ").concat(dt("accordion.header.color"), ";\n    background: ").concat(dt("accordion.header.background"), ";\n    border-style: solid;\n    border-width: ").concat(dt("accordion.header.border.width"), ";\n    border-color: ").concat(dt("accordion.header.border.color"), ";\n    font-weight: ").concat(dt("accordion.header.font.weight"), ";\n    border-radius: ").concat(dt("accordion.header.border.radius"), ";\n    transition: background ").concat(dt("accordion.transition.duration"), "; color ").concat(dt("accordion.transition.duration"), "color ").concat(dt("accordion.transition.duration"), ", outline-color ").concat(dt("accordion.transition.duration"), ", box-shadow ").concat(dt("accordion.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-accordionpanel:first-child > .p-accordionheader {\n    border-width: ").concat(dt("accordion.header.first.border.width"), ";\n    border-start-start-radius: ").concat(dt("accordion.header.first.top.border.radius"), ";\n    border-start-end-radius: ").concat(dt("accordion.header.first.top.border.radius"), ";\n}\n\n.p-accordionpanel:last-child > .p-accordionheader {\n    border-end-start-radius: ").concat(dt("accordion.header.last.bottom.border.radius"), ";\n    border-end-end-radius: ").concat(dt("accordion.header.last.bottom.border.radius"), ";\n}\n\n.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n    border-end-start-radius: ").concat(dt("accordion.header.last.active.bottom.border.radius"), ";\n    border-end-end-radius: ").concat(dt("accordion.header.last.active.bottom.border.radius"), ";\n}\n\n.p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    box-shadow: ").concat(dt("accordion.header.focus.ring.shadow"), ";\n    outline: ").concat(dt("accordion.header.focus.ring.width"), " ").concat(dt("accordion.header.focus.ring.style"), " ").concat(dt("accordion.header.focus.ring.color"), ";\n    outline-offset: ").concat(dt("accordion.header.focus.ring.offset"), ";\n}\n\n.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n    background: ").concat(dt("accordion.header.hover.background"), ";\n    color: ").concat(dt("accordion.header.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n    background: ").concat(dt("accordion.header.active.background"), ";\n    color: ").concat(dt("accordion.header.active.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.active.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n    background: ").concat(dt("accordion.header.active.hover.background"), ";\n    color: ").concat(dt("accordion.header.active.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.active.hover.color"), ";\n}\n\n.p-accordioncontent-content {\n    border-style: solid;\n    border-width: ").concat(dt("accordion.content.border.width"), ";\n    border-color: ").concat(dt("accordion.content.border.color"), ";\n    background-color: ").concat(dt("accordion.content.background"), ";\n    color: ").concat(dt("accordion.content.color"), ";\n    padding: ").concat(dt("accordion.content.padding"), ";\n}\n");
};
var classes = {
  root: "p-accordion p-component"
};
var AccordionStyle = BaseStyle.extend({
  name: "accordion",
  theme,
  classes
});
var script$1 = {
  name: "BaseAccordion",
  "extends": script$5,
  props: {
    value: {
      type: [String, Number, Array],
      "default": void 0
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    expandIcon: {
      type: String,
      "default": void 0
    },
    collapseIcon: {
      type: String,
      "default": void 0
    },
    // @deprecated since v4.
    activeIndex: {
      type: [Number, Array],
      "default": null
    }
  },
  style: AccordionStyle,
  provide: function provide4() {
    return {
      $pcAccordion: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Accordion",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value", "update:activeIndex", "tab-open", "tab-close", "tab-click"],
  data: function data() {
    return {
      id: this.$attrs.id,
      d_value: this.value
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    value: function value(newValue) {
      this.d_value = newValue;
    },
    activeIndex: {
      immediate: true,
      handler: function handler(newValue) {
        if (this.hasAccordionTab) {
          this.d_value = this.multiple ? newValue === null || newValue === void 0 ? void 0 : newValue.map(String) : newValue === null || newValue === void 0 ? void 0 : newValue.toString();
        }
      }
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    isItemActive: function isItemActive(value2) {
      var _this$d_value;
      return this.multiple ? (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value.includes(value2) : this.d_value === value2;
    },
    updateValue: function updateValue(newValue) {
      var _this$d_value2;
      var active2 = this.isItemActive(newValue);
      if (this.multiple) {
        if (active2) {
          this.d_value = this.d_value.filter(function(v) {
            return v !== newValue;
          });
        } else {
          if (this.d_value) this.d_value.push(newValue);
          else this.d_value = [newValue];
        }
      } else {
        this.d_value = active2 ? null : newValue;
      }
      this.$emit("update:value", this.d_value);
      this.$emit("update:activeIndex", this.multiple ? (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2.map(Number) : Number(this.d_value));
      this.$emit(active2 ? "tab-close" : "tab-open", {
        originalEvent: void 0,
        index: Number(newValue)
      });
    },
    // @deprecated since v4. Use new structure instead.
    isAccordionTab: function isAccordionTab(child) {
      return child.type.name === "AccordionTab";
    },
    getTabProp: function getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey: function getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getHeaderPT: function getHeaderPT(tab, index) {
      var _this = this;
      return {
        root: mergeProps({
          onClick: function onClick2(event) {
            return _this.onTabClick(event, index);
          }
        }, this.getTabProp(tab, "headerProps"), this.getTabPT(tab, "header", index)),
        toggleicon: mergeProps(this.getTabProp(tab, "headeractionprops"), this.getTabPT(tab, "headeraction", index))
      };
    },
    getContentPT: function getContentPT(tab, index) {
      return {
        root: mergeProps(this.getTabProp(tab, "contentProps"), this.getTabPT(tab, "toggleablecontent", index)),
        transition: this.getTabPT(tab, "transition", index),
        content: this.getTabPT(tab, "content", index)
      };
    },
    getTabPT: function getTabPT(tab, key, index) {
      var count = this.tabs.length;
      var tabMetaData = {
        props: tab.props || {},
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          active: this.isItemActive("".concat(index))
        }
      };
      return mergeProps(this.ptm("accordiontab.".concat(key), tabMetaData), this.ptmo(this.getTabProp(tab, "pt"), key, tabMetaData));
    },
    onTabClick: function onTabClick(event, index) {
      this.$emit("tab-click", {
        originalEvent: event,
        index
      });
    }
  },
  computed: {
    // @deprecated since v4.
    tabs: function tabs() {
      var _this2 = this;
      return this.$slots["default"]().reduce(function(tabs2, child) {
        if (_this2.isAccordionTab(child)) {
          tabs2.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this2.isAccordionTab(nestedChild)) {
              tabs2.push(nestedChild);
            }
          });
        }
        return tabs2;
      }, []);
    },
    hasAccordionTab: function hasAccordionTab() {
      return this.tabs.length;
    }
  },
  components: {
    AccordionPanel: script$2,
    AccordionHeader: script$3,
    AccordionContent: script$4,
    ChevronUpIcon: script$6,
    ChevronRightIcon: script$8
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AccordionHeader = resolveComponent("AccordionHeader");
  var _component_AccordionContent = resolveComponent("AccordionContent");
  var _component_AccordionPanel = resolveComponent("AccordionPanel");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [$options.hasAccordionTab ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($options.tabs, function(tab, i) {
    return openBlock(), createBlock(_component_AccordionPanel, {
      key: $options.getKey(tab, i),
      value: "".concat(i),
      pt: {
        root: $options.getTabPT(tab, "root", i)
      },
      disabled: $options.getTabProp(tab, "disabled")
    }, {
      "default": withCtx(function() {
        return [createVNode(_component_AccordionHeader, {
          "class": normalizeClass($options.getTabProp(tab, "headerClass")),
          pt: $options.getHeaderPT(tab, i)
        }, {
          toggleicon: withCtx(function(slotProps) {
            return [slotProps.active ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.collapseicon ? _ctx.$slots.collapseicon : _ctx.collapseIcon ? "span" : "ChevronDownIcon"), mergeProps({
              key: 0,
              "class": [_ctx.collapseIcon, slotProps["class"]],
              "aria-hidden": "true",
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.expandicon ? _ctx.$slots.expandicon : _ctx.expandIcon ? "span" : "ChevronUpIcon"), mergeProps({
              key: 1,
              "class": [_ctx.expandIcon, slotProps["class"]],
              "aria-hidden": "true",
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"]))];
          }),
          "default": withCtx(function() {
            return [tab.children && tab.children.headericon ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.headericon), {
              key: 0,
              isTabActive: $options.isItemActive("".concat(i)),
              active: $options.isItemActive("".concat(i)),
              index: i
            }, null, 8, ["isTabActive", "active", "index"])) : createCommentVNode("", true), tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              ref_for: true
            }, $options.getTabPT(tab, "headertitle", i)), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true), tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), {
              key: 2
            })) : createCommentVNode("", true)];
          }),
          _: 2
        }, 1032, ["class", "pt"]), createVNode(_component_AccordionContent, {
          pt: $options.getContentPT(tab, i)
        }, {
          "default": withCtx(function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(tab)))];
          }),
          _: 2
        }, 1032, ["pt"])];
      }),
      _: 2
    }, 1032, ["value", "pt", "disabled"]);
  }), 128)) : renderSlot(_ctx.$slots, "default", {
    key: 1
  })], 16);
}
script.render = render;
const defaultAvatarUrl$1 = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModifyAvatar",
  __ssrInlineRender: true,
  props: {
    initialAvatar: {},
    isOpened: { type: Boolean },
    userId: {},
    closeModifyAvatar: { type: Function },
    updateAvatar: { type: Function }
  },
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const { data: avatars, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/avatars`,
      "$9BhsB1aRd8"
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.error("Failed to fetch avatars data", error.value);
    }
    const props = __props;
    const open = ref(props.isOpened);
    watch(() => props.isOpened, (newVal) => {
      open.value = newVal;
    });
    const selectedAvatarId = ref(props.initialAvatar);
    function selectAvatar(id3) {
      selectedAvatarId.value = id3;
    }
    const closeModifyAvatar = () => {
      open.value = false;
      props.closeModifyAvatar();
    };
    async function updateAvatarInDatabase() {
      const response = await $fetch(`/api/avatar/user/${props.userId}`, {
        method: "POST",
        body: {
          id: props.userId,
          newAvatar: selectedAvatarId.value
        }
      });
      if (response.error) {
        console.error(`Erreur lors de la mise à jour de l'avatar :`, response.error);
        return;
      }
      props.updateAvatar(selectedAvatarId.value);
      props.closeModifyAvatar();
      (void 0).location.reload();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: open.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-10",
              onClose: closeModifyAvatar
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
                        _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-a54880d1${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 z-10 w-screen overflow-y-auto" data-v-a54880d1${_scopeId2}><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" data-v-a54880d1${_scopeId2}>`);
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
                              _push5(`<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" data-v-a54880d1${_scopeId4}><div class="sm:flex sm:items-start" data-v-a54880d1${_scopeId4}><div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" data-v-a54880d1${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-base font-semibold leading-6 text-gray-900"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("avatar.modification_title"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("avatar.modification_title")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div><div class="avatars-gallery" data-v-a54880d1${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(avatars), (avatar, index) => {
                                _push5(`<div class="${ssrRenderClass([{ "selected-avatar": avatar.avatar_id === selectedAvatarId.value }, "avatar"])}" style="${ssrRenderStyle({
                                  backgroundImage: `url(${avatar.picture || defaultAvatarUrl$1})`
                                })}"${ssrRenderAttr("aria-label", avatar.picture_description)} data-v-a54880d1${_scopeId4}><img${ssrRenderAttr("src", avatar.picture || defaultAvatarUrl$1)}${ssrRenderAttr("alt", avatar.picture_description || "User avatar")} class="hidden" data-v-a54880d1${_scopeId4}></div>`);
                              });
                              _push5(`<!--]--></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" data-v-a54880d1${_scopeId4}><button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" data-v-a54880d1${_scopeId4}>${ssrInterpolate(_ctx.$t("button.save"))}</button><button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" data-v-a54880d1${_scopeId4}>${ssrInterpolate(_ctx.$t("button.cancel"))}</button></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" }, [
                                  createVNode("div", { class: "sm:flex sm:items-start" }, [
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("avatar.modification_title")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "avatars-gallery" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(avatars), (avatar, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: ["avatar", { "selected-avatar": avatar.avatar_id === selectedAvatarId.value }],
                                      style: {
                                        backgroundImage: `url(${avatar.picture || defaultAvatarUrl$1})`
                                      },
                                      "aria-label": avatar.picture_description,
                                      onClick: ($event) => selectAvatar(avatar.avatar_id)
                                    }, [
                                      createVNode("img", {
                                        src: avatar.picture || defaultAvatarUrl$1,
                                        alt: avatar.picture_description || "User avatar",
                                        class: "hidden"
                                      }, null, 8, ["src", "alt"])
                                    ], 14, ["aria-label", "onClick"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                                    onClick: updateAvatarInDatabase
                                  }, toDisplayString(_ctx.$t("button.save")), 1),
                                  createVNode("button", {
                                    ref: "cancelButtonRef",
                                    type: "button",
                                    class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                    onClick: closeModifyAvatar
                                  }, toDisplayString(_ctx.$t("button.cancel")), 513)
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
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("avatar.modification_title")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "avatars-gallery" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(avatars), (avatar, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: index,
                                    class: ["avatar", { "selected-avatar": avatar.avatar_id === selectedAvatarId.value }],
                                    style: {
                                      backgroundImage: `url(${avatar.picture || defaultAvatarUrl$1})`
                                    },
                                    "aria-label": avatar.picture_description,
                                    onClick: ($event) => selectAvatar(avatar.avatar_id)
                                  }, [
                                    createVNode("img", {
                                      src: avatar.picture || defaultAvatarUrl$1,
                                      alt: avatar.picture_description || "User avatar",
                                      class: "hidden"
                                    }, null, 8, ["src", "alt"])
                                  ], 14, ["aria-label", "onClick"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                                  onClick: updateAvatarInDatabase
                                }, toDisplayString(_ctx.$t("button.save")), 1),
                                createVNode("button", {
                                  ref: "cancelButtonRef",
                                  type: "button",
                                  class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                  onClick: closeModifyAvatar
                                }, toDisplayString(_ctx.$t("button.cancel")), 513)
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
                                    createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-base font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("avatar.modification_title")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "avatars-gallery" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(avatars), (avatar, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: ["avatar", { "selected-avatar": avatar.avatar_id === selectedAvatarId.value }],
                                      style: {
                                        backgroundImage: `url(${avatar.picture || defaultAvatarUrl$1})`
                                      },
                                      "aria-label": avatar.picture_description,
                                      onClick: ($event) => selectAvatar(avatar.avatar_id)
                                    }, [
                                      createVNode("img", {
                                        src: avatar.picture || defaultAvatarUrl$1,
                                        alt: avatar.picture_description || "User avatar",
                                        class: "hidden"
                                      }, null, 8, ["src", "alt"])
                                    ], 14, ["aria-label", "onClick"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                                    onClick: updateAvatarInDatabase
                                  }, toDisplayString(_ctx.$t("button.save")), 1),
                                  createVNode("button", {
                                    ref: "cancelButtonRef",
                                    type: "button",
                                    class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                    onClick: closeModifyAvatar
                                  }, toDisplayString(_ctx.$t("button.cancel")), 513)
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
                onClose: closeModifyAvatar
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
                                  createVNode("div", { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-base font-semibold leading-6 text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("avatar.modification_title")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "avatars-gallery" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(avatars), (avatar, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: index,
                                    class: ["avatar", { "selected-avatar": avatar.avatar_id === selectedAvatarId.value }],
                                    style: {
                                      backgroundImage: `url(${avatar.picture || defaultAvatarUrl$1})`
                                    },
                                    "aria-label": avatar.picture_description,
                                    onClick: ($event) => selectAvatar(avatar.avatar_id)
                                  }, [
                                    createVNode("img", {
                                      src: avatar.picture || defaultAvatarUrl$1,
                                      alt: avatar.picture_description || "User avatar",
                                      class: "hidden"
                                    }, null, 8, ["src", "alt"])
                                  ], 14, ["aria-label", "onClick"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                                  onClick: updateAvatarInDatabase
                                }, toDisplayString(_ctx.$t("button.save")), 1),
                                createVNode("button", {
                                  ref: "cancelButtonRef",
                                  type: "button",
                                  class: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                  onClick: closeModifyAvatar
                                }, toDisplayString(_ctx.$t("button.cancel")), 513)
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
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModifyAvatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ModifyAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a54880d1"]]);
const defaultAvatarUrl = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const isDeleteAlertVisible = ref(false);
    const deleteAccountSuccess = ref(false);
    const closeDeleteAlert = () => {
      isDeleteAlertVisible.value = false;
    };
    const confirmDeleteAccount = async () => {
      const success = await deleteAccount(user_id);
      if (success.body.success) {
        deleteAccountSuccess.value = true;
        isDeleteAlertVisible.value = false;
      }
    };
    const { auth } = useSupabaseClient();
    const {
      data: { user }
    } = ([__temp, __restore] = withAsyncContext(() => auth.getUser()), __temp = await __temp, __restore(), __temp);
    const metadata = user == null ? void 0 : user.user_metadata;
    const pseudo = computed(() => (metadata == null ? void 0 : metadata.alias) || "");
    const firstname = computed(() => (metadata == null ? void 0 : metadata.firstname) || "");
    const lastname = computed(() => (metadata == null ? void 0 : metadata.lastname) || "");
    const email = computed(() => (user == null ? void 0 : user.email) || "");
    const user_id = user.id;
    const runtimeConfig = useRuntimeConfig();
    const { data: userAvatar, error: userAvatarError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/user/${user_id}`,
      "$Gu1edgTRBl"
    )), __temp = await __temp, __restore(), __temp);
    if (userAvatarError.value) {
      console.error("Failed to fetch user data", userAvatarError.value);
    }
    const avatar = ref(((_b = (_a = userAvatar.value) == null ? void 0 : _a.avatar) == null ? void 0 : _b.picture) || defaultAvatarUrl);
    const activeDiet = ref("0");
    const activeAllergy = ref("0");
    const isModifyAvatarOpened = ref(false);
    const closeModifyAvatar = () => {
      isModifyAvatarOpened.value = false;
    };
    const updateAvatarInProfilePage = (newAvatar) => {
      avatar.value = newAvatar;
    };
    watch(avatar, (newAvatar) => {
      console.log("Avatar mis à jour :", newAvatar);
    });
    const deleteAccount = async (user_id2) => {
      try {
        const isUserDeleted = await $fetch(`/api/user/${user_id2}`, {
          method: "DELETE"
        });
        if (!isUserDeleted.body.success) {
          return {
            statusCode: 404,
            body: { success: false, error: "User not found or deletion failed." }
          };
        }
        await auth.signOut();
        navigateTo("/login");
        return {
          statusCode: 200,
          body: { success: true, message: "User deleted successfully." }
        };
      } catch (error) {
        console.error("Error deleting user:", error);
        return {
          statusCode: 500,
          body: { success: false, error: "Internal server error." }
        };
      }
    };
    const diet = [
      {
        name: "Végétarien",
        description: "xxx",
        selected: false
      },
      {
        name: "Végétalien",
        description: "xxx",
        selected: false
      },
      {
        name: "Vegan",
        description: "xxx",
        selected: false
      },
      {
        name: "Pescetarien",
        description: "xxx",
        selected: false
      }
    ];
    const allergy = [
      {
        name: "Gluten",
        description: "Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut ou leurs souches hybridées) et produits à base de ces céréales",
        selected: false
      },
      {
        name: "Crustacés",
        description: "Et produits à base de crustacés",
        selected: false
      },
      {
        name: "Oeufs",
        description: "Et produits à base d’œufs",
        selected: false
      },
      {
        name: "Arachides",
        description: "Et produits à base d'arachides",
        selected: false
      },
      {
        name: "Poissons",
        description: "Et produits à base de poissons",
        selected: false
      },
      {
        name: "Soja",
        description: "Et produits à base de soja",
        selected: false
      },
      {
        name: "Lait",
        description: "Et produits à base de lait (y compris de lactose)",
        selected: false
      },
      {
        name: "Fruits à coques",
        description: "Amandes, noisettes, noix, noix de cajou, pécan, macadamia, du Brésil, du Queensland, pistaches et produits à base de ces fruits",
        selected: false
      },
      {
        name: "Céleri",
        description: "Et produits à base de céleri",
        selected: false
      },
      {
        name: "Moutarde",
        description: "Et produits à base de moutarde",
        selected: false
      },
      {
        name: "Graines de sésame",
        description: "Et produits à base de graines de sésame",
        selected: false
      },
      {
        name: "Anhydride sulfureux et sulfites",
        description: "En concentration de plus de 10 mg/kg ou 10 mg/L",
        selected: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Accordion = script;
      const _component_AccordionHeader = script$3;
      const _component_AccordionContent = script$4;
      const _component_AlertDeleteAccount = __nuxt_component_0;
      const _component_AlertDeleteSuccess = _sfc_main$2;
      const _component_AlertNotLoggedIn = _sfc_main$4;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-faa33ad9>`);
      if (unref(user)) {
        _push(`<div data-v-faa33ad9>`);
        if (unref(isModifyAvatarOpened)) {
          _push(`<div data-v-faa33ad9>`);
          _push(ssrRenderComponent(ModifyAvatar, {
            "is-opened": unref(isModifyAvatarOpened),
            "close-modify-avatar": closeModifyAvatar,
            "initial-avatar": unref(userAvatar).avatar.avatar_id,
            "user-id": unref(user_id),
            "update-avatar": updateAvatarInProfilePage,
            onClose: closeModifyAvatar
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="rounded-t-lg h-32 overflow-hidden" data-v-faa33ad9><img class="object-cover object-top w-full" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&amp;w=1770&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" data-v-faa33ad9></div><div class="mx-auto w-36 h-36 relative -mt-20 border-4 border-white rounded-full overflow-hidden" data-v-faa33ad9><div id="photo-profile" data-v-faa33ad9><div id="profile-picture" alt="profile avatar" style="${ssrRenderStyle({ backgroundImage: `url(${unref(avatar)})` })}" class="object-cover object-center h-36 w-full rounded-full overflow-hidden" data-v-faa33ad9></div></div><button class="edit-button" data-v-faa33ad9><svg class="edit-svgIcon" viewBox="0 0 512 512" data-v-faa33ad9><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" data-v-faa33ad9></path></svg></button></div><div class="text-center mt-2" data-v-faa33ad9><h2 class="font-semibold" data-v-faa33ad9>${ssrInterpolate(unref(pseudo))}</h2></div><form id="profile-details" data-v-faa33ad9><div class="border-y border-gray-900/10 py-6 my-6" data-v-faa33ad9><h3 class="text-xl font-semibold leading-7 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.informations"))}</h3></div><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" data-v-faa33ad9><div data-v-faa33ad9><label for="username" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.alias"))}</label><div class="mt-2" data-v-faa33ad9><input id="pseudo"${ssrRenderAttr("value", unref(pseudo))} type="text" name="pseudo" autocomplete="pseudo" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-faa33ad9></div></div><div data-v-faa33ad9><label for="firstname" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.firstname"))}</label><div class="mt-2" data-v-faa33ad9><input id="firstname"${ssrRenderAttr("value", unref(firstname))} type="text" name="firstname" autocomplete="firstname" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-faa33ad9></div></div><div data-v-faa33ad9><label for="lastname" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.lastname"))}</label><div class="mt-2" data-v-faa33ad9><input id="lastname"${ssrRenderAttr("value", unref(lastname))} type="text" name="lastname" autocomplete="family-name" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-faa33ad9></div></div><div data-v-faa33ad9><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.email"))}</label><div class="mt-2" data-v-faa33ad9><input id="email"${ssrRenderAttr("value", unref(email))} name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-faa33ad9></div></div></div><div class="border-y border-gray-900/10 py-6" data-v-faa33ad9><h3 class="text-xl font-semibold leading-7 text-gray-900" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.alimentation"))}</h3><p class="mt-1 text-sm leading-6 text-gray-600" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.alimentation_explanation"))}</p></div><fieldset data-v-faa33ad9><div class="card" data-v-faa33ad9>`);
        _push(ssrRenderComponent(_component_Accordion, {
          value: unref(activeDiet),
          "onUpdate:value": ($event) => isRef(activeDiet) ? activeDiet.value = $event : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(script$2), { value: "1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AccordionHeader, {
                      id: "accordion-header",
                      class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.diet"))}</div><div class="flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" data-v-faa33ad9${_scopeId3}><div class="flex items-center gap-x-1" data-v-faa33ad9${_scopeId3}><input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}><label for="push-email" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.yes"))}</label></div><div class="flex items-center gap-x-1" data-v-faa33ad9${_scopeId3}><input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}><label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.no"))}</label></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.diet")), 1),
                            createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                              createVNode("div", { class: "flex items-center gap-x-1" }, [
                                createVNode("input", {
                                  id: "push-email",
                                  name: "push-notifications",
                                  type: "radio",
                                  class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                  onClick: ($event) => activeDiet.value = "1"
                                }, null, 8, ["onClick"]),
                                createVNode("label", {
                                  for: "push-email",
                                  class: "block text-sm font-medium leading-6 text-gray-900"
                                }, toDisplayString(_ctx.$t("user.yes")), 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-x-1" }, [
                                createVNode("input", {
                                  id: "push-nothing",
                                  name: "push-notifications",
                                  type: "radio",
                                  class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                  onClick: ($event) => activeDiet.value = "0"
                                }, null, 8, ["onClick"]),
                                createVNode("label", {
                                  for: "push-nothing",
                                  class: "block text-sm font-medium leading-6 text-gray-900"
                                }, toDisplayString(_ctx.$t("user.no")), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(diet, (item) => {
                            _push4(`<div class="relative flex gap-x-6" data-v-faa33ad9${_scopeId3}><div class="flex h-6 items-center" data-v-faa33ad9${_scopeId3}><input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}></div><div class="text-sm leading-6" data-v-faa33ad9${_scopeId3}><label for="comments" class="font-medium text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(item.name)}</label><p class="text-gray-500" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(item.description)}</p></div></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(diet, (item) => {
                              return createVNode("div", {
                                key: item.name,
                                class: "relative flex gap-x-6"
                              }, [
                                createVNode("div", { class: "flex h-6 items-center" }, [
                                  createVNode("input", {
                                    id: "comments",
                                    name: "comments",
                                    type: "checkbox",
                                    class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  })
                                ]),
                                createVNode("div", { class: "text-sm leading-6" }, [
                                  createVNode("label", {
                                    for: "comments",
                                    class: "font-medium text-gray-900"
                                  }, toDisplayString(item.name), 1),
                                  createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                                ])
                              ]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AccordionHeader, {
                        id: "accordion-header",
                        class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.diet")), 1),
                          createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode("input", {
                                id: "push-email",
                                name: "push-notifications",
                                type: "radio",
                                class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                onClick: ($event) => activeDiet.value = "1"
                              }, null, 8, ["onClick"]),
                              createVNode("label", {
                                for: "push-email",
                                class: "block text-sm font-medium leading-6 text-gray-900"
                              }, toDisplayString(_ctx.$t("user.yes")), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode("input", {
                                id: "push-nothing",
                                name: "push-notifications",
                                type: "radio",
                                class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                onClick: ($event) => activeDiet.value = "0"
                              }, null, 8, ["onClick"]),
                              createVNode("label", {
                                for: "push-nothing",
                                class: "block text-sm font-medium leading-6 text-gray-900"
                              }, toDisplayString(_ctx.$t("user.no")), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AccordionContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(diet, (item) => {
                            return createVNode("div", {
                              key: item.name,
                              class: "relative flex gap-x-6"
                            }, [
                              createVNode("div", { class: "flex h-6 items-center" }, [
                                createVNode("input", {
                                  id: "comments",
                                  name: "comments",
                                  type: "checkbox",
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                })
                              ]),
                              createVNode("div", { class: "text-sm leading-6" }, [
                                createVNode("label", {
                                  for: "comments",
                                  class: "font-medium text-gray-900"
                                }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                              ])
                            ]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(script$2), { value: "1" }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, {
                      id: "accordion-header",
                      class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.diet")), 1),
                        createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                          createVNode("div", { class: "flex items-center gap-x-1" }, [
                            createVNode("input", {
                              id: "push-email",
                              name: "push-notifications",
                              type: "radio",
                              class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                              onClick: ($event) => activeDiet.value = "1"
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              for: "push-email",
                              class: "block text-sm font-medium leading-6 text-gray-900"
                            }, toDisplayString(_ctx.$t("user.yes")), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-x-1" }, [
                            createVNode("input", {
                              id: "push-nothing",
                              name: "push-notifications",
                              type: "radio",
                              class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                              onClick: ($event) => activeDiet.value = "0"
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              for: "push-nothing",
                              class: "block text-sm font-medium leading-6 text-gray-900"
                            }, toDisplayString(_ctx.$t("user.no")), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AccordionContent, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(diet, (item) => {
                          return createVNode("div", {
                            key: item.name,
                            class: "relative flex gap-x-6"
                          }, [
                            createVNode("div", { class: "flex h-6 items-center" }, [
                              createVNode("input", {
                                id: "comments",
                                name: "comments",
                                type: "checkbox",
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              })
                            ]),
                            createVNode("div", { class: "text-sm leading-6" }, [
                              createVNode("label", {
                                for: "comments",
                                class: "font-medium text-gray-900"
                              }, toDisplayString(item.name), 1),
                              createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                            ])
                          ]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></fieldset><fieldset data-v-faa33ad9><div class="card" data-v-faa33ad9>`);
        _push(ssrRenderComponent(_component_Accordion, {
          value: unref(activeAllergy),
          "onUpdate:value": ($event) => isRef(activeAllergy) ? activeAllergy.value = $event : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(script$2), { value: "1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AccordionHeader, {
                      id: "accordion-header",
                      class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.allergies"))}</div><div class="flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" data-v-faa33ad9${_scopeId3}><div class="flex items-center gap-x-1" data-v-faa33ad9${_scopeId3}><input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}><label for="push-email" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.yes"))}</label></div><div class="flex items-center gap-x-1" data-v-faa33ad9${_scopeId3}><input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}><label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.no"))}</label></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.allergies")), 1),
                            createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                              createVNode("div", { class: "flex items-center gap-x-1" }, [
                                createVNode("input", {
                                  id: "push-email",
                                  name: "push-notifications",
                                  type: "radio",
                                  class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                  onClick: ($event) => activeAllergy.value = "1"
                                }, null, 8, ["onClick"]),
                                createVNode("label", {
                                  for: "push-email",
                                  class: "block text-sm font-medium leading-6 text-gray-900"
                                }, toDisplayString(_ctx.$t("user.yes")), 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-x-1" }, [
                                createVNode("input", {
                                  id: "push-nothing",
                                  name: "push-notifications",
                                  type: "radio",
                                  class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                  onClick: ($event) => activeAllergy.value = "0"
                                }, null, 8, ["onClick"]),
                                createVNode("label", {
                                  for: "push-nothing",
                                  class: "block text-sm font-medium leading-6 text-gray-900"
                                }, toDisplayString(_ctx.$t("user.no")), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(allergy, (item) => {
                            _push4(`<div class="relative flex gap-x-3" data-v-faa33ad9${_scopeId3}><div class="flex h-6 items-center" data-v-faa33ad9${_scopeId3}><input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}></div><div class="text-sm leading-6" data-v-faa33ad9${_scopeId3}><label for="comments" class="font-medium text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(item.name)}</label><p class="text-gray-500" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(item.description)}</p></div></div>`);
                          });
                          _push4(`<!--]--><div class="relative flex gap-x-3" data-v-faa33ad9${_scopeId3}><div class="flex h-6 items-center" data-v-faa33ad9${_scopeId3}><input id="offers" name="offers" type="checkbox" class="h-4 w-4 px-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" data-v-faa33ad9${_scopeId3}></div><div class="text-sm leading-6 grid grid-cols-2 gap-4" data-v-faa33ad9${_scopeId3}><label for="others" class="font-medium text-gray-900" data-v-faa33ad9${_scopeId3}>${ssrInterpolate(_ctx.$t("user.other"))}</label><input id="others" type="text" name="others" autocomplete="others" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-faa33ad9${_scopeId3}></div></div>`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(allergy, (item) => {
                              return createVNode("div", {
                                key: item.name,
                                class: "relative flex gap-x-3"
                              }, [
                                createVNode("div", { class: "flex h-6 items-center" }, [
                                  createVNode("input", {
                                    id: "comments",
                                    name: "comments",
                                    type: "checkbox",
                                    class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  })
                                ]),
                                createVNode("div", { class: "text-sm leading-6" }, [
                                  createVNode("label", {
                                    for: "comments",
                                    class: "font-medium text-gray-900"
                                  }, toDisplayString(item.name), 1),
                                  createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                                ])
                              ]);
                            }), 64)),
                            createVNode("div", { class: "relative flex gap-x-3" }, [
                              createVNode("div", { class: "flex h-6 items-center" }, [
                                createVNode("input", {
                                  id: "offers",
                                  name: "offers",
                                  type: "checkbox",
                                  class: "h-4 w-4 px-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                })
                              ]),
                              createVNode("div", { class: "text-sm leading-6 grid grid-cols-2 gap-4" }, [
                                createVNode("label", {
                                  for: "others",
                                  class: "font-medium text-gray-900"
                                }, toDisplayString(_ctx.$t("user.other")), 1),
                                createVNode("input", {
                                  id: "others",
                                  type: "text",
                                  name: "others",
                                  autocomplete: "others",
                                  class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AccordionHeader, {
                        id: "accordion-header",
                        class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.allergies")), 1),
                          createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode("input", {
                                id: "push-email",
                                name: "push-notifications",
                                type: "radio",
                                class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                onClick: ($event) => activeAllergy.value = "1"
                              }, null, 8, ["onClick"]),
                              createVNode("label", {
                                for: "push-email",
                                class: "block text-sm font-medium leading-6 text-gray-900"
                              }, toDisplayString(_ctx.$t("user.yes")), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode("input", {
                                id: "push-nothing",
                                name: "push-notifications",
                                type: "radio",
                                class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                onClick: ($event) => activeAllergy.value = "0"
                              }, null, 8, ["onClick"]),
                              createVNode("label", {
                                for: "push-nothing",
                                class: "block text-sm font-medium leading-6 text-gray-900"
                              }, toDisplayString(_ctx.$t("user.no")), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AccordionContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(allergy, (item) => {
                            return createVNode("div", {
                              key: item.name,
                              class: "relative flex gap-x-3"
                            }, [
                              createVNode("div", { class: "flex h-6 items-center" }, [
                                createVNode("input", {
                                  id: "comments",
                                  name: "comments",
                                  type: "checkbox",
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                })
                              ]),
                              createVNode("div", { class: "text-sm leading-6" }, [
                                createVNode("label", {
                                  for: "comments",
                                  class: "font-medium text-gray-900"
                                }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                              ])
                            ]);
                          }), 64)),
                          createVNode("div", { class: "relative flex gap-x-3" }, [
                            createVNode("div", { class: "flex h-6 items-center" }, [
                              createVNode("input", {
                                id: "offers",
                                name: "offers",
                                type: "checkbox",
                                class: "h-4 w-4 px-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              })
                            ]),
                            createVNode("div", { class: "text-sm leading-6 grid grid-cols-2 gap-4" }, [
                              createVNode("label", {
                                for: "others",
                                class: "font-medium text-gray-900"
                              }, toDisplayString(_ctx.$t("user.other")), 1),
                              createVNode("input", {
                                id: "others",
                                type: "text",
                                name: "others",
                                autocomplete: "others",
                                class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(script$2), { value: "1" }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, {
                      id: "accordion-header",
                      class: "flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-sm font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0" }, toDisplayString(_ctx.$t("user.allergies")), 1),
                        createVNode("div", { class: "flex flex-row items-center gap-x-6 sm:ml-auto sm:mr-12 sm:mt-0" }, [
                          createVNode("div", { class: "flex items-center gap-x-1" }, [
                            createVNode("input", {
                              id: "push-email",
                              name: "push-notifications",
                              type: "radio",
                              class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                              onClick: ($event) => activeAllergy.value = "1"
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              for: "push-email",
                              class: "block text-sm font-medium leading-6 text-gray-900"
                            }, toDisplayString(_ctx.$t("user.yes")), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-x-1" }, [
                            createVNode("input", {
                              id: "push-nothing",
                              name: "push-notifications",
                              type: "radio",
                              class: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                              onClick: ($event) => activeAllergy.value = "0"
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              for: "push-nothing",
                              class: "block text-sm font-medium leading-6 text-gray-900"
                            }, toDisplayString(_ctx.$t("user.no")), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AccordionContent, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(allergy, (item) => {
                          return createVNode("div", {
                            key: item.name,
                            class: "relative flex gap-x-3"
                          }, [
                            createVNode("div", { class: "flex h-6 items-center" }, [
                              createVNode("input", {
                                id: "comments",
                                name: "comments",
                                type: "checkbox",
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              })
                            ]),
                            createVNode("div", { class: "text-sm leading-6" }, [
                              createVNode("label", {
                                for: "comments",
                                class: "font-medium text-gray-900"
                              }, toDisplayString(item.name), 1),
                              createVNode("p", { class: "text-gray-500" }, toDisplayString(item.description), 1)
                            ])
                          ]);
                        }), 64)),
                        createVNode("div", { class: "relative flex gap-x-3" }, [
                          createVNode("div", { class: "flex h-6 items-center" }, [
                            createVNode("input", {
                              id: "offers",
                              name: "offers",
                              type: "checkbox",
                              class: "h-4 w-4 px-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            })
                          ]),
                          createVNode("div", { class: "text-sm leading-6 grid grid-cols-2 gap-4" }, [
                            createVNode("label", {
                              for: "others",
                              class: "font-medium text-gray-900"
                            }, toDisplayString(_ctx.$t("user.other")), 1),
                            createVNode("input", {
                              id: "others",
                              type: "text",
                              name: "others",
                              autocomplete: "others",
                              class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></fieldset><div class="mt-6 flex items-center justify-end gap-x-6" data-v-faa33ad9><button type="button" class="min-w-32 mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-50" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.cancel"))}</button><button type="submit" class="min-w-32 mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-v-faa33ad9>${ssrInterpolate(_ctx.$t("user.save"))}</button></div><div class="bg-red-100 border-y border-gray-900/10 py-6 my-6 flex items-center justify-between" data-v-faa33ad9><div data-v-faa33ad9><h3 class="text-xl font-semibold leading-7 text-gray-900" data-v-faa33ad9> Delete my profile </h3><p class="mt-1 text-sm leading-6 text-gray-600" data-v-faa33ad9> I am sure I want to delete my profile </p></div><button type="submit" class="min-w-32 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" data-v-faa33ad9> Delete my profile </button></div></form>`);
        if (unref(isDeleteAlertVisible)) {
          _push(ssrRenderComponent(_component_AlertDeleteAccount, {
            class: "alert",
            onConfirm: confirmDeleteAccount,
            onCancel: closeDeleteAlert
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(deleteAccountSuccess)) {
          _push(ssrRenderComponent(_component_AlertDeleteSuccess, { class: "alert" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div data-v-faa33ad9>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-faa33ad9"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CVvsedl2.js.map
