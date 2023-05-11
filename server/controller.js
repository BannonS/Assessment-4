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
      const feeling = req.body.feeling;
      let message;
      if (feeling === "yes") {
        message = "Glad to hear that you're feeling good today!";
      } else if (feeling === "no") {
        message = "Sorry to hear that you're feeling blue.";
      } else {
        message = "Invalid input, please enter either yes or no.";
      }
      res.status(200).json({ message });
    },

    getHappy: (req, res) => {
      const imageUrls = [
        'https://news.cgtn.com/news/78637a4e3559544e7963544e7a4d544d784d444f31457a6333566d54/img/67646d90a02f41b7bf6a1db0f4d5cb9e/67646d90a02f41b7bf6a1db0f4d5cb9e.jpg',
        'https://news.cgtn.com/news/78637a4e3559544e7963544e7a4d544d784d444f31457a6333566d54/img/5e7214f1a4b74f2f9ec3c419b62e9897/5e7214f1a4b74f2f9ec3c419b62e9897.jpg',
        'https://i.redd.it/sljsnyw5r7u71.jpg'
      ];
    
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const randomImageUrl = imageUrls[randomIndex];
       
      res.status(200).send(randomImageUrl);
    },

    getMagic: (req, res) => {
      const cardUrls = [
        'https://cdn1.mtggoldfish.com/images/h/Urabrask-serialized-MOM-672.jpg',
        'https://cdn1.mtggoldfish.com/images/h/Elesh-Norn-serialized-MOM-672.jpg',
        'https://cdn1.mtggoldfish.com/images/h/Vorinclex-serialized-MOM-672.jpg',
        'https://cdn1.mtggoldfish.com/images/h/Sheoldred-serialized-MOM-672.jpg',
        'https://cdn1.mtggoldfish.com/images/h/Jin-Gitaxias-serialized-MOM-672.jpg'
      ];
    
      const selectedOption = req.body.magic;
      const selectedUrl = cardUrls[selectedOption];
    
      res.status(200).send(selectedUrl);
    }
  };  
