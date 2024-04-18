import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
  standalone: true,
})
export class MyDatePipe implements PipeTransform {

  transform(value: string | null): string | null {
    let [month, date, year] = (value as string).split(' ');
    date = date.replace(',', '');
    month = this.translateMonth(month);
    return year + ". " + month + " " + date + ".";
  }

  translateMonth(month: string): string {
    switch (month) {
      case 'Jan': return 'Január';
      case 'Feb': return 'Február';
      case 'Mar': return 'Március';
      case 'Apr': return 'Április';
      case 'May': return 'Május';
      case 'Jun': return 'Június';
      case 'Jul': return 'Július';
      case 'Aug': return 'Augusztus';
      case 'Sep': return 'Szeptember';
      case 'Oct': return 'Október';
      case 'Nov': return 'November';
      case 'Dec': return 'December';
      default: return month;
    }
  }

}
