import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.js";
import {
  CELL_PHONE_FILTERS,
  DEFAULT_TIMEOUT,
  LOCATION_FILTER,
  SCREEN_SIZE,
  SUB_CATEGORIES,
} from "../helpers/constants.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get categoryTitle() {
    return $(".section-title__title");
  }

  get shopByCategoryBtn() {
    return $("#gh-shop-a");
  }

  get categoryLink() {
    return $(".b-textlink.b-textlink--parent");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get seoContainer() {
    return $(".breadcrumbs");
  }

  get seeAll() {
    return $(".b-carousel__seeall button");
  }

  get filterForm() {
    return $("#x-overlay__form");
  }

  get filterCheckbox() {
    return $$(".x-refine__multi-select-checkbox");
  }

  get minPriceFilter() {
    return $(".x-textrange__input.x-textrange__input--from");
  }

  get maxPriceFilter() {
    return $(".x-textrange__input.x-textrange__input--to");
  }

  get locationFilterSelectBox() {
    return $$(".x-refine__single-select-radio input");
  }

  get filterTags() {
    return $(".x-tray__breadcrumbs");
  }

  get applyFilterBtn() {
    return $("button.btn--primary");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async openSubCategory(subcategory: SUB_CATEGORIES) {
    await this.categoryLink.waitForDisplayed({
      timeout: DEFAULT_TIMEOUT,
    });
    await $(`=${subcategory}`).click();
    await this.seoContainer.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await expect(this.seoContainer).toHaveTextContaining(subcategory);
  }

  /**
   * Click on See All Link
   */
  async seeAllItems() {
    await this.seeAll.click();
    await this.filterForm.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
  }

  /**
   * Click on given filter option
   * @param filter
   */
  async addFilter(filter: CELL_PHONE_FILTERS) {
    const filters = await $(`[data-aspecttitle="${filter}"]`);
    await filters.click();
    await browser.pause(3000);
  }

  /**
   * Add screen filter
   * @param size
   */
  async addScreenSizeFilters(size: SCREEN_SIZE) {
    await this.addFilter(CELL_PHONE_FILTERS.ScreenSize);
    const element = await this.filterCheckbox[size];
    element.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await element.click();
    //  await expect(element).toBeChecked();
  }

  /**
   * Add Price filter
   * @param min
   * @param max
   */
  async addPriceFilter(min: number, max: number) {
    await this.addFilter(CELL_PHONE_FILTERS.Price);
    const minEl = await this.minPriceFilter;
    await minEl.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await minEl.setValue(min);
    const maxEl = await this.maxPriceFilter;
    await maxEl.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
    await maxEl.setValue(max);
    await expect(minEl).toHaveValue(min.toString());
    await expect(maxEl).toHaveValue(max.toString());
  }

  /**
   * Add Location FIlter
   * @param value
   */
  async addItemLocationFilter(value: LOCATION_FILTER) {
    await this.addFilter(CELL_PHONE_FILTERS.Location);
    const element = await this.locationFilterSelectBox[value];
    await browser.pause(1000);
    await element.click();
    await expect(element).toBeChecked();
  }

  /**
   * Verify Filter tags added
   * @param tags
   */
  async verifyFliterTagsAdded(tags: string[]) {
    const element = await this.filterTags;
    tags.forEach((tag) => {
      expect(element).toHaveTextContaining(tag);
    });
  }

  async applyFliter() {
    (await this.applyFilterBtn).click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("/");
  }
}

export default new HomePage();
