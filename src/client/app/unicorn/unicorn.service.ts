import { Injectable } from '@angular/core';

import { Unicorn } from './unicorn';

@Injectable()

export class UnicornService {

    geUnicorns(): Promise<Unicorn[]> {
        if(document.cookie){
            var parsedCookie = JSON.parse(document.cookie);
        }     

        if (parsedCookie) {
            UNICORN = parsedCookie as Unicorn[];
        }
        return Promise.resolve(UNICORN);
    }

    addUnicorn(unicorn: Unicorn) {
        UNICORN.push(unicorn);
        document.cookie = JSON.stringify(UNICORN);
    }
}

var UNICORN: Unicorn[] = [
    { name: 'Licorne M', age: 32, color: "123456", gender: "M" },
    { name: 'Licorn F', age: 32, color: "654321", gender: "F" }
];