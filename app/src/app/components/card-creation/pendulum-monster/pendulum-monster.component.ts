import { Component , ViewChild, AfterViewInit,OnInit,Output,EventEmitter } from "@angular/core";
import { FormControl,FormGroup , Validators} from '@angular/forms';
import{ Card } from 'C:/git/YGO7Front-end/app/src/app/models/card';
import { ApiService } from 'C:/git/YGO7Front-end/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-pendulum-monster',
  templateUrl: './pendulum-monster.component.html',
  styleUrls: ['./pendulum-monster.component.scss']
})

export class PendulumMonsterComponent implements OnInit {
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
      pen: 3;
      rit: 4;
    };


  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.card = new Card();
  }

  @Output() formEvent = new EventEmitter<any>();



    senndFields(){
      this.formEvent.emit(this.monster)
    }



    ngOnInit() {
        this.CardForm = new FormGroup({
          'PendulumScale': new FormControl(this.card.PendulumScale, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'PendulumEffect': new FormControl(this.card.PendulumEffect, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          )

        });

      }

}
