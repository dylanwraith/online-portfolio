import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  sendEmail(body: any) {
    console.log('sending email');
    console.log(JSON.parse(this.formatJsonString(body)));
    return this.http.post('http://ec2-3-88-213-49.compute-1.amazonaws.com:8000/api/email', JSON.parse(this.formatJsonString(body)));
  }

  getAllCats(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/catss');
  }

  getCat(name: string): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/cats/' + name);
  }

  insertCat(cat: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/cats/', cat);
  }

  updateCat(cat: any): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/cats/' + cat.name,
      cat
    );
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name);
  }

  private formatJsonString(map: Map<string, string>): string {
    const jsonString = {};
    map.forEach((value, key) => {
      jsonString[key] = value;
    });
    return JSON.stringify(jsonString);
  }
}
