// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well.
// Then write a Stack class with its core functions (push, pop) from scratch.

// - Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  pop() {
    // if this.top is null, return
    if (this.top === null) {
      return null
    }
    // else set this.top.next to this.top
    let old = this.top
    this.top = this.top.next
    // return this.top.value
    return old.value
  }

  push(value) {
    // create new node
    // set node.next to current this.top
    let newNode = new _Node(value, this.top)
    // set this.top to node
    this.top = newNode
  }
}

// 2. Useful methods for a stack
function peek(stack) {
  // return stack.top
  if (!stack.top) {
    return null
  }
  return stack.top.value
}

function isEmpty(stack) {
  return stack.top === null ? true : false
}

function display(stack) {
  return JSON.stringify(stack)
}

function main() {
  let starTrek = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
  console.log(display(starTrek))
  starTrek.pop()
  starTrek.pop()
  console.log(display(starTrek))
}

// run the tests
// main()
// 3. Check for palindromes using a stack
// function is_palindrome(stack) {
//   stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
//   let convertedStack = new Stack()
//   for (let i = 0; i < stack.length; i++) {
//     convertedStack.push(stack[i])
//   }
//   // Your code goes here
//   let palindrome = false
//   if (convertedStack.top === null) {
//     return
//   }

//   let currentTop = convertedStack.top

//   while (currentTop.next !== null) {
//     let tempStack = convertedStack
//     // while currentTop.next is not null
//     // store the value from the top of the stack
//     let first = tempStack.top
//     // console.log(first)
//     let temp = tempStack.pop()
//     // console.log(temp)
//     let lastPop = null
//     // continue to pop until temp.next is null
//     while (temp.next !== null) {
//       lastPop = temp
//       temp = tempStack.pop()
//       // if first.value is equal to temp.value, palindrome is true for now
//       if (temp.next === null && lastPop === null && first.value === temp.value) {
//         palindrome = true
//         // now check stack again, but set currentTop = currentTop.next
//         currentTop = currentTop.next
//         // next pop values until stack.top.next = lastPop
//       } else if (temp.next === null && lastPop === null && first.value === temp.value) {
//         palindrome = true
//         // now check stack again, but set currentTop = currentTop.next
//         currentTop = currentTop.next
//       } else {
//         palindrome = false
//         return palindrome
//       }
//     }
//     // return true if the loop is not interrupted
//   }
//   return palindrome
// }

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let reverseString = ''
  // Your code goes here
  // create new Stack using string provided
  let stringStack = new Stack()
  // push all items into stack, then pop them into new string
  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i])
  }
  while (stringStack.top !== null) {
    reverseString += stringStack.pop()
  }
  // return true if original string matches new string
  // false otherwise
  return reverseString === string
}

// True, true, true, false
// console.log(is_palindrome('dad'))
// console.log(is_palindrome('A man, a plan, a canal: Panama'))
// console.log(is_palindrome('1001'))
// console.log(is_palindrome('Tauhida'))

// 4. Matching parentheses in an expression

function expressionLinter(exp) {
  let expLeftStack = new Stack()
  let expRightStack = new Stack()
  for (let i = 0; i < exp.length; i++) {
    let expVal = exp[i]
    if (expVal === '(') {
      expLeftStack.push(expVal)
    } else if (expVal === ')') {
      expRightStack.push(expVal)
    }
  }

  let leftCounter = 0
  while (expLeftStack.top !== null) {
    expLeftStack.pop()
    leftCounter++
  }

  let rightCounter = 0
  while (expRightStack.top !== null) {
    expRightStack.pop()
    rightCounter++
  }

  return leftCounter === rightCounter
    ? 'Valid expression!'
    : leftCounter > rightCounter
    ? `Invalid: you have ${leftCounter - rightCounter} too many ( s`
    : `Invalid: you have ${rightCounter - leftCounter} too many ) s`
}

function expLintPos(exp) {
  let leftStack = new Stack()
  let rightStack = new Stack()
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      leftStack.push(exp[i] + ` at index ${i}`)
    } else if (exp[i] === ')') {
      rightStack.push(exp[i] + ` at index ${i + 1}`)
    }
  }

  while (leftStack.top !== null && rightStack.top !== null) {
    let left = leftStack.pop()
    let right = rightStack.pop()

    if (leftStack.top === null && rightStack.top !== null) {
      return `Invalid: extra ${right}`
    } else if (leftStack.top !== null && rightStack.top === null) {
      return `Invalid: extra ${left}`
    }
  }
  return 'Valid!'
}

// console.log(expressionLinter('(((((())'))
console.log(expLintPos('(while(((()))))}'))

// 5. Sort stack
let unsortedStack = new Stack()
unsortedStack.push(5)
unsortedStack.push(3)
unsortedStack.push(4)
unsortedStack.push(3)
unsortedStack.push(5)
// 5 3 4 3

function sortedStack(stack) {
  let sortedStack = new Stack()
  // grab first from stack regardless
  // sortedStack.push(stack.pop())
  console.log(JSON.stringify(stack))
  while (!isEmpty(stack)) {
    let temp = stack.pop()
    // let tempStack = new Stack()
    // while (peek(sortedStack) !== null && peek(sortedStack) < peek(stack)) {
    while (!isEmpty(sortedStack) && peek(sortedStack) > temp) {
      stack.push(sortedStack.pop())
    }
    sortedStack.push(temp)
  }
  while (!isEmpty(sortedStack)) {
    stack.push(sortedStack.pop())
  }
  console.log(JSON.stringify(stack))
}
// console.log(JSON.stringify(sortedStack(unsortedStack)))

// 6. Create a queue using Singly linked list

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    let temp = this.last
    if (this.first === null) {
      let newNode = new _Node(data, null)
      this.last = newNode
      this.first = newNode 
    } else {
      this.last = new _Node(data, null)
      temp.next = this.last
    }
  }

  dequeue() {
    let temp = this.first
    this.first = temp.next
    if (temp.value === this.last.value) {
      this.last = null
    }
    return temp.value
  }
}

function peekQ(queue) {
  if (queue.first === null) {
    return null
  }

  return queue.first.value
}

function isEmptyQ(queue) {
  return queue.first === null && queue.last === null
}

function displayQ(queue) {
  console.log(JSON.stringify(queue))
}
function queueMain() {
  const starTrekQ = new Queue
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  //displayQ(starTrekQ)
  starTrekQ.dequeue()
  starTrekQ.dequeue()
  //displayQ(starTrekQ)
}

queueMain()

// 7. Create a queue class using Doubly linked List
class _DblNode {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class DLLQueue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    let temp = this.last
    if (this.first === null) {
      let newNode = new _DblNode(data, null, null)
      this.last = newNode
      this.first = newNode 
    } else {
      this.last = new _DblNode(data, this.last, null)
      temp.next = this.last
    }
  }

  dequeue() {
    let temp = this.first
    this.first = temp.next
    this.first.prev = null
    if (temp.value === this.last.value) {
      this.last = null
    }
    return temp.value
  }
}

function queueDblMain() {
  const starTrekDblQ = new DLLQueue()
  starTrekDblQ.enqueue('Kirk')
  starTrekDblQ.enqueue('Spock')
  starTrekDblQ.enqueue('Uhura')
  starTrekDblQ.enqueue('Sulu')
  starTrekDblQ.enqueue('Checkov')
  // console.log(starTrekDblQ)
  // console.log(peekQ(starTrekDblQ))
}

queueDblMain()

// 8. Queue implementation using a stack
const firstStack = new Stack()
const lastStack = new Stack()

function stackEnqueue(value, first, last) {
  if (first.top === null) {
    let newNode = new _Node(value, null)
    first.push(newNode)
    last.push(newNode)
  } else {
    let newNode = new _Node(value, null)
    last.pop()
    last.push(newNode)
    let tempStack = new Stack()
    while (!isEmpty(first)) {
      tempStack.push(first.pop())
    }
    tempStack.push(newNode)
    while (!isEmpty(tempStack)) {
      first.push(tempStack.pop())
    }
  }
}

function stackDequeue(first, last) {
  if (peek(first) === peek(last)) {
    first.pop()
    last.pop()
  } else {
    first.pop()
  }
}

function queueStackMain() {
  stackEnqueue('james', firstStack, lastStack)
  stackEnqueue('jim', firstStack, lastStack)
  stackEnqueue('john', firstStack, lastStack)
  //console.log(JSON.stringify(firstStack))
  //console.log(JSON.stringify(lastStack))
  
}

// console.log('Begin Exercise 8:')
// queueStackMain()

// 9. Square dance pairing
let menQueue = new Queue()
menQueue.enqueue('Frank')
menQueue.enqueue('John')
menQueue.enqueue('Sherlock')
menQueue.enqueue('David')
menQueue.enqueue('Christopher')

let womenQueue = new Queue()
womenQueue.enqueue('Jane')
womenQueue.enqueue('Madonna')
womenQueue.enqueue('Beyonce')

function squareDance(men, women) {
  while (men.first !== null && women.first !== null) {
    console.log(`${men.dequeue()} goes 'round with ${women.dequeue()}!`)
  }

  if (men.first === null) {
    let tempDancer = women.first
    while (tempDancer.next !== null) {
      console.log(`${tempDancer.value} needs a partner!`)
      tempDancer = tempDancer.next
    }
  } else {
    let tempDancer = men.first
    while (tempDancer !== null) {
      console.log(`${tempDancer.value} needs a partner!`)
      tempDancer = tempDancer.next
    }
  }
}

// console.log(squareDance(menQueue, womenQueue))