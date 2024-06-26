"use client";

import { joinWaitlist } from "@/lib/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { PropsWithChildren, useEffect } from "react";
import { toast } from "sonner";

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
      toast.error("Event has not been created");
    } else {
      toast.success("You have successfully subscribed.");
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
      className="absolute right-1"
      variant={"default"}
      disabled={pending}
    >
      {children}
    </Button>
  );
}
