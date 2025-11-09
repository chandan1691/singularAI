import { Card } from "./ui/card";

interface ComponentDemoProps {
  componentName: string;
  useCase: string;
}

export function ComponentDemo({ componentName, useCase }: ComponentDemoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-900 mb-2">{componentName}</h3>
        <p className="text-gray-500">{useCase}</p>
      </div>
      
      <Card className="p-12 flex items-center justify-center min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-300">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-600">Component preview placeholder</p>
            <p className="text-gray-400 mt-1">
              {componentName} - {useCase}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
