import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-new-podcast',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './new-podcast.html',
  styleUrl: './new-podcast.css'
})
export class NewPodcast {

  title: string = '';
  description: string = '';
  category: string = '';
  authors: string = '';
  ownerName: string = '';
  ownerEmail: string = '';
  lastUpdateDate: string = '';
  lastUpdateTime: string = '';

  constructor(
    private podcastService: PodcastService,
    private router: Router
  ) {}

  addPodcast() {
    if (!this.title.trim()) {
      return;
    }

    const neuerPodcast = {
      title: this.title,
      image: 'assets/img/Taw Podcast.png', // Default Bild
      episodes: 0
    };

    this.podcastService.addPodcast(neuerPodcast);

    // Reset
    this.title = '';
    this.description = '';
    this.category = '';
    this.authors = '';
    this.ownerName = '';
    this.ownerEmail = '';
    this.lastUpdateDate = '';
    this.lastUpdateTime = '';

    // Zur Liste gehen
    this.router.navigate(['/podcasts']);
  }
}