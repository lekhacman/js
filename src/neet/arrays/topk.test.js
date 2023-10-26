import topKFrequent from './topk';

describe('Top K Frequent Elements', function() {
  it.each([
    { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
    // { nums: [1, 1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
    // { nums: [1], k: 1, expected: [1] },
    // { nums: [-1, -1], k: 1, expected: [-1] },
  ])('topKFrequent($nums, $k)', function({ nums, k, expected }) {
    expect(topKFrequent(nums, k)).toEqual(expected);
  });
  it('should ', function() {
    (function test() {
      const arr = [];
      arr[5] = 2;
      arr[3] = 3;
      // console.log(arr.length);
      // arr.forEach(function(num) {
      //   console.log(`num = ${num}`);
      // });
      for (let x in arr) {
        console.log(`num = ${x}`);
      }
    })();
  });

  it('should arry', function() {
    const arr = new MyArray();
    arr.insert(2, 3);
    arr.insert(3, 3);
    arr.insert(1, 3);
    arr.insert(4, 3);
    arr.forEach(console.log);
  });
});

class MyArray {
  constructor() {
    this.pointer = null;
  }

  insert(index, value) {
    if (this.pointer === null) {
      this.pointer = new ArrayItem(index, value, null);
    } else if (index < this.pointer.index) {
      this.pointer = new ArrayItem(index, value, this.pointer);
    } else if (index > this.pointer.index) {
      this.pointer.next = new ArrayItem(index, value, null);
    }
  }

  forEach(fn) {
    let x = this.pointer;
    while (x.next !== null) {
      fn(x.value);
      x = x.next;
    }
  }
}
class ArrayItem {
  constructor(index, value, next) {
    this.index = index;
    this.value = value;
    this.next = next;
  }
}
