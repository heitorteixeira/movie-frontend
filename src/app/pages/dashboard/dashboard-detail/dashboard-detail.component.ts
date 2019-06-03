import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from '../../../../config/api.config';
import { StorageService } from '../../../services/storageService';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  movie: MovieDTO;
  imageUrl: string = API_CONFIG.imagesUrl;

  constructor(private route: ActivatedRoute,
              public data: StorageService,
              private router: Router) { 

    this.route.queryParams.subscribe(params => {
      this.movie = params["movie"];
  });

  }

  ngOnInit() {
    this.movie = this.data.getMovie();
  }

  back(){
    this.router.navigate([''], {skipLocationChange: true});
  }
}
