Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

```java
class Solution {
    LinkedList<Parenthesis> list = new LinkedList<Parenthesis>();
    public int longestValidParentheses(String s) {
        int result = 0;
        for(int i=0; i < s.length(); i++) {
            Parenthesis p = new Parenthesis(i, s.charAt(i));
            if(list.size() < 1) {
                list.add(p);
            } else {
                if(list.getLast().val == '(') {
                    if(p.val == ')') {
                        list.removeLast();
                    } else if(p.val == '(') {
                        list.add(p);
                    }
                } else if(list.getLast().val == ')'){
                    list.add(p);
                }
            }
        }

        int pre_index = -1;
        if(list.size() == 0) {
            return s.length();
        }
        for(int i=0; i < list.size(); i++) {
            int curr_index = list.get(i).index;
            result = Math.max(result, curr_index - pre_index - 1);
            pre_index = curr_index;
        }
        result = Math.max(result, s.length() - pre_index - 1);
        return result;
    }

    class Parenthesis {
        int index;
        char val;
        public Parenthesis(int index, char val) {
            this.index = index;
            this.val = val;
        }
    }
}
```
