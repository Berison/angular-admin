import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'header-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  template: `<mat-toolbar color="primary">
    <mat-icon>local_fire_department</mat-icon>
    <span>Admin Panel</span>
  </mat-toolbar> `,
})
export class HeaderComponent {}
