import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifySource=new Subject<string>();
  notification$=this.notifySource.asObservable();

  constructor() { }
  showNotification(message: string): void{
    this.notifySource.next(message);
  }
}
