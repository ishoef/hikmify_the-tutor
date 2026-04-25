import LoginForm from "@/components/modules/auth/login-form";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
