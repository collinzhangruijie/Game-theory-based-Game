import {Player} from "./player/Player.js";
import {Rival} from "./player/Rival.js";

export class Main {

    constructor() {
        this.player = Player.getInstance()
        this.data = this.player.data();
        this.init();
    }

    init() {
        let div = $('.player-info');
        div.append('<a>Player Name: '+ this.data[0]+ '</a><br>');
        div.append('<a>Money: '+ this.data[1]+ '</a><br>');
        div.append('<a>Honesty: '+this.data[2]+'</a><br>')
    }
}

new Main();