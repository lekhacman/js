'use strict';

/**
 * Did you ever have fresh tea from some stall? They often make more
 * than one cup that you demanded and save the rest for any other customer
 * so to save the resources e.g. gas etc. Flyweight pattern is all about
 * that i.e. sharing.
 *
 * It is used to minimize memory usage or computational expenses by sharing
 * as much as possible with similar objects.
 *
 * In computer programming, flyweight is a software design pattern. A flyweight
 * is an object that minimizes memory use by sharing as much data as possible
 * with other similar objects; it is a way to use objects in large numbers when
 * a simple repeated representation would use an unacceptable amount of memory.
 */

class KarakTea {}

class TeaMaker {
  constructor() {
    this.availableTea = new Map();
  }

  make(preference) {
    if (!this.availableTea.get(preference)) {
      this.availableTea.set(preference, new KarakTea());
    }

    return this.availableTea.get(preference);
  }
}

class TeaShop {
  constructor(teaMaker) {
    if (!(teaMaker instanceof TeaMaker)) {
      throw new TypeError();
    }

    this.orders = new Map();
    this.teaMaker = teaMaker;
  }

  takeOrder(teaType, table) {
    this.orders.set(table, this.teaMaker.make(teaType));
  }

  serve() {
    for (const order of this.orders) {
      console.log(`Serving tea to table# ${order[0]}`);
    }
  }
}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);
shop.takeOrder('more milk', 7);

shop.serve();
