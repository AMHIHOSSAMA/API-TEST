const api =  "https://restcountries.com/v2/all";

async function getData(){
    const response = await fetch(api)
    const data = await response.json();

    printData(data)
    
}
function  printData(data){
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML += `
        <select class="form-control" onchange="getCou(this.value)">
            <option>Select</option>
            ${data.map(m => `<option>${m.name}</option>`)}
        </select>`

}

async function getCou(name){
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()

    content.innerHTML += `
        <table class="table table-dark">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">List of codes</th>
            <th scope="col">Currency</th>
            <th scope="col">Language</th>
            <th scope="col">Capital city</th>
            <th scope="col">Region</th>
            <th scope="col">Subregion</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">${name}</th>
            <td>${code}</td>
        </tr>
        </tbody>
    </table>
    `
}

 // <td>${code}</td>
            // <td>${codes}</td>
            // <td>${currency}</td>
            // <td>${lang}</td>
            // <td>${capital}</td>
            // <td>${region}</td>
            // <td>${name}</td>



getData()
