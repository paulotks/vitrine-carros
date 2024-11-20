import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Vender',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Comprar',
        command: () => {
          this.router.navigate(['/ofertas']);
        },
      },
      {
        label: 'Encontrar loja',
        icon: 'pi pi-thumbtack',
      },
    ];
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
