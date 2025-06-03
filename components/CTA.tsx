"use client";
import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";

export default function CTA() {
  const calendarInfo = contactInfo.find(
    (info) => info.title === "Schedule a Meeting"
  );
  const emailInfo = contactInfo.find((info) => info.title === "Email");

  return (
    <div id="contact" className="container mx-auto py-12 md:py-16 px-4 sm:px-6">
      <Card className="w-full max-w-4xl mx-auto border-2 border-[#ff6a3d] shadow-md bg-black/40 rounded-[40px]">
        <CardContent className="p-5 sm:p-6 lg:p-10 w-full">
          <div className="flex flex-col text-center gap-5 sm:gap-6 items-center">
            <div>
              <Badge className="bg-[#ff6a3d]/20 text-[#ff6a3d] hover:bg-[#ff6a3d]/30">
                Get in Touch
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff6a3d] tracking-tighter max-w-lg">
                Try our platform today!
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-lg mx-auto">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button
                variant="outline"
                className="border-[#ff6a3d]/70 bg-transparent text-white hover:bg-[#ff6a3d]/10 gap-4"
                asChild
              >
                <a
                  href={calendarInfo?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button
                className="bg-[#ff6a3d] hover:bg-[#ff6a3d]/90 text-white gap-4"
                asChild
              >
                <a href={emailInfo?.href}>
                  Email us <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
