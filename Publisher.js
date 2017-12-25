function Publisher () {
	this.listeners = new Map();
}

Publisher.prototype.addListener = function (topic, cb_func) {
  if (this.listeners.has(topic)) {
    this.listeners.get(topic).push(cb_func);
  } else {
    this.listeners.set(topic, [cb_func]);
  }
}

Publisher.prototype.removeListenersByTopic = function (topic) {
  this.listeners.delete(topic);
}

Publisher.prototype.notify = function (topic, msgObj) {
	this.listeners.forEach((value, key) => {
    if (key === topic) {
      value.forEach((listener) => {
        if (typeof listener == "function") {
          listener(msgObj);
        }
      });
    }
	});
}

Publisher.prototype.notifyAll = function (msgObj) {
	this.listeners.forEach((value, key) => {
    value.forEach((listener) => {
      if (typeof listener == "function") {
        listener(msgObj);
      }
    });
	});
}
