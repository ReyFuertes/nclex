import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService extends BaseService {
  private url = '/assets/data/goals.json'
  private propertyUrl = '/assets/data/goal.json'

  getGoals() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  getProperty(property: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[property]),
        catchError(this.handleError)
      )
  }

  constructor(private _http: HttpClient) {
    super(_http)
  }
}
