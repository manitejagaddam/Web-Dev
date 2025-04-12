import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button.tsx";

export default function LoanApplicationForm() {
  const { register, handleSubmit, watch } = useForm();
  const [step, setStep] = useState(1);
  
  const onSubmit = (data) => {
    console.log(data);
    alert("Application submitted successfully!");
  };
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Loan Application</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 1: Personal Information</h3>
            <input {...register("fullName")} placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
            <input {...register("email")} placeholder="Email" type="email" className="w-full p-2 border rounded mb-2" />
            <input {...register("phone")} placeholder="Phone Number" type="tel" className="w-full p-2 border rounded mb-2" />
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 2: Loan Details</h3>
            <input {...register("loanAmount")} placeholder="Loan Amount" type="number" className="w-full p-2 border rounded mb-2" />
            <select {...register("loanType")} className="w-full p-2 border rounded mb-2">
              <option value="home">Home Loan</option>
              <option value="car">Car Loan</option>
              <option value="personal">Personal Loan</option>
            </select>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Financial Information</h3>
            <input {...register("income")} placeholder="Annual Income" type="number" className="w-full p-2 border rounded mb-2" />
            <input {...register("creditScore")} placeholder="Credit Score" type="number" className="w-full p-2 border rounded mb-2" />
          </div>
        )}
        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Review & Submit</h3>
            <p className="mb-2">Please review your details before submitting.</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <Button type="button" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step < 4 ? (
            <Button type="button" onClick={() => setStep(step + 1)}>
              Next
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </div>
  );
}
