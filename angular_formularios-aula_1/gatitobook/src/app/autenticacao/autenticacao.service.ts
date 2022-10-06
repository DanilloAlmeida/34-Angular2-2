import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {
  // usuarioService: any;

  constructor(private HttpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any>
  {
    return this.HttpClient.post
    (
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,

      }
    )
  }

  // public autenticar(usuario: string, senha: string): Observable<any>
  // {
  //   return this.HttpClient.post
  //   (
  //     'http://localhost:3000/user/login',
  //     {
  //       userName: usuario,
  //       passWord: senha,
  //     },
  //     {
  //       observe: 'response'
  //     }
  //   ).pipe
  //   (
  //     tap((res) => {
  //       const authToken = res.headers.get('x-access-token') ?? '';
  //       this.usuarioService.salvaToken(authToken);
  //       }
  //     )
  //   );
  // }
}
// function tap(arg0: (res: any) => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpResponse<Object>, any> {
//   throw new Error('Function not implemented.');


