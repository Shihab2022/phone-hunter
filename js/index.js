const searchBtn = () => {
    const getInput = document.getElementById('get-input').value
    fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
        .then(res => res.json())
        .then(data => getValue(data.data))

}

const getValue = datas => {
    const update = datas.slice(0, 20)
    const cardSection = document.getElementById('card-section')
    cardSection.innerHTML = ''
    update.forEach(data => {

        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="card shadow-lg rounded-3  border-0 my-4 " style="width: 98%;height:70%;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body main-card d-flex justify-content-center flex-column p-4">
                <h4> Name : ${data.phone_name}</h4>
                <h4> Brand : ${data.brand}</h4>
                
                <button onclick="detilesBtn('${data.slug}')" style="  background-color: #c03488;" class="btn py-2 my-2  text-white  shadow-lg">Detiles</button>
            </div>
        </div>`
        cardSection.appendChild(div)
    })
}

const detilesBtn = (phoneId) => {

    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(idData => phoneIdDetails(idData.data))

}

const phoneIdDetails = (idData) => {
    const cardDetiles = document.getElementById('card-detiles')
    cardDetiles.innerHTML = ''
    const div = document.createElement('div')
    const feature = idData.mainFeatures
    const others = idData.others
    div.innerHTML = `
    <div class="card mb-3 border-0  d-flex justify-content-center align-items-center shadow-lg rounded-3" style="width:98%;  background-color: rgba(233, 187, 176, 0.979);">
        <div class="row ">
            <div class="col-md-5 py-1 px-5 d-flex justify-content-center align-items-center">
            <img src="${idData.image}" class="img-fluid rounded-start h-75 w-100" alt="...">
             </div>
            <div class="col-md-7">
            <div class="card-body p-5">
                <h3 class="card-title">Release : ${idData?.releaseDate ?? 'Release date is not found'}</h3>
                <p>Storage : ${feature.storage}</p>
                <p>Display : ${feature.displaySize}</p>
                <p> Chip Set : ${feature.chipSet}</p> 
                <hr>     
                <div class="row">
                    <div id="others" class="col-md-8 ">
                    <h4  class="card-title py-2">Others</h4>
                    <h5>Bluetooth: <span>${others?.Bluetooth ?? 'This value is not found'}</span> </h5>
                    <h5>GPS : <span>${others?.GPS ?? 'This value is not found'}</span> </h5>
                    <h5>NFC : <span>${others?.NFC ?? 'This value is not found'}</span></h5>
                    <h5>Radio : <span>${others?.Radio ?? 'This value is not found'}</span></h5>
                    <h5>USB : <span>${others?.USB ?? 'This value is not found'}</span></h5>
                    <h5>WLAN : <span>${others?.WLAN ?? 'This value is not found'}</span></h5>        
                    </div>
                    <div class="col-md-4 fs-5 justify-content-end">
                   
                    <h4  class="card-title py-2">Sensor</h4>
                                <span> ${feature?.sensors[0]}</span>
                                <span> ${feature?.sensors[1]}</span>
                                <span> ${feature?.sensors[2]}</span>
                                <span> ${feature?.sensors[3]}</span>
                                <span> ${feature?.sensors[4]}</span>
                                <span> ${feature?.sensors[5] ?? 'hello'}</span>                              
                    </div>
                </div>                        
                <button onclick="closeBtn()" class="btn text-white my-3 " style="  background-color: #c03488;">close</button>       
            </div>
        </div>
    </div>
    </div>
    `
    cardDetiles.appendChild(div)
    document.getElementById('card-detiles').style.display = 'block'
}

const closeBtn = () => {
    document.getElementById('card-detiles').style.display = 'none'

}