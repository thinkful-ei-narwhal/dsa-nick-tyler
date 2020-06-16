const BinarySearchTree = require("./binary-constructor");

//1

/* 

              3
          /      \
         1        6
        /  \     /  \
       2    4   5    9
                    /
                   7



//2 Remove the Root

              5
          /      \
         1        6
        /  \       \
       2    4       9
                    /
                   7
*/

//3
//Please check "binary-constructor.js" for class

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3, "a");
  BST.insert(1, "b");
  BST.insert(4, "c");
  BST.insert(6, "d");
  BST.insert(9, "e");
  BST.insert(2, "f");
  BST.insert(5, "g");
  BST.insert(7, "h");

  return BST;
}

console.log(main());

function main2() {
  const BST = new BinarySearchTree();

  BST.insert("E", 1);
  BST.insert("A", 2);
  BST.insert("S", 3);
  BST.insert("Y", 4);
  BST.insert("Q", 5);
  BST.insert("U", 6);
  BST.insert("E", 7);
  BST.insert("S", 8);
  BST.insert("T", 9);
  BST.insert("I", 10);
  BST.insert("O", 11);
  BST.insert("N", 12);

  return BST;
}

console.log(main2());

//4 What does this program do?
//This program returns the sum of a parent node and its children

//5 Height of a BST
// depth-first search using recursion.
//running counter, reset after looping back to start
//if the returned counter is > largest counter you have, replace it

function height(BST, counter = 0) {
  if (!BST) {
    console.log("End of branch reached!");
    return counter;
  }

  const h1 = height(BST.left, counter++);
  const h2 = height(BST.right, counter++);

  if (h1 > h2) {
    return h1;
  } else {
    return h2;
  }
}

console.log(height(main()));
