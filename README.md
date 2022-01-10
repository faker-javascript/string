<h1 align="center">String</h1>
<p align="center">
String package provides functionality to generate a fake string value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/string/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/string.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/string"> <a href="https://github.com/faker-javascript/string"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/string/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/string
```

## Usage

```js
import string from '@fakerjs/string';

string();
//=> 3Kekravwvb78vP9CQPP1vaRCgi4dZETOktxzf8pF5gufFqh8mOICMqjRP4y8UxoI

string({length: 10});
//=> FxvqHNFNUu

string({length: 10, keyspace: '#@$%&+='});
//=> $+#%#&$$=@
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/string/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
