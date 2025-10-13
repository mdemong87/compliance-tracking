'use client'

import MakePost from "@/utilis/requestrespose/post";
import { useMemo, useRef, useState } from "react";

// JavaScript (no TypeScript), Tailwind CSS only, no external UI libraries
// Endpoint: POST /api/kpi/import (multipart/form-data) with field name `file`
// Example response: {"message":"KPI import complete","created":120,"updated":30}

export default function KpiImportUploader() {
    const endpoint = "/api/kpi/import"; // change if needed

    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const inputRef = useRef(null);

    const ACCEPTED_EXT = ".csv,.xlsx";

    const humanSize = (bytes) => {
        if (!bytes) return "0 B";
        const k = 1024; const sizes = ["B", "KB", "MB", "GB"]; const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
    };

    const canSubmit = useMemo(() => !!file && !submitting, [file, submitting]);

    const onFiles = (files) => {
        if (!files || files.length === 0) return;
        const f = files[0];
        const name = (f?.name || "").toLowerCase();
        const extOk = ACCEPTED_EXT.split(",").map((s) => s.trim()).some((ext) => name.endsWith(ext));
        if (!extOk) {
            setError("Please select a .csv or .xlsx file.");
            setFile(null);
            return;
        }
        setError(null);
        setResult(null);
        setFile(f);
    };

    const handleDrop = (e) => {
        e.preventDefault(); e.stopPropagation();
        setIsDragging(false);
        onFiles(e.dataTransfer.files);
    };
    const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };

    const reset = () => {
        setFile(null); setError(null); setResult(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(file);

        if (!file) return;
        setSubmitting(true); setError(null); setResult(null);
        try {
            const form = new FormData();
            form.append("file", file);

            const res = await MakePost('api/kpi/import', form);
            console.log(res);
            setResult(res);

        } catch (err) {
            setError(err?.message || "Something went wrong while uploading.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full p-4">
            <div className="rounded-sm bg-white overflow-hidden border border-black">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                    <span aria-hidden>📊</span>
                    <h2 className="text-2xl font-bold">KPI Import</h2>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        <label htmlFor="kpi-file" className="block text-sm font-semibold text-gray-800">Upload KPI CSV/XLSX</label>

                        <label
                            htmlFor="kpi-file"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            className={[
                                "flex flex-col items-center justify-center gap-2 p-10 rounded-2xl border-2 border-dashed text-center transition",
                                "bg-gray-50 border-gray-300 hover:border-blue-500",
                                isDragging ? "ring-2 ring-blue-500/40 bg-blue-50" : "",
                            ].join(" ")}
                        >
                            <div className="text-3xl" aria-hidden>⬆️</div>
                            <p className="font-semibold">Drag & drop your KPI file here</p>
                            <p className="text-sm text-gray-500">or</p>
                            <button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50"
                            >
                                Browse files
                            </button>

                            <input
                                ref={inputRef}
                                id="kpi-file"
                                name="file"
                                type="file"
                                accept={ACCEPTED_EXT}
                                onChange={(e) => onFiles(e.target.files)}
                                className="hidden"
                            />

                            <p className="text-xs text-gray-500 mt-2">Supported formats: .csv, .xlsx</p>

                            {file && (
                                <div className="mt-4 w-full max-w-md text-sm bg-gray-100 rounded-xl p-3 flex items-center justify-between gap-3">
                                    <span className="truncate font-medium">{file.name}</span>
                                    <span className="px-2 py-1 rounded-full border border-gray-300 bg-white text-xs">{humanSize(file.size)}</span>
                                </div>
                            )}
                        </label>

                        <div className="flex items-center gap-3 flex-wrap">
                            <button
                                type="submit"
                                disabled={!canSubmit}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white bg-gray-900 hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {submitting && (
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                    </svg>
                                )}
                                {submitting ? "Uploading…" : "Import KPI"}
                            </button>

                            <button
                                type="button"
                                onClick={reset}
                                disabled={submitting && !file}
                                className="px-4 py-2 rounded-xl font-semibold border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                            >
                                Reset
                            </button>

                            {file && !submitting && (
                                <span className="px-2 py-1 rounded-full border border-gray-300 bg-gray-50 text-xs">Ready to upload</span>
                            )}
                        </div>
                    </form>

                    {(error || result) && <div className="h-px bg-gray-200 my-4" />}

                    {error && (
                        <div role="alert" className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                            <span aria-hidden>⚠️</span>
                            <div>
                                <p className="font-semibold">Upload failed</p>
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    )}

                    {result && (
                        <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                            <div className="flex items-center gap-2 mb-2">
                                <span aria-hidden>✅</span>
                                <p className="font-semibold">Server Response</p>
                            </div>
                            <pre className="bg-slate-900 text-gray-100 rounded-xl p-4 text-sm overflow-x-auto">{JSON.stringify(result, null, 2)}</pre>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                                <div className="border rounded-xl p-4 text-center">
                                    <div className="text-xs text-gray-500">Message</div>
                                    <div className="font-extrabold text-lg">{String(result?.message ?? "—")}</div>
                                </div>
                                <div className="border rounded-xl p-4 text-center">
                                    <div className="text-xs text-gray-500">Created</div>
                                    <div className="font-extrabold text-lg">{Number(result?.created ?? 0)}</div>
                                </div>
                                <div className="border rounded-xl p-4 text-center">
                                    <div className="text-xs text-gray-500">Updated</div>
                                    <div className="font-extrabold text-lg">{Number(result?.updated ?? 0)}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
