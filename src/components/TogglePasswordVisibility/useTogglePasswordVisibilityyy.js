import {useState} from 'react';

export const useTogglePasswordVisibilityyy = () => {
  // password will not be initially visible
  // set the initial value to true because this will be the value fo secureTextEntry prop
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [rightIcon1, setRightIcon1] = useState('eye-off-outline');

  // function that toggles password visibility on a TextInput component on a password field
  const handlePasswordVisibility1 = () => {
    if (rightIcon1 === 'eye-outline') {
      setRightIcon1('eye-off-outline');
      setPasswordVisibility1(!passwordVisibility1);
    } else if (rightIcon1 === 'eye-off-outline') {
      setRightIcon1('eye-outline');
      setPasswordVisibility1(!passwordVisibility1);
    }
  };

  return {
    passwordVisibility1,
    rightIcon1,
    handlePasswordVisibility1,
  };
};
