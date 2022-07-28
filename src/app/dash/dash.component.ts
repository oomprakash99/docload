import { Component, HostListener, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private http:HttpClient,
    private fileUploadService: FileUploadService) { }
  


  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file!: File;

  // error!: string;
  // dragAreaClass!: string;
  // onFileChange(event: any) {
  //   let files: FileList = event.target.files;
  //   this.saveFiles(files);
  // }
  ngOnInit() {
    // this.dragAreaClass = "dragarea";
  }
  // @HostListener("dragover", ["$event"]) onDragOver(event: any) {
  //   this.dragAreaClass = "droparea";
  //   event.preventDefault();
  // }
  // @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
  //   this.dragAreaClass = "droparea";
  //   event.preventDefault();
  // }
  // @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  // }
  // @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  // }
  // @HostListener("drop", ["$event"]) onDrop(event: any) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (event.dataTransfer.files) {
  //     let files: FileList = event.dataTransfer.files;
  //     this.saveFiles(files);
      
  //   }
  // }

  // saveFiles(files: FileList) {

  //   if (files.length > 5) this.error = "Only five files at time allowed";
  //   else {
  //     this.error = "";
  //     // console.log(files[].size,files[].name,files[].type);
  //     console.log(files);
  //     this.http.post('',files).subscribe((res)=>
  //     {
  //       console.log(res);
  //     })
      

  //   }
  // }

  onChange(event:any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}
}
