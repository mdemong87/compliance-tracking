"use client";

import MakeGetAll from "@/utilis/requestrespose/get";
import { useEffect, useMemo, useState } from "react";

// Add User page for a "Pubs Compliance" website
// Single React functional component, JavaScript only, styled with Tailwind CSS
// Submits multipart/form-data to POST /api/users (avatar removed)
// Adjust field names for your backend as needed (Laravel-friendly defaults included)

export default function Add() {


    const ENDPOINT = "https://kpi.sardaritskillshare.com/api/register"; // change if different

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        role: "Employee",
        pubid: "", // new field
        active: true, // no UI now; still here if backend expects it—set to true by default
        password: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [serverErrors, setServerErrors] = useState(null); // { field: [messages] }
    const [success, setSuccess] = useState(null);

    const inputClass =
        "block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const labelClass = "text-sm font-semibold text-gray-800";
    const helpClass = "text-xs text-gray-500";





    useEffect(() => {

        const fetchingUser = async () => {
            const getres = await MakeGetAll('api/register');
            console.log(getres);
        }



        fetchingUser();

    }, [])









    const roles = [
        { value: "Admin", label: "Admin" },
        { value: "Manager", label: "Manager" },
        { value: "Employee", label: "Employee" }, // added to match default
    ];

    const validateEmail = (v) => /\S+@\S+\.\S+/.test(v);

    const canSubmit = useMemo(() => {
        return (
            form.name.trim().length >= 2 &&
            validateEmail(form.email) &&
            form.password.length >= 8 &&
            form.pubid.trim().length > 0 &&
            !submitting
        );
    }, [form, submitting]);

    const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const resetForm = () => {
        setForm({
            name: "",
            email: "",
            phone: "",
            role: "staff",
            pubid: "",
            active: true,
            password: "",
        });
        setError(null);
        setSuccess(null);
        setServerErrors(null);
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;
        setSubmitting(true);
        setError(null);
        setSuccess(null);
        setServerErrors(null);

        try {
            const fd = new FormData();
            fd.append("name", form.name);
            fd.append("email", form.email);
            if (form.phone) fd.append("phone", form.phone);
            fd.append("role", form.role);
            fd.append("pub_id", form.pubid); // Laravel-friendly snake_case
            fd.append("password", form.password);

            const res = await fetch(ENDPOINT, {
                method: "POST",
                body: fd,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(res);

            const text = await res.text();
            let data = null;
            try {
                data = text ? JSON.parse(text) : null;
            } catch { }

            if (!res.ok) {
                if (data && data.errors) {
                    setServerErrors(data.errors);
                    throw new Error(data.message || "Validation error");
                }
                throw new Error((data && data.message) || text || `Request failed (${res.status})`);
            }

            setSuccess((data && data.message) || "User created successfully");
            resetForm();
        } catch (err) {
            setError(err?.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full p-4">
            <div className="rounded-sm border border-black bg-white overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span aria-hidden>👤</span>
                        <h1 className="text-2xl font-bold">Add User</h1>
                    </div>
                    <span className="text-xs text-gray-500">Pubs Compliance</span>
                </div>

                <form onSubmit={submit} noValidate className="p-6 space-y-6">
                    {/* Alerts */}
                    {error && (
                        <div
                            className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
                            role="alert"
                        >
                            <p className="font-semibold">{error}</p>
                        </div>
                    )}
                    {success && (
                        <div
                            className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
                            role="status"
                        >
                            <p className="font-semibold">{success}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                            <label className={labelClass} htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={inputClass}
                                placeholder="e.g. Alex Johnson"
                                value={form.name}
                                onChange={(e) => setField("name", e.target.value)}
                            />
                            <p className={helpClass}>Minimum 2 characters.</p>
                            {serverErrors?.name && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.name[0]}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className={labelClass} htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={inputClass}
                                placeholder="user@example.com"
                                value={form.email}
                                onChange={(e) => setField("email", e.target.value)}
                            />
                            <p className={helpClass}>We’ll use this for login and notifications.</p>
                            {serverErrors?.email && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.email[0]}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className={labelClass} htmlFor="phone">
                                Phone (optional)
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className={inputClass}
                                placeholder="e.g. +8801XXXXXXXXX"
                                value={form.phone}
                                onChange={(e) => setField("phone", e.target.value)}
                            />
                            {serverErrors?.phone && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.phone[0]}</p>
                            )}
                        </div>

                        {/* Role */}
                        <div>
                            <label className={labelClass} htmlFor="role">
                                Role
                            </label>
                            <select
                                id="role"
                                className={inputClass}
                                value={form.role}
                                onChange={(e) => setField("role", e.target.value)}
                            >
                                {roles.map((r) => (
                                    <option key={r.value} value={r.value}>
                                        {r.label}
                                    </option>
                                ))}
                            </select>
                            <p className={helpClass}>Choose the user’s permission level.</p>
                            {serverErrors?.role && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.role[0]}</p>
                            )}
                        </div>

                        {/* PUB ID (new) */}
                        <div>
                            <label className={labelClass} htmlFor="pubid">
                                PUB ID
                            </label>
                            <input
                                id="pubid"
                                type="text"
                                className={inputClass}
                                placeholder="e.g. PUB-001234"
                                value={form.pubid}
                                onChange={(e) => setField("pubid", e.target.value)}
                            />
                            <p className={helpClass}>Unique identifier for the pub/location.</p>
                            {serverErrors?.pub_id && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.pub_id[0]}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className={labelClass} htmlFor="password">
                                Password
                            </label>
                            <div className="flex gap-2">
                                <input
                                    id="password"
                                    type="password"
                                    className={inputClass + " flex-1"}
                                    placeholder="At least 8 characters"
                                    value={form.password}
                                    onChange={(e) => setField("password", e.target.value)}
                                />
                            </div>
                            {serverErrors?.password && (
                                <p className="text-xs text-red-700 mt-1">{serverErrors.password[0]}</p>
                            )}
                        </div>
                    </div>

                    {/* Footer actions */}
                    <div className="flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 rounded-xl font-semibold border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            disabled={!canSubmit}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white cursor-pointer bg-gray-900 hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting && (
                                <svg
                                    className="h-4 w-4 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                            )}
                            Create User
                        </button>
                    </div>
                </form>
            </div>

            {/* Table remains unchanged */}
            <div className="pt-8">
                <div className="bg-white border rounded shadow-sm overflow-x-auto">
                    <div className="px-3 py-2 border-b font-semibold text-sm">All Users</div>
                    <table className="w-full text-sm min-w-[600px]">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-3 py-2 text-left">Name</th>
                                <th className="px-3 py-2 text-left">Email Address</th>
                                <th className="px-3 py-2 text-left">Phone</th>
                                <th className="px-3 py-2 text-left">Role</th>
                                <th className="px-3 py-2 text-left">Pubs ID</th>
                                <th className="px-3 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 15 }).map((_, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                    <td className="px-3 py-2">Jhon Deo</td>
                                    <td className="px-3 py-2">example@gmail.com</td>
                                    <td className="px-3 py-2">019876054687</td>
                                    <td className="px-3 py-2">Admin</td>
                                    <td className="px-3 py-2">765479</td>
                                    <td className="px-3 py-2">Active</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

