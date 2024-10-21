"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/solicitudes", data);
    console.log(res);

    if (res.status == 200) {
      router.push("/pages/login");
      router.refresh();
    }
  });

  return (
    <div className="bg-slate-400 min-h-screen flex items-center justify-center">
      <form className="grid grid-cols-2 gap-6" onSubmit={onSubmit}>
        <section className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="ingresar nombre"
            {...register("name", {
              required: {
                value: true,
                message: "campo requerido",
              },
              minLength: {
                value: 2,
                message: "El nombre debe terner minimo 2 caracteres",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}

          <label htmlFor="">Email</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "campo requerido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "campo requerido",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener minimo 6 digitos",
              },
            })}
          />

          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "campo requerido",
              },
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="plan">Select plan</label>
          <select {...register("plan")}>
            <option value="1">ORO</option>
            <option value="2">PLATA</option>
            <option value="3">DIAMANTE</option>
          </select>
          <div>
            <h3>Total a pagar</h3>
            {watch().plan == 1 && <span>100$</span>}
            {watch().plan == 2 && <span>150$</span>}
            {watch().plan == 3 && <span>200$</span>}
          </div>

          <input
            type="text"
            placeholder="Nro de referencia de pago"
            {...register("referencia_pago", { required: true })}
          />

          <input type="submit" />
        </section>

        {errors.confirmPassword && (
          <span className="text-red-600 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
};

export default Register;
