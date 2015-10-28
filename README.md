Galen Framework JS API Project Structure
==============
[Galen Framework](http://galenframework.com) is an open-source tool for testing layout and responsive design of web applications. It is also a powerfull functional testing framework. For more information visit http://galenframework.com

In this project you will find a structure with some additional functionalities in order to work with Galen Framework through the JS API and also *overriding* some functionalities (like generating for each given divice to test, all the possible possibilities (portrait and landscape) for *tablet* or *mobile* devices.

The project also includes a catalog with some commons devices (iPad, iPhones, etc) with the correct dimensions.

##Requirements

Before using this project structure you must have installed [Galen Framework](http://galenframework.com). You can follow the provided steps in http://galenframework.com/docs/getting-started-install-galen/

##How to use it

Once you have [Galen Framework](http://galenframework.com) installed you have to provide execution permissions for the run.sh file. That file will perform all the existent tests in the tests/suites folder. According to the [Galen Framework JS API test guide](http://galenframework.com/docs/reference-javascript-tests-guide/), each test should be located in tests/suites/xxxx.test.js

Secondly, you will find a configuration file located in [tests/config/config.js](https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/tests/config/config.js) where you will find:

* **config** (JSON object): Here you will be able to define some basic config parameters (baseURL, etc).
* **devicesToTest** (JSON object): Here you will have to define all the devices you want to test. In the existent [browsers.js](https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/utils/browsers.js) file you have some defined devices. If you miss someone else, it's strongly recommend to add there before using it.

Once having configuring the project and defined the first test like in the [provided example](https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/tests/suites/demo.test.js) you will have to create the *key* of the responsive testing: the .gspec files. Those files are written following the [Galen spec language](http://galenframework.com/docs/reference-galen-spec-language-guide/) and you can find a simple example in [specs/demo.gspec](https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/specs/demo.gspec).

[Galen Framework](http://galenframework.com) uses for the **checkLayout** test method a provided 
(https://github.com/agomezmoron/galen-framework-js-project-structure/blob/master/specs/demo.gspec)

##Contributing

This project is under the MIT License. So you can request to be a contributor if you think you can provide more extra functionalities just contact to the owner to start working with him.
