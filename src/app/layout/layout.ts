import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, Breadcrumb],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  quickQuery = '';

  constructor(private router: Router) {}

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}