import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-short-url-display',
  templateUrl: './short-url-display.component.html',
  styleUrls: ['./short-url-display.component.scss']
})
export class ShortUrlDisplayComponent implements OnInit {

  shortUrl$: Observable<any>;
  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.shortUrl$ = this.urlService.shortUrl$;
  }

}
