import { Component, OnInit } from '@angular/core';
import { ApiCryptoService } from "../api.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  crypto;
  id: string;

  constructor(private apiService : ApiCryptoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.id = param['id'];
    });
    this.apiService.getOneCrypto(this.id).subscribe((res:any) => {
      this.crypto = res;
    });
  }

}
