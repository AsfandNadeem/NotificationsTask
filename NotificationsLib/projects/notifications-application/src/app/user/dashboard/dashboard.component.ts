import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotifyService } from 'notify';
import { Subscription } from 'rxjs';
import { NotificationsModel } from '../../shared/notifications-model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {

  dataSource: MatTableDataSource<NotificationsModel>;
  displayedColumns: string[] = ['Header', 'Body', 'Type', 'Actions'];
  notifications: NotificationsModel[] = [];
  private notificationsSub: Subscription;
  editField = false;
  editId = "";
  headerField = "";
  bodyField = "";
  typeField = "";
  categories=["info","error","warning"];
  @ViewChild('paginator') paginator: MatPaginator;

 

  constructor(private userService: UserService,private notify: NotifyService) { }

  ngOnInit(): void {

    this.userService.getNotifications();
    this.notificationsSub = this.userService.getNotificationsUpdateListener()
      .subscribe((notificationData: { notifications: NotificationsModel[] }) => {
        this.notifications = notificationData.notifications;
        this.dataSource = new MatTableDataSource(notificationData.notifications);
        this.dataSource.paginator = this.paginator;
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
    this.notify.destroyAll();
  }

  editRow(id: string, header: string, body: string, type:string){
    this.editField = true;
    this.editId = id;
    this.headerField = header;
    this.bodyField = body;
    this.typeField = type;
  }


  cancelEdit(){
    this.editField = false;
    this.editId = "";
    this.headerField = "";
    this.bodyField = "";
    this.typeField = "";

  }

  updateEdit() {
    this.userService.editNotification(this.editId,this.headerField,this.bodyField,this.typeField).subscribe(() => {
      this.userService.getNotifications();
      this.cancelEdit();
    });

  }

}
