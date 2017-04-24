import { Component, OnInit } from '@angular/core';

import { Unicorn } from './../unicorn/unicorn'
import { UnicornService } from './../unicorn/unicorn.service'

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'unicorn-love',
  templateUrl: 'templates/love.component.html',
  styleUrls: ['templates/love.component.css']
})

export class LoveComponent implements OnInit {

  private femaleUnicorns: Unicorn[] = [];
  private maleUnicorns: Unicorn[] = [];
  private selectedMale: Unicorn = null;
  private selectedFemale: Unicorn = null;

  constructor(
    private unicornService: UnicornService,

  ) { }

  ngOnInit() {
    this.unicornService.geUnicorns().then((unicorns) => {
      unicorns.map((unicorn) => {
        unicorn.gender === "M" ? this.maleUnicorns.push(unicorn) : this.femaleUnicorns.push(unicorn);
      });
    });

  }

  getColor(unicorn: Unicorn): String {
    return "#" + unicorn.color;
  }

  mixColor(hexColor: String, hexColor2: String): String {
    var r = Math.floor((parseInt(hexColor.substring(0, 2), 16) + parseInt(hexColor2.substring(0, 2), 16)) / 2;
    var g = Math.floor((parseInt(hexColor.substring(2, 4), 16) + parseInt(hexColor2.substring(2, 4), 16)) / 2;
    var b = Math.floor(parseInt(hexColor.substring(4, 6), 16) + parseInt(hexColor2.substring(4, 6), 16)) / 2;

    return r.toString(16) + g.toString(16) + b.toString(16)
  }

  love() {
    if (this.selectedFemale && this.selectedMale) {
      var unicornBaby = new Unicorn(
        "" + this.selectedFemale.name + this.selectedMale.name,
        this.mixColor(this.selectedFemale.color, this.selectedMale.color),
        0,
        ['M', 'F'][Math.floor(Math.random() * 2)],
      )
      this.unicornService.addUnicorn(unicornBaby);
      this.selectedFemale = null;
      this.selectedMale = null;

      unicornBaby.gender === "M" ? this.maleUnicorns.push(unicornBaby) : this.femaleUnicorns.push(unicornBaby);

    } else {
      alert('Impossible tout seul!')
    }
  }
  
}
