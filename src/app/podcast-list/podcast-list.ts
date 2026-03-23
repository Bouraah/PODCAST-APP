import { Component } from '@angular/core'; //Komponenten
import { CommonModule } from '@angular/common';  //*ngFor
import { RouterLink } from '@angular/router'; //Router

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './podcast-list.html',
  styleUrl: './podcast-list.css'
})
export class PodcastList {
  podcasts = [
    {
      title: 'Fanjan',
      episodes: 276,
      image: 'assets/img/WS Fanjan.png'
    },
    {
      title: 'Fahim',
      episodes: 80,
      image: 'assets/img/Fahim Podcast.png'
    },
    {
      title: 'Empathy Podcast',
      episodes: 45,
      image: 'assets/img/Empathy Podacst.png'
    },
    {
      title: 'Muftatah Turuq',
      episodes: 45,
      image: 'assets/img/Suhub Logo.png'
    },
    {
      title: 'Musawwadah',
      episodes: 32,
      image: 'assets/img/Musuades logo.png'
    },
    {
      title: 'Feiner Regen',
      episodes: 52,
      image: 'assets/img/FR Logo.png'
    },
    {
      title: 'Der beste Begleiter',
      episodes: 337,
      image: 'assets/img/Kher Logo.png'
    },
    {
      title: 'Fragt die Geschichte',
      episodes: 361,
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