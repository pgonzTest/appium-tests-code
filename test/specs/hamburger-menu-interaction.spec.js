import MenuPage from '../pageobjects/menuPage';

describe('Hamburger Menu Interaction', () => {
  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      const filename = `./errorShots/${this.currentTest.title.replace(/\s+/g, '_')}.png`;
      await browser.saveScreenshot(filename);
    }
  });

  it('should open the menu when tapping the burger icon', async () => {
    await expect(MenuPage.burgerIcon).toBeDisplayed({ timeout: 5000 });
    await MenuPage.burgerIcon.click();
    await MenuPage.menuPanel.waitForDisplayed({ timeout: 5000 });
    await expect(MenuPage.menuPanel).toBeDisplayed();
  });

  it('should display all expected menu options', async () => {
    for (const option of MenuPage.menuOptions) {
      const menuItem = await MenuPage.getMenuItem(option);
      await expect(menuItem).toBeDisplayed();
    }
  });

  it('should close the menu when tapping outside', async () => {
    await expect(MenuPage.menuPanel).toBeDisplayed();
    await MenuPage.outsideArea.click();
    await MenuPage.menuPanel.waitForDisplayed({ reverse: true, timeout: 5000 });
    await expect(MenuPage.burgerIcon).toBeDisplayed();
    await expect(MenuPage.burgerIcon).toHaveAttribute('clickable', 'true');
  });
});
