
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    console.log('Button clicked!');
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data;
            alert(data)
    });
};

fortuneBtn.addEventListener('click', getFortune)

const feelingForm = document.getElementById('feelingForm');
feelingForm.addEventListener('submit', event => {
  event.preventDefault(); 
  const feeling = document.getElementById('feelingResponse').value;
  axios.post('http://localhost:4000/api/feelingResponse', { feeling })
    .then(res => {
      const data = res.data;
      alert(data.message);
    });
});

        
const happyBtn = document.getElementById('happy')
const pictureContainer = document.getElementById('pictureContainer');

const getHappy = () => {
    axios.get('http://localhost:4000/api/happy')
        .then(res => {
            const imageUrl = res.data;
            const img = document.createElement('img');
            img.src = imageUrl;
            pictureContainer.appendChild(img);
        })
        .catch(err => {
            console.error(err);
        });
};

happyBtn.addEventListener('click', getHappy);

const getMagic = () => {
    const select = document.getElementById('magicSelect');
    const selectedOption = select.value;
    axios.post('http://localhost:4000/api/magic', { magic: selectedOption })
      .then(res => {
        const cardUrl = res.data;
        const img = document.createElement('img');
        img.src = cardUrl;
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.appendChild(img);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const magicForm = document.getElementById('magicForm');
magicForm.addEventListener('submit', function(event) {
  event.preventDefault();
  getMagic();
});