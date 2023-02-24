const messages = {
  required: "This field is required",
  minLength: (min) => `This filed must contain more than ${min} chars`,
  maxLength: (max) => `This filed must contain less than ${max} chars`,
};

const rules = {
  required: (val) => (val ? "pass" : messages.required),
  minLength: (val, min) =>
    val.length < min ? messages.minLength(min) : "pass",
  maxLength: (val, max) =>
    val.length > max ? messages.maxLength(max) : "pass",
};

const validator = {
  title: (val, min, max) => {
    return [
      rules.required(val),
      rules.minLength(val, min),
      rules.maxLength(val, max),
    ];
  },
  body: (val, min, max) => {
    return [
      rules.required(val),
      rules.minLength(val, min),
      rules.maxLength(val, max),
    ];
  },
};

const validate = (title, body) => {
  const errors = { title: "", body: "" };
  errors.title = validator.title(title, 7, 70).find((x) => x !== "pass") || "";
  errors.body = validator.body(body, 7, 200).find((x) => x !== "pass") || "";

  return { ...errors };
};

export default validate;
