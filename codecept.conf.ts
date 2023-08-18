import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const DEFAULT_PORT = 4723

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true, // set this to true to try out appium 2.x
      // 'app': `${process.cwd()}/app-debug.apk`,
      'platform': 'android',
      'device': 'emulator',
      'port': DEFAULT_PORT,
      'path': '/wd/hub',
      browser: '',
      desiredCapabilities: {
        // 'appPackage': 'test' || data.packageName,
        'deviceName': process.env.DEVICE || 'Emulator',
        'platformName': process.env.PLATFORM || 'android',
        //'platformVersion': process.env.OS_VERSION || '11.0',
        'automationName': process.env.ENGINE || 'UIAutomator2',
        // 'avd': process.env.UDID || 'Pixel_XL_API_30',
        'newCommandTimeout': 300000,
        'androidDeviceReadyTimeout': 300000,
        'androidInstallTimeout': 90000,
        'appWaitDuration': 300000,
        'autoGrantPermissions': true,
        'gpsEnabled': true,
        'isHeadless': false,
        'noReset': false,
        'noSign': true,
      }
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'appium2try',
  translation: 'ja-JP'
}