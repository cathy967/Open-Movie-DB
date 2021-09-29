import {Component} from '@angular/core';
import {OpenMovieDbService} from "./service/open-movie-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'untitled';
  data: any;

  //todo uncomment this
  // searchByTitle: string = '';
  searchByTitle: string = 'Marvel';

  searchByYear: string = '';
  searchById: string = '';

  showMoreDetails = false;
  constructor(private openMovieDbService: OpenMovieDbService) {
    // openMovieDbService.getMovieDetails('H').then(result => {
    //   this.data = result;
    //   console.log(this.data)
    // })
  }

  searchMovie() {
    console.log(this.searchByTitle)
    this.openMovieDbService.getMovieDetails(this.searchByTitle, this.searchByYear, this.searchById).then(result => {
      this.data = result;
      console.log(this.data)
    })
  }

  toggleMoreDetails(){
    this.showMoreDetails = !this.showMoreDetails;
  }

}
