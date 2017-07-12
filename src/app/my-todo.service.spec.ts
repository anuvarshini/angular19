import { TestBed, inject } from '@angular/core/testing';

import { MyTodoService } from './my-todo.service';

describe('MyTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTodoService]
    });
  });

  it('should be created', inject([MyTodoService], (service: MyTodoService) => {
    expect(service).toBeTruthy();
  }));
});
