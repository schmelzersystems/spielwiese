import {Routes, RouterModule, Router} from '@angular/router';
import {FlightsComponent} from "../components/flights/flights.component";
import {AppComponent} from "./app.component";
import {HotelsComponent} from "../components/hotels/hotels.component";
import {ToursComponent} from "../components/tours/tours.component";
import {OfferComponent} from "../components/offer/offer.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'offer', component: OfferComponent},
];

@NgModule({
  declarations: [],
  imports: [AppComponent, FlightsComponent, HotelsComponent, ToursComponent, OfferComponent,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
