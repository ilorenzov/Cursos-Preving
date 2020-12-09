import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private  spo: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.spo.getArtista(termino).subscribe((data: any) => {
      this.artistas = data;
    });
  }
}
