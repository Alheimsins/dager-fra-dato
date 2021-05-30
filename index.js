export const daysBetweenDates = (dateStart, dateEnd = new Date()) => {
  if (!dateStart) {
    throw new Error('Missing required input start date')
  }
  if (!(dateStart instanceof Date)) {
    throw new TypeError('Input start date must be Date')
  }
  if (!(dateEnd instanceof Date)) {
    throw new TypeError('Input end date must be Date')
  }

  const start = new Date(dateStart.toISOString().substr(0, 10))
  const end = new Date(dateEnd.toISOString().substr(0, 10))
  const millis = end - start
  const days = (millis / 3600000) / 24
  return Math.floor(days)
}

export default daysBetweenDates
