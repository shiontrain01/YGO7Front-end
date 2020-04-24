
import { Component , ViewChild, AfterViewInit,OnInit , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl,FormGroup , Validators} from '@angular/forms';
import{ Card } from 'C:/git/YGO7Front-end/app/src/app/models/card';
import { ApiService } from 'C:/git/YGO7Front-end/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PendulumMonsterComponent } from 'C:/git/YGO7Front-end/app/src/app/components/card-creation/pendulum-monster/pendulum-monster.component';
import { MonsterAffiliationEnum } from 'C:/git/YGO7Front-end/app/src/app/models/monsterAffiliationEnum';
import { MonsterSecondTypeEnum } from 'C:/git/YGO7Front-end/app/src/app/models/monsterSecondTypeEnum';
import { MonsterSummonMethodEnum } from 'C:/git/YGO7Front-end/app/src/app/models//monsterSummonMethodEnum';


/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})


 /* implements OnInit*/
export class MonsterCardComponent implements OnInit,AfterViewInit{
    id: number;
    card: Card;
    CardForm: FormGroup;
    value : any;
    balue: any;
    myVar: any;
    keys = Object.keys;
    monsterAffiliationEnum=MonsterAffiliationEnum;
    monsterSecondTypeEnum=MonsterSecondTypeEnum;
    monsterSummonMethodEnum=MonsterSummonMethodEnum;


    //monsterAffiliationEnumOptions = [];
    //monsterSecondTypeEnumOptions = [];
    //cardElementEnumOptions = [];
    monsterinfo: {};
    monster: {
      CardAttack:number,
      CardDefense:number,
      MonsterType:number,
      MonsterCardClass:number,
      MonsterSecondaryEffect:number,
      Stars:number,
      TunerMonster:boolean,
      MonsterSecondarySpecialization:[],
      pen: 3;
      rit: 4;
    };

    @ViewChild(PendulumMonsterComponent) childMonster;

    recieveMonster($event){
      this.monsterinfo = event;
    }

    constructor(
      public apiService: ApiService,
      public router: Router,
      private toastr: ToastrService,
    ) {
      this.card = new Card();
    }

    ngOnInit(){
   //  this.monsterAffiliationEnumOptions = Object.keys(this.monsterAffiliationEnum);
   //  this.monsterSecondTypeEnumOptions = Object.keys(this.monsterSecondTypeEnum);
    }




      ngAfterViewInit(){
    this.monsterinfo = this.childMonster.monster;
  }
}





 //   senndFields(){
 //     this.formEvent.emit(this.monster)
 //   }
//
/*
    ngOnInit() {
    //  this.MonsterTypeEnum = this.apiService.getData()
        this.CardForm = new FormGroup({
        // 'CardAttack': new FormControl(this.card.CardAttack, [
        //   Validators.minLength(1),
        //   Validators.maxLength(255)
        // ]),
        // 'CardDefense': new FormControl(this.card.CardDefense, [
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(255)
        // ]
        // ),
        // 'MonsterType': new FormControl(this.card.MonsterType, [
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(255)
        // ]
        // ),
          'MonsterCardClass': new FormControl(this.card.MonsterCardClass, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          ),
        //'MonsterSecondaryEffect': new FormControl(this.card.MonsterSecondaryEffect, [
        //  Validators.required,
        //  Validators.minLength(1),
        //  Validators.maxLength(255)
        //]
        //),
          'Stars': new FormControl(this.card.Stars, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          ),
        // 'TunerMonster': new FormControl(this.card.TunerMonster, [
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(255)
        // ]
        // ),
          'MonsterSecondarySpecialization': new FormControl(this.card.MonsterSecondarySpecialization, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          )

        });

      }

     get MonsterCardClass() { return this.CardForm.get('MonsterCardClass'); }

     get MonsterSecondaryEffect() { return this.CardForm.get('MonsterSecondaryEffect'); }

      get Stars() { return this.CardForm.get('Stars'); }

      submitForm() {
      this.apiService.createItem(this.card).subscribe((response) => {
      if(response.sucesso)
      {
        this.router.navigate(['/Card/list']);
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    });

  }
*/

