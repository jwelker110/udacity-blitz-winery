import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    templateUrl: './about.component.html',
    styles: [require('./about.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent implements OnInit {
    tiles: {hideSmall: boolean, url: string, imgSrc: string}[];

    constructor(){}

    ngOnInit() {
        this.tiles = this.getTileInfo();
    }

    getTileInfo() {
        return [
            {
                hideSmall: true,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: true,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: true,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            },
            {
                hideSmall: false,
                url: '',
                imgSrc: ''
            }
        ];
    }
}
