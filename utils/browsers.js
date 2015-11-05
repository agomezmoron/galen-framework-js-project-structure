/**
 *
 * @summary     Galen Framework Project Tool
 * @description Browsers definition
 * @version     0.1
 * @file        browsers.js
 * @author      Alejandro Gómez <agommor@gmail.com>
 * @contact     @agomezmoron
 * @copyright   Copyright 2015
 *
 * This source file is free software, available under the following license:
 *   MIT license - https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/LICENSE
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: https://github.com/agomezmoron/galen-framework-js-project-structure
 */

/**
 * Bootstrap device width classifications.
 */
var deviceMaxWidths = {
    mobile: 768,
    phablet: 959,
    tablet: 959,
    desktop: 1200
};

/**
 * Device types.
 */
var deviceTypes = {
    mobile: 'mobile',
    mobile_portait: 'mobile-portait',
    mobile_landscape: 'mobile-landscape',
    phablet: 'phablet',
    phablet_portait: 'phablet-portait',
    phablet_landscape: 'phablet-landscape',
    tablet: 'tablet',
    tablet_portait: 'tablet-portait',
    tablet_landscape: 'tablet-landscape',
    desktop: 'desktop'
};

/**
 * All possible devices.
 * They were extracted from http://mydevice.io/devices/
 */
var devices = {
    // mobiles
    iphone4: {
        deviceName: "iPhone4",
        size: "480x320",
        tags: [deviceTypes.mobile]
    },
    iphone5: {
        deviceName: "iPhone5",
        size: "568x320",
        tags: [deviceTypes.mobile]
    },
    iphone6: {
        deviceName: "iphone6",
        size: "667x375",
        tags: [deviceTypes.mobile]
    },
    LGG4:{
        deviceName: "LG G4",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    LGG3:{
        deviceName: "LG G3",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    LGOptimusG:{
        deviceName: "LG Optimus G",
        size: "384x640",
        tags: [deviceTypes.mobile]
    },
    LGNexus5:{
        deviceName: "LG Nexus 5",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    LGNexus4:{
        deviceName: "LG Nexus 4",
        size: "384x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyNote:{
        deviceName: "Samsung Galaxy Note",
        size: "400x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyNote2:{
        deviceName: "Samsung Galaxy Note 2",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS5:{
        deviceName: "Samsung Galaxy S5",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS4:{
        deviceName: "Samsung Galaxy S4",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS4Mini:{
        deviceName: "Samsung Galaxy S4 mini",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS3:{
        deviceName: "Samsung Galaxy S3",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS3Mini:{
        deviceName: "Samsung Galaxy S3 mini",
        size: "320x533",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS2:{
        deviceName: "Samsung Galaxy S2",
        size: "320x533",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyS:{
        deviceName: "Samsung Galaxy S",
        size: "320x533",
        tags: [deviceTypes.mobile]
    },
    SamsungGalaxyNexus:{
        deviceName: "Samsung Galaxy Nexus",
        size: "360x600",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia1020:{
        deviceName: "Microsoft Lumia 1020",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia925:{
        deviceName: "Microsoft Lumia 925",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia920:{
        deviceName: "Microsoft Lumia 920",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia920:{
        deviceName: "Microsoft Lumia 920",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia830:{
        deviceName: "Microsoft Lumia 830",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    MicrosoftLumia620:{
        deviceName: "Microsoft Lumia 620",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    HTCOne:{
        deviceName: "HTC One",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    HTC8X:{
        deviceName: "HTC 8X",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    HTCEvo3D:{
        deviceName: "HTC Evo 3D",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SonyXperiaZ3:{
        deviceName: "Sony Xperia Z3",
        size: "360x598",
        tags: [deviceTypes.mobile]
    },
    SonyXperiaZ:{
        deviceName: "Sony Xperia Z",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SonyXperiaS:{
        deviceName: "Sony Xperia S",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    SonyXperiaP:{
        deviceName: "Sony Xperia P",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    XiaomiMi3:{
        deviceName: "Xiaomi Mi 3",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    XiaomiMi4:{
        deviceName: "Xiaomi Mi 4",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    LenovoK900:{
        deviceName: "Lenovo K900",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    BlackberryLeap:{
        deviceName: "Blackberry Leap",
        size: "390x695",
        tags: [deviceTypes.mobile]
    },
    BlackberryPassport:{
        deviceName: "Blackberry Passport",
        size: "504x504",
        tags: [deviceTypes.mobile]
    },
    BlackberryClassic:{
        deviceName: "Blackberry Classic",
        size: "390x390",
        tags: [deviceTypes.mobile]
    },
    BlackberryQ10:{
        deviceName: "Blackberry Q10",
        size: "346x346",
        tags: [deviceTypes.mobile]
    },
    BlackberryZ30:{
        deviceName: "Blackberry Z30",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    BlackberryZ10:{
        deviceName: "Blackberry Z10",
        size: "384x640",
        tags: [deviceTypes.mobile]
    },
    BlackberryTorch:{
        deviceName: "Blackberry Torch",
        size: "480x360",
        tags: [deviceTypes.mobile]
    },
    ZTEGrandS:{
        deviceName: "ZTE Grand S",
        size: "360x640",
        tags: [deviceTypes.mobile]
    },
    ZTEOpen:{
        deviceName: "ZTE Open",
        size: "320x480",
        tags: [deviceTypes.mobile]
    },
    // phablets
    iphone6Plus: {
        deviceName: "iphone6Plus",
        size: "736x414",
        tags: [deviceTypes.phablet]
    },
    MotorolaNexus6: {
        deviceName: "Motorola Nexus 6",
        size: "412x690",
        tags: [deviceTypes.phablet]
    },
    MotorolaNexus6: {
        deviceName: "Microsoft Lumia 1520",
        size: "432x768",
        tags: [deviceTypes.phablet]
    },
    SamsungGalaxyNote3: {
        deviceName: "Samsung Galaxy Note 3",
        size: "360x640",
        tags: [deviceTypes.phablet]
    },
    SamsungGalaxyNote4: {
        deviceName: "Samsung Galaxy Note 4",
        size: "360x640",
        tags: [deviceTypes.phablet]
    },
    // tablets
    ipadPro: {
        deviceName: "Apple iPad Pro",
        size: "1024x1366",
        tags: [deviceTypes.tablet]
    },
    ipad1: {
        deviceName: "Apple iPad 1",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipad2: {
        deviceName: "Apple iPad 2",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipad3: {
        deviceName: "Apple iPad 4",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipad4: {
        deviceName: "Apple iPad 4",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipadAir: {
        deviceName: "Apple iPad Air",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipadMini: {
        deviceName: "Apple iPad mini",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipadMini2: {
        deviceName: "Apple iPad mini 2",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    ipadMini3: {
        deviceName: "Apple iPad mini 3",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    SamsungGalaxyTab_8_9inch: {
        deviceName: "Samsung Galaxy Tab 8.9''",
        size: "800x1280",
        tags: [deviceTypes.tablet]
    },
    SamsungGalaxyTab2_10inch: {
        deviceName: "Samsung Galaxy Tab 2 10''",
        size: "800x1280",
        tags: [deviceTypes.tablet]
    },
    SamsungGalaxyTab2_7inch: {
        deviceName: "Samsung Galaxy Tab 2 7''",
        size: "600x1024",
        tags: [deviceTypes.tablet]
    },
    SamsungGalaxyTab3_10inch: {
        deviceName: "Samsung Galaxy Tab 3 10''",
        size: "800x1280",
        tags: [deviceTypes.tablet]
    },
    SamsungNexus10: {
        deviceName: "Samsung Nexus 10",
        size: "800x1280",
        tags: [deviceTypes.tablet]
    },
    HPSlate6VoiceTab: {
        deviceName: "HP Slate 6 VoiceTab",
        size: "720x1280",
        tags: [deviceTypes.tablet]
    },
    HPSlate6VoiceTabII: {
        deviceName: "HP Slate 6 VoiceTab II",
        size: "720x1280",
        tags: [deviceTypes.tablet]
    },
    HP7G2: {
        deviceName: "HP 7 G2",
        size: "720x1280",
        tags: [deviceTypes.tablet]
    },
    HP7Plus: {
        deviceName: "HP 7 Plus",
        size: "600x1024",
        tags: [deviceTypes.tablet]
    },
    HP7VoiceTab: {
        deviceName: "HP 7 Voice Tab",
        size: "600x1024",
        tags: [deviceTypes.tablet]
    },
    HPSlate7: {
        deviceName: "HP Slate 7",
        size: "1024x600",
        tags: [deviceTypes.tablet]
    },
    HPSlate7Plus: {
        deviceName: "HP Slate 7 Plus",
        size: "1280x800",
        tags: [deviceTypes.tablet]
    },
    HPProSlate8: {
        deviceName: "HP Pro Slate 8",
        size: "2048x1536",
        tags: [deviceTypes.tablet]
    },
    HPSlate8Pro: {
        deviceName: "HP Slate 8 Pro",
        size: "1600x1200",
        tags: [deviceTypes.tablet]
    },
    HPSlate10HD: {
        deviceName: "HP Slate 10 HD",
        size: "1280x800",
        tags: [deviceTypes.tablet]
    },
    HPProSlate12: {
        deviceName: "HP Pro Slate 12",
        size: "1600x1200",
        tags: [deviceTypes.tablet]
    },
    HTCNexus9: {
        deviceName: "HTC Nexus 9",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    AsusNexus7V1: {
        deviceName: "Asus Nexus 7 (v1)",
        size: "600x960",
        tags: [deviceTypes.tablet]
    },
    AsusNexus7V2: {
        deviceName: "Asus Nexus 7 (v2)",
        size: "604x966",
        tags: [deviceTypes.tablet]
    },
    MicrosoftSurface: {
        deviceName: "Microsoft Surface",
        size: "768x1366",
        tags: [deviceTypes.tablet]
    },
    MicrosoftSurfacePro: {
        deviceName: "Microsoft Surface Pro",
        size: "720x1280",
        tags: [deviceTypes.tablet]
    },
    MicrosoftSurfacePro2: {
        deviceName: "Microsoft Surface Pro 2",
        size: "720x1280",
        tags: [deviceTypes.tablet]
    },
    MicrosoftSurfacePro3: {
        deviceName: "Microsoft Surface Pro 3",
        size: "1024x1440",
        tags: [deviceTypes.tablet]
    },
    BlackberryPlaybook: {
        deviceName: "Blackberry Playbook",
        size: "600x1024",
        tags: [deviceTypes.tablet]
    },
    // desktops
    desktop1024: {
        deviceName: "desktop1024",
        size: "1024x768",
        tags: [deviceTypes.desktop]
    }
};
