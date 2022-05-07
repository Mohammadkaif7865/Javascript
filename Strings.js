//String Properties
//1. Length
// let myName = "Mohammad Kaif";
// console.log(myName.length);
//2. Escaped characters \" \' \`
// let myEscaped = "We are only \"worrier\" in the Northern";
// console.log(myEscaped);
//Or
// let myEscaped = 'We are only "worrier" in the Southern';
// console.log(myEscaped);
//or
// let myEscaped = `We are only "worrier" in 'the' Southern`;
// console.log(myEscaped);
//String methods
//1 .IndexOf("character", starting point) to find the index of the first occurrence of a word or character or text within the string. return -1 when not found
//Space is also counted
// const myBioData = "I am Mohammad kaif";
// console.log(myBioData.indexOf("Mo", 6));
//2 . LastIndexOf() it just start from backward direction and everything remain same
// const myBioData = "I am Mohammad kaif";
// console.log(myBioData.lastIndexOf("am"));
//3 . Search() method searches a string for a specified value and returns the position of the match 
// no second search start
// const myBioData = "I am Mohammad kaif";
// let sData = myBioData.search("kaif");
// console.log(sData);
//=> Extracting string parts
//4 .slice(start, end); extract a part of a string and return the extra in a string 
//Note : It does not include the last given address character
//Note : The original array remains the same
// var str = "Apple , Banana , Kiwi";
// let res = str.slice(0, 5); // It follow the circular reference address -2 means last two characters to be slice
// let words = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi quod nam quas veniam labore rerum animi vitae explicabo, magni nihil magnam! Totam quod recusandae quos dicta quasi nisi in similique delectus dolores vitae magnam debitis itaque, id amet nostrum quisquam laboriosam libero tempora dolor impedit blanditiis aut obcaecati nulla! Voluptatibus optio facere saepe aspernatur aut, praesentium ab deserunt eius velit explicabo quo earum delectus necessitatibus rem, sunt enim, eos accusantium? Ipsam voluptatem suscipit iste voluptas id enim nobis accusantium ullam neque molestias, quisquam voluptates alias officiis consequuntur repellendus qui! Ipsa ab porro magni eos in tempora cum voluptatibus tempore aspernatur perferendis error nulla cumque illum similique eius quisquam, laboriosam omnis culpa optio tenetur aliquid modi, illo quae inventore. Harum at et, vel possimus accusantium cupiditate laboriosam repellendus mollitia minus, ex perferendis enim sequi quos suscipit nam earum magni impedit ad nobis magnam maiores cumque quasi fuga! Sed, numquam vel magni incidunt optio totam ab doloribus fuga earum in accusamus vitae provident laborum cupiditate voluptates non aspernatur? Voluptate totam corrupti sed. Dignissimos quia animi ducimus molestias minus consequuntur hic cum consectetur maiores illum ab ratione, repellendus error dolor? Fugit vel, aspernatur perspiciatis at corporis molestias laboriosam magnam? Culpa porro sapiente possimus quasi cumque repellat ad, quas, consequatur quod, voluptas veritatis consectetur eligendi iure eaque labore magnam quaerat odio sit! Hic optio culpa provident nulla commodi molestiae, dolores quam dolore repellat eos quos reprehenderit at est quod temporibus. Fugiat, aut exercitationem dignissimos tempora incidunt veniam enim dolor! Eos quos et sunt nihil ad magnam neque voluptates laborum quidem inventore laboriosam quasi, delectus dolorum quibusdam libero totam est dolor quod suscipit laudantium! Praesentium nulla doloribus fugiat deleniti sit laboriosam voluptas libero esse neque minus, tempora consectetur quis odio, accusamus enim nostrum? Fugiat ducimus ab dolorum, a tenetur voluptatem itaque dicta accusantium molestiae!";
// let sliced = words.slice(0, 280);
// console.log(sliced);
// console.log(sliced.length);
//5 .substring(start, end);
// The substring() method is similar to slice().
//The Diffrence is that substring () cannot accept negative indexes
// var str = "Apple , Banana, Kiwi";
// let res = str.substring(0, 4);
// let res = str.substring(7, -4);
//If we give the end position as negative then it will start adding characters from the 0 to the end position as given as start position
//6 .substr(start, length);
//it si similar to the slice().
//The  difference is that the second parameter is is the lenght of the extracted string;
// let res = str.substr(7, 3);
// let res = str.substr(5, 5);
// console.log(res);
//7 . replace() method replaces a specified value with another value in a string.
let myBioData = `I am mohammad kaif and mohammad kaif is a good guy`;
// let replaceData = myBioData.replace("moh", "Moh");
//They both are case sensitive
// let replaceData = myBioData.replaceAll("moh", "Moh");
// console.log(myBioData);
// console.log(replaceData);
//8 . CharAt() method
//It return the character at specified index in the string
// console.log(myBioData.charAt(17));
//9 .charCodeAt() Methods
//It return the character code of the character at specified index in the string
// console.log(myBioData.charCodeAt(17)); //UTF Unicode Transformation Format
// console.log(charCode("m")); Not working
// console.log(myBioData.charCodeAt(myBioData.length - 1));
//=> Property access of a string is menas you can treat string as a array
// var str = "Hello world!";
// var str2 = "India";
// console.log(str[6]);
//10. toLowerCase();
// console.log(str.toLowerCase());
//11. toUpperCase();
// console.log(str.toUpperCase());
//12. firstone.concat(string to contcat with first one);
// console.log(str.concat(" ", str2));
// console.log(str.concat(str2));
// console.log(str + str2);
// console.log(`${str} ${str2}`);
//13 . trim();
//The trim mehtod is used to remove whitespace from both side of the  string
// var str = "           Hello   World   ! ";
// console.log(str.trim());
// console.log(str.replaceAll(" ", ""));
// arr.split();
// A string can be converted to an array with the split method
// var txt = "a,b,c,d,e | f,g,h,i,j";
// console.log(txt.split(","));
// console.log(txt.split("|"));
// console.log(txt.split(" "));