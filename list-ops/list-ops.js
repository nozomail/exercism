// No Array.prototype functions are allowed to use.

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(listofLists) {
    let i = 0;
    while (listofLists.values[i] !== undefined) {
      this.values = [...this.values, ...listofLists.values[i].values];
      i++;
    }
    return this;
  }

  filter(fn) {
    const values = [...this.values];
    this.values = [];
    let i = 0;
    while (values[i] !== undefined) {
      if (fn(values[i])) this.append(new List([values[i]]));
      i++;
    }
    return this;
  }

  map(fn) {
    const values = [...this.values];
    this.values = [];
    let i = 0;
    while (values[i] !== undefined) {
      this.append(new List([fn(values[i])]));
      i++;
    }
    return this;
  }

  length() {
    let i = 0;
    while (this.values[i] !== undefined) {
      i++;
    }
    return i;
  }

  foldl(fn, initial) {
    let acc = initial;
    let i = 0;
    while (this.values[i] !== undefined) {
      acc = fn(acc, this.values[i]);
      i++;
    }
    return acc;
  }

  foldr(fn, initial) {
    let acc = initial;
    let i = this.length() - 1;
    while (this.values[i] !== undefined) {
      acc = fn(acc, this.values[i]);
      i--;
    }
    return acc;
  }

  reverse() {
    const values = [...this.values];
    let i = this.length() - 1;
    this.values = [];
    while (values[i] !== undefined) {
      this.append(new List([values[i]]));
      i--;
    }
    return this;
  }
}
