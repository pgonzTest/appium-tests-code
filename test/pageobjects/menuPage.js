class MenuPage {
  get menuPanel() {
    return $('~Recycler view for menu');
  }

  get burgerIcon() {
    return $('~View menu');
  }

  get menuOptions() {
    return [
      'WebView',
      'Catalog',
      'Drawing',
      'About',
      'Log In',
    ];
  }

  async getMenuItem(optionText) {
    // return await $(`android=new UiSelector().text("${optionText}")`);
    return await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${optionText}"))`);
  }

  get outsideArea() {
    return $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(1)`);
  }
}

export default new MenuPage();

