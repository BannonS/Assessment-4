module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => { 
        const fortunes = [
        'good times are coming your way',
        'Friendship is key for lifetime happiness',
        'having sound mind does not equal a sound heart',
        `Keep on truck'n friend!`,
        'Is money really worth your time'
]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getFeelingResponse: (req, res) => {
      const feeling = req.query.feeling;
    if (feeling === "yes") {
      console.log("Glad to hear that you're feeling good today!");
    } else if (feeling === "no") {
      console.log("Sorry to hear that you're feeling blue.");
    } else {
      console.log("Invalid input, please enter either yes or no.");
    }
  }
}
    // happyButton: (req, res) => {
    //   const happy = req.body.happy;
    // }
    // const formData = new FormData(form);
    // const feeling = formData.get('feeling');