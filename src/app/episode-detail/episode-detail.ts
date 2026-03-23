import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './episode-detail.html',
  styleUrl: './episode-detail.css'
})
export class EpisodeDetail {
  podcastTitle = '';
  episode: any;

  constructor(private route: ActivatedRoute) {
    this.podcastTitle = this.route.snapshot.paramMap.get('title') || ''; //nimmt den Podcast ANme aus der URL
   
    //Daten je nach Podcast auswählen
    if (this.podcastTitle === 'Fanjan') {
      this.episode = {
        podcast: 'Fanjan',
        title: 'Wie KI Jobs verändert',
        date: '02.02.2026',
        description:
          'In dieser Episode geht es darum, wie künstliche Intelligenz unsere Jobs verändert und welche Chancen sie bietet.',
        image: 'assets/img/WS Fanjan.png'
      };
    } else if (this.podcastTitle === 'Fahim') {
      this.episode = {
        podcast: 'Fahim',
        title: 'Quran im Alltag umsetzen',
        date: '06.02.2026',
        description:
          'Diese Episode zeigt, wie man den Quran im Alltag umsetzen kann.',
        image: 'assets/img/Fahim Podcast.png'
      };
    } else {
      this.episode = {
        podcast: this.podcastTitle,
        title: 'Keine Daten gefunden',
        date: '',
        description: 'Für diesen Podcast sind noch keine Details verfügbar.',
        image: ''
      };
    }
  }
}