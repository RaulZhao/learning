Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4


```js
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

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
 ```
