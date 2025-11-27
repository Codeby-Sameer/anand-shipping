import React, { useState } from "react";
import { motion } from "framer-motion";

const mockShipments = [
    {
        trackingId: "ANAND123456",
        status: "Out for Delivery",
        service: "Premium Express",
        origin: "Hyderabad, IN",
        destination: "Mumbai, IN",
        eta: "26 Nov 2025",
        lastUpdated: "Today, 09:45 AM",
        history: [
            { label: "Order Created", time: "23 Nov 2025, 10:12 AM", location: "Online" },
            { label: "Picked Up", time: "23 Nov 2025, 04:30 PM", location: "Hyderabad Hub" },
            { label: "In Transit", time: "24 Nov 2025, 11:10 PM", location: "On Route" },
            { label: "Arrived at Destination Hub", time: "25 Nov 2025, 08:05 PM", location: "Mumbai Hub" },
            { label: "Out for Delivery", time: "26 Nov 2025, 09:30 AM", location: "Mumbai" },
        ],
    },
    {
        trackingId: "ANAND987654",
        status: "Delivered",
        service: "Secure Priority",
        origin: "Bangalore, IN",
        destination: "Delhi, IN",
        eta: "Delivered",
        lastUpdated: "25 Nov 2025, 05:15 PM",
        history: [
            { label: "Order Created", time: "22 Nov 2025, 02:05 PM", location: "Online" },
            { label: "Picked Up", time: "22 Nov 2025, 06:45 PM", location: "Bangalore Hub" },
            { label: "In Transit", time: "23 Nov 2025, 11:50 PM", location: "On Route" },
            { label: "Arrived at Destination Hub", time: "24 Nov 2025, 03:20 PM", location: "Delhi Hub" },
            { label: "Out for Delivery", time: "25 Nov 2025, 10:00 AM", location: "Delhi" },
            { label: "Delivered", time: "25 Nov 2025, 05:15 PM", location: "Delhi" },
        ],
    },
];

const statusSteps = [
    "Order Created",
    "Picked Up",
    "In Transit",
    "Arrived at Destination Hub",
    "Out for Delivery",
    "Delivered",
];

const TrackingPage = () => {
    const [trackingId, setTrackingId] = useState("");
    const [result, setResult] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearched(true);

        const found = mockShipments.find(
            (s) => s.trackingId.toLowerCase() === trackingId.trim().toLowerCase()
        );
        setResult(found || null);
    };

    const getCurrentStepIndex = () => {
        if (!result) return -1;
        const idx = statusSteps.findIndex((step) =>
            result.status.toLowerCase().includes(step.toLowerCase().split(" ")[0])
        );
        return idx === -1 ? statusSteps.length - 1 : idx;
    };

    const currentStepIndex = getCurrentStepIndex();

    return (

        <motion.section
            className="min-h-screen bg-blue-900 text-white pt-32 pb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 max-w-5md">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-3 mt-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Track Your <span className="text-amber-400">Shipment</span>
                    </motion.h1>
                    <motion.p
                        className="text-sm md:text-base text-blue-100/80 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        Enter your Anand Shipping tracking ID to view live status, route
                        history, and estimated delivery time.
                    </motion.p>
                </div>


            </div>

           {/* Search Card */}
<motion.div
  className="bg-white max-w-5xl mx-auto border border-blue-200 rounded-2xl p-4 md:p-5 shadow-2xl"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <form
    onSubmit={handleSubmit}
    className="flex flex-col md:flex-row gap-2 md:gap-3 items-stretch"
  >
    <div className="flex-1">
      <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-700 mb-1">
        Tracking ID
      </label>

      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="e.g. ANAND123456"
        className="w-full px-3 py-2.5 rounded-lg bg-white border border-blue-300 text-gray-900 text-sm outline-none
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
      />
    </div>

    <div className="flex md:flex-col gap-2 md:justify-end">
      <button
        type="submit"
        className="px-5 py-2.5 md:px-6 md:py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold
                   shadow-md hover:bg-blue-700 hover:shadow-blue-500/30 transition flex items-center justify-center gap-2"
      >
        <i className="fas fa-search text-xs" />
        Track
      </button>
    </div>
  </form>

  <p className="mt-2 text-[11px] text-blue-800/80">
    Try <span className="font-mono font-semibold">ANAND123456</span> or{" "}
    <span className="font-mono font-semibold">ANAND987654</span>
  </p>
</motion.div>



            {/* Results */}
            <div className="mt-10 space-y-6">
                {searched && !result && (
                    <motion.div
                        className="bg-red-500/10 border border-red-500/40 text-red-100 rounded-xl p-4 text-sm flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <i className="fas fa-exclamation-circle mt-0.5" />
                        <div>
                            <p className="font-semibold">Shipment not found</p>
                            <p className="text-xs text-red-100/90 mt-1">
                                Please check your tracking ID and try again. If the shipment was
                                created recently, status may take a few minutes to appear.
                            </p>
                        </div>
                    </motion.div>
                )}

               {result && (
  <motion.div
    className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {/* Left: Summary Card */}
    <div className="md:col-span-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl flex flex-col gap-3 text-slate-900">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Tracking ID
          </p>
          <p className="font-mono text-sm md:text-base font-semibold text-slate-900 mt-0.5">
            {result.trackingId}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1
            ${
              result.status === "Delivered"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {result.status}
        </span>
      </div>

      <div className="h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent my-2" />

      <div className="space-y-3 text-xs md:text-sm">
        <div className="flex items-start gap-3">
          <i className="fas fa-location-arrow text-amber-500 mt-0.5" />
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-wide">
              From
            </p>
            <p className="font-semibold text-slate-900">
              {result.origin}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <i className="fas fa-map-marker-alt text-emerald-500 mt-0.5" />
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-wide">
              To
            </p>
            <p className="font-semibold text-slate-900">
              {result.destination}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <i className="fas fa-shipping-fast text-sky-500 mt-0.5" />
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-wide">
              Service
            </p>
            <p className="font-semibold text-slate-900">
              {result.service}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <i className="fas fa-clock text-violet-500 mt-0.5" />
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-wide">
              {result.status === "Delivered"
                ? "Delivered On"
                : "Estimated Delivery"}
            </p>
            <p className="font-semibold text-slate-900">
              {result.eta}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
        <i className="fas fa-info-circle text-slate-400" />
        Last updated:{" "}
        <span className="font-medium text-slate-700">
          {result.lastUpdated}
        </span>
      </div>
    </div>

    {/* Right: Status Timeline + History */}
    <div className="md:col-span-2 space-y-5">
      {/* Progress Timeline */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl text-slate-900">
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
          Live Status
        </p>
        <div className="hidden md:grid grid-cols-6 gap-2">
          {statusSteps.map((step, idx) => {
            const isCompleted = idx <= currentStepIndex;
            return (
              <div key={step} className="flex flex-col items-center">
                <div className="relative w-full flex items-center">
                  {idx !== 0 && (
                    <div
                      className={`h-[2px] flex-1 ${
                        idx <= currentStepIndex
                          ? "bg-emerald-500"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold
                      ${
                        isCompleted
                          ? "bg-emerald-500 text-white shadow-md shadow-emerald-400/40"
                          : "bg-slate-100 text-slate-500 border border-slate-300"
                      }`}
                  >
                    {idx + 1}
                  </div>
                  {idx !== statusSteps.length - 1 && (
                    <div
                      className={`h-[2px] flex-1 ${
                        idx < currentStepIndex
                          ? "bg-emerald-500"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
                <p className="mt-2 text-[11px] text-center text-slate-600">
                  {step}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile simplified status */}
        <div className="md:hidden mt-1">
          <p className="text-sm font-semibold text-emerald-600">
            {result.status}
          </p>
          <p className="text-[11px] text-slate-500">
            Step {currentStepIndex + 1} of {statusSteps.length}
          </p>
        </div>
      </div>

      {/* History */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl text-slate-900">
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
          Route History
        </p>
        <div className="space-y-4">
          {result.history.map((event, idx) => (
            <div key={idx} className="flex gap-3 text-xs md:text-sm">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mt-1 ${
                    idx === result.history.length - 1
                      ? "bg-emerald-500"
                      : "bg-amber-400"
                  }`}
                />
                {idx !== result.history.length - 1 && (
                  <div className="w-[2px] flex-1 bg-slate-200 mt-1" />
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {event.label}
                </p>
                <p className="text-slate-600">{event.location}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)}

            </div>

        </motion.section>
    );
};

export default TrackingPage;
