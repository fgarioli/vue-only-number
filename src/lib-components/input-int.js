import Vue from "vue";

export default Vue.directive("input-int", {
  bind: function (el, bind, vnode) {
    el.addEventListener("input", function (event) {
      var regex = typeof bind.value === "undefined" ? /\b0+|[^\d]/g : /[^\d]/g;
      event.target.value = event.target.value.replace(new RegExp(regex), "");
    });
    el.addEventListener("keypress", function (event) {
      if (
        event.charCode === 0 ||
        /\d+/.test(String.fromCharCode(event.charCode))
      ) {
        return;
      }
      event.preventDefault();
    });
  },
  update: function (el) {
    var event = new Event("input", { bubbles: true });
    el.dispatchEvent(event);
  },
});
