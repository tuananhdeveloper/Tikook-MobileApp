Page({
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  _handleTap() {
    console.log("hiiiiiiiiiiiii");
    navigateTo('abc');
  },
  navigateTo(recipeid) {
     var mUrl = `./../pages/recipe-details/index`;
     my.navigateTo({ url: mUrl});
   }
});