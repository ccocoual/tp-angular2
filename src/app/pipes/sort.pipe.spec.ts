import { SortPipe } from './sort.pipe';
import { Product } from '../model';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort objects by property in argument', () => {
    const pipe = new SortPipe();
    const data = [
      {title: 'zyxw', description: '', photo: '', price: 0, stock: 0},
      {title: '1234', description: '', photo: '', price: 0, stock: 0},
      {title: 'abcd', description: '', photo: '', price: 0, stock: 0}
    ];
    const expected = [
      {title: '1234', description: '', photo: '', price: 0, stock: 0},
      {title: 'abcd', description: '', photo: '', price: 0, stock: 0},
      {title: 'zyxw', description: '', photo: '', price: 0, stock: 0}
    ];
    expect(pipe.transform(data, 'title')).toEqual(expected);
  });
});
