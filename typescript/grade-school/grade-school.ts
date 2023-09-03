export class GradeSchool {
  list: { [grade: number]: string[] };
  constructor() {
    this.list = {};
  }
  roster(): { [grade: number]: string[] } {
    const copy: { [grade: number]: string[] } = {};
    for (const grade in this.list) {
      copy[grade] = [...this.list[grade]];
    }
    return copy;
  }

  add(name: string, grade: number): void {
    for (const grades in this.list) {
      let filteredNames = this.list[grades].filter(
        (student) => student !== name
      );
      this.list[grades] = filteredNames;
    }

    if (!this.list[grade]) {
      this.list[grade] = [name];
    } else {
      this.list[grade].push(name);
      this.list[grade].sort();
    }
  }

  grade(grade: number): string[] {
    if (this.list[grade]) {
      const copy: string[] = [];
      this.list[grade].forEach((student) => {
        copy.push(student);
      });
      return copy;
    } else {
      return [];
    }
  }
}
