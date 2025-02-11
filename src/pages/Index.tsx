import React from "react";
import { getMockNews } from "@/services/mockNews";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideGlobe, LucideDatabase, LucideCode, LucideTestTube, LucideGitBranch, LucideTerminal, LucideShieldAlert, LucideCloud } from "lucide-react";

const Index = () => {
  const news = getMockNews();

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Email Container */}
      <div className="mx-auto max-w-[800px] bg-[#000000] rounded-xl shadow-lg overflow-hidden border border-white/10">
        {/* Header */}
        <div className="bg-[#000000] p-6 text-center border-b border-white/10">
          <img 
            src="/lovable-uploads/079be5a7-51c4-4d5e-acef-88fbda687593.png" 
            alt="Sysarmy Logo" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">
            Firmware Friday
          </h1>
          <p className="text-gray-400 font-mono">¿Listos para el update?<br />Actualizá tu stack en menos de 30''</p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Infrastructure News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideDatabase className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Infrastructure</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans leading-tight">{news.infrastructure.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-2">{news.infrastructure.description}</p>
            </Card>

            {/* AI News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideCode className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">AI</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans leading-tight">{news.ai.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-2">{news.ai.description}</p>
            </Card>

            {/* Testing News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideTestTube className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Testing</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">Testing Frameworks</h3>
              <p className="text-gray-400 font-mono">Popular testing frameworks comparison for 2024.</p>
            </Card>

            {/* DevOps News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideGitBranch className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">DevOps</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans leading-tight">{news.devops.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-2">{news.devops.description}</p>
            </Card>

            {/* Security News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideShieldAlert className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Security</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans leading-tight">{news.security.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-2">{news.security.description}</p>
            </Card>

            {/* Cloud News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideCloud className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Cloud</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans leading-tight">{news.cloud.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-2">{news.cloud.description}</p>
            </Card>
          </div>
        </div>

        {/* New Comic Section */}
        <div className="p-6 border-t border-white/10">
          <div className="text-center mb-4">
            <Badge className="bg-white/10 text-white hover:bg-white/20">Comic del Día</Badge>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <img 
              src="/images/Jan-24-Not-if-but-when.png" 
              alt="Comic del Día - Work Chronicles" 
              className="mx-auto max-w-full rounded-lg"
            />
            <p className="text-center text-sm text-gray-400 mt-4 font-mono">
              Fuente: <a href="https://workchronicles.substack.com" className="text-blue-400 hover:text-blue-300">Work Chronicles</a>
            </p>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-[#8B5CF6] p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-sans">
            ¿Querés más contenido tecnológico?
          </h2>
          <p className="text-white font-mono mb-6">
            Seguinos en nuestras redes sociales para estar al día con las últimas novedades
          </p>
          <button className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Seguir a Sysarmy
          </button>
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-6 text-center border-t border-white/10">
          <p className="text-sm text-gray-400 font-mono">
            You received this email because you subscribed to Sysarmy's tech updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
