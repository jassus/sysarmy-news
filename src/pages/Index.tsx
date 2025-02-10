
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideGlobe, LucideDatabase, LucideCode, LucideTestTube2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-4 md:p-8">
      {/* Email Container */}
      <div className="mx-auto max-w-[600px] bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-[#1A1F2C] p-6 text-center">
          <img 
            src="/lovable-uploads/0139e1e1-fc03-458e-a5aa-34cb53506be5.png" 
            alt="Sysarmy Logo"
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Tech News Digest
          </h1>
          <p className="text-gray-300">Latest updates in Infrastructure, Product, and Testing</p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Infrastructure News */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LucideDatabase className="h-5 w-5 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold text-gray-900">Infrastructure Updates</h2>
              </div>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <Badge className="mb-2 bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/20">Breaking News</Badge>
                <h3 className="text-lg font-medium mb-2">AWS Announces New Serverless Computing Features</h3>
                <p className="text-gray-600 mb-4">Amazon Web Services introduces revolutionary serverless capabilities, enabling faster deployment and reduced costs.</p>
                <Button variant="outline" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#9b87f5]/10">
                  Read More
                </Button>
              </Card>
            </div>

            {/* Product Development */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LucideCode className="h-5 w-5 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold text-gray-900">Product Development</h2>
              </div>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <Badge className="mb-2 bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/20">Latest Trends</Badge>
                <h3 className="text-lg font-medium mb-2">The Rise of AI-Powered Development Tools</h3>
                <p className="text-gray-600 mb-4">How artificial intelligence is revolutionizing the way developers write and review code.</p>
                <Button variant="outline" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#9b87f5]/10">
                  Read More
                </Button>
              </Card>
            </div>

            {/* Testing & QA */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LucideTestTube2 className="h-5 w-5 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold text-gray-900">Testing & QA</h2>
              </div>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <Badge className="mb-2 bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/20">Best Practices</Badge>
                <h3 className="text-lg font-medium mb-2">Modern Testing Frameworks Comparison</h3>
                <p className="text-gray-600 mb-4">An in-depth analysis of the most popular testing frameworks in 2024.</p>
                <Button variant="outline" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#9b87f5]/10">
                  Read More
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <LucideGlobe className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            You received this email because you subscribed to Sysarmy's tech updates.
          </p>
          <div className="mt-4">
            <Button variant="link" className="text-sm text-gray-500 hover:text-[#9b87f5]">
              Unsubscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
