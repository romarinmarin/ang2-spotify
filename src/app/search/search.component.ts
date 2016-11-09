import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import 'rxjs/add/operator/map';
import {Artist} from "../artist";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent  {

    searchStr:string;
    searchRes:Artist[];
    hideFlag:boolean =  true;
    mulClasses:any = ['lead', 'blue'];

    constructor(private spotifyService:SpotifyService) {

    }

    OnSearch() {
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(result => {
                console.log(result);
                this.searchRes = result.artists.items;
            })
    }


}
