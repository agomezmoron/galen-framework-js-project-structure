/**
 *
 * @summary     Galen Framework Project Tool
 * @description Demo test
 * @version     0.1
 * @file        demo.test.js
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
// important, commons should be loaded here
load('../../utils/commons.js');

load('../config/config.js');

forAll(devicesToTest, function (device) {
  test("Testing on ${deviceName}", function (device) {
    // here goes a test code
    var driver = createDriver(config.baseURL,
      device.size);
    // here is the "key" of the galen-framework testing
    checkLayout(driver, "specs/google.gspec", device.tags);
    driver.close();
    driver.quit();
  });
});
