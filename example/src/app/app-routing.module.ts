import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { CoinComponent } from './coin/coin.component';


const appRoutes: Routes = [
  { path: 'coins', component: CryptoComponent },
  { path: 'coins/:id', component: CoinComponent },
  { path: '', redirectTo: 'coins', pathMatch: 'full' },
  { path: '**', redirectTo: 'coins' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
