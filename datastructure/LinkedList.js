class LinkedList{

   constructor(){
        this.head = null;    
        this.tail = null;
   }
 
 }
 
 LinkedList.prototype.prepend=function(value) {

     const newNode = new LinkedListNode(value,this.head);

    // 往head添加节点
    
    this.head = newNode;

    // 如果tail为空，往tail添加此节点
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
   
   }

LinkedList.prototype.append=function(value) {
    const newNode = new LinkedListNode(value);

    // 如果head为空，则head设为newNode

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 把新的newNode设为tail
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
  
  LinkedList.prototype.compare=function(a,b){
 
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
 
};


LinkedList.prototype.delete=function(value) {
 
    let deletedNode = null;

    // head节点是否需要被删除

    while (this.head && this.compare(this.head.value, value)===0) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // 遍历每一个节点
      while (currentNode.next) {
        if (this.compare(currentNode.next.value, value)===0) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // 判断tail节点是否需要删除
    if (this.compare(this.tail.value, value)===0) {
      this.tail = currentNode;
    }

    return deletedNode;
  };
  
  LinkedList.prototype.find=function(value) {
  
    let currentNode = this.head;

    while (currentNode) {
 
      if (value && this.compare(currentNode.value, value)===0) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
    
  }


 LinkedList.prototype.toArray=function() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  
  
 
