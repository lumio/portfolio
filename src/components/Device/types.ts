interface DeviceElementPropsType {
  addressBar : string;
  element : string;
}

interface DevicePropsType {
  device : DeviceElementPropsType;
}

export {
  DeviceElementPropsType,
  DevicePropsType,
};
