Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.


Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const bubbleSort = function(arr) {
        for(let i=0; i < arr.length; i++) {
            for(let j=0; j < arr.length - 1 - i; j++) {
                if(arr[j][0] < arr[j+1][0]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                } else if (arr[j][0] === arr[j+1][0]) {
                    if (arr[j][1] > arr[j+1][1]) {
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    }
                }
            }
        }
    }

    bubbleSort(people);
    for(let i= 1; i < people.length; i++) {
        if (people[i][0] < people[i-1][0]) {
            let tmp = people[i];
            for(let j=i; j > tmp[1]; j--) {
                people[j] = people[j-1];
            }
            people[tmp[1]] = tmp;
        }
    }

    return people;
};
```
