import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';


@Injectable()

export class connectService {
    
    
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    postdata(data) {
        return this.http.post("http://localhost:3019/api/register",data)
        .subscribe(res => console.log(res))
    }

    login(data) {
        return this.http.post("http://localhost:3019/api/login", data)
        .subscribe(res => console.log(res));
    }
      
    

}

