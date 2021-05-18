<template>
  <div>result</div>
</template>
<script>
  export default {
    name: '',
    layout(context) {
      return context.$device.isMobile ? 'resultMobile' : 'resultDesktop'
    }
  }
</script>