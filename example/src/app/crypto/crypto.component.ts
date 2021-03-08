import { Component, OnInit } from '@angular/core';
import { ApiCryptoService} from "../api.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  crypto = [];
  constructor(private apiService : ApiCryptoService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((res:any) => {
      this.crypto = res;
    });
  }

  onClick(id: string) {
    this.router.navigate(["coins/", id]);
  }
}
