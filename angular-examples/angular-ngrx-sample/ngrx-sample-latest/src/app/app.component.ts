import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { Appstate } from './store/shared/appstate';
import { setAPIStatus } from './store/shared/app.action';

import { invokeCoursesFetchAPI } from './store/actions/course.action';
import { selectCourses } from './store/selectors/courses.selector';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private appStore: Store<Appstate>) { }
  courseItems$ = this.store.pipe(select(selectCourses));

  ngOnInit(): void {


    this.store.dispatch(invokeCoursesFetchAPI());

    this.appStore.dispatch(
      setAPIStatus({
        apiStatus: { apiResponseMessage: 'Let us build the courses', apiStatus: 'success' },
      })
    );
  }
}

