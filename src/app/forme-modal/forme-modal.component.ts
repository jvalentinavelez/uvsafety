import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forme-modal',
  templateUrl: './forme-modal.component.html',
  styleUrls: ['./forme-modal.component.scss'],
})
export class FormeModalComponent implements OnInit {

  constructor(private ModalController: ModalController  ) { }

  dismissModal(){
    this.ModalController.dismiss();
  }

  ngOnInit() {}

}
