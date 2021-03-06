class HeroSwitch{
    constructor(){
        this.initialize()
    }

    initialize(){
        const switchButtons = document.querySelectorAll('.switch-hero')
        this.characterButton = switchButtons[0]
        this.actorButton = switchButtons[1]
        
        this.characterElements = document.querySelectorAll('.js-character')
        this.actorElements = document.querySelectorAll('.js-actor')

        this.background = document.querySelector('.red-background')

        this.event()
    }

    event(){
        this.actorButton.addEventListener( 'click', ()=>{
            this.switchToActor()
            this.changeBackgroundActor()
        })
        this.characterButton.addEventListener( 'click', ()=>{
            this.switchToCharacter()
            this.changeBackgroundCharacter()
        })
    }

    switchToActor(){
        for(const $element of this.characterElements){
            $element.classList.add('hidden')
        }
        for(const $element of this.actorElements){
            $element.classList.remove('hidden')
        }
        this.actorButton.classList.add('active')
        this.characterButton.classList.remove('active')
    }

    switchToCharacter(){
        for(const $element of this.characterElements){
            $element.classList.remove('hidden')
        }
        for(const $element of this.actorElements){
            $element.classList.add('hidden')
        }
        this.characterButton.classList.add('active')
        this.actorButton.classList.remove('active')
    }

    changeBackgroundActor(){
        this.background.style.transform = "skewX(-4deg)"
    }

    changeBackgroundCharacter(){
        this.background.style.transform = "skewX(4deg)"
    }

}