import { Injectable } from '@angular/core';
import { MovieDTO } from 'src/models/movie.dto';

@Injectable({
    providedIn: 'root'
  })
export class StorageService {

  movie: string;

  getMovie() : MovieDTO {
    let str = localStorage.getItem(this.movie);
    if (str == null){
        return null;
    }else{
        return JSON.parse(str);
    }
}

setMovie(obj : MovieDTO){
    if (obj == null){
        localStorage.removeItem(this.movie);
    }else{
        localStorage.setItem(this.movie, JSON.stringify(obj));
    }
}
}