import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-team-details',
  imports: [],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  url: string = 'https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=4fddf656-2dcd-44e9-9cde-4f4c92a29f16&theme=horizon&opt=ctxmenu,currsel';
  styleUrl;
 
  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
