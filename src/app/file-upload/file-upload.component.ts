import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {
  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  public images: any = [];

  constructor(private http: HttpClient, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  transform(base64){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64);
  }

  get f(){
    return this.myForm.controls;
  }
   
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.myForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }
   
  submit(){
    console.log(this.myForm.value);

    this.http.post('https://gmr-python.herokuapp.com/uploadFile', this.myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  getFiles(){
    this.images = [];
    this.http.get("https://gmr-python.herokuapp.com/getFiles").subscribe(
      res => {
        let temp: any = res;

        temp.forEach(t => {
          let base64: string = t.file_data;
          base64 = base64.substr(2).slice(0, -1);
          this.images.push(base64);
        });
        console.log(this.images);
      },
      err => {
        console.log(err)
      }
    )
  }

  dataURItoBlob(dataURI) {
    const arrayBuffer = new ArrayBuffer(dataURI.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < dataURI.length; i++) {
      int8Array[i] = dataURI.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
    return blob;
 }
}
