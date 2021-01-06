//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const text = message.trim();
  if (/[a-z]/.test(text)) {
    return text.slice(-1) === "?" ? "Sure." : "Whatever.";
  } else if (/[A-Z]/.test(text)) {
    return text.slice(-1) === "?" ? "Calm down, I know what I'm doing!" : "Whoa, chill out!";
  } else if (/[ -~]/.test(text)) {
    return text.slice(-1) === "?" ? "Sure." : "Whatever.";
  } else {
    return "Fine. Be that way!";
  }
};
