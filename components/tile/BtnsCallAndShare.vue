<template>
  <div>
    <v-btn color="secondary" text @click="call = true">
      <v-icon class="mr-3">phone_in_talk</v-icon>
      Call
    </v-btn>
    <v-btn color="secondary" text @click="openChat = true">
      <v-icon class="mr-3">question_answer</v-icon>
      Chat
    </v-btn>
    <v-bottom-sheet v-model="call" inset>
      <v-sheet
        class="text-center"
        height="200px"
        style="border-radius: 15px 15px 0 0"
      >
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="my-3">
          This is a bottom sheet using the inset prop
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <Chat v-model="openChat" />
  </div>
</template>
<script>
import Chat from "@/components/Chat";
export default {
  name: "BtnsCallAndShare",
  components: {
    Chat
  },
  data() {
    return {
      call: false,
      openChat: false
    };
  }
};
</script>
