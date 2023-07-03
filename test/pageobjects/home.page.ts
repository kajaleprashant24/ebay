import Page from "./page.js";
import { CATEGORIES, DEFAULT_TIMEOUT } from "../helpers/constants.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get bannerTable() {
    return $(".gh-tbl");
  }

  get shopByCategoryBtn() {
    return $("#gh-shop-a");
  }

  get categoryLink() {
    return $("table#gh-sbc li");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get seoContainer() {
    return $(".breadcrumbs");
  }

  get searchInput() {
    return $(".ui-autocomplete-input");
  }

  get searchButton() {
    return $(`input[value='Search']`);
  }

  get searchResults() {
    return $("#srp-river-results");
  }

  get searchResultTitle() {
    return $$("#s-item__title");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("/");
  }

  /**
   * select given category
   * @param category
   */
  async selectCategory(category: CATEGORIES) {
    await this.shopByCategoryBtn.click();
    await this.categoryLink.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await $(`=${category}`).click();
    await this.seoContainer.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  }

  /**
   * Search product
   * @param product
   */
  async searchProduct(searchString: string) {
    const input = await this.searchInput;
    await input.waitForDisplayed();
    await input.setValue(searchString);
    expect(input).toHaveValue(searchString);
    const searchButton = await this.searchButton;
    await searchButton.click();
    const results = await this.searchResults;
    results.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await browser.pause(3000);
  }

  async verifySearchResultsTitle(searchString: string) {
    const titles = await this.searchResultTitle;
    titles.forEach((title) => {
      expect(title).toHaveTextContaining(searchString);
    });
  }
}

export default new HomePage();
