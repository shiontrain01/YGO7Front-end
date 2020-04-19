import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Card } from 'c:/yugiohSevensFinal/AirplaneFront-master/app/src/app/models/card';
import { ApiService } from 'c:/yugiohSevensFinal/AirplaneFront-master/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})


 /* implements OnInit*/
export class MonsterCardComponent {
    id: number;
    card: Card;
    CardForm: FormGroup;
    monster: {
      CardAttack:number,
      CardDefense:number,
      MonsterType:number,
      MonsterCardClass:number,
      MonsterSecondaryEffect:number,
      Stars:number,
      TunerMonster:boolean,
      MonsterSecondarySpecialization:[],

    };


    @Output() formEvent = new EventEmitter<any>();

//constructor(
//  public apiService: ApiService,
//  public router: Router,
//  private toastr: ToastrService
//) {
//  this.card = new Card();
//}

    senndFields(){
      this.formEvent.emit(this.monster)
    }

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
}
