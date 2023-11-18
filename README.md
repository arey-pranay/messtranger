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
