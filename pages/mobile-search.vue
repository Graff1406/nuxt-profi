<template>
  <div>
    <SearchHistoryList
      v-for="title in histories"
      :key="title"
      :title="title"
      @chosen-history="moveToResult"
    />
  </div>
</template>
<script>
import MainSearch from "@/components/search/MainSearch";
import SearchHistoryList from "@/components/search/SearchHistoryList";
import AppBtnBack from "@/components/buttons/Back";

// Mixins
import moveToResult from "@/mixins/moveToResult";

export default {
  name: "SearchModal",
  layout: "MobileSearch",
  components: {
    MainSearch,
    SearchHistoryList,
    AppBtnBack
  },
  props: {
    active: Boolean,
    value: String
  },
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.$device.isMobile;
    },
    histories() {
      return Array.from({ length: 9 }).map(
        (item, index) => `Master number - ${index}`
      );
    }
  },
  watch: {
    active(active) {
      if (active) {
        this.$router.push({
          path: this.$route.path,
          query: {
            searchModal: this.active
          }
        });
      }
    },
    $route() {
      this.$emit("update:active", !!this.$route.query.searchModal);
    }
  },
  methods: {
    moveToResult
  }
};
</script>
