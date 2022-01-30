<template>
  <v-dialog
    :value="active"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>menu</v-icon>
        </v-btn>
        <v-toolbar-title>Chat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark text @click="$emit()">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Chat",
  model: {
    prop: "active",
    event: "input"
  },
  props: {
    active: Boolean
  }
};
</script>
