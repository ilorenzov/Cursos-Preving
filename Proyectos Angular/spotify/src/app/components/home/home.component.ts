import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  nuevasCanciones: any = [];

  constructor(private sp: SpotifyService) {
    // @ts-ignore
    this.sp.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    });
  }
}
