import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-podcast',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-podcast.html',
  styleUrl: './new-podcast.css'
})
export class NewPodcast {}
