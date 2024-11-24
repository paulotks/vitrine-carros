import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Observable, switchMap } from 'rxjs';
import { Car, Product } from '../../interfaces/car-data-interface';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    SkeletonModule,
    DividerModule,
    PaginatorModule,
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  layout: 'list' | 'grid' = 'grid';

  selectedId!: string | null;
  cars$!: Observable<Car[]>;
  cars!: Car[];
  displayedCars: Car[] = [];
  totalRecords: number = 0;
  first: number = 0;
  rows: number = 6;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cars$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('id');
        return this.carService.getCars().pipe(delay(2000)); //delay para testar
      })
    );

    this.cars$.subscribe((cars) => {
      this.cars = cars;
      this.totalRecords = cars.length;
      this.updateDisplayedCars(0, this.rows);
    });
  }

  updateDisplayedCars(firts: number, rows: number) {
    this.displayedCars = this.cars.slice(firts, firts + rows);
  }

  onPageChange(event: PaginatorState) {
    const first = event.first ?? 0;
    const rows = event.rows ?? this.rows;
    this.updateDisplayedCars(first, rows);
  }

  viewDataDetails(id: string) {
    this.router.navigate([`/ofertas/car/${id}`]);
  }

  counterArray(n: number): any[] {
    return Array(n);
  }
}
