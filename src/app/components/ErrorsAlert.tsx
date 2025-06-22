import React from "react";


const ErrorsAlert = ({ errors }: { errors: string[] }) => {
  return (
    <div className="bg-danger/20 border border-danger/20 text-sm text-danger/80 rounded-lg p-4" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
        </div>
        <div className="ms-4">
          {errors.length > 0 && (
            <h3 className="text-sm font-semibold text-danger/80 dark:text-danger/80">
              Please check the following errors:
            </h3>
          )}

          <div className="mt-2 text-sm text-red-700 dark:text-red-400">
            <ul className="list-disc space-y-1 ps-5">
              {/* Map through the errors array and display each error message */}

              {errors.map((error, index) => (
                <li key={index}>{error?.message}</li>

              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ErrorsAlert;
