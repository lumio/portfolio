interface TitleScreenType {
  title : string;
  subtitle? : string;
  mail? : string;
  github? : string;
  repository? : string;
}

interface TitleScreenPropsType {
  data : TitleScreenType;
}

export { TitleScreenPropsType };
