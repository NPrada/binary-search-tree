const BST = require("./treeClass")

function run(){
  const tree = new BST()
  tree.add(7)
  tree.add(8)
  tree.add(2)
  tree.min()
  console.log(tree.bfs())
}

run()