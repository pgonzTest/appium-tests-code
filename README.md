# Appium WDIO Mobile Tests (Android Emulator CI/CD)

This repository contains Android mobile UI tests for an Test Android application using **Appium** and **WebdriverIO**. The tests are executed automatically in CI/CD through **GitHub Actions**, using the **Android Emulator Runner** action across multiple Android API levels.

## Tech Stack

- [Appium](https://appium.io/)
- [WebdriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/) (via WDIO)
- [Android Emulator Runner](https://github.com/marketplace/actions/android-emulator-runner)
- GitHub Actions (CI)

## What This Project Demonstrates

- Running mobile UI tests using Appium + WDIO
- Executing tests across multiple Android API levels (API Matrix)
- Fully automated workflow via GitHub Actions
- Headless Android emulator execution in CI

## Running Tests Locally

### Prerequisites
- Node.js v18+
- Appium Server installed (`npm install -g appium`)
- Android SDK + emulator image (via Android Studio or SDK manager)
- Emulator with a valid Android Virtual Device (AVD)

### Install Dependencies

```bash
npm install