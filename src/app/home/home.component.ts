import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$.pipe(
    map((links: ScullyRoute[]) => links.reverse())
  );

  constructor(
    private scully: ScullyRoutesService,
    private metaService: MetaService
  ) {}

  ngOnInit(): void {
    this.metaService.setMetaForCurrentPage({
      title: 'Krishna Mohan A M',
      description:
        "I'm a Full Stack Developer, who works mainly in Microsoft stack. Angular, Dotnet Core and Sql Server are my primary weapons.",
      imageUrl: '',
      date: '',
      keywords: ['Blog, Portfolio, Developer, Engineer'],
      siteUrl: 'https://krishnamohan.dev',
      type: 'website',
    });
  }
}