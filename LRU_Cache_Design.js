/**
 * The LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @param {number} capacity
 */
function Node(key, val) {
    this.key = key;
    this.val = val;
    this.pre = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.hs = new Map();
};

LRUCache.prototype.move_to_tail = function(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    this.insert_at_tail(node);
}

LRUCache.prototype.insert_at_tail = function(node) {
    node.pre = this.tail.pre;
    node.pre.next = node;
    node.next = this.tail;
    this.tail.pre = node;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.hs.has(key)) {
        return -1;
    }
    const currNode = this.hs.get(key);
    this.move_to_tail(currNode);

    return currNode.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.get(key) != -1) {
        this.hs.get(key).val = value;
        return;
    }
    if (this.capacity <= this.hs.size) {
        let lruNode = this.head.next;

        this.head.next = lruNode.next;
        lruNode.next.pre = this.head;
        this.hs.delete(lruNode.key);
        lruNode = null;
    }
    let newNode = new Node(key, value)

    this.hs.set(key, newNode);
    this.insert_at_tail(newNode);
};
