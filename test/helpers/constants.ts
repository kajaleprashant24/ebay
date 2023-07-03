export const DEFAULT_TIMEOUT = 60000;

export enum CATEGORIES {
  Cell_Phone_Accessories = "Cell phones & accessories",
  // Add all catories avaiable here. Currently added only the one which is needed for scenario
}

export enum SUB_CATEGORIES {
  Cell_Phone_SmartPhone = "Cell Phones & Smartphones",
  // Add all sub-catories avaiable here . Currently added only the one which is needed for scenario
}

export enum SCREEN_SIZE {
  "4_40",
  // Add all sizes avaiable here . Currently added only the one which is needed for scenario
}

export enum CELL_PHONE_FILTERS {
  Network = "aspect-Network",
  Storage_Capacity = "aspect-Model",
  Lock_Status = "aspect-Model",
  Modele = "aspect-Model",
  ScreenSize = "aspect-Screen%20Size",
  Price = "price",
  Location = "location",
}

export enum LOCATION_FILTER {
  Default,
  US_Only,
  North_America,
  Worldwide,
}
