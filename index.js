const BST = require("./treeClass")

function run(){
  const tree = new BST()
  tree.add(7)
  tree.add(8)
  tree.add(2)

  console.log(tree)
}

run()