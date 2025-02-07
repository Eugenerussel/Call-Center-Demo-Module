import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overall-sla',
  imports: [CommonModule],
  templateUrl: './overall-sla.component.html',
  styleUrl: './overall-sla.component.css'
})
export class OverallSLAComponent {
  activeTab: string;
  dashboardUrl: SafeResourceUrl; // Use SafeResourceUrl for iframe src

  constructor(private sanitizer: DomSanitizer) {
    this.activeTab = '1';
    this.dashboardUrl = this.sanitizeUrl('https://www.wikipedia.org');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab; // Update active tab for UI change

    if (tab === '1') {
      this.dashboardUrl = this.sanitizeUrl('https://www.wikipedia.org');
    } else if (tab === '2') {
      this.dashboardUrl = this.sanitizeUrl('https://angular.io');
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
