import { B as BaseStyle, s as script$4, C as ConnectedOverlayScrollHandler, R as Ripple, a as useFetch, b as useRuntimeConfig, c as script$7, u as useSupabaseClient, d as useRoute, _ as _export_sfc } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot, resolveComponent, resolveDirective, createBlock, withCtx, createVNode, Transition, withDirectives, createCommentVNode, defineComponent, ref, withAsyncContext, computed, unref, Fragment, renderList, toDisplayString, useSSRContext, isRef } from "vue";
import { s as script$6 } from "./index-BLmzC9fX.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { $dt } from "@primeuix/styled";
import { addStyle, absolutePosition, getOffset, addClass, focus, isClient, isTouchDevice, setAttribute } from "@primeuix/utils/dom";
import { ZIndex } from "@primeuix/utils/zindex";
import { F as FocusTrap } from "./index-Bfz78A2e.js";
import { O as OverlayEventBus, s as script$5, a as script$8 } from "./index-gd6vYtRz.js";
import { _ as _sfc_main$2 } from "./index-iDB5evnO.js";
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
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/utils/uuid";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
var classes$2 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes: classes$2
});
var script$1$2 = {
  name: "BaseInputGroupAddon",
  "extends": script$4,
  style: InputGroupAddonStyle,
  provide: function provide() {
    return {
      $pcInputGroupAddon: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "InputGroupAddon",
  "extends": script$1$2,
  inheritAttrs: false
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$3.render = render$2;
var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputgroup,\n.p-inputgroup .p-iconfield,\n.p-inputgroup .p-floatlabel,\n.p-inputgroup .p-iftalabel {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-inputgroupaddon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ".concat(dt("inputgroup.addon.padding"), ";\n    background: ").concat(dt("inputgroup.addon.background"), ";\n    color: ").concat(dt("inputgroup.addon.color"), ";\n    border-block-start: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n    border-block-end: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n    min-width: ").concat(dt("inputgroup.addon.min.width"), ";\n}\n\n.p-inputgroupaddon:first-child,\n.p-inputgroupaddon + .p-inputgroupaddon {\n    border-inline-start: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n}\n\n.p-inputgroupaddon:last-child {\n    border-inline-end: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n}\n\n.p-inputgroupaddon:has(.p-button) {\n    padding: 0;\n    overflow: hidden;\n}\n\n.p-inputgroupaddon .p-button {\n    border-radius: 0;\n}\n\n.p-inputgroup > .p-component,\n.p-inputgroup > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iconfield > .p-component,\n.p-inputgroup > .p-floatlabel > .p-component,\n.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel > .p-component,\n.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {\n    border-radius: 0;\n    margin: 0;\n}\n\n.p-inputgroupaddon:first-child,\n.p-inputgroup > .p-component:first-child,\n.p-inputgroup > .p-inputwrapper:first-child > .p-component,\n.p-inputgroup > .p-iconfield:first-child > .p-component,\n.p-inputgroup > .p-floatlabel:first-child > .p-component,\n.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel:first-child > .p-component,\n.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {\n    border-start-start-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-end-start-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroupaddon:last-child,\n.p-inputgroup > .p-component:last-child,\n.p-inputgroup > .p-inputwrapper:last-child > .p-component,\n.p-inputgroup > .p-iconfield:last-child > .p-component,\n.p-inputgroup > .p-floatlabel:last-child > .p-component,\n.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,\n.p-inputgroup > .p-iftalabel:last-child > .p-component,\n.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {\n    border-start-end-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-end-end-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroup .p-component:focus,\n.p-inputgroup .p-component.p-focus,\n.p-inputgroup .p-inputwrapper-focus,\n.p-inputgroup .p-component:focus ~ label,\n.p-inputgroup .p-component.p-focus ~ label,\n.p-inputgroup .p-inputwrapper-focus ~ label {\n    z-index: 1;\n}\n\n.p-inputgroup > .p-button:not(.p-button-icon-only) {\n    width: auto;\n}\n\n.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {\n    border-inline-start: 0;\n}\n");
};
var classes$1 = {
  root: "p-inputgroup"
};
var InputGroupStyle = BaseStyle.extend({
  name: "inputgroup",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseInputGroup",
  "extends": script$4,
  style: InputGroupStyle,
  provide: function provide2() {
    return {
      $pcInputGroup: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "InputGroup",
  "extends": script$1$1,
  inheritAttrs: false
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$2.render = render$1;
var theme2 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-popover {\n    margin-block-start: ".concat(dt("popover.gutter"), ";\n    background: ").concat(dt("popover.background"), ";\n    color: ").concat(dt("popover.color"), ";\n    border: 1px solid ").concat(dt("popover.border.color"), ";\n    border-radius: ").concat(dt("popover.border.radius"), ";\n    box-shadow: ").concat(dt("popover.shadow"), ";\n}\n\n.p-popover-content {\n    padding: ").concat(dt("popover.content.padding"), ";\n}\n\n.p-popover-flipped {\n    margin-block-start: calc(").concat(dt("popover.gutter"), " * -1);\n    margin-block-end: ").concat(dt("popover.gutter"), ";\n}\n\n.p-popover-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-popover-leave-to {\n    opacity: 0;\n}\n\n.p-popover-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-popover-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n.p-popover:after,\n.p-popover:before {\n    bottom: 100%;\n    left: calc(").concat(dt("popover.arrow.offset"), " + ").concat(dt("popover.arrow.left"), ');\n    content: " ";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.p-popover:after {\n    border-width: calc(').concat(dt("popover.gutter"), " - 2px);\n    margin-left: calc(-1 * (").concat(dt("popover.gutter"), " - 2px));\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt("popover.background"), ";\n}\n\n.p-popover:before {\n    border-width: ").concat(dt("popover.gutter"), ";\n    margin-left: calc(-1 * ").concat(dt("popover.gutter"), ");\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt("popover.border.color"), ";\n}\n\n.p-popover-flipped:after,\n.p-popover-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n\n.p-popover.p-popover-flipped:after {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt("popover.background"), ";\n}\n\n.p-popover.p-popover-flipped:before {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt("popover.border.color"), ";\n}\n");
};
var classes = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var PopoverStyle = BaseStyle.extend({
  name: "popover",
  theme: theme2,
  classes
});
var script$1 = {
  name: "BasePopover",
  "extends": script$4,
  props: {
    dismissable: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    breakpoints: {
      type: Object,
      "default": null
    },
    closeOnEscape: {
      type: Boolean,
      "default": true
    }
  },
  style: PopoverStyle,
  provide: function provide3() {
    return {
      $pcPopover: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Popover",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["show", "hide"],
  data: function data() {
    return {
      visible: false
    };
  },
  watch: {
    dismissable: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      }
    }
  },
  selfClick: false,
  target: null,
  eventTarget: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  styleElement: null,
  overlayEventListener: null,
  documentKeydownListener: null,
  beforeUnmount: function beforeUnmount() {
    if (this.dismissable) {
      this.unbindOutsideClickListener();
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.destroyStyle();
    this.unbindResizeListener();
    this.target = null;
    if (this.container && this.autoZIndex) {
      ZIndex.clear(this.container);
    }
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
    this.container = null;
  },
  mounted: function mounted() {
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  methods: {
    toggle: function toggle(event, target) {
      if (this.visible) this.hide();
      else this.show(event, target);
    },
    show: function show(event, target) {
      this.visible = true;
      this.eventTarget = event.currentTarget;
      this.target = target || event.currentTarget;
    },
    hide: function hide() {
      this.visible = false;
    },
    onContentClick: function onContentClick() {
      this.selfClick = true;
    },
    onEnter: function onEnter(el) {
      var _this = this;
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      if (this.dismissable) {
        this.bindOutsideClickListener();
      }
      this.bindScrollListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        ZIndex.set("overlay", el, this.baseZIndex + this.$primevue.config.zIndex.overlay);
      }
      this.overlayEventListener = function(e) {
        if (_this.container.contains(e.target)) {
          _this.selfClick = true;
        }
      };
      this.focus();
      OverlayEventBus.on("overlay-click", this.overlayEventListener);
      this.$emit("show");
      if (this.closeOnEscape) {
        this.bindDocumentKeyDownListener();
      }
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.unbindDocumentKeyDownListener();
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      absolutePosition(this.container, this.target, false);
      var containerOffset = getOffset(this.container);
      var targetOffset = getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty($dt("popover.arrow.left").name, "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-popover-flipped", "true");
        !this.isUnstyled && addClass(this.container, "p-popover-flipped");
      }
    },
    onContentKeydown: function onContentKeydown(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.hide();
        focus(this.target);
      }
    },
    onButtonKeydown: function onButtonKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          event.preventDefault();
      }
    },
    focus: function focus2() {
      var focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.visible = false;
      }
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        (void 0).document.addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        (void 0).document.removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener && isClient()) {
        this.outsideClickListener = function(event) {
          if (_this2.visible && !_this2.selfClick && !_this2.isTargetClicked(event)) {
            _this2.visible = false;
          }
          _this2.selfClick = false;
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this3.visible) {
            _this3.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.visible && !isTouchDevice()) {
            _this4.visible = false;
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isTargetClicked: function isTargetClicked(event) {
      return this.eventTarget && (this.eventTarget === event.target || this.eventTarget.contains(event.target));
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    createStyle: function createStyle() {
      if (!this.styleElement && !this.isUnstyled) {
        var _this$$primevue;
        this.styleElement = (void 0).createElement("style");
        this.styleElement.type = "text/css";
        setAttribute(this.styleElement, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).head.appendChild(this.styleElement);
        var innerHTML = "";
        for (var breakpoint in this.breakpoints) {
          innerHTML += "\n                        @media screen and (max-width: ".concat(breakpoint, ") {\n                            .p-popover[").concat(this.$attrSelector, "] {\n                                width: ").concat(this.breakpoints[breakpoint], " !important;\n                            }\n                        }\n                    ");
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle: function destroyStyle() {
      if (this.styleElement) {
        (void 0).head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    }
  },
  directives: {
    focustrap: FocusTrap,
    ripple: Ripple
  },
  components: {
    Portal: script$5
  }
};
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-popover",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "dialog",
            "aria-modal": $data.visible,
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            "class": _ctx.cx("root")
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            closeCallback: $options.hide,
            keydownCallback: function keydownCallback(event) {
              return $options.onButtonKeydown(event);
            }
          }) : (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("content"),
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onContentClick && $options.onContentClick.apply($options, arguments);
            }),
            onMousedown: _cache[1] || (_cache[1] = function() {
              return $options.onContentClick && $options.onContentClick.apply($options, arguments);
            }),
            onKeydown: _cache[2] || (_cache[2] = function() {
              return $options.onContentKeydown && $options.onContentKeydown.apply($options, arguments);
            })
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
script.render = render;
const defaultAvatarUrl = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ShareInvitation",
  __ssrInlineRender: true,
  props: {
    celebrationId: {
      type: String,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const op = ref();
    const copySuccess = ref(false);
    const runtimeConfig = useRuntimeConfig();
    const props = __props;
    const { data: guestsList, error: guestsListError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/guests/celebration/${props.celebrationId}`,
      "$0SA81cdBNX"
    )), __temp = await __temp, __restore(), __temp);
    if (guestsListError.value) {
      console.error("Failed to fetch nb of guest celebration", guestsListError.value);
    }
    const guestInfoList = computed(() => guestsList.value.guests_list || []);
    const toggle2 = (event) => {
      op.value.toggle(event);
    };
    const shareLink = `${runtimeConfig.public.url}/celebration/${props.celebrationId}`;
    const copyToClipboard = async () => {
      try {
        await (void 0).clipboard.writeText(shareLink);
        copySuccess.value = true;
        setTimeout(() => {
          copySuccess.value = false;
        }, 2e3);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$6;
      const _component_InputGroup = script$2;
      const _component_InputText = script$7;
      const _component_InputGroupAddon = script$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-share-alt",
        label: "Share",
        onClick: toggle2
      }, null, _parent));
      _push(ssrRenderComponent(unref(script), {
        ref_key: "op",
        ref: op,
        class: "popover-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 w-[25rem]"${_scopeId}><div${_scopeId}><span class="font-medium block mb-2"${_scopeId}>Share this document</span>`);
            _push2(ssrRenderComponent(_component_InputGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    value: `${unref(runtimeConfig).public.url}/celebration/${__props.celebrationId}`,
                    readonly: "",
                    class: "w-[25rem]"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputGroupAddon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!copySuccess.value) {
                          _push4(`<i class="pi pi-copy" title="Copy to clipboard"${_scopeId3}></i>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (copySuccess.value) {
                          _push4(`<span class="text-green-500 transition-opacity duration-500 text-xs"${_scopeId3}> copied </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !copySuccess.value ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: "pi pi-copy",
                            title: "Copy to clipboard",
                            onClick: copyToClipboard
                          })) : createCommentVNode("", true),
                          copySuccess.value ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-green-500 transition-opacity duration-500 text-xs"
                          }, " copied ")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      value: `${unref(runtimeConfig).public.url}/celebration/${__props.celebrationId}`,
                      readonly: "",
                      class: "w-[25rem]"
                    }, null, 8, ["value"]),
                    createVNode(_component_InputGroupAddon, null, {
                      default: withCtx(() => [
                        !copySuccess.value ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "pi pi-copy",
                          title: "Copy to clipboard",
                          onClick: copyToClipboard
                        })) : createCommentVNode("", true),
                        copySuccess.value ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-green-500 transition-opacity duration-500 text-xs"
                        }, " copied ")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><span class="font-medium block mb-2"${_scopeId}>Invités</span></div><div${_scopeId}><ul class="list-none p-0 m-0 flex flex-col gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(guestInfoList), (guest, index) => {
              _push2(`<li class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", guest.user_id.avatar.picture || defaultAvatarUrl)}${ssrRenderAttr("alt", guest.user_id.avatar.picture_description || "User avatar")} style="${ssrRenderStyle({ "width": "32px" })}"${_scopeId}><div${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(guest.user_id.alias)}</span></div></li>`);
            });
            _push2(`<!--]--></ul></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 w-[25rem]" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-medium block mb-2" }, "Share this document"),
                  createVNode(_component_InputGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_InputText, {
                        value: `${unref(runtimeConfig).public.url}/celebration/${__props.celebrationId}`,
                        readonly: "",
                        class: "w-[25rem]"
                      }, null, 8, ["value"]),
                      createVNode(_component_InputGroupAddon, null, {
                        default: withCtx(() => [
                          !copySuccess.value ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: "pi pi-copy",
                            title: "Copy to clipboard",
                            onClick: copyToClipboard
                          })) : createCommentVNode("", true),
                          copySuccess.value ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-green-500 transition-opacity duration-500 text-xs"
                          }, " copied ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("span", { class: "font-medium block mb-2" }, "Invités")
                ]),
                createVNode("div", null, [
                  createVNode("ul", { class: "list-none p-0 m-0 flex flex-col gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(guestInfoList), (guest, index) => {
                      return openBlock(), createBlock("li", {
                        key: index,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode("img", {
                          src: guest.user_id.avatar.picture || defaultAvatarUrl,
                          alt: guest.user_id.avatar.picture_description || "User avatar",
                          style: { "width": "32px" }
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", null, [
                          createVNode("span", { class: "font-medium" }, toDisplayString(guest.user_id.alias), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShareInvitation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { auth } = useSupabaseClient();
    const { data: { user } } = ([__temp, __restore] = withAsyncContext(() => auth.getUser()), __temp = await __temp, __restore(), __temp);
    const { id } = useRoute().params;
    const runtimeConfig = useRuntimeConfig();
    const { data: celebration, error: celebrationError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
      "$sWfZ9jOGWS"
    )), __temp = await __temp, __restore(), __temp);
    if (celebrationError.value) {
      console.error("Failed to fetch celebration data", celebrationError.value);
    }
    const celebrationTitle = computed(() => celebration.value.name || "");
    const celebrationType = computed(() => celebration.value.celebration_type.category || "");
    const celebrationDescription = computed(() => celebration.value.description || "");
    const celebrationDate = computed(() => celebration.value.date || "");
    const celebrationTime = computed(() => celebration.value.hour.split(":").slice(0, 2).join(":") || "");
    const celebrationAddress = computed(() => celebration.value.address || "");
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShareInvitation = _sfc_main$1;
      const _component_DatePicker = script$8;
      const _component_AlertNotLoggedIn = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main flex flex-col items-center" }, _attrs))} data-v-881daa57>`);
      if (unref(user)) {
        _push(`<div id="celebration-details" data-v-881daa57><div class="mx-auto mt-4 max-w-2xl text-center" data-v-881daa57><h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl" data-v-881daa57> Modifiez votre événement </h1></div>`);
        _push(ssrRenderComponent(_component_ShareInvitation, { "celebration-id": unref(id) }, null, _parent));
        _push(`<form class="mx-auto mt-10 max-w-xl sm:mt-10" data-v-881daa57><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" data-v-881daa57><div data-v-881daa57><label for="celebration-title" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.title"))}</label><div class="mt-2.5" data-v-881daa57><input id="celebration-title"${ssrRenderAttr("value", unref(celebrationTitle))} type="text" name="celebration-title" autocomplete="celebration-title" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-881daa57></div></div><div data-v-881daa57><label for="celebration-type" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.type"))}</label><div class="mt-2.5" data-v-881daa57><input id="celebration-type"${ssrRenderAttr("value", unref(celebrationType))} type="text" name="celebration-type" autocomplete="celebration-type" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-881daa57></div></div><div class="sm:col-span-2" data-v-881daa57><label for="celebration-description" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.description"))}</label><div class="mt-2.5" data-v-881daa57><textarea id="celebration-description" name="celebration-description" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-881daa57>${ssrInterpolate(unref(celebrationDescription))}</textarea></div></div><div data-v-881daa57><label for="celebration-date" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.date"))}</label><div class="mt-2.5" data-v-881daa57>`);
        _push(ssrRenderComponent(_component_DatePicker, {
          id: "datepicker-month",
          modelValue: unref(celebrationDate),
          "onUpdate:modelValue": ($event) => isRef(celebrationDate) ? celebrationDate.value = $event : null,
          class: "flex-auto",
          "date-format": "dd/mm/yy",
          variant: "filled",
          "show-icon": "",
          fluid: "",
          "show-on-focus": false,
          "input-id": "buttondisplay"
        }, null, _parent));
        _push(`</div></div><div data-v-881daa57><label for="celebration-hour" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.hour"))}</label><div class="mt-2.5" data-v-881daa57>`);
        _push(ssrRenderComponent(_component_DatePicker, {
          id: "datepicker-timeonly",
          modelValue: unref(celebrationTime),
          "onUpdate:modelValue": ($event) => isRef(celebrationTime) ? celebrationTime.value = $event : null,
          "time-only": "",
          fluid: ""
        }, null, _parent));
        _push(`</div></div><div class="sm:col-span-2" data-v-881daa57><label for="celebration-address" class="block text-sm font-semibold leading-6 text-gray-900" data-v-881daa57>${ssrInterpolate(_ctx.$t("celebration.address"))}</label><div class="mt-2.5" data-v-881daa57><input id="celebration-address"${ssrRenderAttr("value", unref(celebrationAddress))} type="text" name="celebration-address" autocomplete="celebration-address" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-v-881daa57></div></div></div><div class="mt-10" data-v-881daa57>`);
        if (errorMsg.value) {
          _push(`<span class="text-sm text-red-500" data-v-881daa57>${ssrInterpolate(errorMsg.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button id="celebration-creation" type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-v-881daa57> Modifiez mon événement </button></div></form></div>`);
      } else {
        _push(`<div data-v-881daa57>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/celebrationadmin/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-881daa57"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CnfxJfCt.js.map
