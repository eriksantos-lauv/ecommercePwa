import { Component, ViewChild } from '@angular/core';
import { PublicApiService } from '../services/public-api/public-api.service';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading: boolean;
  users: any[];
  page: number;
  skelleton: any = [1,2,3];
  constructor(private publicApi: PublicApiService, private toast: ToastController) {}

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.loading = true;
    setTimeout(() => {
      this.getAllUsers(this.page);
    }, 4000);
  }

  getAllUsers(page: number) {
    this.publicApi.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }
        this.loading = false;
      })
      .catch(async (error: any) => {
        this.loading = false;
        await this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'bottom', duration: 3000 });
      });
  }
}
