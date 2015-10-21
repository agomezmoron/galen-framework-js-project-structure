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
    ipadAir: {
        deviceName: "ipadAir",
        size: "768x1024",
        tags: [deviceTypes.tablet]
    },
    desktop: {
        deviceName: "desktop",
        size: "1024x768",
        tags: [deviceTypes.desktop]
    }
};