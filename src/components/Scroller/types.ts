interface ScrollerPropsType {
  children? : any;
}

interface ScrollerStateType {
  currentSection : number;
  sectionCount : number;
  documentHeight : number;
  viewportHeight : number;
}

export { ScrollerPropsType, ScrollerStateType };
