class Node {
  // intialize node, each node has its element and a pointer points to next node
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Stack {
  // iniitalize stack, current head is null and length is 0
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(element) {
    // to push an element in stack, first create a new node
    const node = new Node(element);
    // point the currnet head to its next property
    node.next = this.head;
    // update current head to the new created node
    this.head = node;
    // stack length +1
    this.length++;
  }

  pop() {
    // if the head in the stack is null, means there is only one node in stack
    if (!this.head) {
      return null;
    }
    // save the current head element to poppedElement, which is the one we need to pop later
    let poppedElement = this.head.element;
    // the head now points to the next node, which is the.head.next
    this.head = this.head.next;
    // stack length -1
    this.length--;
    return poppedElement;
  }

  size() {
    return this.length;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop(); // 3
myStack.size(); // 2
console.log(myStack);
