export default {
  methods: {
    updateFirstSpanClass: function() {
      this.isSecondSpanActive = false;
      this.isFirstSpanActive = !this.isFirstSpanActive;
    },
    updateSecondSpanClass: function() {
      this.isFirstSpanActive = false;
      this.isSecondSpanActive = !this.isSecondSpanActive;
    }
  }
};
