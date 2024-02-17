const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  const answer1 = answer;
  rl.question('What is an activity you like doing? ', (answer) => {
  const answer2 = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      const answer3 = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        const answer4 = answer;
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          const answer5 = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            const answer6 = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              const answer7 = answer;
              console.log(`Hello! My name is ${answer1}. I like ${answer2} while listening to ${answer3}.
My favorite meal of the day has got to be ${answer4} and my favorite thing to eat for that meal is ${answer5}.
My absolute favorite sport is ${answer6} and my superpower is ${answer7}`);
              rl.close();
            })
          })
        });
      });
    });
  });
});




