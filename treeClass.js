class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(){
    this.root = null
  }
  
  //add value to the tree
  add(value){
    const node = this.root
    if(node === null){ //if the root has no data then add this
      this.root = new Node(value)
      return
    }

    const addNode = function(node){ //this is preorder depth first search 
      if(value < node.value) {
        if(node.left === null){
          node.left = new Node(value);
          return
        } else {
          addNode(node.left, value)
        }
      } else if (value > node.value) {
        if(node.right === null){
          node.right = new Node(value)
          return
        } else {
          addNode(node.right, value)
        }
      }
      return
    }
    addNode(node)
  }

  min(){
    let node = this.root
    
    while(node.left){
      node = node.left
    }

    return node.value
    
  }

  max(){
    let node = this.root
    
    while(node.right){
      node = node.right
    }

    return node.value
  }

  contains(value){
    let node = this.root

    while(node){
      if(node.value === value){
        return true
      }

      if(node.value < value){
        node = node.right
      } else if(node.value > value){
        node = node.left
      }
    }

    return false
  }


  //search algorithms
  //depth first search
  //in order (left, root right)
  dfsInOrder(){
    const result = []
    
    const traverse = node => {
      if(node.left) traverse(node.left)
      result.push(node.value)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }
  //pre order (root, left right)
  dfsPreOrder(){
    const result = []

    const traverse = node => {
      result.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }
  //post order (left, right, root)
  dfsPostOrder(){
    const result = []

    const traverse = node => {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      result.push(node.value)
    }

    traverse(this.root)

    return result
  }

}

module.exports = BST;