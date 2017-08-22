import {Injectable} from '@angular/core'

@Injectable()

export class connectService{
    getnavbarLinks(){
        return [
            "Home","AboutUs","contactUs"
        ]
    }
   getnavbarLinksRight(){
       return[
           "SignUp","Login"
       ]
   }
}    


