# CalloutCSS

A Bower and NPM component holding CSS definitions for callouts. No Javascript or dependencies, ideal
for use in any project which wants to add callout functionality.

## Installation:

#### Bower

```bash
$ bower install calloutcss
```

#### NPM

```bash
$ npm install calloutcss
```

## Development:

To pull and develop this package NPM and webpack is used to manage the development dependencies and
transpile the SCSS file into the final CSS distribution.

#### Setup Environment:

```bash
$ npm install
```

#### Build/Compile the SCSS:

```bash
$ npm run build
```

NOTE: `hack.js` is used as part of the build step generating `ignore.js`, however this is an
artefact of the build stage and is not packaged in releases. Unfortunately Webpack **MUST** have
a javascript entry point from which any (S)CSS is gathered and then output for distribution.

## Copyright and license

Code copyright 2018 TheYorkshireDev (Steven Cooney). Code released under
[the MIT license](https://github.com/TheYorkshireDev/CalloutCSS/blob/master/LICENSE).
