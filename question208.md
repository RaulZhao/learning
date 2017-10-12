Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.


```js
/**
 * Initialize your data structure here.
 */
var TrieNode = function(char) {
    this.isEnd = false;
    this.val = char;
    this.children = {};
};

var Trie = function() {
    this.root = new TrieNode('root');
    this.basic = 'a'.charCodeAt();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let n = word.length;
    let currentNode = this.root;
    for(let i=0; i < n; i++) {
        let char = word[i];
        let position = char.charCodeAt() - this.basic;

        if(currentNode.children[position]) {
        } else {
            currentNode.children[position] = new TrieNode(char);
        }

        if(i == (n-1)) {
            currentNode.children[position].isEnd = true;
        }
        currentNode = currentNode.children[position];
    }
};
/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    let n = word.length;

    for(let i=0; i < n; i++) {
        let char = word[i];
        let position = char.charCodeAt() - this.basic;
        let node = currentNode.children[position];
        if(node) {
            if(node.val !== char) {
                return false;
            }

            if(i == n-1) {
                if(!node.isEnd) {
                    return false;
                }
            }
            currentNode = node;
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    let n = prefix.length;

    for(let i=0; i < n; i++) {
        let char = prefix[i];
        let position = char.charCodeAt() - this.basic;
        let node = currentNode.children[position];
        if(node) {
            if(node.val !== char) {
                return false;
            }
            currentNode = node;
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
 ```
