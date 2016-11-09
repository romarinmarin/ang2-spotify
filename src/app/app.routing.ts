import { RouterModule, Routes } from "@angular/router";
import {AboutComponent} from './about/about.component';
import {SearchComponent} from './search/search.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from "./album/album.component";

const APP_ROUTES: Routes =  [
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);