//app-routing.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCreateComponent } from './Card/Card-create/Card-create.component';
import { CardEditComponent } from './Card/Card-edit/Card-edit.component';
import { CardListComponent } from './Card/Card-list/Card-list.component';
import { HomeComponent } from './home/home.component';
import { FusionMonsterComponent } from './components/card-creation/fusion-monster/fusion-monster.component';
import { LinkMonsterComponent } from './components/card-creation/link-monster/link-monster.component';
import { RitualMonsterComponent } from './components/card-creation/ritual-monster/ritual-monster.component';
import { MonsterCardComponent  } from './components/card-creation/monster-card/monster-card.component';
import { SynchroMonsterComponent } from './components/card-creation/synchro-monster/synchro-monster.component';
import { XyzMonsterComponent } from './components/card-creation/xyz-monster/xyz-monster.component';
import { PendulumMonsterComponent } from './components/card-creation/pendulum-monster/pendulum-monster.component';

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
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
