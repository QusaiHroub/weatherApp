import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(cities: any, city: string): any[] {
        if(!cities) {
            return [];
        }
        if(!city || city.length == 0) {
            return cities;
        }
        return cities.filter( it => it.name.toLowerCase().includes(city.toLowerCase()));
    }
}
