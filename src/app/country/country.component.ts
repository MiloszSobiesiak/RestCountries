import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private http: HttpService,private route: ActivatedRoute, private router: Router) { }
  userdata: any;

  ngOnInit(): void {
    this.userdata = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => this.http.getInfo(params.get('country')))
    )
  }


}
