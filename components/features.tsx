import React from "react";
import { ShimmerButton } from "./shimmer";

type FeaturesProps = {};

export const Features = ({}: FeaturesProps) => {
  const features = [
    "🔐 Next-auth v5 (Auth.js)",
    "🚀 Next.js 14 with server actions",
    "🔑 Credentials Provider",
    "🌐 OAuth Provider (Social login with Google & GitHub)",
    "🔒 Forgot password functionality",
    "✉️ Email verification",
    "📱 Two factor verification (2FA)",
    "👥 User roles (Admin & User)",
    "🔓 Login component (Opens in redirect or modal)",
    "📝 Register component",
    "🤔 Forgot password component",
    "✅ Verification component",
    "⚠️ Error component",
    "🔘 Login button",
    "🚪 Logout button",
    "🚧 Role Gate",
    "🔍 Exploring next.js middleware",
    "📈 Extending & Exploring next-auth session",
    "🔄 Exploring next-auth callbacks",
    "👤 useCurrentUser hook",
    "🛂 useRole hook",
    "🧑 currentUser utility",
    "👮 currentRole utility",
    "🖥️ Example with server component",
    "💻 Example with client component",
    "👑 Render content for admins using RoleGate component",
    "🛡️ Protect API Routes for admins only",
    "🔐 Protect Server Actions for admins only",
    "📧 Change email with new verification in Settings page",
    "🔑 Change password with old password confirmation in Settings page",
    "🔔 Enable/disable two-factor auth in Settings page",
    "🔄 Change user role in Settings page (for development purposes only)",
  ];

  return (
    <>
      <div className="w-[90%] md:w-[80%]">
        <h2 className="text-4xl font-bold mt-20">Features</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {features.map((feature) => (
            <div className=" col-span-1" key={feature}>
              <ShimmerButton>{feature}</ShimmerButton>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
