"use client";

import Button from "@/app/components/Button";

function MessageBird() {
  const handleClick = async () => {
    const response = await fetch("/api/messagebird", {
      method: "POST",
    });

    console.log(response);
  };

  return <Button title="Send email with MessageBird" onClick={handleClick} />;
}

export default MessageBird;
