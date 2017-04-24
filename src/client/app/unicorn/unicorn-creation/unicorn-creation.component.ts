import { Component, OnInit } from '@angular/core';

import { Unicorn } from '../Unicorn';
import { UnicornService } from '../unicorn.service';

@Component({
  moduleId: module.id,
  selector: 'unicorn-creation',
  templateUrl: './templates/unicorn-creation.component.html',
  styleUrls: ['./templates/unicorn-creation.component.css'],
})

export class UnicornCreationComponent {
  private model:any = { name: "", color: "", age: "", gender: "" }

  constructor(
    private unicornService: UnicornService,

  ) {}

  add() {
    if (this.model.name && /([a-f]|[0-9]){6}/gi.test(this.model.color)) {
      var unicorn = new Unicorn(
        this.model.name,
        this.model.color,
        parseFloat(this.model.age),
        this.model.gender
        )
      this.unicornService.addUnicorn(unicorn)

    } else {
      alert('Nom obligatoire et coleur obligatoire au format hexadecimal');
    }
    return false;
  }

}

