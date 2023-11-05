function getFact(){
    let favNum = prompt('Give me a mnumber and I will give you a fact.')
    let url = `http://numbersapi.com/${favNum}/math`
    axios
    .get(`http://numbersapi.com/${favNum}/math`)
    .then(p1 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f1.data;
    })
}

//Getting 3 number facts. The favNum and 2 Above the FavNum
function threeDifNumFacts(){
    let favNum = prompt('Give me a number, I will give you a fact about that number and 2 above that number.')
    axios
    .get(`http://numbersapi.com/${favNum}/math`)
    .then(f1 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f1.data;
        ++favNum
        return axios.get(`http://numbersapi.com/${favNum}/math`)
    })
    .then(f2 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f2.data;
        ++favNum
        return axios.get(`http://numbersapi.com/${favNum}/math`)
    })
    .then(f3 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f3.data;
        ++favNum
    })
}

//4 facts on my favorite number
function fourFacts() {
    let favNum = prompt('Give me a number and I will give you 4 facts related to that number.')
    let url = `http://numbersapi.com/${favNum}/math`
    axios
    .get(url)
    .then(f1 => {
        console.log(f1.data)
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f1.data;
        return axios.get(url);
    })
    .then(f2 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f2.data;
        return axios.get(url);
    })
    .then(f3 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f3.data;
        return axios.get(url);
    })
    .then(f4 => {
        let par =  document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = f4.data;
    })
    .catch(err => {
        console.log(`Oops, there was a problem :( ${err}`);
      });
}