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
 * Device types.
 */
var deviceTypes = {
    mobile: 'mobile',
    tablet: 'tablet',
    desktop: 'desktop'
};

/**
 * All possible devices.
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
    iphone6Plus: {
        deviceName: "iphone6Plus",
        size: "736x414",
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
	// tables
    ipadAir: {
        deviceName: "ipadAir",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
	// desktops
    desktop1024: {
        deviceName: "desktop1024",
        size: "1024x768",
        tags: [deviceTypes.desktop]
    }
};
