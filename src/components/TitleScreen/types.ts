interface TitleScreenType {
  title : string;
  subtitle? : string;
  mail? : string;
  github? : string;
}

interface TitleScreenPropsType {
  data : TitleScreenType;
}

export { TitleScreenPropsType };
