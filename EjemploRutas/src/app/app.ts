import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
    imports: [RouterOutlet, Footer, NavBar],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('EjemploRutas');
}
