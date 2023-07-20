export class Task {
    constructor(title) {
      this.title = title;
    }
  
    static fromJSON(json) {
      return new Task(json.title);
    }
  }