// import { Subject, Observer } from './Observer/index.js';

// const sub = new Subject();
// const observer1 = new Observer('observer1');
// const observer2 = new Observer('observer2');
// sub.add(observer1);
// sub.add(observer2);
// sub.notify('send a message');

import { Pub, Sub, Dep } from './PubSub/index.js';

const pub = new Pub();
const dep = new Dep((data) => {
  console.log(data);
});
pub.addDep(dep);
const sub1 = new Sub('sub1');
const sub2 = new Sub('sub2');
dep.addSub(sub1);
dep.addSub(sub2);
pub.publish(dep);
