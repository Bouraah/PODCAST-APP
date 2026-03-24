import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './podcast-list.html',
  styleUrl: './podcast-list.css'
})
export class PodcastList {
  suchItem: string = '';
  keinErgebnis: boolean = false;

  allPodcasts: any[] = [];
  podcasts: any[] = [];

  latestEpisodes = [
    {
      date: '02.02.2026',
      podcast: 'Fanjan',
      title: 'Wie KI Jobs verändert',
      image: 'assets/img/WS Fanjan.png'
    },
    {
      date: '06.02.2026',
      podcast: 'Fahim',
      title: 'Quran im Alltag umsetzen',
      image: 'assets/img/Fahim Podcast.png'
    },
    {
      date: '02.02.2026',
      podcast: 'Musawwadah',
      title: 'Gedanken über persönliche Entwicklung',
      image: 'assets/img/Musuades logo.png'
    }
  ];

  constructor(private podcastService: PodcastService) {
    this.allPodcasts = this.podcastService.getPodcasts();
    this.podcasts = [...this.allPodcasts];
  }

  public search(item: string) {
    this.allPodcasts = this.podcastService.getPodcasts();

    if (!item.trim()) {
      this.podcasts = [...this.allPodcasts];
      this.keinErgebnis = false;
      return;
    }

    const gefilterteErgebnisse = this.allPodcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(item.toLowerCase())
    );

    this.podcasts = gefilterteErgebnisse;
    this.keinErgebnis = gefilterteErgebnisse.length === 0;
  }
}