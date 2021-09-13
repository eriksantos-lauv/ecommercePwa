import { Component } from '@angular/core';
import { AlertController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { CartModalPage } from '../cart/cart-modal/cart-modal.page';
import { ItemResumePage } from '../cart/item-resume/item-resume.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items: any;
  filteredItems: any;
  constructor(private modalCtrl: ModalController, private toast: ToastController) {}

  ionViewDidEnter() {
    this.items = localStorage.getItem('items');
    if (this.items) {
      this.items = JSON.parse(this.items);
    } else {
      this.items = [];
    }
    this.filteredItems = this.items;
  }

  updateFilter(event) {
    let lowerValue = event.detail.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().indexOf(lowerValue) !== -1 || !lowerValue);
  }

  async addToCart(product) {
    let listCart = localStorage.getItem('cart');
    let cart = (listCart) ? JSON.parse(listCart) : [];
    let itemCart = cart.find(e => e.name == product.name);
    if (itemCart){
      itemCart.cartAmount = itemCart.cartAmount + 1;
    } else {
      product.cartAmount = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const cartModal  = await this.modalCtrl.create({
      component: ItemResumePage,
    });
    await cartModal.present();

    cartModal.onDidDismiss()
      .then((data) => {
        this.ionViewDidEnter();
      })
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal',
      componentProps: {
        'type': 'resume'
      }
    });
    return await modal.present();
  }

}
