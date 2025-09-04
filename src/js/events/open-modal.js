export class OpenModal {
    #button = null

    constructor(buttonRegistry) {
        this.#button = buttonRegistry.getButton('plus')
        this.#placeEventListener()
    }

    #placeEventListener () {
        this.#button.addEventListener(
            'click',
            (event) => {
                console.log('Icon plus was triggerd')
            } 
        )
    }
}