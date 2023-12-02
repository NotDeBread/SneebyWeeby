const defaultSave = {
    selectedMode: 0
}

const save = JSON.parse(localStorage.getItem("SneebyWeebySave")) ?? defaultSave

function autosave() {
    localStorage.setItem("SneebyWeebySave", JSON.stringify(save));
}

let title = 'SneebyWeeby.com' //TITLE TEXT

//BACKGROUND//
let lightBackgroundGradient = 'linear-gradient(15deg, rgba(128,177,215,1) 0%, rgba(137,201,230,1) 34%, rgba(156,218,230,1) 65%, rgba(179,234,242,1) 100%)'
let darkBackgroundGradient = 'linear-gradient(4deg, rgba(9,3,41,1) 0%, rgba(6,15,61,1) 27%, rgba(14,31,75,1) 64%, rgba(12,46,89,1) 100%)'

//TITLE COLORS//
let lightTitleColor = 'lightblue'
let darkTitleColor = '#71add9'

let snowColors = [
    [155, 207, 232],  //DARK
    [250, 250, 250], //LIGHT
]


for(let i = 0; i < title.length; i++) {
    const letter = document.createElement('span')
    letter.innerText = title[i]
    letter.classList.add('letter')
    letter.style.animation = `wave 2s ease-in-out -${i * 100}ms infinite forwards`
    doge('title').appendChild(letter)
    // DeBread.shake(letter, 10, 10, 10, 100000, true, 10)
}

let starParticleInterval
doge('modeButton').onclick = toggleMode

let modeToggleCooldown = false

function toggleMode() {
    if(!modeToggleCooldown) {
        if(save.selectedMode === 1) {
            save.selectedMode = 0
        } else {
            save.selectedMode = 1
        }
        updateMode()
    }
    if(!modeToggleCooldown) {
        modeToggleCooldown = true
        setTimeout(() => {
            modeToggleCooldown = false
        }, 500);
    }
    autosave()
}

function updateMode() {
    if(save.selectedMode === 0) {
        //DARK
        starParticleInterval = setInterval(() => {
            DeBread.createParticles(
                doge('background'),
                1,
                500,
                10000,
                'ease-out',
                [[0, window.innerWidth - 10], [0, window.innerHeight - 10]],
                [[[5, 5], [5, 5]], [[0, 0], [0, 0]]],
                [[0, 90], [-180, 180]],
                [[0, 0], [0, 0]],
                [[255, 255, 255], [255, 255, 255]],
                [[255, 255, 255], [255, 255, 255]]
            )
        }, 250);

        doge('background').style.background = darkBackgroundGradient

        doge('title').querySelectorAll('.letter').forEach((letter) => {
            letter.style.color = lightTitleColor
        })

        let i = 0
        if(doge('innerButtonContainer')) {
            doge('innerButtonContainer').querySelectorAll('.button').forEach((button) => {
                button.style.filter = 'drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.5))'
                button.style.backgroundColor = buttonColors[i].dark
                i++
            })
        }
    } else {
        //LIGHT
        
        clearInterval(starParticleInterval)
        
        doge('background').style.background = lightBackgroundGradient
        
        doge('title').querySelectorAll('.letter').forEach((letter) => {
            letter.style.color = darkTitleColor
        })

        if(doge('innerButtonContainer')) {
            let i = 0
            doge('innerButtonContainer').querySelectorAll('.button').forEach((button) => {
                button.style.filter = 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))'
                button.style.backgroundColor = buttonColors[i].light
                i++
            })
        }
    }
    snowColor = save.selectedMode
}
updateMode()

let lockedTabClicked = false
const popups = [
    'Patient!',
    'Stop!',
    'Can you wait please.',
    'It\'s coming soon!!',
    'Wait!!',
    'Are you that impatient?!',
]

document.querySelectorAll('.lockedTab').forEach((tab) => {
    tab.onclick = (e) => {
        DeBread.shake(tab, 10, 3, 3, 100)

        const popupText = document.createElement('span')
        popupText.classList.add('popupText')
        if(!lockedTabClicked) {
            popupText.innerText = 'Coming soon'
        } else {
            popupText.innerText = DeBread.getRandomInArray(popups)
        }
        document.body.appendChild(popupText)
        popupText.style.left = e.clientX - (popupText.offsetWidth / 2) + 'px'
        popupText.style.top = e.clientY - 40 + 'px'
        lockedTabClicked = true

        setTimeout(() => {
            popupText.remove()
        }, 1000);
    }
})

const imgContainer = document.createElement('div')
imgContainer.classList.add('imgContainer')
document.body.appendChild(imgContainer)
imgContainer.innerHTML = `
    <span class="imgContainerX" onclick="closeImgView()">X</span>
    <img id="imgViewImg">   
`
document.querySelectorAll('.clickableImage').forEach((img) => {
    img.style.cursor = 'pointer'
    img.onclick = () => {
        doge('imgViewImg').src = img.src
        imgContainer.style.display = 'flex'
    }
})

function closeImgView() {
    imgContainer.style.display = 'none'
}

document.addEventListener('keydown', (ev) => {
    if(ev.key === 'Escape' && imgContainer.style.display === 'flex') {
        imgContainer.style.display = 'none'
    }
})

const openingDate = new Date
if((openingDate.getMonth() === 11)) {
    setInterval(() => {
        let randomSizeValue = DeBread.randomNum(5, 15)
        DeBread.createParticles(
            doge('background'),
            10,
            100,
            7500,
            'linear',
            [[0, window.innerWidth - 100], [-10, -10]],
            [[[randomSizeValue, randomSizeValue], [randomSizeValue, randomSizeValue]], [[0, 0], [0, 0]]],
            [[0, 0], [-90, 90]],
            [[0, 0], [500, window.innerHeight]],
            [[snowColors[snowColor][0], snowColors[snowColor][1], snowColors[snowColor][2]], [snowColors[snowColor][0], snowColors[snowColor][1], snowColors[snowColor][2]]],
            [[snowColors[snowColor][0], snowColors[snowColor][1], snowColors[snowColor][2]], [snowColors[snowColor][0], snowColors[snowColor][1], snowColors[snowColor][2]]]
        )
    }, 1000)
}