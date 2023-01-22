let mese, ore;

ore = document.querySelector('#ore')
mese = document.querySelector('#mese')

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    ore.innerHTML =  h + ":" + m + ":" + s;

    let p, a;
    p = today.getDate()
    a = today.getFullYear()

    const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

    const d = new Date();
    let mes = month[d.getMonth()];

    mese.innerHTML = p+'/'+mes+'/'+a
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime()
  


  let url = 'https://3br5ycopah.execute-api.us-east-1.amazonaws.com/live/API/departures/scheduled/MilanStop_ViaPareto_E'
  fetch(url, {method: 'GET', mode:"cors" })
  .then(function (r) {
  
      r.json().then((data) => {
             function inarrivo() {
                let diBus = data.departures[0].scheduled_time.split('T')[1].split('+')[0]
                let diBusMinuti = diBus.split(':')

                const today = new Date();
                 let h = today.getHours();
                 let m = today.getMinutes();
                  let s = today.getSeconds();
                  m = checkTime(m);
                  s = checkTime(s);

                  function checkTime(i) {
                    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                    return i;
                  }

                function doOperation(n1, n2) {
                    return n1 - n2
                }

                let nextBus = doOperation(diBusMinuti[1], m)

                let arrivoHtml = document.querySelector('#arrivo')

                arrivoHtml.innerHTML = nextBus
            
                let oraio = document.querySelector('.partenze-prossime')
                
           for (const key in data.departures) {
              //console.log(data.departures[key].scheduled_time)


              let divParent = document.createElement('div')
              divParent.setAttribute('class', 'orario')


              let orariOre = data.departures[key].scheduled_time.split('T')[1].split('+')[0].split(':')[0]
              let orariMinuti = data.departures[key].scheduled_time.split('T')[1].split('+')[0].split(':')[1]

            let div = document.createElement('div')
            div.setAttribute('class','op')

            let h4 = document.createElement('h4')
            let p = document.createElement('p')

            let h4Text = document.createTextNode('40')
            let pText = document.createTextNode('Niguarda')

            h4.appendChild(h4Text)
            p.appendChild(pText)



            let h3 = document.createElement('h3')
            let h3Text = document.createTextNode(orariOre+':'+orariMinuti)

            h3.appendChild(h3Text)
            
            div.appendChild(h4)
            div.appendChild(p)

            divParent.appendChild(div)
            divParent.appendChild(h3)


            oraio.appendChild(divParent)
            
  
          }


             // Function In Arrivo end Here!!
             } 
             
             
             inarrivo()
          });
  
  });

 let pOrari, gifImg, mOrari, oOrari;

 pOrari = document.querySelector('#pOrari')
 gifImg = document.querySelector('#gifImg')
 mOrari = document.querySelector('.mostra-orari')

 oOrari = document.querySelector('.partenze-prossime')

 mOrari.onclick = startAnimation

 function startAnimation() {
    pOrari.style.display = 'none'
    gifImg.style.display = 'flex'

    mOrari.style.width = 'max-content'
    mOrari.style.height = 'max-content'
    mOrari.style.margin = 'auto'
    mOrari.style.borderRadius = '50%'
    mOrari.style.padding = '10px'
    mOrari.style.marginTop = '30px'


    setTimeout(() => {
        mOrari.style.display = 'none'
        oOrari.style.display = 'flex'
        
    }, 3000);
 }

