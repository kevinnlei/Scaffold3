# Scaffold3

Scaffold3 is a scaffold which uses Gulp and Bower to manage an Angular frontend. The scaffold uses karma
as a native tool for testing

* [Karma] - Angular test runner
* [Gulp] - Stream based build system
* [Bower] - Manages frontend dependencies


### Installation

You need to install Gulp, Karma, Bower globally:

```sh
$ npm install -g gulp-cli
$ npm install -g karma
$ npm install -g bower
```

Once you have global packages, you need to run the following commands to get the necessary
frontend and development packages

```sh
$ npm install
$ bower install
```

### Testing UI
```sh
$ gulp buildDevJS
$ gulp testUI
```


### Testing Models and Controllers
```sh
$ sbt test
```

### Developing
```sh
gulp buildDevJS
sbt run
```

[//]: #
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [Karma]: <https://karma-runner.github.io/0.13/index.html>
   [Bower]: <http://bower.io/>
   [Gulp]: <http://gulpjs.com>
