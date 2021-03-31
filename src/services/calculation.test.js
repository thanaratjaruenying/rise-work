import Calculation from './calculation'

const expectedMenu = JSON.stringify({
  1: {
    name: 'Red set',
    price: 50
  },
  2: {
    name: 'Green set',
    price: 40
  },
  3: {
    name: 'Blue set',
    price: 30
  },
  4: {
    name: 'Yellow set',
    price: 50
  },
  5: {
    name: 'Pink set',
    price: 80
  },
  6: {
    name: 'Purple set',
    price: 90
  },
  7: {
    name: 'Orange set',
    price: 120
  }
})

describe('Calculate with member', () => {
  const Calculator = new Calculation(true);

  test('should return menu', () => {
    const menu = Calculator.Menu

    expect(JSON.stringify(menu)).toBe(expectedMenu)
  })

  test('should return name after ordering', () => {
    expect(Calculator.Order(1)).toBe('You have ordered Red set')
    expect(Calculator.Order(2)).toBe('You have ordered Green set')
    expect(Calculator.Order(3)).toBe('You have ordered Blue set')
    expect(Calculator.Order(4)).toBe('You have ordered Yellow set')
    expect(Calculator.Order(5)).toBe('You have ordered Pink set')
    expect(Calculator.Order(6)).toBe('You have ordered Purple set')
    expect(Calculator.Order(7)).toBe('You have ordered Orange set')
  })

  test('should return total price', () => {
    expect(Calculator.Price()).toBe(414)
  })

  test('should return total price with discount when order twice of Orange set', () => {
    expect(Calculator.Order(7)).toBe('You have ordered Orange set')
    expect(Calculator.Price()).toBe(511.2)
  })

  test('should return error message when ordering the wrong number', () => {
    expect(Calculator.Order(8)).toBe('You have ordered the wrong number set')
    expect(Calculator.Order('ss')).toBe('You have ordered the wrong number set')
  })

  test('should return order list without removed order number', () => {
    expect(Calculator.Ordered).toEqual([1,2,3,4,5,6,7,7])
    expect(Calculator.Remove(7)).toEqual([1,2,3,4,5,6,7])
    expect(Calculator.Remove(6)).toEqual([1,2,3,4,5,7])
    expect(Calculator.Remove('ss')).toEqual([1,2,3,4,5,7])
  })
})

describe('Calculate without member', () => {
  const Calculator = new Calculation(false);

  test('should return menu', () => {
    const menu = Calculator.menu

    expect(JSON.stringify(menu)).toBe(expectedMenu)
  })

  test('should return name after ordering', () => {
    expect(Calculator.Order(1)).toBe('You have ordered Red set')
    expect(Calculator.Order(2)).toBe('You have ordered Green set')
    expect(Calculator.Order(3)).toBe('You have ordered Blue set')
    expect(Calculator.Order(4)).toBe('You have ordered Yellow set')
    expect(Calculator.Order(5)).toBe('You have ordered Pink set')
    expect(Calculator.Order(6)).toBe('You have ordered Purple set')
    expect(Calculator.Order(7)).toBe('You have ordered Orange set')
  })

  test('should return total price', () => {
    expect(Calculator.Price()).toBe(460)
  })

  test('should return total price with discount when order twice of Orange Pink Green set', () => {
    expect(Calculator.Order(7)).toBe('You have ordered Orange set')
    expect(Calculator.Order(5)).toBe('You have ordered Pink set')
    expect(Calculator.Order(2)).toBe('You have ordered Green set')
    expect(Calculator.Price()).toBe(676)
  })

  test('should return total price with discount when order 3 times of Orange set', () => {
    expect(Calculator.Order(7)).toBe('You have ordered Orange set')
    expect(Calculator.Price()).toBe(790)
  })
})
