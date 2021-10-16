[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# dager-fra-dato

Returns days between two dates.

```JavaScript
import { daysBetweenDates } from '@alheimsins/uker-fra-dato'
const start = new Date('2021-05-30')
const endOne = new Date('2021-05-31')
const endPast = new Date('2021-05-29')

console.log(daysBetweenDates(start)) //=> 0
console.log(daysBetweenDates(start, endOne)) // => 1
console.log(daysBetweenDates(start, endPast)) // => -1
```


# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
