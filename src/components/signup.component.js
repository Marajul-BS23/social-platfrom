import SignInSchema from "./schema/SignInSchema";
import { Formik, Field, Form } from "formik";
const SignUp = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    dob: "",
                    sex: "",
                    confirmPassword: "",
                    accept: false,
                }}
                onSubmit={(values) => {
                    console.log(values);
                    // alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={SignInSchema}
            >
                {({ errors }) => {
                    return (
                        <Form>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="firstName"
                                        className="col-form-label"
                                    >
                                        First Name
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                    />
                                    {errors.firstName ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.firstName}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="lastName"
                                        className="col-form-label"
                                    >
                                        Last Name
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                    />
                                    {errors.lastName ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.lastName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="email"
                                        className="col-form-label"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                    />
                                    {errors.email ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="password"
                                        className="col-form-label"
                                    >
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                    />
                                    {errors.password ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="col-form-label"
                                    >
                                        Confirm Password
                                    </label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                    />
                                    {errors.confirmPassword ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.confirmPassword}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label htmlFor="sex" className="form-label">
                                        Sex
                                    </label>
                                    <Field
                                        id="sex"
                                        name="sex"
                                        className="form-select"
                                        as="select"
                                        defaultValue={"choose"}
                                    >
                                        <option value="choose">
                                            Choose...
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    {errors.sex ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.sex}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label htmlFor="dob" className="form-label">
                                        Date of Birth
                                    </label>
                                    <Field
                                        id="dob"
                                        name="dob"
                                        className="form-select"
                                        type="date"
                                    />
                                    {errors.dob ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.dob}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="accept"
                                    >
                                        Accept Terms and Conditions
                                    </label>
                                    <Field
                                        className="form-check-input"
                                        type="checkbox"
                                        name="accept"
                                        id="accept"
                                    />
                                </div>
                            </div>

                            <button
                                className="btn btn-primary m-2"
                                type="submit"
                            >
                                Register
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default SignUp;
