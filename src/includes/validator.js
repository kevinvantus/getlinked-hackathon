import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  email,
  length,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("email", email);
    defineRule("length", length);
    defineRule("min_value", minValue);
    defineRule("max_value", maxValue);
    defineRule("alpha_spaces", alphaSpaces);
  },
};
