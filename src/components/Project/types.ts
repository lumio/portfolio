interface ProjectType {
  title : string;
  description? : string;
  employer? : string;
  role? : string;
  released? : string;
  url? : string;

  packageUrl? : string;
  repository? : string;

  devices? : any;
}

interface ProjectPropsType {
  project : ProjectType;
  scrollTop : number;
  viewportHeight : number;
}

export {
  ProjectType,
  ProjectPropsType,
};
