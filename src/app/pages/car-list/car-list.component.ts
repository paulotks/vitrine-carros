import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Car } from '../../interfaces/car-data-interface';
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

  cars$!: Observable<Car[]>;
  displayedCars$!: Observable<Car[]>;
  totalRecords: number = 0;
  first: number = 0;
  rows: number = 6;

  private pageChange$ = new BehaviorSubject<{ first: number; rows: number }>({
    first: 0,
    rows: 6,
  });

  constructor(private carService: CarService, private router: Router) {}
  ngOnInit(): void {
    this.cars$ = this.carService.getCars().pipe(
      map((cars) => {
        this.totalRecords = cars.length;
        return cars;
      })
    );

    this.updateDisplayedCars();
  }

  updateDisplayedCars() {
    this.displayedCars$ = combineLatest([this.cars$, this.pageChange$]).pipe(
      map(([cars, pagination]) => {
        const { first, rows } = pagination;
        return cars.slice(first, first + rows);
      })
    );
  }

  onPageChange(event: { first: number; rows: number }) {
    this.pageChange$.next(event);
  }

  viewDataDetails(id: string) {
    this.router.navigate([`/ofertas/car/${id}`]);
  }

  counterArray(n: number): any[] {
    return Array(n);
  }
}
