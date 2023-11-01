import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center sm:px-6 lg:px-8 bg-gray-50">
      {/* <h1 className="text-mainColor text-3xl">Welcome to Page-1</h1>; */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Image
          alt="logo"
          height="100"
          width="100"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
      </div>
      <h2 className="text-gray-700 mt-6 text-center text-4xl tracking-tight ">
        Welcome To Mes-stranger ..!
      </h2>
      <AuthForm />
    </div>
  );
}
