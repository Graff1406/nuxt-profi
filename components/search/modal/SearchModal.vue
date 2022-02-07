<template>
  <v-dialog
    :value="active"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar :elevation="isMobile ? 1 : 0">
        <template>
          <AppBtnBack
            @before-go-back="$emit('update:active', false)"
            class="mx-2"
          />
        </template>

        <MainSearch v-if="$device.isMobile" :focus="active" :value="value" />
      </v-toolbar>
      <v-card-text class="mt-5">
        <v-row justify="center" align="center">
          <v-col v-if="!$device.isMobile" cols="7" class="py-0">
            <MainSearch :focus="active" :value="value" solo />
          </v-col>

          <v-col :cols="$device.isMobile ? 12 : 7" class="py-0">
            <SearchHistoryList
              v-for="title in histories"
              :key="title"
              :title="title"
              @chosen-history="chosenHistory"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import MainSearch from "@/components/search/MainSearch";
import SearchHistoryList from "@/components/search/SearchHistoryList";
import AppBtnBack from "@/components/buttons/Back";
export default {
  name: "SearchModal",
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
    chosenHistory(title) {
      this.$router.push({ path: `/result/${title}`, params: { title } });
    }
  }
};
</script>
