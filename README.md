# textlint-rule-a3rt-proofreading

[![CircleCI](https://circleci.com/gh/sters/textlint-rule-a3rt-proofreading.svg?style=svg)](https://circleci.com/gh/sters/textlint-rule-a3rt-proofreading)

[textlint](https://github.com/textlint/textlint) rule that using [A3RT Proofreading API](https://a3rt.recruit-tech.co.jp/product/proofreadingAPI/).

This package is A3RT's UNOFFICIAL.


## Installation

```
$ npm install textlint-rule-a3rt-proofreading
```

## Usage

Get the A3RT proofreading api key [here](https://a3rt.recruit-tech.co.jp/product/proofreadingAPI/).
And set A3RT_APIKEY.

```
$ export A3RT_APIKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

or set in `.textlintrc`.

```
{
  "rules": {
    "a3rt-proofreading": {
      "apikey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
  }
}
```

run.

```
$ textlint --rule textlint-rule-a3rt-proofreading README.md
```

## Config

You can set check sensitivity low / medium / high.

set in `.textlintrc`.

```
{
  "rules": {
    "a3rt-proofreading": {
      "sensitivity": "low"
    }
  }
}
```

## Example

See `example/` directory.


## Tests

```
$ export A3RT_APIKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
$ npm test
```

## License

MIT
