import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

const MENU_ITEMS = [
  {
    label: 'Home',
  },
  {
    label: 'Vender',
  },
  {
    label: 'Comprar',
  },
  {
    label: 'Encontrar loja',
    icon: 'pi pi-thumbtack',
  },
];

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

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }
}
