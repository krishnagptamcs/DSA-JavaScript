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
    // this logic has a glitch , if the same length key is passed like name , mane will be passed then numeric digit for this will be same
    // that means this is an anagram scenario , and thus value would be replaced , by new value , but we dont want that
    // this.table[index] = value;

    //SO TAKING DIFFRENT APPROACH
    //taking the key value pair at a index
    let bucket = this.table[index];

    if (!bucket) {
      //if bucket is null , that means no key-value is present at a given index
      // add the given key,value in an array
      bucket = [[key, value]];
    } else {
      // if there is already key value pair is present in the index
      // checking the exsistance key , with the incoming key

      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        // if key is same , ex esxisting kye "name" && incoming key "name" , then replace the value of that key
        // item[0]  , is the key name at this position
        //sameKeyItem[1]  , is showing the value at the 1st postion
        sameKeyItem[1] = value;
      } else {
        // if the key is dffrent , then push the incomign the key value pair in the exsitig aaray
        bucket.push([key, value]);
      }
    }
  }

  //Get method
  // return the value for a given key
  get(key) {
    const index = this.hash(key);
    // now converting into numeric digit by hash method
    // returng the value of that index
    // return this.table[index];

    //MODIFIED LOGIC
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    } else {
      console.log("the given not exsist");
    }
  }

  //Remove method
  //delete the value at a given key
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;

    //MODIFIED LOGIC
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
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
