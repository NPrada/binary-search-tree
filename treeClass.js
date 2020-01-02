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
}

module.exports = BST;