
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

const feelingBtn = document.getElementById('feelingResponse')

const getFeelingResponse = () => {
    axios.get('http://localhost:4000/api/feeling/')
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

feelingBtn.addEventListener('click', getFeelingResponse)

const happyBtn = document.getElementById('happyButton')

const getHappyButton = () => {
    axios.get('http://localhost:400/api/happy')
        .then(res => {
            const data = res.data;
            alert(data);
        })
happyBtn.addEventListener('click', getHappy)

};