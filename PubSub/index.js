// 发布者 Publisher
class Pub {
  constructor() {
    this.deps = [];
  }
  addDep(dep) {
    this.deps.push(dep);
  }
  publish(dep) {
    this.deps.forEach((item) => item === dep && item.notify());
  }
}
// 订阅者 Subscriber
class Sub {
  constructor(val) {
    this.val = val;
  }

  update(callback) {
    callback(this.val);
  }
}

// 调度中心
class Dep {
  constructor(callback) {
    // 核心是这个 callback 函数；
    this.subs = [];
    this.callback = callback;
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach((item) => item.update(this.callback));
  }
}
export { Pub, Sub, Dep };
