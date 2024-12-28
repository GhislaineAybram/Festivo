import { e as __nuxt_component_0, f as script$4, B as BaseStyle, g as script$5, j as useSupabaseUser, u as useSupabaseClient, c as script$8, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, openBlock, createElementBlock, createElementVNode, resolveComponent, renderSlot, normalizeClass, createBlock, createCommentVNode, watchEffect, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { RocketLaunchIcon } from "@heroicons/vue/24/outline";
import { F as FocusTrap } from "./index-Bfz78A2e.js";
import { s as script$9 } from "./index-BLmzC9fX.js";
import { equals, contains } from "@primeuix/utils/object";
import { _ as _imports_0, s as script$6, a as script$7 } from "./boule-disco-indigo-CYyQj1ks.js";
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
import "@primeuix/utils/dom";
import "@primeuix/utils/uuid";
import "@primeuix/utils/zindex";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertRegistration",
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
                                    _push6(`${ssrInterpolate(_ctx.$t("register.successfull"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("register.successfull")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(_ctx.$t("register.success_message"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"${_scopeId4}>`);
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
                                          createTextVNode(toDisplayString(_ctx.$t("register.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("register.success_message")), 1)
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
                                        createTextVNode(toDisplayString(_ctx.$t("register.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("register.success_message")), 1)
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
                                          createTextVNode(toDisplayString(_ctx.$t("register.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("register.success_message")), 1)
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
                                        createTextVNode(toDisplayString(_ctx.$t("register.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("register.success_message")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertRegistration.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var script$3 = {
  name: "CheckIcon",
  "extends": script$4
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$3.render = render$2;
var script$2 = {
  name: "MinusIcon",
  "extends": script$4
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-checkbox {\n    position: relative;\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    width: ".concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n}\n\n.p-checkbox-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border: 1px solid transparent;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n    border: 1px solid ").concat(dt("checkbox.border.color"), ";\n    background: ").concat(dt("checkbox.background"), ";\n    width: ").concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n    transition: background ").concat(dt("checkbox.transition.duration"), ", color ").concat(dt("checkbox.transition.duration"), ", border-color ").concat(dt("checkbox.transition.duration"), ", box-shadow ").concat(dt("checkbox.transition.duration"), ", outline-color ").concat(dt("checkbox.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("checkbox.shadow"), ";\n}\n\n.p-checkbox-icon {\n    transition-duration: ").concat(dt("checkbox.transition.duration"), ";\n    color: ").concat(dt("checkbox.icon.color"), ";\n    font-size: ").concat(dt("checkbox.icon.size"), ";\n    width: ").concat(dt("checkbox.icon.size"), ";\n    height: ").concat(dt("checkbox.icon.size"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.hover.border.color"), ";\n}\n\n.p-checkbox-checked .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.border.color"), ";\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n    border-color: ").concat(dt("checkbox.checked.hover.border.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.hover.color"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.focus.border.color"), ";\n    box-shadow: ").concat(dt("checkbox.focus.ring.shadow"), ";\n    outline: ").concat(dt("checkbox.focus.ring.width"), " ").concat(dt("checkbox.focus.ring.style"), " ").concat(dt("checkbox.focus.ring.color"), ";\n    outline-offset: ").concat(dt("checkbox.focus.ring.offset"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.focus.border.color"), ";\n}\n\n.p-checkbox.p-invalid > .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.invalid.border.color"), ";\n}\n\n.p-checkbox.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.filled.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n}\n\n.p-checkbox.p-disabled {\n    opacity: 1;\n}\n\n.p-checkbox.p-disabled .p-checkbox-box {\n    background: ").concat(dt("checkbox.disabled.background"), ";\n    border-color: ").concat(dt("checkbox.checked.disabled.border.color"), ";\n}\n\n.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.disabled.color"), ";\n}\n\n.p-checkbox-sm,\n.p-checkbox-sm .p-checkbox-box {\n    width: ").concat(dt("checkbox.sm.width"), ";\n    height: ").concat(dt("checkbox.sm.height"), ";\n}\n\n.p-checkbox-sm .p-checkbox-icon {\n    font-size: ").concat(dt("checkbox.icon.sm.size"), ";\n    width: ").concat(dt("checkbox.icon.sm.size"), ";\n    height: ").concat(dt("checkbox.icon.sm.size"), ";\n}\n\n.p-checkbox-lg,\n.p-checkbox-lg .p-checkbox-box {\n    width: ").concat(dt("checkbox.lg.width"), ";\n    height: ").concat(dt("checkbox.lg.height"), ";\n}\n\n.p-checkbox-lg .p-checkbox-icon {\n    font-size: ").concat(dt("checkbox.icon.lg.size"), ";\n    width: ").concat(dt("checkbox.icon.lg.size"), ";\n    height: ").concat(dt("checkbox.icon.lg.size"), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-checkbox p-component", {
      "p-checkbox-checked": instance.checked,
      "p-disabled": props.disabled,
      "p-invalid": instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-checkbox-sm p-inputfield-sm": props.size === "small",
      "p-checkbox-lg p-inputfield-lg": props.size === "large"
    }];
  },
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = BaseStyle.extend({
  name: "checkbox",
  theme,
  classes
});
var script$1 = {
  name: "BaseCheckbox",
  "extends": script$5,
  props: {
    value: null,
    binary: Boolean,
    indeterminate: {
      type: Boolean,
      "default": false
    },
    trueValue: {
      type: null,
      "default": true
    },
    falseValue: {
      type: null,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    required: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: CheckboxStyle,
  provide: function provide() {
    return {
      $pcCheckbox: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script = {
  name: "Checkbox",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "update:indeterminate"],
  inject: {
    $pcCheckboxGroup: {
      "default": void 0
    }
  },
  data: function data() {
    return {
      d_indeterminate: this.indeterminate
    };
  },
  watch: {
    indeterminate: function indeterminate(newValue) {
      this.d_indeterminate = newValue;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          checked: this.checked,
          indeterminate: this.d_indeterminate,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      var _this = this;
      if (!this.disabled && !this.readonly) {
        var value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;
        var newModelValue;
        if (this.binary) {
          newModelValue = this.d_indeterminate ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
        } else {
          if (this.checked || this.d_indeterminate) newModelValue = value.filter(function(val) {
            return !equals(val, _this.value);
          });
          else newModelValue = value ? [].concat(_toConsumableArray(value), [this.value]) : [this.value];
        }
        if (this.d_indeterminate) {
          this.d_indeterminate = false;
          this.$emit("update:indeterminate", this.d_indeterminate);
        }
        this.$pcCheckboxGroup ? this.$pcCheckboxGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
        this.$emit("change", event);
      }
    },
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    }
  },
  computed: {
    groupName: function groupName() {
      return this.$pcCheckboxGroup ? this.$pcCheckboxGroup.groupName : this.$formName;
    },
    checked: function checked() {
      var value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;
      return this.d_indeterminate ? false : this.binary ? value === this.trueValue : contains(this.value, value);
    }
  },
  components: {
    CheckIcon: script$3,
    MinusIcon: script$2
  }
};
var _hoisted_1 = ["data-p-checked", "data-p-indeterminate", "data-p-disabled"];
var _hoisted_2 = ["id", "value", "name", "checked", "tabindex", "disabled", "readonly", "required", "aria-labelledby", "aria-label", "aria-invalid", "aria-checked"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_MinusIcon = resolveComponent("MinusIcon");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, $options.getPTOptions("root"), {
    "data-p-checked": $options.checked,
    "data-p-indeterminate": $data.d_indeterminate || void 0,
    "data-p-disabled": _ctx.disabled
  }), [createElementVNode("input", mergeProps({
    id: _ctx.inputId,
    type: "checkbox",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.value,
    name: $options.groupName,
    checked: $options.checked,
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    required: _ctx.required,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-invalid": _ctx.invalid || void 0,
    "aria-checked": $data.d_indeterminate ? "mixed" : void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onChange: _cache[2] || (_cache[2] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, $options.getPTOptions("input")), null, 16, _hoisted_2), createElementVNode("div", mergeProps({
    "class": _ctx.cx("box")
  }, $options.getPTOptions("box")), [renderSlot(_ctx.$slots, "icon", {
    checked: $options.checked,
    indeterminate: $data.d_indeterminate,
    "class": normalizeClass(_ctx.cx("icon"))
  }, function() {
    return [$options.checked ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
      key: 0,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : $data.d_indeterminate ? (openBlock(), createBlock(_component_MinusIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : createCommentVNode("", true)];
  })], 16)], 16, _hoisted_1);
}
script.render = render;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    const firstname = ref("");
    const lastname = ref("");
    const alias = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorMsg = ref("");
    const accept = ref(false);
    const registrationSuccess = ref(false);
    useSupabaseClient();
    watchEffect(() => {
      if (user.value) {
        console.log("User logged in, redirecting to home");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconField = script$6;
      const _component_InputIcon = script$7;
      const _component_InputText = script$8;
      const _component_Checkbox = script;
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_Button = script$9;
      const _component_AlertRegistration = _sfc_main$1;
      const _directive_focustrap = FocusTrap;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main flex flex-col items-center" }, _attrs))} data-v-a1264b04><div class="card flex justify-center" data-v-a1264b04></div><div id="register" class="card w-full sm:w-80 p-6 mb-6" data-v-a1264b04><form${ssrRenderAttrs(mergeProps({ class: "w-full sm:w-80 flex flex-col gap-4" }, ssrGetDirectiveProps(_ctx, _directive_focustrap)))} data-v-a1264b04><div id="form-inside" class="sm:mx-auto sm:w-full sm:max-w-sm" data-v-a1264b04><img class="mx-auto h-14 w-auto"${ssrRenderAttr("src", _imports_0)} alt="Logo Festivo" data-v-a1264b04><h3 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" data-v-a1264b04>${ssrInterpolate(_ctx.$t("register.title"))}</h3></div>`);
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-user" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-user" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "firstname",
              modelValue: unref(firstname),
              "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
              class: "text",
              type: "text",
              placeholder: _ctx.$t("user.firstname"),
              autofocus: "",
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-user" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "firstname",
                modelValue: unref(firstname),
                "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                class: "text",
                type: "text",
                placeholder: _ctx.$t("user.firstname"),
                autofocus: "",
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-user" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-user" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "lastname",
              modelValue: unref(lastname),
              "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
              class: "text",
              type: "text",
              placeholder: _ctx.$t("user.lastname"),
              autofocus: "",
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-user" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "lastname",
                modelValue: unref(lastname),
                "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                class: "text",
                type: "text",
                placeholder: _ctx.$t("user.lastname"),
                autofocus: "",
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-user" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-user" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "alias",
              modelValue: unref(alias),
              "onUpdate:modelValue": ($event) => isRef(alias) ? alias.value = $event : null,
              class: "text",
              type: "text",
              placeholder: _ctx.$t("user.alias"),
              autofocus: "",
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-user" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "alias",
                modelValue: unref(alias),
                "onUpdate:modelValue": ($event) => isRef(alias) ? alias.value = $event : null,
                class: "text",
                type: "text",
                placeholder: _ctx.$t("user.alias"),
                autofocus: "",
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-envelope" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-envelope" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "email",
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              class: "text",
              type: "email",
              placeholder: _ctx.$t("user.email"),
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-envelope" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "email",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                class: "text",
                type: "email",
                placeholder: _ctx.$t("user.email"),
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-key" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-key" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "password1",
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              class: "text",
              type: "password",
              placeholder: _ctx.$t("user.password"),
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-key" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "password1",
                modelValue: unref(password),
                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                class: "text",
                type: "password",
                placeholder: _ctx.$t("user.password"),
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-key" data-v-a1264b04${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-key" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "password2",
              modelValue: unref(confirmPassword),
              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
              class: "text",
              type: "password",
              placeholder: _ctx.$t("user.password_confirmed"),
              fluid: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, null, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-key" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                id: "password2",
                modelValue: unref(confirmPassword),
                "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                class: "text",
                type: "password",
                placeholder: _ctx.$t("user.password_confirmed"),
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="accept-conditions" class="flex items-center gap-2 text-xs" data-v-a1264b04>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        id: "accept",
        modelValue: unref(accept),
        "onUpdate:modelValue": ($event) => isRef(accept) ? accept.value = $event : null,
        name: "accept",
        value: "Accept"
      }, null, _parent));
      _push(`<label id="accept-label" for="accept" data-v-a1264b04>`);
      _push(ssrRenderComponent(_component_i18n_t, { keypath: "register.agree.text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://festivo-tawny.vercel.app/privacy" data-v-a1264b04${_scopeId}>${ssrInterpolate(_ctx.$t("register.agree.link_text"))}</a>`);
          } else {
            return [
              createVNode("a", { href: "https://festivo-tawny.vercel.app/privacy" }, toDisplayString(_ctx.$t("register.agree.link_text")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div>`);
      if (unref(errorMsg)) {
        _push(`<span class="text-sm text-red-500" data-v-a1264b04>${ssrInterpolate(unref(errorMsg))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        id: "sign-up-button",
        type: "submit",
        label: _ctx.$t("register.button"),
        icon: "pi pi-user-plus",
        class: "mt-2"
      }, null, _parent));
      _push(`</form></div>`);
      if (unref(registrationSuccess)) {
        _push(ssrRenderComponent(_component_AlertRegistration, { class: "alert" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1264b04"]]);
export {
  register as default
};
//# sourceMappingURL=register-Duu_Igzw.js.map
