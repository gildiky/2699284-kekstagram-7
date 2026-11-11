const checkLength = (string, maxSymbols) => string.length <= maxSymbols;
checkLength('yesterday', 5);

const checkPalindrome = (string) => {
  const stringRegister = string.toLowerCase().replaceAll(' ', '');
  let invertedString = '';

  for (let i = stringRegister.length - 1; i >= 0; i--) {
    invertedString += stringRegister[i];
  }

  return invertedString === stringRegister;
};
checkPalindrome('уж истово вот сижу');


const convertTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

// eslint-disable-next-line no-unused-vars
const checkMeetingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartMinutes = convertTimeToMinutes(workStart);
  const workEndMinutes = convertTimeToMinutes(workEnd);
  const meetingStartMinutes = convertTimeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};
