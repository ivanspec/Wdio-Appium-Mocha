class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '11'; // pass the platform version
    }

    static appName() {
        return 'Android-NativeDemoApp-0.4.0.apk'; // pass the apk name
    }

    static udid(){
        return 'emulator-5554'
    }
}

module.exports = AndroidInfo;
