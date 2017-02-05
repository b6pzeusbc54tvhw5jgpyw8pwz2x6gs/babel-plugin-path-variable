# babel-plugin-path-variable
[![npm](https://img.shields.io/npm/v/babel-plugin-path-variable.svg)](https://www.npmjs.com/package/babel-plugin-path-variable)
[![Build Status](https://travis-ci.org/wuchangming/babel-plugin-path-variable.svg?branch=master)](https://travis-ci.org/wuchangming/babel-plugin-path-variable)  
This plugin allows Babel to compile `__dirname` and `__filename` with string literals.

## Installation

```sh
npm install --save-dev babel-plugin-path-variable
```

## Example

### __dirname

file path: ` /Users/wuchangming/github/babel-plugin-path-variable/test_folder/dirname.js`


** In **  
```javascript
var dir = __dirname;
```

** Out **
```javascript
var dir = "/Users/wuchangming/github/babel-plugin-path-variable/test_folder";
```

### __filename
path: /Users/wuchangming/github/babel-plugin-path-variable/test_folder/filename.js  

** In **  
```javascript
var dir = __filename;
```

** Out **
```javascript
var dir = "/Users/wuchangming/github/babel-plugin-path-variable/test_folder/filename.js";
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["path-variable"]
}
```

### Via CLI

```sh
babel --plugins path-variable script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["path-variable"]
});
```
