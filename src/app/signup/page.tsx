"use client"
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-primary/5 to-secondary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-primary">Gyanlab Tutorial</h1>
              <p className="text-xs text-primary/70">Wadala, Mumbai</p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-primary">Create Account</h2>
          <p className="mt-2 text-sm text-primary/70">
            Join thousands of students on their learning journey
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-primary dark:text-white">
                  First Name
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="pl-10"
                  />
                  <User className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName" className="text-primary dark:text-white">
                  Last Name
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="pl-10"
                  />
                  <User className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-primary dark:text-white">
                Email Address
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                />
                <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-primary dark:text-white">
                Phone Number
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10"
                />
                <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-primary dark:text-white">
                Password
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                />
                <Lock className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-primary dark:text-white">
                Confirm Password
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 pr-10"
                />
                <Lock className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-primary/70">
                I agree to the{" "}
                <Link href="/terms" className="text-secondary hover:text-secondary/80">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-secondary hover:text-secondary/80">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full flex items-center justify-center space-x-2">
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-primary/70">
              Already have an account?{" "}
              <Link href="/signin" className="text-secondary hover:text-secondary/80 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
