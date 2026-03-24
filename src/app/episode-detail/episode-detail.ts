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
        description: ' Es stimmt, dass wir bereits viele Folgen über künstliche Intelligenz produziert haben, aber diese Episode ist anders. Der Gast hat eine besondere Erfahrung: Er lebte und studierte in Jordanien und zog später in die USA – genauer gesagt ins Silicon Valley, das Zentrum der Technologie und künstlichen Intelligenz – und gründete ein Unternehmen, das das Programmieren weltweit verändert hat.Mein Gast in dieser Folge ist Amjad Masad, Gründer und CEO von Replit. Amjad ist der Ansicht, dass die Welt keine Programmierer mehr braucht, um Anwendungen und Websites zu erstellen. Stattdessen kann jeder Mensch – auch ohne Programmierkenntnisse – mithilfe künstlicher Intelligenz selbst Apps oder Websites entwickeln. „Replit“, so Amjad, wird vielen Menschen helfen, ihre Ideen und Projekte umzusetzen und dadurch das Unternehmertum besonders in der arabischen Welt fördern. Dennoch gibt es weiterhin Unterschiede zwischen Unternehmertum im Westen und in der arabischen Welt, etwa dass kaum arabische Unternehmen weltweit bekannt werden. Was macht ihre Umgebung anders, und was fehlt in unserer Welt? Und warum glaubt Amjad, dass die Zukunft der künstlichen Intelligenz hier besser sein könnte? Es ist eine spannende Folge über die Zukunft der künstlichen Intelligenz, die Zukunft von Programmierern und Arbeitsplätzen, warum große Unternehmen bei der Umsetzung von KI oft scheitern und wie man mit ihrer zunehmenden Dominanz umgehen kann.',
        image: 'assets/img/WS Fanjan.png'
      };
    } else if (this.podcastTitle === 'Fahim') {
      this.episode = {
        podcast: 'Fahim',
        title: 'Quran im Alltag umsetzen',
        date: '06.02.2026',
        description:
        'Die Episode behandelt, wie Muslime den Quran nicht nur lesen, sondern ihn wirklich im Alltag umsetzen können. Sie zeigt, warum viele Menschen beim bloßen Lesen stehen bleiben und wie der Prophet Muhammad den Quran praktisch in seinem Leben anwendete. Der Podcast erklärt, wie ein tieferes Verständnis des Quran das Verhalten, Denken und Handeln eines Menschen verändert und wie der Glaube im täglichen Leben sichtbar wird. Außerdem werden praktische Wege gezeigt, wie man die Lehren des Quran bewusst im Alltag umsetzen kann. Ein inspirierende Folge über Glauben, persönliches Wachstum und die Bedeutung, religiöse Werte aktiv zu leben.',
        image: 'assets/img/Fahim Podcast.png'
      };
    } else if (this.podcastTitle === 'Empathy Podcast') {
      this.episode = {
        podcast: 'Empathy Podcast',
        title: 'Empathie im Alltag stärken',
        date: '10.02.2026',
        description: 'In dieser Episode geht es darum, wie wichtig Empathie in unserem Alltag ist. Es wird gezeigt, wie man andere Menschen besser verstehen, auf Gefühle eingehen und respektvoll kommunizieren kann. Die Folge gibt praktische Impulse für zwischenmenschliche Beziehungen, soziale Stärke und bewussteres Zuhören.',
        image: 'assets/img/Empathy Podacst.png'
      };
    } else if (this.podcastTitle === 'Muftatah Turuq') {
      this.episode = {
        podcast: 'Muftatah Turuq',
        title: 'Neue Wege im Leben finden',
        date: '12.02.2026',
        description: 'Diese Episode beschäftigt sich mit persönlichen Lebenswegen, Entscheidungen und neuen Möglichkeiten. Sie zeigt, wie Menschen auch in schwierigen Situationen Orientierung finden können und warum Geduld, Mut und Vertrauen wichtig sind, um den eigenen Weg weiterzugehen.',
        image: 'assets/img/Suhub Logo.png'
      };
    } else if (this.podcastTitle === 'Musawwadah') {
      this.episode = {
        podcast: 'Musawwadah',
        title: 'Gedanken über persönliche Entwicklung',
        date: '14.02.2026',
        description: 'Die Folge spricht über persönliche Entwicklung, Selbstreflexion und innere Veränderung. Es geht darum, wie man an sich selbst arbeiten kann, welche Rolle Erfahrungen im Leben spielen und wie kleine Schritte langfristig große Veränderungen bewirken können.',
        image: 'assets/img/Musuades logo.png'
      };
    } else if (this.podcastTitle === 'Feiner Regen') {
      this.episode = {
        podcast: 'Feiner Regen',
        title: 'Ruhe, Reflexion und innere Stärke',
        date: '16.02.2026',
        description: 'In dieser Episode stehen Ruhe, Nachdenken und seelische Stärke im Mittelpunkt. Die Folge lädt dazu ein, sich bewusst Zeit für sich selbst zu nehmen, über das eigene Leben nachzudenken und Kraft aus stillen Momenten zu schöpfen.',
        image: 'assets/img/FR Logo.png'
      };
    } else if (this.podcastTitle === 'Der beste Begleiter') {
      this.episode = {
        podcast: 'Der beste Begleiter',
        title: 'Werte und Orientierung im Leben',
        date: '18.02.2026',
        description: 'Diese Episode behandelt Werte, gute Begleitung und Orientierung im Alltag. Sie zeigt, wie wichtig gute Vorbilder, richtige Entscheidungen und ein bewusstes Leben sind. Der Podcast gibt Denkanstöße für Menschen, die sich persönlich und spirituell weiterentwickeln möchten.',
        image: 'assets/img/Kher Logo.png'
      };
    } else if (this.podcastTitle === 'Fragt die Geschichte') {
      this.episode = {
        podcast: 'Fragt die Geschichte',
        title: 'Lernen aus der Vergangenheit',
        date: '20.02.2026',
        description: 'In dieser Episode wird gezeigt, warum Geschichte mehr ist als nur vergangene Ereignisse. Sie hilft uns, unsere Gegenwart besser zu verstehen und aus den Erfahrungen früherer Generationen zu lernen. Die Folge verbindet Wissen, Reflexion und gesellschaftliches Verständnis.',
        image: 'assets/img/Geschichte Logo.png'
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