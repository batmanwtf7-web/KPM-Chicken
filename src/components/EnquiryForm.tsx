import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
    state: 'Tamil Nadu',
    preferredLocation: '',
    availableSpace: 'Roadside / High-footfall Stall Spot (8×4 ft)',
    franchisePackage: '8 × 4 Premium Cart Franchise',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.city.trim()) newErrors.city = 'City/Town is required.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello KPM Fried Chicken Management,%0A%0AI am submitting an enquiry for the 8×4 Premium Cart Franchise:%0A- Name: ${formData.fullName || 'Prospective Partner'}%0A- Phone: ${formData.phone || 'Provided via WhatsApp'}%0A- City: ${formData.city || 'Tamil Nadu / India'}%0A- Location Preference: ${formData.preferredLocation || 'Roadside / Market'}%0A%0APlease share current franchise package details and investment.`;
    window.open(`https://wa.me/916369998326?text=${message}`, '_blank');
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] relative border-t border-neutral-800">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>PARTNERSHIP APPLICATION</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            FRANCHISE ENQUIRY
          </h2>

          <p className="mt-2 sm:mt-3 text-neutral-300 text-xs sm:text-base max-w-xl mx-auto">
            Take the first step toward launching your KPM Fried Chicken 8 × 4 cart. Fill out the application below for direct management consultation.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-5 sm:p-10 shadow-2xl relative">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-royal font-bold text-white">
                Application Successfully Registered!
              </h3>
              <p className="text-neutral-300 max-w-md mx-auto text-xs sm:text-sm">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. The KPM management team will evaluate your target location in <strong className="text-amber-400">{formData.city}</strong> and call you on <strong className="text-white">{formData.phone}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="min-h-[46px] w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Immediate WhatsApp Message</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="min-h-[46px] w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-300 transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your legal full name"
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="WhatsApp mobile number"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Target City / Town <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Salem, Erode, Tirupur, etc."
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.city ? 'border-red-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.city && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Tamil Nadu"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Franchise Package
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="8 × 4 PREMIUM CART (18 Inclusions)"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/80 border border-amber-500/40 text-xs sm:text-sm text-amber-300 font-semibold cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Available Space / Spot
                  </label>
                  <select
                    value={formData.availableSpace}
                    onChange={(e) => setFormData({ ...formData, availableSpace: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Roadside / High-footfall Stall Spot (8×4 ft)">Roadside Stall Spot (8×4 ft)</option>
                    <option value="Commercial Complex / Mall Front">Commercial Complex Front</option>
                    <option value="Near College / School Campus">Near College / Campus</option>
                    <option value="Cinema Theater Entrance Area">Cinema Theater Front</option>
                    <option value="Looking for Location Guidance">Seeking Location Guidance from KPM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Proposed Street / Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={formData.preferredLocation}
                  onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                  placeholder="e.g. Near New Bus Stand, Gandhi Road, etc."
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any questions regarding cart fabrication, timeline, or spice supply..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] flex-1 py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <span>SUBMIT FRANCHISE ENQUIRY</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="min-h-[48px] sm:w-auto py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP KPM</span>
                </button>
              </div>

              <div className="text-center pt-1 text-[10px] sm:text-[11px] text-neutral-500">
                🔒 Your contact details are kept strictly confidential for official franchise evaluation.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
