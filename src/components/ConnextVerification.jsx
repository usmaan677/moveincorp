function ConnextVerification() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Connext Branding */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connext</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          </div>
          
          {/* Success Message */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Email Verified Successfully! ✅
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for verifying your email address. Your account is now fully verified and ready to use.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Continue to Connext App
            </button>
            
            <button 
              onClick={() => window.history.back()} 
              className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you have any questions, please contact our support team.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/20 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default ConnextVerification;