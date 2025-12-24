/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let size = 0;
  let node = head;
  let resultNode = head;
  while (node) {
    size++;
    node = node.next;
  }
  let index = Math.floor(size / 2);
  let counter = 0;
  while (index !== counter) {
    resultNode = resultNode.next;
    counter++;
  }
  return resultNode;
};
// @lc code=end

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

middleNode(head);
