"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const csvData = [
  { post_type: "carousel", likes: 35927, shares: 6973, comments: 3231 },
  { post_type: "reel", likes: 29017, shares: 7987, comments: 2361 },
  { post_type: "live_stream", likes: 39601, shares: 3447, comments: 1735 },
  { post_type: "static_image", likes: 13381, shares: 437, comments: 437 },
];

const AnalyzerForm = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const API_URL = "http://192.168.0.111:5000";

  const fetchAnalysis = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();

      setResult(data.outputs[0].outputs[0].results.message.text);
      console.log(data);
    //   csvData = data.outputs[0].outputs[0].results.message.text
    } catch (err) {
      setError("Failed to fetch analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-yellow-200 to-green-500 text-gray-800">
      <div className="max-w-4xl mx-auto p-6">
        <motion.h1
          className="text-4xl font-bold text-center mb-6 text-green-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            Analyzer
        </motion.h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your text for analysis..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button
            onClick={fetchAnalysis}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Analyze"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {result && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Analysis Results:</h2>
              <ul className="bg-gray-100 p-4 rounded-lg list-disc pl-6">
                {result.split("\n").map((line, index) => (
                  <ul key={index} className="mb-2">
                    {line.trim()}
                  </ul>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Data Visualization
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={csvData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="post_type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="likes" fill="#34d399" />
              <Bar dataKey="shares" fill="#facc15" />
              <Bar dataKey="comments" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyzerForm;
