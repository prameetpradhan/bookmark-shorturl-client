import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.scss']
})
export class ImageFormatterComponent{
  imageSource: any;
  params: any;

  constructor(private sanitizer: DomSanitizer){}

  agInit(params: any): void {
    this.params = params;
    if (!!params.data && !!params.data.faviconData){
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:${params.data.fileType};base64, ${params.data.faviconData}`);
    }
  }

  getHeight(): string{
    if (!!this.params.data && !!this.params.data.faviconData){
      return '25px';
    }
    return '0px';
  }

  getWidth(): string{
    if (!!this.params.data && !!this.params.data.faviconData){
      return '25px';
    }
    return '0px';
  }

}
