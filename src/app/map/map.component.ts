import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styles: [require('./map.component.scss')]
})
export class MapComponent implements OnInit {
    @Input() lat: number;
    @Input() lng: number;
    @Input() clientId: string;
    src: string = "https://maps.googleapis.com/maps/api/js?key={{KEY}}";
    // http://stackoverflow.com/questions/34931771/how-to-load-google-maps-api-asynchronously-in-angular2

    constructor() {}

    ngOnInit() {
        let node = document.createElement('script');
        node.src = this.src.replace('{{KEY}}', this.clientId);
        node.async = true;
        node.defer = true;
    };


}