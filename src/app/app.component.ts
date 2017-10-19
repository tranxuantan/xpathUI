import { Component } from '@angular/core';
import { Http, Response,Headers,URLSearchParams, RequestOptions } from '@angular/http';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	constructor(private http:Http){}
  title = 'Welcome to XPATH Getting Application!';
  // getxpath(url:string){
    // 	 var url1 =url.replace('http://','');
    // 	 url1=url1+'.';
    //    this.http.get('http://localhost:8080/xpath/getxpath/'+url1).subscribe(data => console.log(data));
    // }
    // savexpath(){
    //   if(this.http.get('http://localhost:8080/xpath/save/')){
    //       alert("lưu thành công")
    //   }else alert("lưu không thành công");
    // }

    savexpath(){
      this.http.get('http://localhost:8080/xpath/save/').subscribe(data=>document.getElementById("labelMessage").innerHTML=data.text());
      document.getElementById("btnsavexpath").setAttribute("disabled","disabled");
      document.getElementById("btnsavexpath").style.backgroundColor = "gray";    
    }

    getxpath2(url:string){      
      if(url.startsWith("http://") || url.startsWith("https://")){
        document.getElementById("labelWanring").style.display="none";
        let cpHeadears = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: cpHeadears});
        //this.http.post('http://localhost:8080/xpath/getxpath4',url,options).subscribe(data => document.getElementById("show2").innerHTML=data.text());
        this.http.post('http://localhost:8080/xpath/getxpath4',url,options).subscribe(data => document.getElementById("show").setAttribute("srcdoc",data.text()));
        document.getElementById("show").style.border="ridge";
        document.getElementById("btnsavexpath").removeAttribute("disabled");
        document.getElementById("btnsavexpath").style.backgroundColor = "red";
        document.getElementById("labelMessage").innerHTML="";
      }else{
        document.getElementById("labelWanring").style.display="block";
        document.getElementById("show").style.border="none";
        document.getElementById("show").setAttribute("srcdoc","");
        document.getElementById("btnsavexpath").setAttribute("disabled","disabled");
        document.getElementById("btnsavexpath").style.backgroundColor = "gray";
        document.getElementById("labelMessage").innerHTML="";
      }
      

      // var url1 =url.replace('http://','');
      // var url1 =url.replace('https://','');
      // url1=url1+'.';    
      //code lỗi(1) this.http.get('http://localhost:8080/xpath/getxpath2/'+url1).subscribe(data => this.html=data.text());
      //this.http.get('http://localhost:8080/xpath/getxpath2/'+url1).subscribe(data => document.getElementById("show").setAttribute("srcdoc",data.text()));
      // let params: URLSearchParams = new URLSearchParams();
      // params.set('url', url);
      // this.http.get('http://localhost:8080/xpath/getxpath3', {search: params}).subscribe(data => document.getElementById("show").setAttribute("srcdoc",data.text()));
    }
}
