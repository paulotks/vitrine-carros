import { CarService } from '../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car-data-interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ImageModule,
    CardModule,
  ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  car$!: Observable<any>;

  responsiveOptions: any[] | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');

    if (!carId) {
      return console.error('Carro não encontrado');
    }
    this.car$ = this.carService.getCarById(carId);

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1220px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
