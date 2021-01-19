export class GradeSchool {
  #db;

  constructor() {
    this.#db = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.#db));
  }

  add(name, grade) {
    Object.values(this.#db).forEach((grade) =>
      grade.forEach((student, index) => {
        if (student === name) {
          grade.splice(index, 1);
        }
      })
    );
    if (this.#db[grade] === undefined) {
      this.#db[grade] = [name];
    } else {
      this.#db[grade].push(name);
      this.#db[grade].sort();
    }
  }

  grade(grade) {
    return JSON.parse(JSON.stringify(this.#db[grade] || []));
  }
}
