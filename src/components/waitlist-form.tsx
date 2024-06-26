"use client";

import { joinWaitlist } from "@/lib/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { PropsWithChildren, useEffect } from "react";
import { toast } from "sonner";
import { SvgSpinnersBarsRotateFade } from "./icons/spinner-bar";

const initialState = {
  email: "",
};

const WaitlistForm = ({
  actionLabel = "Join the waitlist",
}: {
  actionLabel?: string;
}) => {
  const [state, formAction] = useFormState(joinWaitlist, initialState);

  useEffect(() => {
    if (state.error) {
      toast.error(
        "Error occured. It's me, not you. Please notify https://twitter.com/@joseph_ajibodu"
      );
    } else {
      toast.success(
        "Success! Now check your email to confirm your subscription."
      );
    }
  }, [state]);

  return (
    <div className="w-full">
      <form action={formAction} className="mt-4 flex items-center relative">
        <Input
          className="max-w-sms h-12"
          placeholder="Your email address"
          required
          name="email"
          type="email"
        />
        <SubmitButton>{actionLabel}</SubmitButton>
      </form>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </div>
  );
};

// WaitlistForm.displayName = "WaitlistForm";
export { WaitlistForm };

function SubmitButton({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="absolute right-1 w-32"
      variant={"default"}
      disabled={pending}
    >
      {pending ? <SvgSpinnersBarsRotateFade /> : children}
    </Button>
  );
}
