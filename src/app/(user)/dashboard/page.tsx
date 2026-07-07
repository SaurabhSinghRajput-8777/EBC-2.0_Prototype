"use client";

import { Container } from "@/shared/ui/Container";
import { Badge } from "@/shared/ui/Badge";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { Activity, Mic, Video, Dna, FileText, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans">

      {/* Dashboard Header */}
      <header className="bg-white border-b border-[#EDEDED] sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#131313] text-white font-serif text-lg font-medium">
                LB
              </div>
              <span className="text-base font-semibold text-[#0A0C10] leading-none tracking-tight">LifeBack</span>
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="muted" className="hidden sm:inline-flex">
                <ShieldCheck size={14} className="mr-1.5" /> Secure Session
              </Badge>
              <div className="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center font-medium text-[#0A0C10] border border-[#EDEDED]">
                JD
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main className="py-12 pb-24">
        <Container>
          {/* Welcome Hero */}
          <MotionWrapper variant="slideUp" delay={0.1}>
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-serif text-[#0A0C10] mb-3">Good morning, John.</h1>
              <p className="text-lg text-[#4A5568]">Your personalized healthcare guidance and screening platform.</p>
            </div>
          </MotionWrapper>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Column (Primary Content) */}
            <div className="lg:col-span-2 space-y-8">

              {/* Detection Hub */}
              <MotionWrapper variant="slideUp" delay={0.2}>
                <section>
                  <h2 className="text-xl font-semibold text-[#0A0C10] mb-6 flex items-center gap-2">
                    <Activity size={20} className="text-[#8931C4]" />
                    Detection Hub
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="bg-white p-6 rounded-[24px] border border-[#EDEDED] shadow-sm flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F7F9FC] flex items-center justify-center">
                          <Mic size={24} className="text-[#0A0C10]" />
                        </div>
                        <Badge variant="white" className="border border-green-200 text-green-700 bg-green-50">Ready</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A0C10] mb-2">Voice Biomarkers</h3>
                      <p className="text-sm text-[#4A5568] mb-6 flex-1">Record a short vocal sample for acoustic analysis.</p>
                      <Button className="w-full justify-between group">
                        Start Analysis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="bg-white p-6 rounded-[24px] border border-[#EDEDED] shadow-sm flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F7F9FC] flex items-center justify-center">
                          <Video size={24} className="text-[#0A0C10]" />
                        </div>
                        <Badge variant="muted">Research Phase</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A0C10] mb-2">Behavioral Video</h3>
                      <p className="text-sm text-[#4A5568] mb-6 flex-1">Facial affect and psychomotor tracking.</p>
                      <Button variant="outline" className="w-full" disabled>
                        Currently Unavailable
                      </Button>
                    </div>

                    <div className="bg-white p-6 rounded-[24px] border border-[#EDEDED] shadow-sm flex flex-col h-full sm:col-span-2">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F7F9FC] flex items-center justify-center">
                          <Dna size={24} className="text-[#0A0C10]" />
                        </div>
                        <Badge variant="muted">Coming Soon</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A0C10] mb-2">Genomics Integration</h3>
                      <p className="text-sm text-[#4A5568] mb-6">Polygenic risk scoring integrated with your behavioral telemetry for holistic psychiatric risk stratification.</p>
                      <Button variant="outline" className="w-full" disabled>
                        Under Clinical Validation
                      </Button>
                    </div>

                  </div>
                </section>
              </MotionWrapper>

              {/* Assessment History */}
              <MotionWrapper variant="slideUp" delay={0.3}>
                <section>
                  <h2 className="text-xl font-semibold text-[#0A0C10] mb-6 flex items-center gap-2">
                    <FileText size={20} className="text-[#0A0C10]" />
                    Assessment History
                  </h2>
                  <div className="bg-white p-8 rounded-[24px] border border-[#EDEDED] shadow-sm text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F7F9FC] flex items-center justify-center mx-auto mb-4">
                      <FileText size={24} className="text-[#4A5568]/50" />
                    </div>
                    <h3 className="text-[#0A0C10] font-medium mb-1">No assessments yet</h3>
                    <p className="text-sm text-[#4A5568]">Your screening history and clinical reports will appear here securely.</p>
                  </div>
                </section>
              </MotionWrapper>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">

              {/* Crisis Resources (Always Visible) */}
              <MotionWrapper variant="slideUp" delay={0.4}>
                <section className="bg-[#131313] rounded-[24px] p-6 text-white shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Phone size={18} className="text-red-400" />
                    Immediate Support
                  </h2>
                  <p className="text-sm text-white/70 mb-6">If you are in crisis or experiencing a psychiatric emergency, please reach out immediately.</p>

                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="font-semibold text-sm mb-1">NIMHANS Helpline</div>
                      <div className="text-lg font-mono tracking-wide text-red-300">080-4611-0007</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="font-semibold text-sm mb-1">iCall (TISS)</div>
                      <div className="text-lg font-mono tracking-wide">9152987821</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="font-semibold text-sm mb-1">Vandrevala Foundation</div>
                      <div className="text-lg font-mono tracking-wide">9999-666-555</div>
                    </div>
                  </div>
                </section>
              </MotionWrapper>

              {/* Mental Health Awareness Hub */}
              <MotionWrapper variant="slideUp" delay={0.5}>
                <section>
                  <h2 className="text-lg font-semibold text-[#0A0C10] mb-4">Awareness Hub</h2>
                  <div className="space-y-3">
                    {[
                      "Understanding Depression",
                      "Early Warning Signs",
                      "Stress vs. Clinical Depression",
                      "When To Seek Professional Help",
                      "Supporting Loved Ones"
                    ].map((topic) => (
                      <div key={topic} className="bg-white p-4 rounded-xl border border-[#EDEDED] shadow-sm hover:border-[#0A0C10] transition-colors cursor-pointer group flex justify-between items-center">
                        <span className="text-sm font-medium text-[#4A5568] group-hover:text-[#0A0C10] transition-colors">{topic}</span>
                        <ArrowRight size={14} className="text-[#4A5568]/50 group-hover:text-[#0A0C10]" />
                      </div>
                    ))}
                  </div>
                </section>
              </MotionWrapper>

            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
