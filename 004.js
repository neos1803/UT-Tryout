function palindrome(str) {
    let params = /[\W_]/g;
    let cleanStr = str.toLowerCase().replace(params, '');
    let reverseStr = cleanStr.split('').reverse().join('');
    return console.log(reverseStr === cleanStr);
}
palindrome("Cigar? Toss it in a can. It is so tragic");
palindrome("I did, did I?");
palindrome("Red rum, sir, is murder");
palindrome("Eva, can I see bees in a cave?");
palindrome("Hello World");