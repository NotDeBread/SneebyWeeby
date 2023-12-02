//BUTTON COLORS
const buttonColors = [
    //YOUTUBE
    {
        dark: '#4d0303',
        light: '#f58282'
    },
    //DISCORD
    {
        dark: '#14034d',
        light: '#a8b4e6'
    },
    //SPOTIFY
    {
        dark: '#013806',
        light: '#9ce899'
    },
    //LETTERBOXD
    {
        dark: '#613c04',
        light: '#ebc298'
    },
    //WRITING
    {
        dark: '#021e4d',
        light: '#91a5d9'
    }
]


let returnTimer

doge('innerButtonContainer').querySelectorAll('.button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        DeBread.playSound('https://cdn.discordapp.com/attachments/836000622435893258/1175540514171396167/mixkit-message-pop-alert-2354.mp3?ex=656b9a6b&is=6559256b&hm=c2636621854c91eadd17368b21a630b074d7b368d28f421f878e921212c63071&', 0.01)
    })
})

const youtubeThingys = [
    {
        name: 'SneebyWeeby',
        desc: 'Film channel',
        link: 'https://www.youtube.com/@pre-10tious',
    },
    {
        name: 'Iss Huugo',
        desc: 'Gaming channel',
        link: 'https://www.youtube.com/@isshuugo',
    },
    {
        name: 'Iss 2uugo',
        desc: 'Meme channel',
        link: 'https://www.youtube.com/@Iss2uugo',
    },
]

let youtubeStuffOpen = false
function openYouTubeStuff() {
    youtubeStuffOpen = !youtubeStuffOpen
    doge('stuffUnderButtons').innerHTML = ''
    if(youtubeStuffOpen) {
        doge('youtubeButton').style.rotate = '90deg'
        let i = 0
        for(const youtubeThing in youtubeThingys) {
            setTimeout(() => {            
                const div = document.createElement('div')
                div.classList.add('youtubeThing')
                div.innerHTML = `
                    <img>
                    <div>
                        <span class="youtubeThingTitle">${youtubeThingys[youtubeThing].name}</span><br>
                        <span class="youtubeThingDesc">${youtubeThingys[youtubeThing].desc}</span>
                    </div>
                `
                div.onmouseenter = () => {DeBread.playSound('https://cdn.discordapp.com/attachments/836000622435893258/1175540514171396167/mixkit-message-pop-alert-2354.mp3?ex=656b9a6b&is=6559256b&hm=c2636621854c91eadd17368b21a630b074d7b368d28f421f878e921212c63071&', 0.01)}
                div.onclick = () => {window.open(youtubeThingys[youtubeThing].link, '_blank')}
                doge('stuffUnderButtons').appendChild(div)
            }, i * 50);
            i++
        }
    } else {
        doge('youtubeButton').style.rotate = '0deg'
    }
}

doge('stuffUnderButtons').style.width = doge('innerButtonContainer').offsetWidth + 'px'
window.addEventListener('resize', () => {
    doge('stuffUnderButtons').style.width = doge('innerButtonContainer').offsetWidth + 'px'
})