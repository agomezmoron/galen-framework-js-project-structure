#!/bin/sh

# @summary     Galen Framework Project Tool
# @description Main file to perform the entire suites.
# @version     0.1
# @file        run.sh
# @author      Alejandro Gómez <agommor@gmail.com>
# @contact     @agomezmoron
# @copyright   Copyright 2015
#
# This source file is free software, available under the following license:
#   MIT license - https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/LICENSE
#
# This source file is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
# or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
#
# For details please refer to: https://github.com/agomezmoron/galen-framework-js-project-structure
#
NOW=$(date +"%Y-%m-%d_%H_%M_%S")
galen test tests/suites/ --htmlreport reports/$NOW
