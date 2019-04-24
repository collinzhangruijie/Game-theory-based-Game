import {gamedata} from "../base/Data.js";

export class Rival {
    constructor(
        data = gamedata[1]
    ) {
        const player = data;
        this.name = player[0];
        this.money = player[1];
        this.cheat = player[2];
        this.corporate = player[3];
        this.honesty = this.corporate / (this.cheat + this.corporate);
    }

    static getInstance() {
        if (!Rival.instance) {
            Rival.instance = new Rival();
        }
        return Rival.instance
    }

    get() {
        if (Math.random() <= this.honesty) {
            return true;
        } else {
            return false;
        }
    }

    data() {
        return [this.name, this.money, this.honesty];
    }
}