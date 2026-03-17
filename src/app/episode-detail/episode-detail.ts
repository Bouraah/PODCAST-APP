
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './episode-detail.html',
  styleUrl: './episode-detail.css'
})
export class EpisodeDetail {
  episode = {
    podcast: 'Fanjan',
    title: 'Wie KI Jobs verändert',
    date: '02.02.2026',
    description: 'In dieser Episode geht es darum, wie künstliche Intelligenz unsere Jobs verändert und welche Chancen sie bietet.',
    image: 'assets/img/WS Fanjan.png'
  };
}