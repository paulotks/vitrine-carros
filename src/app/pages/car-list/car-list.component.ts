import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from '../../interfaces/car-data-interface';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  cars$!: Observable<Car[]>;
  selectedId!: string | null;
  cars!: Car[];

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cars$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('id');
        return this.carService.getCars();
      })
    );
  }

  viewDataDetails(id: string) {
    this.router.navigate([`/ofertas/car/${id}`]);
  }
}
