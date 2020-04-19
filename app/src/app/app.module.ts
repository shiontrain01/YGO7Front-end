import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule} from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CardCreateComponent } from './Card/Card-create/Card-create.component';
import { CardEditComponent } from './Card/Card-edit/Card-edit.component';
import { CardListComponent } from './Card/Card-list/Card-list.component';
import { FusionMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/fusion-monster/fusion-monster.component';
import { LinkMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/link-monster/link-monster.component';
import { RitualMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/ritual-monster/ritual-monster.component';
import { MonsterCardComponent  } from './components/card-creation/monster-card/monster-card.component';
import { SynchroMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/synchro-monster/synchro-monster.component';
import { XyzMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/xyz-monster/xyz-monster.component';
import { PendulumMonsterComponent } from 'C:/yugiohSevensFinal/AirplaneFront-master/app/src/app/components/card-creation/pendulum-monster/pendulum-monster.component';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import {MultiSelectModule} from 'primeng/multiselect';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';



@NgModule({
  declarations: [
    AppComponent,
    FusionMonsterComponent,
    LinkMonsterComponent,
    RitualMonsterComponent,
    PendulumMonsterComponent,
    SynchroMonsterComponent,
    XyzMonsterComponent,
    MonsterCardComponent,
    CardCreateComponent,
    CardEditComponent,
    CardListComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    MultiSelectAllModule,
    MultiSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MonsterCardComponent,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
      // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
      return {
          ngModule: AppModule,
          providers: [MatIconRegistry]
      };
  }
}
