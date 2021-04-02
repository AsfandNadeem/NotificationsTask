import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { NotificationsModel } from '../../shared/notifications-model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  dataSource: MatTableDataSource<NotificationsModel>;
  displayedColumns: string[] = ['Header', 'Body', 'Type', 'Actions'];
  notifications: NotificationsModel[] = [];
  private notificationsSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getNotifications();
    this.notificationsSub = this.userService.getNotificationsUpdateListener()
        .subscribe((notificationData: { notifications: NotificationsModel[] }) => {
            this.notifications = notificationData.notifications;
            this.dataSource = new MatTableDataSource(notificationData.notifications);
        });
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onDelete(id: string) {
    this.userService.deleteNotification(id).subscribe(() => {
      this.userService.getNotifications();
    });

  }


  ngOnDestroy(): void {
    this.notificationsSub.unsubscribe();
  }

}
