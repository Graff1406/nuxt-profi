<template>
  <Mobile v-if="$device.isMobile" />
  <DesktopTablet v-else />
</template>
<script>
import DesktopTablet from "./desktop-tablet/Layout";
import Mobile from "./mobile/Layout";
export default {
  name: "Home"
};
</script>
