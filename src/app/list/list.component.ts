import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from '../services/http.service';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userdata:any;
  constructor(private http: HttpService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userdata = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => this.http.getRegionList(params.get('region')))
    )
  }
}
