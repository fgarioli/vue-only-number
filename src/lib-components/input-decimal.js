import Vue from "vue";

export default Vue.directive("input-decimal", {
  bind: function(el, bind, vnode) {
    el.addEventListener("input", function(event) {
      var counter = 0;
      event.target.value = event.target.value.replace(/[^0-9.]|\./g, function(
        $0
      ) {
        if ($0 == "." && !(counter++))
          // dot found and counter is not incremented
          return "."; // that means we met first dot and we want to keep it
        return ""; // if we find anything else, let's erase it
      });
    });
  },
  update: function(el) {
    var event = new Event("input", { bubbles: true });
    el.dispatchEvent(event);
  },
});
