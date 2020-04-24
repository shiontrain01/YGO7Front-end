import { Component, OnInit } from '@angular/core';
import { Card } from 'C:/git/YGO7Front-end/app/src/app/models/card';
import { ApiService } from 'C:/git/YGO7Front-end/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-link-monster',
  templateUrl: './link-monster.component.html',
  styleUrls: ['./link-monster.component.scss']
})

export class LinkMonsterComponent implements OnInit {

    id: number;
    card: Card;
    CardForm: FormGroup;
    showVar: boolean;
    imagem : '1.jpg';

  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.card = new Card();
  }




    ngOnInit() {
      this.imagem = '1.jpg';
      }

}
