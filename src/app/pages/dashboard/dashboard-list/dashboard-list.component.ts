import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboardService';
import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from "../../../../config/api.config";

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  movies: MovieDTO[] = [];
  imageUrl: string = API_CONFIG.imagesUrl;
  page: number = 1; 

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies(){
    console.log(this.page); 
    this.dashboardService.getAllUpcoming(this.page).subscribe(
      (res) => this.onSuccess(res),
      error => alert('Error when loading results!')
    )
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
    //console.log("Scrolled" + this.page);
    this.getUpcomingMovies();  
  }  

}
