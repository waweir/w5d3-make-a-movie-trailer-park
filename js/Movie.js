class Movie {
    constructor() {
        this.player = undefined
        this.done = false
        this.ready = this.ready.bind(this)
        this.change = this.change.bind(this)
        this.destroy = this.destroy.bind(this)
        this.renderVideo = this.renderVideo.bind(this)
        this.renderButton = this.renderButton.bind(this)
    }

    ready(event) {
        event.target.playVideo()
    }

    change(event) {
        if (event.data == YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stop, 6000)
            this.done = true
        }
    }

    destroy() {
        if (this.player) {
            this.player.destroy()
        }
    }

    renderVideo() {
        this.player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: this.id,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: this.ready,
                onStateChange: this.change
            }
        })
    }

    renderButton() {
        var grid = document.querySelector('#trailers')
        var col = document.createElement('div')
        col.classList.add('col-sm-3')
        var button = document.createElement('button')
        button.classList.add('btn', 'btn-danger', 'btn-lg', 'btn-block')
        button.innerHTML = this.name
        button.style.marginBottom = '20px'
        button.addEventListener('click', () => {
            document.querySelectorAll('#trailers button').forEach(el => {
                el.dispatchEvent(new Event('destroy'))
            })
            this.renderVideo()
        })
        button.addEventListener('destroy', this.destroy)
        col.appendChild(button)
        grid.appendChild(col)
    }
}
