//Card-edit.component.ts 
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Card-edit',
  templateUrl: './Card-edit.component.html',
  styleUrls: ['./Card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  id: number;
  airp: Card;
  CardForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.airp = new Card();
  }

  ngOnInit() {

    this.CardForm = new FormGroup({
      'codigo': new FormControl(this.airp.CardId, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]),
      'modelo': new FormControl(this.airp.CardName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
      ),
      'quantidadePassageiros': new FormControl(this.airp.Stars, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4)
      ]
      )
    });

    

    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.airp = response.data;
    })
  }

  get codigo() { return this.CardForm.get('codigo'); }

  get modelo() { return this.CardForm.get('modelo'); }

  get quantidadePassageiros() { return this.CardForm.get('quantidadePassageiros'); }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.airp).subscribe(response => {
      if(response.sucesso)
      {
        this.router.navigate(['/Card/list']);
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    })
  }

}
