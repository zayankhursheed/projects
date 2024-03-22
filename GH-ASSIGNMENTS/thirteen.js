//  array of strings to store your friends' names
var friends = ["ali", "adeel", "hassan"];
// personalized message
var message = "Hey, {friendName}! Just wanted to say hello.";
// Print personalized messages to each friend
console.log("Personalized Messages:");
friends.forEach(function (friend) {
    var personalizedMessage = message.replace("{friendName}", friend);
    console.log(personalizedMessage);
});
