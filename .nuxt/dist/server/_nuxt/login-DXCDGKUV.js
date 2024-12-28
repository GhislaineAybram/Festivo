import { e as __nuxt_component_0, u as useSupabaseClient, c as script$2, _ as _export_sfc } from "../server.mjs";
import { F as FocusTrap } from "./index-Bfz78A2e.js";
import { s as script$3 } from "./index-BLmzC9fX.js";
import { _ as _imports_0, s as script, a as script$1 } from "./boule-disco-indigo-CYyQj1ks.js";
import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { isAuthApiError } from "@supabase/supabase-js";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { UserCircleIcon } from "@heroicons/vue/24/outline";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertLoggedIn",
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
                              _push5(ssrRenderComponent(unref(UserCircleIcon), {
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
                                    _push6(`${ssrInterpolate(_ctx.$t("login.successfull"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("login.successfull")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(_ctx.$t("login.success_message"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"${_scopeId4}>`);
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
                                      createVNode(unref(UserCircleIcon), {
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
                                          createTextVNode(toDisplayString(_ctx.$t("login.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("login.success_message")), 1)
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
                                    createVNode(unref(UserCircleIcon), {
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
                                        createTextVNode(toDisplayString(_ctx.$t("login.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("login.success_message")), 1)
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
                                      createVNode(unref(UserCircleIcon), {
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
                                          createTextVNode(toDisplayString(_ctx.$t("login.successfull")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("login.success_message")), 1)
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
                                    createVNode(unref(UserCircleIcon), {
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
                                        createTextVNode(toDisplayString(_ctx.$t("login.successfull")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-2" }, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(_ctx.$t("login.success_message")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertLoggedIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const loginSuccess = ref(false);
    const { auth } = useSupabaseClient();
    const submitLoginForm = async () => {
      try {
        const { data: _data, error } = await auth.signInWithPassword({
          email: email.value,
          password: password.value
        });
        if (error) {
          throw error;
        }
        email.value = "";
        password.value = "";
        loginSuccess.value = true;
      } catch (error) {
        if (isAuthApiError(error)) {
          switch (error.code) {
            case "400":
              errorMsg.value = "Erreur de requête. Veuillez vérifier vos informations.";
              break;
            case "401":
              errorMsg.value = "Non autorisé. Vérifiez vos identifiants.";
              break;
            default:
              errorMsg.value = "Erreur d'authentification inconnue.";
              break;
          }
        } else if (error) {
          switch (error.name) {
            case "InvalidCredentialsError":
              errorMsg.value = "Identifiants incorrects.";
              break;
            case "NetworkError":
              errorMsg.value = "Erreur réseau. Veuillez réessayer.";
              break;
            default:
              errorMsg.value = "Erreur d'authentification du client.";
              break;
          }
          setTimeout(() => {
            errorMsg.value = "";
          }, 3e3);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconField = script;
      const _component_InputIcon = script$1;
      const _component_InputText = script$2;
      const _component_Button = script$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_focustrap = FocusTrap;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main flex flex-col items-center" }, _attrs))} data-v-d6117879><div class="card flex justify-center" data-v-d6117879></div><div id="login" class="card w-full sm:w-80 p-6 mb-6" data-v-d6117879><div${ssrRenderAttrs(mergeProps({
        id: "login-container",
        class: "w-full sm:w-80 flex flex-col gap-6"
      }, ssrGetDirectiveProps(_ctx, _directive_focustrap)))} data-v-d6117879><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-v-d6117879><img class="mx-auto h-14 w-auto"${ssrRenderAttr("src", _imports_0)} alt="Logo Festivo" data-v-d6117879><h3 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" data-v-d6117879>${ssrInterpolate(_ctx.$t("login.title"))}</h3></div>`);
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-user" data-v-d6117879${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-user" })
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
              type: "text",
              placeholder: _ctx.$t("user.email"),
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
                id: "email",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                class: "text",
                type: "text",
                placeholder: _ctx.$t("user.email"),
                autofocus: "",
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="password-container" data-v-d6117879>`);
      _push(ssrRenderComponent(_component_IconField, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-key" data-v-d6117879${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-key" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              id: "password",
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
                id: "password",
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
      _push(`<div id="password-forgot" class="text-sm" data-v-d6117879><a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500" data-v-d6117879>${ssrInterpolate(_ctx.$t("login.password_forgot"))}</a></div>`);
      if (unref(errorMsg)) {
        _push(`<span class="text-sm text-red-500" data-v-d6117879>${ssrInterpolate(unref(errorMsg))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        id: "sign-in",
        type: "submit",
        label: _ctx.$t("login.button"),
        class: "mt-2 button-validation-form",
        onClick: submitLoginForm
      }, null, _parent));
      _push(`</div></div><div class="register-container text-xs" data-v-d6117879><p data-v-d6117879>${ssrInterpolate(_ctx.$t("login.no_account"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p id="sign-up-link" data-v-d6117879${_scopeId}>${ssrInterpolate(_ctx.$t("login.sign_up"))}</p>`);
          } else {
            return [
              createVNode("p", { id: "sign-up-link" }, toDisplayString(_ctx.$t("login.sign_up")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(loginSuccess)) {
        _push(ssrRenderComponent(_sfc_main$1, { class: "alert" }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6117879"]]);
export {
  login as default
};
//# sourceMappingURL=login-DXCDGKUV.js.map
