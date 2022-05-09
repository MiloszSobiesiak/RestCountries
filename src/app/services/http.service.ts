import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

private url= 'https://restcountries.com/v3.1/'

getRegionList(region: any): Observable<any>{
    return this.httpClient.get(this.url + 'region/' + region).pipe(tap(console.log))
}

getInfo(name: any): Observable<any>{
    return this.httpClient.get(this.url + 'name/' + name).pipe(tap(console.log))
}

}