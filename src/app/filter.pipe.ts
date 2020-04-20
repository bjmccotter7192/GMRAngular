import { Pipe, PipeTransform } from '@angular/core';
import { I18NHtmlParser } from '@angular/compiler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(results: any[], searchText: any): any {
    if(!results){
      return [];
    }
    if(!searchText){
      return results;
    }
    searchText = searchText.toLocaleLowerCase();
    return results.filter(it => {
      return it.last_name.toLocaleLowerCase().includes(searchText) ||
            it.first_name.toLocaleLowerCase().includes(searchText) ||
            it.client_id.toString().toLocaleLowerCase().includes(searchText) ||
            it.number1.toString().toLocaleLowerCase().includes(searchText);
    })
  }

}
