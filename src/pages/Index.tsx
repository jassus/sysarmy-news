
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideGlobe, LucideDatabase, LucideCode, LucideTestTube2, LucideGitBranch, LucideTerminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Email Container */}
      <div className="mx-auto max-w-[800px] bg-[#000000] rounded-xl shadow-lg overflow-hidden border border-white/10">
        {/* Header */}
        <div className="bg-[#000000] p-6 text-center border-b border-white/10">
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
            <div className="aspect-square bg-white"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">
            Tech News Digest
          </h1>
          <p className="text-gray-400 font-mono">Latest updates in Infrastructure, Product, and Testing</p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Infrastructure News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideDatabase className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Breaking News</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">AWS Serverless Updates</h3>
              <p className="text-gray-400 font-mono">New serverless features enable faster deployment and reduced costs.</p>
            </Card>

            {/* Product Development */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideCode className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Latest Trends</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">AI Development Tools</h3>
              <p className="text-gray-400 font-mono">AI revolutionizes code writing and review processes.</p>
            </Card>

            {/* Testing & QA */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideTestTube2 className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Best Practices</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">Testing Frameworks</h3>
              <p className="text-gray-400 font-mono">Popular testing frameworks comparison for 2024.</p>
            </Card>

            {/* DevOps Updates */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideGitBranch className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">DevOps</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">CI/CD Pipeline Trends</h3>
              <p className="text-gray-400 font-mono">Latest innovations in continuous integration practices.</p>
            </Card>

            {/* Security Updates */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideTerminal className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Security</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">Zero Trust Security</h3>
              <p className="text-gray-400 font-mono">Implementing modern security architectures.</p>
            </Card>

            {/* Cloud News */}
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <LucideGlobe className="h-5 w-5 text-white" />
                <Badge className="bg-white/10 text-white hover:bg-white/20">Cloud</Badge>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white font-sans">Multi-Cloud Strategies</h3>
              <p className="text-gray-400 font-mono">Best practices for managing multi-cloud environments.</p>
            </Card>
          </div>
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
