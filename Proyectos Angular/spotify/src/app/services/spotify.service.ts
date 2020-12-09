import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('SpotifyService listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'BQBVlIfp47MBxY2xbmaTysHrxlMJG_KDeK2FdNyN3RYvIPpo2XWoGa8S_4m5UrPSwmVj7HXG2w5QySGylkA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBVlIfp47MBxY2xbmaTysHrxlMJG_KDeK2FdNyN3RYvIPpo2XWoGa8S_4m5UrPSwmVj7HXG2w5QySGylkA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers}).pipe(map(data => data['artists'].items));
  }
}
