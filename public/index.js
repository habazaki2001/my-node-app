const datas = [
    {
        id: '0',
        avatar: 'https://i.pinimg.com/564x/60/98/4f/60984f3e465d83b8ec38f104a3ae7107.jpg',
        name: 'Ahri',
        desc: 'Mo ta ve Ahri'
    },
    {
        id: '1',
        avatar: 'https://i.pinimg.com/736x/5a/48/2d/5a482d5f037bf2d853cbd6efe230e1bf.jpg',
        name: 'Jinx',
        desc: 'Mo ta ve Jinx'
    },
    {
        id: '2',
        avatar: 'https://i.pinimg.com/564x/aa/0f/0f/aa0f0fd472dacdcba253c692159d94ee.jpg',
        name: 'Akali',
        desc: 'Mo ta ve Akali'
    },
    {
        id: '3',
        avatar: 'https://i.pinimg.com/736x/24/6c/df/246cdfddf18a9db2aa9c3ca0d1f8f345.jpg',
        name: 'Ahri',
        desc: 'Mo ta ve Akali'
    }
    
]
const dataAPI = []

const api = fetch('https://64633b377a9eead6fae09e59.mockapi.io/champ')
            .then(res => res.json())
            .then(json => {
                json.forEach(element => {
                  if(dataAPI.length < 2) {
                    JSON.stringify(dataAPI.push(element))
                  }
                });
            })

const topDesk = document.querySelector(".top-desk")

const imgData = document.getElementsByClassName(".img-cart")
const nameData = document.getElementsByClassName(".name")
const destData = document.getElementsByClassName(".desc")
const check = "unactive"

    const mangBai = datas.map(d => (
            ` 
            <div class="card ${check}" style="--i: ${d.id}">
               <p class="pic"><img src="${d.avatar}" alt="" class="img-cart"></p>
                <div class="content">
                    <div class="name">
                    ${d.name}
                    </div>
                    <div class="desc">
                    ${d.desc}
                    </div>
                </div>
            </div>
        `
    ))
topDesk.innerHTML = mangBai.join('')
const cards = document.querySelectorAll(".card")

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active")
        card.classList.toggle("unactive")
        if(card.classList.contains("active")) {
            topDesk.classList.add('show')
        } else {
            topDesk.classList.remove('show')
        }
    })
})
