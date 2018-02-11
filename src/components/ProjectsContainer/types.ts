import { ProjectType } from '../Project';

interface ProjectsContainerPropsType {
  data : ProjectType[];
}

interface ProjectsContainerStateType {
  scrollTop : number;
  viewportHeight : number;
}

export {
  ProjectsContainerPropsType,
  ProjectsContainerStateType,
};
