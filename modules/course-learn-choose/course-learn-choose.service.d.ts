import { Repository } from 'typeorm';
import { CourseLearnChoose } from './course-learn-choose.entity';
export declare class CourseLearnChooseService {
    private readonly courseLearnChooseRepository;
    constructor(courseLearnChooseRepository: Repository<CourseLearnChoose>);
    create(body: any): Promise<CourseLearnChoose[]>;
    updataChoose({ stillArr, createArr, delArr }: {
        stillArr: any;
        createArr: any;
        delArr: any;
    }): Promise<CourseLearnChoose[]>;
}
