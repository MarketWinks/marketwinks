import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class UserdetailsService {
    private subject = new Subject<any>();
    private message: any;
    sharedMessage: any;



    useremail: any;
    userdata = new EventEmitter();

    // constructor() {
    //     console.log('testService constructor called');
    // }


    storeUseremail(useremaill: string) {
        console.log("setting user email for auth serv:" + useremaill);
    this.useremail = useremaill;

        // this.message.next(useremaill);
        // this.sharedMessage = this.message.asObservable();

        
        //this.subject.next(useremaill);

//        this.userdata.emit(useremaill);
    }

    getUseremail() {
        this.message = new BehaviorSubject(this.useremail);
        return this.message.asObservable();

        //getUseremail(): Observable<any> {
        //  console.log("returning user email for auth serv:" + this.useremail);
        //return this.subject.asObservable();

    }

}
