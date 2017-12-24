window.ajax = {
	list: [1,2,3,4],
	init: function() {
    let list = this.list;

		setInterval(function() {
      if(this.list.length) {
        console.log("Call Ajax", list.shift());
      }
    }.bind(this), 1000);
	},
	add: function(num) {
		this.list.push(num);
	}
}
