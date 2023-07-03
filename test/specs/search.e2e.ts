import HomePage from "../pageobjects/home.page.js";
import CategoryPage from "../pageobjects/category.page.js";
import {
  CATEGORIES,
  LOCATION_FILTER,
  SCREEN_SIZE,
  SUB_CATEGORIES,
} from "../helpers/constants.js";

describe("Apply Filter to Category", () => {
  it("should be able to apply given filter to search category", async () => {
    //Visit Home Page
    await HomePage.open();

    // Select Categories and sub categories
    await HomePage.selectCategory(CATEGORIES.Cell_Phone_Accessories);
    await CategoryPage.openSubCategory(SUB_CATEGORIES.Cell_Phone_SmartPhone);
    await CategoryPage.seeAllItems();

    // Add filters
    await CategoryPage.addScreenSizeFilters(SCREEN_SIZE["4_40"]);
    await CategoryPage.addPriceFilter(100, 1000);
    await CategoryPage.addItemLocationFilter(LOCATION_FILTER.Worldwide);

    // Validate added filters are applied to Dialog
    const filterTags = ["Worldwide", "$100 - $1000", "4.0 - 4.4 in"];
    await CategoryPage.verifyFliterTagsAdded(filterTags);
    await CategoryPage.applyFliter();
  });
});

describe("Search Given Product", () => {
  it("should be able to search product in search bar", async () => {
    const searchString = "MacBook";
    //Visit Home Page
    await HomePage.open();

    // Search Given Product
    await HomePage.searchProduct(searchString);

    // Verify search string is present in title of all listed products
    await HomePage.verifySearchResultsTitle(searchString);
  });
});
