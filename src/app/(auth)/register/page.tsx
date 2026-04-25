import RegisterForm from "@/components/modules/auth/register-form";


export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
