import { BaseEntity } from '../common/base-repository/base-entity';
import { CourseItem } from './courseItem.model';

export class Department extends BaseEntity {
  public department?: string;
  public deptCourses?: Array<CourseItem>;
}
