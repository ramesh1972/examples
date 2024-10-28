import { BaseEntity } from '../common/base-repository/base-entity';
import { CourseItem } from './courseItem.model';

export interface Courses extends BaseEntity {
  readonly courses: Array<CourseItem>;
}
