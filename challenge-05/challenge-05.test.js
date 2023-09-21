import { describe, expect, it } from 'vitest'
import daysToXmas from './challenge-05'

describe('Counting down the days to presents', () => {
  it('should be a function', () => {
    expect(typeof daysToXmas).toBe('function')
  })

  it('should return 0 days if the date passed by params is Dec 25, 2021', () => {
    const date = new Date('Dec 25, 2021')
    const date1 = new Date('Dec 25, 2021 00:00:00')
    const date2 = new Date('Dec 25, 2021 12:40:20')
    const date3 = new Date('Dec 25, 2021 23:59:59')

    expect(daysToXmas(date)).toBe(0)
    expect(daysToXmas(date1)).toBe(0)
    expect(daysToXmas(date2)).toBe(0)
    expect(daysToXmas(date3)).toBe(0)
  })

  it('should return 1 day if the date passed by params is Dec 24, 2021', () => {
    const date = new Date('Dec 24, 2021')
    const date1 = new Date('Dec 24, 2021 00:00:00')
    const date2 = new Date('Dec 24, 2021 12:40:20')
    const date3 = new Date('Dec 24, 2021 23:59:59')

    expect(daysToXmas(date)).toBe(1)
    expect(daysToXmas(date1)).toBe(1)
    expect(daysToXmas(date2)).toBe(1)
    expect(daysToXmas(date3)).toBe(1)
  })

  it('should return 5 days if the date passed by params is Dec 20, 2021', () => {
    const date = new Date('Dec 20, 2021')
    const date1 = new Date('Dec 20, 2021 00:00:00')
    const date2 = new Date('Dec 20, 2021 12:40:20')
    const date3 = new Date('Dec 20, 2021 23:59:59')

    expect(daysToXmas(date)).toBe(5)
    expect(daysToXmas(date1)).toBe(5)
    expect(daysToXmas(date2)).toBe(5)
    expect(daysToXmas(date3)).toBe(5)
  })

  it('should return -10 days if the date passed by params is Jan 4, 2022', () => {
    const date = new Date('Jan 4, 2022')
    const date1 = new Date('Jan 4, 2022 00:00:00')
    const date2 = new Date('Jan 4, 2022 16:23:19')
    const date3 = new Date('Jan 4, 2022 23:59:59')

    expect(daysToXmas(date)).toBe(-10)
    expect(daysToXmas(date1)).toBe(-10)
    expect(daysToXmas(date2)).toBe(-10)
    expect(daysToXmas(date3)).toBe(-10)
  })
})
