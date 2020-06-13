import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Aluno{
  nome: string;
  nota: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllAlunosWithNota(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>('http://localhost:4200/assets/data.json');
  }
}
