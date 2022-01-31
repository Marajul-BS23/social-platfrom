import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .min(2, "Too Short!")
        .email("must be a valid email")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

export default loginSchema;
