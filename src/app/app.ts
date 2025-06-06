import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../components/nav/nav';
import { Header } from '../components/header/header';
import { AboutProject } from '../components/about-project/about-project';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Header, AboutProject, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'main';
}
