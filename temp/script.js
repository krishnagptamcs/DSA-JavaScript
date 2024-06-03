// string anagram -- stringth length must be equal and no. of character must be equal.

// hello-> llheo
// ajay-> aajy

// condition 
// length check (for both string)


function isAnagram(string1,string2){
    if(string1.length!= string2.length){
        return false;
    }

};


const result= isAnagram('hello','llheo');

console.log(result);