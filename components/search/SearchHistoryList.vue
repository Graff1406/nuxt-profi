<template>
  <v-list :flat="$device.isMobile" class="pb-0">
    <v-list-item @click="$emit('chosen-history', title)">
      <v-list-item-icon>
        <v-icon>
          history
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon>north_east</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>
<script>
  export default {
    name: 'SearchHistoryList',
    props: {
      title: String
    }
  }
</script>