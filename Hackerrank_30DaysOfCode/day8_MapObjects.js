let input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

// split the input into an array of strings
phoneBook = input.split("\n");
// console.log(input);
// console.log(phoneBook);

// create a map to store the phone book
phoneBookMap = new Map();

// for loop beginning at 1 to skip the first element (number of entries)
// adding the entries to the map
for (let i = 1; i < phoneBook.length; i++) {
  // if statement to check if the index (i) is less than or equal to the first element
  if (i <= phoneBook[0]) {
    // split the string at the space
    phone = phoneBook[i].split(" ");
    // add the key value pair to the map
    phoneBookMap.set(phone[0], phone[1]);
  } else {
    // if the map has the key, print the key and value
    if (phoneBookMap.has(phoneBook[i])) {
      console.log(phoneBook[i] + "=" + phoneBookMap.get(phoneBook[i]));
    } else {
      console.log("Not found");
    }
  }
}
