import loginSchema from "./schema/loginSchema";
import { Formik, Field, Form } from "formik";
const Login = (props) => {
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                    // alert(JSON.stringify(values, null, 2));
                    if (
                        values.email === "admin@gmail.com" &&
                        values.password === "123456"
                    ) {
                        props.history.push("/dashboard");
                    } else {
                        console.log("Invalid");
                    }
                }}
                validationSchema={loginSchema}
            >
                {({ errors, touch }) => {
                    return (
                        <Form>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="email"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email Address
                                </label>
                                <div className="col-sm-10">
                                    <Field
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        type="email"
                                    />
                                    {errors.email ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="password"
                                    className="col-sm-2 col-form-label"
                                >
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <Field
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        type="password"
                                    />
                                    {errors.password ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default Login;
