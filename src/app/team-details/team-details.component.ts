import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-team-details',
  imports: [],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  url: string ='https://angular.io'
  styleUrl;
 
  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
