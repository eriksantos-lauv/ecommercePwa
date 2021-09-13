import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-resume',
  templateUrl: './item-resume.page.html',
  styleUrls: ['./item-resume.page.scss'],
})
export class ItemResumePage implements OnInit {
  cart: any[] = [];
  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    let storageItem = localStorage.getItem('cart');
    this.cart = (storageItem) ? JSON.parse(storageItem) : [];
    this.cart.forEach(item => {
      if (!item.cartAmount) item.cartAmount = 0;
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  increaseItemAmount(item) {
    let newValue = item.cartAmount + 1;
    if (newValue <= item.stock) {
      item.cartAmount = item.cartAmount + 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  decreaseItemAmount(item) {
    if (item.cartAmount > 1) {
      item.cartAmount = item.cartAmount - 1;
    } else if (item.cartAmount == 1) {
      this.removeItem(item);
    }
  }

  getTotal() {
    let total = 0;
    this.cart.forEach(item => {
      total = total +  (item.cartAmount * item.price);
    });
    return total;
  }

  removeItem(item) {
    let newCart = this.cart.filter(e => e.name != item.name);
    this.cart = newCart;
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  updateStock() {
    let item = localStorage.getItem('items');
    let listItem = (item) ? JSON.parse(item) : [];
    listItem.forEach(element => {
      this.cart.forEach(cartItem => {
        if (element.name == cartItem.name) {
          element.stock = element.stock - cartItem.cartAmount;
        }
      });
    });

    localStorage.setItem('items', JSON.stringify(listItem));
  }

  async resumeCart() {
    this.modalCtrl.dismiss();
    this.updateStock();
    localStorage.setItem('cart', JSON.stringify([]));

    const alert = await this.alertController.create({
      header: 'Compra Realizada',
      buttons: ['OK']
    });

    await alert.present();
  }

}
