import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: any[] = [];
  selectedQtd: 0;
  @Input() type: string;
  @Input() product: string;
  constructor(private modalCtrl: ModalController) { }
  
  ngOnInit() {
  }
}
