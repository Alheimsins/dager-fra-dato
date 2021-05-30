import test from 'ava'
import { daysBetweenDates } from '../index.js'

test('needs input start date', t => {
  const error = t.throws(() => {
    daysBetweenDates()
  }, { instanceOf: Error })
  t.is(error.message, 'Missing required input start date')
})

test('input start date must be date', t => {
  const error = t.throws(() => {
    daysBetweenDates('dato')
  }, { instanceOf: TypeError })
  t.is(error.message, 'Input start date must be Date')
})

test('input end date must be date', t => {
  const error = t.throws(() => {
    daysBetweenDates(new Date(), 'dato')
  }, { instanceOf: TypeError })
  t.is(error.message, 'Input end date must be Date')
})
