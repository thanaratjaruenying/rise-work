export default class Calculator {
  constructor(isMember) {
    this.menu = {
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
    }
    this.isMember = isMember
    this.order = []
  }

  get Menu() {
    return this.menu
  }

  get Ordered() {
    return this.order
  }

  Price() {
    const groupByOrder = this.order.reduce((prev, curr) => {
      if (prev[curr]) {
        prev[curr] = [...prev[curr], curr]
      } else {
        prev[curr] = [curr]
      }
      return prev
    }, {})
    const keys = Object.keys(groupByOrder).map(e => Number(e))
    const totalPrice = keys.reduce((prev, curr) => {
      const orderNumbers = groupByOrder[curr]
      const count = orderNumbers.length
      const set = this.menu[curr]
      const sum = set.price * count

      if (count > 1 && (curr === 2 || curr === 5 || curr === 7)) {
        return prev + (sum - (sum * 0.05))
      } else {
        return prev + sum
      }
    }, 0)

    return this.isMember ? totalPrice - (totalPrice * 0.10) : totalPrice
  }

  Remove(menuNumber) {
    if (typeof menuNumber !== 'number') {
      return this.order
    }
    const index = this.order.indexOf(menuNumber)

    if (index > -1) {
      if (index === 0) {
        this.order = this.order.slice(-1)
      } else {
        this.order = [...this.order.slice(0, index), ...this.order.slice(index + 1)]
      }
    }

    return this.order
  }

  Order(menuNumber) {
    if (typeof menuNumber !== 'number' || (menuNumber < 1 || menuNumber > 7)) {
      return 'You have ordered the wrong number set'
    }

    this.order.push(menuNumber)

    return `You have ordered ${this.menu[menuNumber].name}`
  }
}
