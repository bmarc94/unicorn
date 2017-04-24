import { Component, OnInit } from '@angular/core';

import { Unicorn } from '../Unicorn';
import { UnicornService } from '../unicorn.service';

@Component({
  moduleId: module.id,
  selector: 'unicorn-list',
  templateUrl: './templates/unicorn-list.component.html',
  styleUrls: ['./templates/unicorn-list.component.css'],
})

export class UnicornListComponent implements OnInit {
  private model:any = { name: "", color: "", age: "", gender: "" };
  private unicorns: Unicorn[];
  private selectedUnicorn:Unicorn = null;

  constructor(
    private unicornService: UnicornService,

  ) { }

  ngOnInit() {
    this.unicornService.geUnicorns().then((unicorns) => {
      this.unicorns = unicorns;
    });
  }

  getColor(unicorn: Unicorn): String {
    return "#" + unicorn.color;
  }
}

