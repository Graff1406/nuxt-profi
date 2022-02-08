function moveToResult(title) {
  this.$router.push({
    path: this.$device.isMobile ? "/" : "/tablet-desktop-result",
    query: { search: title }
  });
}
export default moveToResult;
