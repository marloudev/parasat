import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import Input from "../_components/input";
import Button from "../_components/button";

export default function LoginPage({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login.auth'), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="w-screen h-screen">
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96 ">
                        <div>
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form
                                     onSubmit={submit}
                                    className="space-y-6"
                                >
                                    {status && (
                                        <div className="mb-4 font-medium text-sm text-green-600">
                                            {status}
                                        </div>
                                    )}
                                    <Input
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        value={data.email}
                                        // required={error?.fname ? true : false}
                                        name="email"
                                        label="Email"
                                        type="text"
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                    <Input
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        value={data.password}
                                        // required={error?.fname ? true : false}
                                        name="password"
                                        label="Password"
                                        type="password"
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                    {/* <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                                htmlFor="remember-me"
                                                className="ml-3 block text-sm leading-6 text-gray-700"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a
                                                href="#"
                                                className="font-semibold text-blue-600 hover:text-blue-500"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div> */}

                                    <div className="flex w-full ">
                                    <Button
                                        disabled={processing}
                                        variant="info"
                                        type="submit"
                                        className="w-full flex items-center justify-between "
                                    >
                                        <div className="flex justify-center items-center gap-2 w-full">
                                            <span>Submit</span>
                                        </div>
                                    </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        alt=""
                        src="/images/para-fiber.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
