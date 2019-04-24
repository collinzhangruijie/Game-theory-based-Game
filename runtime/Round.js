import {Player} from "../player/Player.js";
import {Rival} from "../player/Rival.js";
import {gamedata} from "../base/Data.js";

export class Round {
    constructor() {
        this.turns = 10;
        this.player = Player.getInstance();
        this.rival = Rival.getInstance();
        this.play();
        this.print();
        this.create();
    }

    print() {
        let pdiv = $('#player-info');
        pdiv.append('<div class="card-header">' + this.player.data()[0] + '</div>');
        pdiv.append('<div class="card-body">' +
            '<p class="pmoney">Money: ' + this.player.data()[1] + '</p>' +
            '<p class="phonesty">Honesty: ' + this.player.data()[2] + '</p>' +
            '</div>');
        let rdiv = $('#rival-info');
        rdiv.append('<div class="card-header">' + this.rival.data()[0] + '</div>');
        rdiv.append('<div class="card-body">' +
            '<p class="rmoney">Money: ' + this.rival.data()[1] + '</p>' +
            '<p class="rhonesty">Honesty: ' + this.rival.data()[2] + '</p>' +
            '</div>');
    }

    create() {
        this.look = {
            'winwin': [10, 10],
            'winlose': [20, -7.5],
            'losewin': [-7.5, 20],
            'loselose': [-5, -5]
        }
        $('.winwin').text(this.look['winwin']);
        $('.winlose').text(this.look['winlose']);
        $('.losewin').text(this.look['losewin']);
        $('.loselose').text(this.look['loselose']);
    }

    play() {
        let cheating = $('#cheating');
        let corporating = $('#corporating');
        cheating.click(
            a => {
                this.player.cheating();
                this.judge();
            }
        )
        corporating.click(
            e => {
                this.player.corporating();
                this.judge();
            }
        )
    }

    judge() {
        const rule = situation => {
            gamedata[0][1] += this.look[situation][0];
            gamedata[1][1] += this.look[situation][1];
            $('.pmoney').text('Money: ' + gamedata[0][1]);
            $('.rmoney').text('Money: ' + gamedata[1][1]);
            $('.phonesty').text('Honesty: ' + Math.round(gamedata[0][3] / (gamedata[0][2] + gamedata[0][3]) * 100) / 100);
            $('.rhonesty').text('Honesty: ' + gamedata[1][3] / (gamedata[1][2] + gamedata[1][3]));
        }
        if (this.player.get()) {
            gamedata[0][3]++;
            if (this.rival.get()) {
                gamedata[1][3]++;
                rule('winwin')
            } else {
                gamedata[1][2]++;
                rule('losewin')
            }
        } else {
            gamedata[0][2]++;
            if (this.rival.get()) {
                gamedata[1][3]++;
                rule('winlose')
            } else {
                gamedata[1][2]++;
                rule('loselose')
            }
        }
    }
}

new Round();