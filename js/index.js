const searchBtn = () => {

    const getInput = document.getElementById('get-input').value

    fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
        .then(res => res.json())
        .then(data => getValue(data.data))

}

const getValue = datas => {
    console.log(datas)

    datas.forEach(data => {
        const cardSection = document.getElementById('card-section')

        const div = document.createElement('div')
        div.classList.add('col-md-4')

        div.innerHTML = `
            <div class="card shadow-lg rounded-3  border-0 my-4 " style="width: 95%;height:70%;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body main-card p-4">
                <h4 class="card-title "> Name : ${data.phone_name}</h4>
                <h4 class="card-title "> Brand : ${data.brand}</h4>
                <button onclick="detilesBtn('${data.slug}')" style="  background-color: #c03488;" class="btn text-white  shadow-lg">Detiles</button>
            </div>
        </div>
`
        cardSection.appendChild(div)
            // console.log(data)
    })
}

const detilesBtn = (phoneId) => {

    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(idData => console.log(idData))

    // console.log(phoneId)
}