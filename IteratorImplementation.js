const MyIterator = (array) => {
  const len = array.length;
  let count = 0;

  return {
    next() {
      if (count < len) {
        return {
          value: array[count++],
          done: false
        }
      }
      return {
        value: null,
        done: true
      }
    }
  }
}

const it = MyIterator(['a', 'b', 'c', 'd']);
it.next();
