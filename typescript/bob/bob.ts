export function hey(message: string): string {
  let response: string;
  let regex = message.replace(/[^a-z?]/gi, "");
  switch (true) {
    case message[message.length - 1] === "?" &&
      regex.length > 1 &&
      regex === regex.toUpperCase():
      response = "Calm down, I know what I'm doing!";
      break;
    case regex[regex.length - 1] === "?":
      response = "Sure.";
      break;
    case message.replace(/\s/g, "") === "":
      response = "Fine. Be that way!";
      break;
    case regex === regex.toUpperCase() && regex.length > 1:
      response = "Whoa, chill out!";
      break;
    default:
      response = "Whatever.";
  }
  return response;
}
