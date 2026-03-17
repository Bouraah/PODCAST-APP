import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-podcast-grid',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './podcast-grid.html',
  styleUrl: './podcast-grid.css'
})
export class PodcastGrid {

podcasts = [
  {
    title: 'Fanjan',
    image: 'assets/img/WS Fanjan.png'
  },
  {
    title: 'Fahim',
    image: 'assets/img/Fahim Podcast.png'
  },
  {
    title: 'Empathy Podcast',
    image: 'assets/img/Empathy Podacst.png'
  },
  {
    title: 'Muftatah Turuq',
    image: 'assets/img/Suhub Logo.png'
  },
  {
    title: 'Musawwadah',
    image: 'assets/img/Musuades logo.png'
  },
  {
    title: 'Feiner Regen',
    image: 'assets/img/FR Logo.png'
  },
  {
    title: 'Der beste Begleiter',
    image: 'assets/img/Kher Logo.png'
  },
  {
    title: 'Fragt die Geschichte',
    image: 'assets/img/Geschichte Logo.png'
  }
  ];

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
}