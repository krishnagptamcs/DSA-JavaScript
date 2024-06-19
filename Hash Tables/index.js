class HashTable {
  //Creating an array of a given size to store key-value pair in it
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // Hastable method
  //This method is used by set,get & removed method
  hash(key) {
    //the key datatype is string
    // this method will convert the given string key in an numeric digit
    // now this numeric digit will be lie in b/w 0 to size of the array
    // the numeric digit will be obtained , will be the index in the array
    //  and the pass value will be store at the index

    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    // throgh this line if the value is > size of the array then it will returnt the range b/w 0 to size
    return total % this.size;
  }

  //Set method
  // set the value at a given key
  set(key, value) {
    // converting the string in the numeric charcater
    const index = this.hash(key);
    //after obtainig the index storing its value
    this.table[index] = value;
  }

  //Get method
  // return the value for a given key
  get(key) {
    const index = this.hash(key);
    // now converting into numeric digit by hash method
    // returng the value of that index
    return this.table[index];
  }

  //Remove method
  //delete the value at a given key
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  //Display method
  display() {
    for (let i = 0; i < this.table.length; i++) {
      // checking the value is present on that index or not
      if (this.table[i]) {
        // if the value is present then cosole it
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "krishna");
table.set("age", 25);

table.display();
