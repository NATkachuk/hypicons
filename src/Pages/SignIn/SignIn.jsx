import "./SignIn.scss"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function SignIn() {
    const schema = yup.object().shape({
        username: yup.string().required().min(3).max(20),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const OnSubmit = (data) => console.log(data);
  return (
    <form className="form" onSubmit={handleSubmit(OnSubmit)}>
        <input type="text" className="form__input" placeholder='Username' {...register("username")} />
        <p className="form__errors">{errors.username?.message}</p>
        <input type="text" className="form__input" placeholder='Enter your email' {...register("email")} />
        <p className="form__errors">{errors.email?.message}</p>
        <input type="password" className="form__input" placeholder='Password' {...register("password")} />
        <p className="form__errors">{errors.password?.message}</p>
        <button className="form__btn">Sign In</button>
    </form>
  )
}

export default SignIn