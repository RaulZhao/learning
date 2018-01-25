Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

For example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

```js
/**
 * Initialize your data structure here.
 */
var TrieNode = function(char) {
    this.char = char;
    this.children = [];
    this.idEnd = false;
}
var WordDictionary = function() {
    this.root = new TrieNode("root");
    this.basic = "a".charCodeAt(0);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    const len = word.length;
    let currNode = this.root;

    for(let i=0; i < len; i++) {
        let index = word.charCodeAt(i) - this.basic;
        if(currNode.children[index] == undefined) {
            currNode.children[index] = new TrieNode(word[i]);
        }
        
        if(i === len-1) {
            currNode.children[index].isEnd = true;
        }
        currNode = currNode.children[index];
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const len = word.length;
    let currNode = this.root;
    
    return searchWord(this.root, word, 0);
    
    function searchWord(node, word, depth) {
        if(node == null) {
            return false;
        }
        let currChar = word[depth];

        if(depth === len-1) {
            if(node.children.length < 1) {
                return false;
            } else {
                if(currChar === '.') {
                    return true;
                } else {
                    let index = currChar.charCodeAt(0) - this.basic;
                    if (node.children[index] && node.children[index].isEnd) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

        if(currChar === ".") {
            let isFound = false;
            node.children.forEach((val) => {
                if(searchWord(val, word, depth+1)) {
                    isFound = true;
                };
            });
            return isFound;
        } else {
            let index = currChar.charCodeAt(0) - this.basic;
            if (node.children[index]) {
                return searchWord(node.children[index], word, depth+1);
            } else {
                return false;
            }
        }
    }     
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
 ```