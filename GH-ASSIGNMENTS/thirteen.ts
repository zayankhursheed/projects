//  array of strings to store your friends' names
const friends: string[] = ["ali", "adeel", "hassan"];

// personalized message
const message: string = "Hey, {friendName}! Just wanted to say hello.";

// Printing personalized messages to each friend
console.log("Personalized Messages:");
friends.forEach((friend) => {
    const personalizedMessage = message.replace("{friendName}", friend);
    console.log(personalizedMessage);
});
