import { Button } from "./ui/button";
import { Input } from "./ui/input";

const WaitlistForm = () => {
  return (
    <div className="mt-4 flex items-center">
      <Input
        className="rounded-e-none max-w-sms"
        placeholder="Your email address"
      />
      <a href="#">
        <Button className="rounded-s-none" variant={"default"}>
          Join the waitlist
        </Button>
      </a>
    </div>
  );
};

// WaitlistForm.displayName = "WaitlistForm";
export { WaitlistForm };
