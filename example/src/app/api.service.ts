import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCryptoService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins");
  }
  getOneCrypto(id: string) {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins" + id);
  }
}
