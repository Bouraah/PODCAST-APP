import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private podcasts: any[] = [
    {
      title: 'Fanjan',
      image: 'assets/img/WS Fanjan.png',
      episodes: 276
    },
    {
      title: 'Fahim',
      image: 'assets/img/Fahim Podcast.png',
      episodes: 80
    },
    {
      title: 'Empathy Podcast',
      image: 'assets/img/Empathy Podacst.png',
      episodes: 45
    },
    {
      title: 'Muftatah Turuq',
      image: 'assets/img/Suhub Logo.png',
      episodes: 45
    },
    {
      title: 'Musawwadah',
      image: 'assets/img/Musuades logo.png',
      episodes: 32
    },
    {
      title: 'Feiner Regen',
      image: 'assets/img/FR Logo.png',
      episodes: 52
    },
    {
      title: 'Der beste Begleiter',
      image: 'assets/img/Kher Logo.png',
      episodes: 337
    },
    {
      title: 'Fragt die Geschichte',
      image: 'assets/img/Geschichte Logo.png',
      episodes: 361
    }
  ];

  getPodcasts() {
    return this.podcasts;
  }

  addPodcast(podcast: any) {
    this.podcasts.push(podcast);
  }
}