import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  viewDataDetails(id: number) {
    window.location.href = `/car/${id}`;
  }
}
