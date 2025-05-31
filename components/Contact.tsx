"use client";
import { PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contactInfo } from "@/lib/constants";

export default function Contact() {
  const calendarInfo = contactInfo.find(
    (info) => info.title === "Schedule a Meeting"
  );
  const emailInfo = contactInfo.find((info) => info.title === "Email");

  return (
    <div id="contact" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get in Touch</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Try our platform today!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline" asChild>
              <a
                href={calendarInfo?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jump on a call <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button className="gap-4" asChild>
              <a href={emailInfo?.href}>
                Email us <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
