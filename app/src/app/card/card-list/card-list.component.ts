
import { Component , ViewChild, AfterViewInit,OnInit } from "@angular/core";
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { MonsterCardComponent } from "C:/git/YGO7Front-end/app/src/app/components/card-creation/monster-card/monster-card.component"
import { Card } from 'src/app/models/card';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'table-basic-example',
  templateUrl: './Card-list.component.html',
  styleUrls: ['./Card-list.component.scss']
})
export class CardListComponent implements OnInit{

  myVar='';

  card:Card;
  id: number;
  monsterinfo: {};
  CardForm: FormGroup;
  keys: any;
  surahSelect: any[];
  //cardselected: number;
  cardselected: any = {};
  modifedtext: string;

  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService,
  ) {
    this.card = new Card();
  }


  // onchangevar(myVar){
  //   console.log(myVar,"k1");
  //   if(myVar.optitions.value == 1){
  //     myVar = 'yes';
  //     console.log(myVar,"k2");
  //     return myVar;
  //   }
  //   console.log(myVar,"k3");
  //   return '';
  // }



 // @ViewChild(MonsterCardComponent) childMonster;

  recieveMonster($event){
    this.monsterinfo = event;
  }


  ngOnInit(){
  this.CardForm = new FormGroup({

      'CardId': new FormControl(this.card.CardId, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]),
      'CardName': new FormControl(this.card.CardName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
      ),
      'Stars': new FormControl(this.card.Stars, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4)
      ]
      )

    });
  }

 // ngAfterViewInit(){
 //   this.monsterinfo = this.childMonster.monster;
 // }
  ///


  //////
   // define the JSON of data
   public countries: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'Pendullum', Code: 'FR' },
        { Name: 'Synchro ', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMark: string = 'Select countries';
    ///
//
//


    public imagePath;
    imgURL: any;
    public message: string;

    preview(files) {
      if (files.length === 0)
        return;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }

    get CardId() { return this.CardForm.get('CardId'); }

    get CardName() { return this.CardForm.get('CardName'); }

    get Stars() { return this.CardForm.get('Stars'); }


    onSubmit(){
      console.log(this.CardForm);

      console.log("caralho");

     //this.apiService.addCard(this.CardForm.value).subscribe(res =>{})
     //  console.log(this.CardForm);


    this.apiService.createItem(this.CardForm).subscribe(response => {
      if(response.sucesso)
      {
        console.log("vai se fuder");
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    });

    }


}


