const searchBtn = () => {
    const getInput = document.getElementById('get-input').value
    fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
        .then(res => res.json())
        .then(data => getValue(data.data))

}

const getValue = datas => {
    // console.log(datas)
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
        </div>`
        cardSection.appendChild(div)
            // console.log(data)
    })
}

const detilesBtn = (phoneId) => {

    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(idData => phoneIdDetails(idData.data))

    // console.log(phoneId)
}

const phoneIdDetails = (idData) => {
    const cardDetiles = document.getElementById('card-detiles')

    const div = document.createElement('div')
    div.classList.add('card-position')
    const feature = idData.mainFeatures
    div.innerHTML = `
    <div class="card mb-3 border-0 d-flex justify-content-center align-items-center shadow-lg rounded-3" style="width:85%; height:500px; background-color: rgba(233, 187, 176, 0.979);">
    <div class="row ">
        <div class="col-md-4 p-5">
            <img src="${idData.image}" class="img-fluid rounded-start h-100 w-100" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body p-5">
                <h3 class="card-title">Release : ${idData.releaseDate}</h3>
                <p class="card-text">Storage : ${feature.storage}</p>
                <p class="card-text">Display : ${feature.displaySize}</p>
                <p class="card-text"> Chip Set : ${feature.chipSet}</p>
            
                <button onclick="closeBtn()" class="btn text-white fs-5" style="  background-color: #c03488;">close</button>
                
            </div>
        </div>
    </div>
</div>
    `
    cardDetiles.appendChild(div)
    document.getElementById('card-detiles').style.display = 'block'
    console.log(idData)
}

const closeBtn = () => {
    document.getElementById('card-detiles').style.display = 'none'


}