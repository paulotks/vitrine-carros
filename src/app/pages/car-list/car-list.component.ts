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
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  layout: 'list' | 'grid' = 'grid';

  cars$!: Observable<Car[]>;
  selectedId!: string | null;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cars$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('id');
        return this.carService.getCars().pipe(delay(2000)); //delay para testar loading
      })
    );
  }

  viewDataDetails(id: string) {
    this.router.navigate([`/ofertas/car/${id}`]);
  }

  counterArray(n: number): any[] {
    return Array(n);
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
