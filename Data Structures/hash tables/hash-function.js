class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let itemsAtIndex = this.keyMap[index];
    if (itemsAtIndex) {
      for (let i = 0; i < itemsAtIndex.length; i++) {
        if (key === itemsAtIndex[i][0]) {
          return itemsAtIndex[i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const element = this.keyMap[i];
      if (element) {
        for (let j = 0; j < element.length; j++) {
          const item = element[j];
          if (!values.includes(item[1])) {
            values.push(item[1]);
          }
        }
      }
    }
    return values;
  }

  keys() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const element = this.keyMap[i];
      if (element) {
        for (let j = 0; j < element.length; j++) {
          const item = element[j];
          if (!values.includes(item[0])) {
            values.push(item[0]);
          }
        }
      }
    }
    return values;
  }
}

let ht = new HashTable(17);
// [[],[],[],[]]
// [[['h','b'],['a',[b]]],[],[],[]]
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("newPlum", "#DDA0DD");

ht.values();
