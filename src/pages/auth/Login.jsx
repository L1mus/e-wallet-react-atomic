import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router";
import { AuthLayout } from "../../components/templates/AuthLayout";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import OauthButton from "../../components/atoms/OauthButton";
import iconPassword from "../../assets/icons/Password.svg";
import iconMail from "../../assets/icons/mail.svg";
import iconFacebook from "../../assets/icons/bx_bxl-facebook-circle.svg";
import iconGoogle from "../../assets/icons/flat-color-icons_google.svg";
import imgLogin from "../../assets/images/wallet.png";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../redux/slice/loginSlice";
import { toast } from "react-toastify";
import { OrbitProgress } from "react-loading-indicators";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const action = loginActions;
  const stateLogin = useSelector((state) => state.loginReducer);
  const [authError, setAuthError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (stateLogin.isLogin) {
      if (stateLogin.successMsg) {
        toast.success(stateLogin.successMsg, {
          autoClose: 1000,
        });
      }
      navigate("/");
    }
  }, [navigate, stateLogin.isLogin, stateLogin.successMsg]);

  const onSubmit = (data) => {
    setAuthError("");
    dispatch(action.loginUser(data));
    setTimeout(() => {
      if (stateLogin.error) {
        toast.error(stateLogin.error, {
          autoClose: 2000,
        });
      }
    }, 1500);
  };

  return (
    <>
      {stateLogin.isLoading ? (
        <div className="grid place-items-center min-h-screen">
          <OrbitProgress
            variant="disc"
            dense
            color="#2948FF"
            size="large"
            text="Loading..."
            textColor="#2948FF"
          />
        </div>
      ) : (
        <AuthLayout
          title="Hello Welcome Back 👋"
          subtitle="Fill out the form correctly or you can login with several option."
          imagePath={imgLogin}
        >
          <div className="flex flex-col gap-4 mb-6">
            <OauthButton icon={iconGoogle} text="Sign In With Google" />
            <OauthButton icon={iconFacebook} text="Sign In With Facebook" />
          </div>

          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-[#E8E8E8]" />
            <span className="px-4 text-[#A9A9A9] text-sm font-normal">Or</span>
            <div className="flex-1 h-px bg-[#E8E8E8]" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            <Input
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              icon={iconMail}
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />

            <div className="flex flex-col gap-2">
              <Input
                label="Password"
                type="password"
                placeholder="Enter Your Password"
                icon={iconPassword}
                {...register("password", { required: "Password is required" })}
                error={errors.password?.message}
              />
              <div className="flex justify-end">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {authError && (
              <span className="text-sm font-medium text-danger text-center">
                {authError}
              </span>
            )}

            <Button type="submit" isFullWidth={true}>
              Login
            </Button>
          </form>

          <div className="mt-8 text-center text-base">
            <span className="text-grey font-normal">Not Have An Account? </span>
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </div>
        </AuthLayout>
      )}
    </>
  );
};

export default Login;
