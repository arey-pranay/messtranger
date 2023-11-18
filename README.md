# messtranger

## using next.js

to have your entry page in a separate folder named (site) and create a page.tsx inside it. You can then remove the page.tsx of App folder.

created a logo in canva and assigned the color of the logo as the mainColor in tailwind.config.ts.
theme: {
extend: {
colors: {
mainColor: "#620A64",
},
},
},

inserted the logo using the Image from next/Image
<Image alt="logo" height="48" width="48" className="mx-auto w-auto" src= "/images/logo.png"/>

Using type specifications in authorization or authorizing or authentication form
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
const [variant, setVariant] = useState<Variant>("LOGIN");
return <div>AuthForm</div>;
};

for input import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
label: string;
id: string;
type?: string;
required?: boolean;
register: UseFormRegister<FieldValues>;
errors: FieldErrors;
disabled?: boolean;
}
interface is used to define the datatype for objects in typescript

and then we can use this particular type definition in a component parameter
const Input: React.FC<InputProps> = ({
label,
id,
type,
required,
register,
errors,
disabled,
}) => {
return <div>Input</div>;
};

using tailwindcss forms:
in the tailwind.config.js plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
https://github.com/tailwindlabs/tailwindcss-forms
<input
id={id}
type={type}
autoComplete={id}
disabled={disabled}
{...register(id, { required })}
className={clsx(
`form-input
            block 
            w-full
            rounded-md
            py-1.5 
          text-gray-900
            shadow-sm 
            ring-1 ring-inset ring-gray-300 
            placeholder::text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-sky-600 
            sm:text-sm sm:leading-6`,
errors[id] && "focus:ring-rose-500",
disabled && "opacity-50 cursor-default"
)}
/>

using clsx and twMerge
https://korayguler.medium.com/how-to-merge-react-and-tailwind-css-class-names-f5faeb10ed24

using tailwind prettier..
https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
