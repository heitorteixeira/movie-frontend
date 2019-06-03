import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboardService';
import { Router, NavigationExtras } from '@angular/router';

import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from '../../../../config/api.config';
import { StorageService } from '../../../services/storageService';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @ViewChild('search') search:ElementRef;
  movies: MovieDTO[] = [];
  imageUrl: string = API_CONFIG.imagesUrl;
  page: number = 1; 

  constructor(private dashboardService: DashboardService,
              private data: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  searchMovie() {
    let valueToSearch = this.search.nativeElement.value;
    this.dashboardService.search(valueToSearch).subscribe(
      (res) => this.onSuccessSearch(res),
      error => alert('Error on loading results of search!')
    )
  }

  getUpcomingMovies(){
    this.dashboardService.getAllUpcoming(this.page).subscribe(
      (res) => this.onSuccess(res),
      error => alert('Error on loading results of upcoming!')
    )
  }

  selectMovie(movie){
    this.data.setMovie(movie);
    this.router.navigate(['detail'], {skipLocationChange: true});
  }

  onSuccessSearch(res) {  
    if (res != undefined) {  
      this.movies = [];
      res.forEach(item => {  
        this.movies.push(item);
      });
    }  
  }  

  onSuccess(res) {  
    if (res != undefined) {  
      res.forEach(item => {  
        this.movies.push(item);
      });
    }  
  }  

  onScroll(){  
    this.page = this.page + 1; 
    this.getUpcomingMovies();  
  }  

}
