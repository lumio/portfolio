interface DeviceElementPropsType {
  addressBar : string;
  element : string;
}

interface DevicePropsType {
  device : DeviceElementPropsType;
  scrollPercent : number;
}

export {
  DeviceElementPropsType,
  DevicePropsType,
};
