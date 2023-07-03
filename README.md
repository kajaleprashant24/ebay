# Ebay Search Demo Project with wdio


> **Note:**

## Based on

This project is currently based on:

- **WebdriverIO:** `8.##.#`

## Prequisite
1. Have nodejs js latest version installed.
1. Have npm  installed
1. Have Chrme browser on system

## Installation

1. Running `npm install`
1. Running Test on a local machine `npm run wdio`


## Configuration files

This project uses a specific config for local execution

Please check the [`wdio.conf.ts`](./wdio.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.


## PageObjects : 
1. Page objects are located in [`pageObjects`](./test/pageobjects/)
1. Home page related page level functions are in [`Homepage`](./test/pageobjects/home.page.ts)
1. Catogery page related page level functions are in [`Categorypage`](./test/pageobjects/category.page.ts)

## Spec File : 
1. Specs are  located in [`searchSpec`](./test/specs/search.e2e.ts)
1. Spec contains 2 tests for given 2 scenarios.
1. This covers user steps and assertions.
1. Spec file containscode for steps but actual imlmentation can be found in page level file in order to abstract the implementation and have clear seperation between test code and application code.


### Sample Execution logs

   ```bash
  npm run wdio                                                                                                                                                                   00:44:26

> wdio
> wdio run ./wdio.conf.ts


Execution of 1 workers started at 2023-06-10T19:14:44.752Z


// Truncated

 "spec" Reporter:
------------------------------------------------------------------
[chrome 114.0.5735.106 mac os x #0-0] Running: chrome (v114.0.5735.106) on mac os x
[chrome 114.0.5735.106 mac os x #0-0] Session ID: 7affe327581557ee2312b24b63f83cd3
[chrome 114.0.5735.106 mac os x #0-0]
[chrome 114.0.5735.106 mac os x #0-0] » /test/specs/search.e2e.ts
[chrome 114.0.5735.106 mac os x #0-0] Apply Filter to Category
[chrome 114.0.5735.106 mac os x #0-0]    ✓ should be able to apply given filter to search category
[chrome 114.0.5735.106 mac os x #0-0]
[chrome 114.0.5735.106 mac os x #0-0] Search Given Product
[chrome 114.0.5735.106 mac os x #0-0]    ✓ should be able to search product in search bar
[chrome 114.0.5735.106 mac os x #0-0]
[chrome 114.0.5735.106 mac os x #0-0] 2 passing (28.9s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:32

2023-06-10T19:15:17.200Z INFO @wdio/local-runner: Shutting down spawned worker
2023-06-10T19:15:17.453Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-06-10T19:15:17.453Z INFO @wdio/local-runner: shutting down
```







