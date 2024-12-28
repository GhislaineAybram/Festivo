import { B as BaseStyle, s as script$3 } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot } from "vue";
var classes$1 = {
  root: "p-inputicon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes: classes$1
});
var script$1$1 = {
  name: "BaseInputIcon",
  "extends": script$3,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide() {
    return {
      $pcInputIcon: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "InputIcon",
  "extends": script$1$1,
  inheritAttrs: false,
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-iconfield {\n    position: relative;\n}\n\n.p-inputicon {\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * (".concat(dt("icon.size"), " / 2));\n    color: ").concat(dt("iconfield.icon.color"), ";\n    line-height: 1;\n}\n\n.p-iconfield .p-inputicon:first-child {\n    inset-inline-start: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputicon:last-child {\n    inset-inline-end: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputtext:not(:first-child) {\n    padding-inline-start: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield .p-inputtext:not(:last-child) {\n    padding-inline-end: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.sm.font.size"), " / 2));\n}\n\n.p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.lg.font.size"), " / 2));\n}\n");
};
var classes = {
  root: "p-iconfield"
};
var IconFieldStyle = BaseStyle.extend({
  name: "iconfield",
  theme,
  classes
});
var script$1 = {
  name: "BaseIconField",
  "extends": script$3,
  style: IconFieldStyle,
  provide: function provide2() {
    return {
      $pcIconField: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "IconField",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
const _imports_0 = "" + __buildAssetsURL("boule-disco-indigo.BcGYt8m7.png");
export {
  _imports_0 as _,
  script$2 as a,
  script as s
};
//# sourceMappingURL=boule-disco-indigo-CYyQj1ks.js.map
