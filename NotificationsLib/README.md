# Usage 

### 1. Import `notify` into your`app.module`
Also provide the required configuartions for manipulating the library:
* timeOut: <br> Can set the time after which the notification will be removed (in milliseconds)
* timeOutRequiredCategories: <br> Is an array where you can add the categories of notifications where timeout is required
* maxLimit: <br> maximum number of notifications on the screen

```javascript
import { NotifyModule } from 'notify';

@NgModule({
  imports: [
    NotifyModule.forRoot({
      timeOut: 10000,
      timeOutRequiredCategories: ["info","error"],
      maxLimit: 5
    })
  ],
  declarations: [...],
  exports: [...],
  providers: [...]
})
```

### 2. Inject `NotifyService` service into your component

```javascript
import { NotifyService } from 'notify';

export class myComponent {

  constructor(
    private notify: NotifyService
  ) { }

}
```

### 3. That's it!, start using it
Following two methods are required:
* open: you can send header, body and the type of notification as arguments.
* destroyAll: will remove all notifactions that are visible on the screen

```javascript
alert() {
   this.notify.open("header", "body", "type");
}

ngOnDestroy() {
   this.notify.destroyAll();
}

```

# Customizing 

### 1. Change the notification delay

```javascript
// The toast now lasts 8 seconds
imports: [
    NotifyModule.forRoot({
      timeOut: 8000,
      timeOutRequiredCategories: ["info","error"],
      maxLimit: 5
    })
  ],
```

### 2. Change the toast style

```javascript
// Can have 6 notifications on the screen at a time
imports: [
    NotifyModule.forRoot({
      timeOut: 10000,
      timeOutRequiredCategories: ["info","error"],
      maxLimit: 6
    })
  ],
```

### 3. Change the toast container style

```javascript
// Info and Error type notifications will follow timeout and be removed after 10 seconds
imports: [
    NotifyModule.forRoot({
      timeOut: 10000,
      timeOutRequiredCategories: ["info","error"],
      maxLimit: 6
    })
  ],
```
