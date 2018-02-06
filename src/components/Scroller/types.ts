interface ScrollerPropsType {
  children? : any;
}

interface ScrollerStateType {
  documentHeight : number;
  viewportHeight : number;
  sectionCount : number;
  currentSection : number;
}

export { ScrollerPropsType, ScrollerStateType };
