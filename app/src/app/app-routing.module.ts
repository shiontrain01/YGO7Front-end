//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCreateComponent } from './Card/Card-create/Card-create.component';
import { CardEditComponent } from './Card/Card-edit/Card-edit.component';
import { CardListComponent } from './Card/Card-list/Card-list.component';
import { HomeComponent } from './home/home.component';
import { FusionMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/fusion-monster/fusion-monster.component';
import { LinkMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/link-monster/link-monster.component';
import { RitualMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/ritual-monster/ritual-monster.component';
import { MonsterCardComponent  } from './components/card-creation/monster-card/monster-card.component';
import { SynchroMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/synchro-monster/synchro-monster.component';
import { XyzMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/xyz-monster/xyz-monster.component';
import { PendulumMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/pendulum-monster/pendulum-monster.component';


const routes: Routes = [
  { path: 'Card/create', component: CardCreateComponent },
  { path: 'Card/edit/:id', component: CardEditComponent},
  { path: 'Card/list', component: CardListComponent } ,
  { path: 'Card/home', component: HomeComponent },
  { path: 'Card/fusion', component: FusionMonsterComponent },
  { path: 'Card/link', component: LinkMonsterComponent },
  { path: 'Card/ritual', component: RitualMonsterComponent },
  { path: 'Card/monster', component: MonsterCardComponent },
  { path: 'Card/synchro', component: SynchroMonsterComponent },
  { path: 'Card/xyz', component: XyzMonsterComponent },
  { path: 'Card/pendulum', component: PendulumMonsterComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
