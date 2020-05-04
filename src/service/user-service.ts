import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class UserService {
  assertValue: boolean;

  constructor(private http: HttpClient) {
  }

  public verifyNameOnBlackList(nome: string) {
    this.assertValue = nome === 'teste';
    return of({isNomeExists: this.assertValue}).pipe(delay(300));
  }
}
