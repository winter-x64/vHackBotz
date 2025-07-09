"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cta } from "@/lib/constants";

export default function CTA() {
  return (
    <div
      id="contact"
      className="container mx-auto py-16 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 size-64 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 size-80 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="animate-[fade-in_0.8s_ease-out]">
        <Card className="w-full max-w-4xl mx-auto border border-[#ff6a3d]/30 shadow-2xl bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a3d]/5 via-orange-600/5 to-amber-600/5 opacity-50" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6a3d] via-orange-500 to-amber-500" />

          <CardContent className="p-8 sm:p-10 lg:p-12 w-full relative z-10">
            <div className="flex flex-col text-center gap-7 sm:gap-8 items-center">
              <div className="transition duration-300 hover:scale-105">
                <Badge className="bg-gradient-to-r from-[#ff6a3d] to-orange-500 text-white px-4 py-1.5 text-sm font-medium rounded-full shadow-xl hover:shadow-[#ff6a3d]/20 border-0">
                  <Sparkles className="size-3.5 mr-2" /> {cta.badge}
                </Badge>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a3d] to-amber-400 tracking-tight max-w-xl leading-tight">
                  {cta.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto font-normal">
                  {cta.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full max-w-md">
                <div className="flex-1 transition duration-300 hover:scale-105 active:scale-95">
                  <Button
                    className="w-full bg-gradient-to-r from-[#ff6a3d] to-orange-500 hover:from-[#ff6a3d]/90 hover:to-orange-600 text-white gap-3 py-6 rounded-xl font-medium text-base group shadow-xl shadow-[#ff6a3d]/20 border-0 transition duration-300"
                    asChild
                  >
                    <Link
                      href={cta.primaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{cta.primaryButton.text}</span>
                      <PhoneCall className="size-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex-1 transition duration-300 hover:scale-105 active:scale-95">
                  <Button
                    variant="outline"
                    className="w-full border border-[#ff6a3d]/30 bg-black/30 text-white hover:bg-[#ff6a3d]/10 gap-3 py-6 rounded-xl font-medium text-base group transition duration-300"
                    asChild
                  >
                    <Link href={cta.secondaryButton.href}>
                      <span>{cta.secondaryButton.text}</span>
                      <Mail className="size-4 group-hover:translate-x-1 transition duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
