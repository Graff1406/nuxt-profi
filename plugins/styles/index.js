export { MAIN } from "./colors";

export default {
  install(Vue, options) {
    Vue.prototype.$styles = {
      colors: {
        MAIN
      }
    };
  }
};
