const searchBtn = () => {
    const getInput = document.getElementById('get-input').value
    fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
        .then(res => res.json())
        .then(data => getValue(data.data))

}

const getValue = datas => {
    // console.log(datas.slice(0, 20))
    const update = datas.slice(0, 20)
    const cardSection = document.getElementById('card-section')
    cardSection.innerHTML = ''
    update.forEach(data => {

        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="card shadow-lg rounded-3  border-0 my-4 " style="width: 95%;height:70%;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body main-card d-flex justify-content-center flex-column p-4">
                <h4 class="card-title "> Name : ${data.phone_name}</h4>
                <h4 class="card-title "> Brand : ${data.brand}</h4>
                
                <button onclick="detilesBtn('${data.slug}')" style="  background-color: #c03488;" class="btn py-2 my-2  text-white  shadow-lg">Detiles</button>
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
    // console.log(idData)
}

const phoneIdDetails = (idData) => {
    console.log(idData)
    const cardDetiles = document.getElementById('card-detiles')
    cardDetiles.innerHTML = ''
    const div = document.createElement('div')


    const type = idData => {
        console.log(typeof idData.others)
        if (typeof idData.others === 'undefined') {
            // console.log('hello')
            // document.getElementById('others').innerText = 'hello'

        } else {
            const others = idData.others
            return others
        }
    }
    const others = type(idData)
        // console.log(others)
        // div.classList.add('card-position')
    const feature = idData.mainFeatures
    const sensors = feature.sensors

    // const row = document.createElement('div')

    div.innerHTML = `
    <div class="card mb-3 border-0  d-flex justify-content-center align-items-center shadow-lg rounded-3" style="width:90%;  background-color: rgba(233, 187, 176, 0.979);">
        <div class="row ">
            <div class="col-md-4 py-1 px-5 d-flex justify-content-center align-items-center">
            <img src="${idData.image}" class="img-fluid rounded-start h-75 w-100" alt="...">
             </div>
            <div class="col-md-8">
            <div class="card-body p-5">
                <h3 class="card-title">Release : ${idData?.releaseDate ?? 'Release date is not found'}</h3>
                <p class="card-text">Storage : ${feature.storage}</p>
                <p class="card-text">Display : ${feature.displaySize}</p>
                <p class="card-text"> Chip Set : ${feature.chipSet}</p> 
                <hr>     
                <div class="row">
                    <div id="others" class="col-md-6">
                    <p class="card-text">Bluetooth: ${others?.Bluetooth ?? 'This value is not found'}</p>
                    <p class="card-text">GPS : ${others?.GPS ?? 'This value is not found'}</p>
                    <p class="card-text"> NFC : ${others?.NFC ?? 'This value is not found'}</p>
                    <p class="card-text"> Radio : ${others?.Radio ?? 'This value is not found'}</p>
                    <p class="card-text"> USB : ${others?.USB ?? 'This value is not found'}</p>
                    <p class="card-text"> WLAN : ${others?.WLAN ?? 'This value is not found'}</p>                 
                    </div>
                    <div class="col-md-6 fs-5 justify-content-end">
                   
                    <h4  class="card-title ">Sensor</h4>
                                <p class="card-text"> ${sensors[0]}</p>
                                <p class="card-text"> ${sensors[1]}</p>
                                <p class="card-text"> ${sensors[2]}</p>
                                <p class="card-text"> ${sensors[3]}</p>
                                <p class="card-text"> ${sensors[4]}</p>
                                <p class="card-text"> ${sensors[5]}</p>                              
                    </div>
                </div>                        
                <button onclick="closeBtn()" class="btn text-white " style="  background-color: #c03488;">close</button>       
            </div>
        </div>
    </div>
    </div>
    `
    cardDetiles.appendChild(div)
    document.getElementById('card-detiles').style.display = 'block'
        // console.log(idData)
}

const closeBtn = () => {
    document.getElementById('card-detiles').style.display = 'none'


}