import test from 'ava'
import { daysBetweenDates } from '../index.js'

test('returns 0 for today as input', t => {
  const days = daysBetweenDates(new Date())
  t.is(days, 0)
})

test('returns 0 for today as both inputs', t => {
  const days = daysBetweenDates(new Date(), new Date())
  t.is(days, 0)
})

test('returns 1 for today as start dates and end date as 1 day from now', t => {
  const now = new Date()
  const start = new Date(now.toISOString().substr(0, 10))
  const end = new Date(now.toISOString().substr(0, 10))
  end.setDate(end.getDate() + 1)
  const days = daysBetweenDates(start, end)
  t.is(days, 1)
})

test('returns -1 for today as start dates and yesetrday as end date', t => {
  const now = new Date()
  const start = new Date(now.toISOString().substr(0, 10))
  const end = new Date(now.toISOString().substr(0, 10))
  end.setDate(end.getDate() - 1)
  const days = daysBetweenDates(start, end)
  t.is(days, -1)
})
