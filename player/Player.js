import {gamedata} from "../base/Data.js";

export class Player {
    static getInstance() {
        if (!Player.instance) {
            Player.instance = new Player();
        }
        return Player.instance
    }

    constructor(
        data = gamedata[0]
    ) {
        const player = data;
        this.name = player[0];
        this.money = player[1];
        this.cheat = player[2];
        this.corporate = player[3];
        this.honesty = this.corporate / (this.cheat + this.corporate);
    }

    cheating() {
        this.cheat++;
        this.choose = false;
    }

    corporating() {
        this.corporate++;
        this.choose = true;
    }

    get() {
        return this.choose;
    }

    data() {
        return [this.name, this.money, this.honesty];
    }
}