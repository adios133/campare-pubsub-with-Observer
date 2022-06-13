// 被观察者
class Subject {
  constructor() {
    this.observers = [];
  }
  add(observer) {
    this.observers.push(observer);
  }
  notify(msg) {
    this.observers.forEach((i) => i.action(msg));
  }
}
// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  action(msg) {
    console.log(msg + '======》》》' + this.name + '收到了');
  }
}
export { Subject, Observer };
