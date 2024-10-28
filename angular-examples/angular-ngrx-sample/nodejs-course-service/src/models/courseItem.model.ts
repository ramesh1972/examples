import { BaseEntity } from '../common/base-repository/base-entity';

export interface CourseItem extends BaseEntity {
  department: string;
  name: string;
}
