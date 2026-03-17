import { Routes } from '@angular/router';
import { PodcastList } from './podcast-list/podcast-list';
import { PodcastGrid } from './podcast-grid/podcast-grid';
import { NewPodcast } from './new-podcast/new-podcast';
import { EpisodeDetail } from './episode-detail/episode-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'podcasts', pathMatch: 'full' },
  { path: 'podcasts', component: PodcastList },
  { path: 'podcast-grid', component: PodcastGrid },
  { path: 'new-podcast', component: NewPodcast },
  { path: 'episode-detail', component: EpisodeDetail }
];