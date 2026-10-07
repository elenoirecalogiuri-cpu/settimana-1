export function validate(data) {
  const errori = {};

  if (data.name.length < 2) {
    errori.name = "Il nome deve avere almeno 2 caratteri";
  }
  if (!data.email.includes("@")) {
    errori.email = "L'email deve contenere la @";
  }

  return errori;
}
