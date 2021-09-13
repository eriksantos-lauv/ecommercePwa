import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  form: any = {name: '', price: 0, stock: 0, type: '', imageUrl: ''};
  items: any[] = [];
  constructor(private alertController: AlertController) {}

  save() {
    if (this.isValidForm()) {
      let listItems = localStorage.getItem('items');
      this.items = (listItems) ? JSON.parse(listItems) : [];
      this.items.push(this.form);
      let updatedList = JSON.stringify(this.items);
      localStorage.setItem('items', updatedList);
      this.resetForm();
      this.showAlertForm('Produto cadastrado!');
      console.log('Adicionado item na lista de frutas e vegetais.  \n [ITEM] \n' + updatedList);
    } else {
      this.showAlertForm('O cadastro não pode ser finalizado. Verifique o preenchimento dos campos!');
    }

  }

  isValidForm(): boolean {
    if(!this.form.name || this.form.price <= 0 || this.form.stock <= 0 || !this.form.type || !this.form.imageUrl) {
      return false;
    }
    return true;
  }

  async showAlertForm(message) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  resetForm() {
    this.form = {name: '', price: 0, stock: 0, type: '', imageUrl: ''};
  }
  
}
