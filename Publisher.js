function Publisher () {
	this.listeners = new Set();
}

Publisher.prototype.addListener = function (cb_func) {
	this.listeners.add(cb_func);
}

Publisher.prototype.removeListener = function (cb_func) {
  this.listeners.delete(cb_func);
}

Publisher.prototype.notify = function (obj) {
	this.listeners.forEach((listener) => {
    if (typeof listener == "function") {
      listener(obj);
    }
	});
}
