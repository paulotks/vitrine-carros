import { CarService } from '../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car-data-interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  car$!: Observable<Car>;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');

    if (!carId) {
      return console.error('Carro não encontrado');
    }
    this.car$ = this.carService.getCarById(carId);
  }
}
