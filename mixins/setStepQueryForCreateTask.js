export default {
  methods: {
    setStepQuery(step) {
      this.$router.push({
        path: this.$route.path,
        query: { step }
      })
    }
  }
}