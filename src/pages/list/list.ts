import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from './../../providers/event-service/event-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [EventServiceProvider]
})
export class ListPage {
  events;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public eventService: EventServiceProvider) {
    
    
  }

  ionViewDidLoad(){
    let events = this.eventService.getEvents().subscribe(
        data => {
          this.events = data;
        },
        error => {
            console.error(error);
        }
    );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
