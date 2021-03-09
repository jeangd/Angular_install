import { Component, OnInit } from '@angular/core';
import { ApiCryptoService} from "../api.service";
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  crypto = [];
  crypto_filter: any[];
  searchName = new FormGroup({
    name: new FormControl(''),
  });
  constructor(private apiService : ApiCryptoService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((res:any) => {
      this.crypto = res;
    });
  }

  onClick(id: string) {
  }
  searchname(): void {
    this.crypto_filter = this.crypto.filter(crypto => crypto.name.includes(this.searchName.controls['name'].value));
  }

}
