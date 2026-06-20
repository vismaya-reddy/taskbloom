import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7ff] via-[#f6f3ff] to-[#eef2ff]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <section className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white border border-violet-100 shadow-sm px-4 py-2 rounded-full text-violet-700 text-sm font-semibold mb-6">
              <Sparkles size={15} />
              Full Stack To-Do App
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Organize your tasks
              <br />
              with <span className="text-violet-600">TaskBloom</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              A simple and beautiful productivity app where you can create
              tasks, manage your day, and keep everything safely stored in your
              personal account.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 transition"
              >
                Start for Free
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-violet-50 hover:border-violet-200 transition"
              >
                Login
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm">
                <p className="text-xl font-bold text-gray-900">Auth</p>
                <p className="text-sm text-gray-600 mt-1">Secure login system</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm">
                <p className="text-xl font-bold text-gray-900">CRUD</p>
                <p className="text-sm text-gray-600 mt-1">Create & manage tasks</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm">
                <p className="text-xl font-bold text-gray-900">Cloud</p>
                <p className="text-sm text-gray-600 mt-1">Stored in Supabase</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute -top-10 -left-8 w-36 h-36 bg-violet-200/40 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-6 w-36 h-36 bg-pink-200/40 blur-3xl rounded-full"></div>

            <div className="relative bg-white/90 backdrop-blur rounded-[28px] shadow-2xl border border-violet-100 p-6 md:p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Preview</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Why TaskBloom?
                  </h3>
                </div>

                <span className="bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                  Smart + Simple
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-violet-50 border border-violet-100 p-5">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-violet-600" size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Manage tasks easily
                      </h4>
                      <p className="text-gray-600 mt-1 leading-7">
                        Create, update, complete, and delete tasks without the
                        mess.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-pink-50 border border-pink-100 p-5">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <LayoutDashboard className="text-pink-600" size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Beautiful dashboard
                      </h4>
                      <p className="text-gray-600 mt-1 leading-7">
                        View your tasks in one clean, calming dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-emerald-600" size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Private for every user
                      </h4>
                      <p className="text-gray-600 mt-1 leading-7">
                        Your tasks are safely tied to your own account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-gray-50 border border-gray-100 p-5">
                <p className="text-sm text-gray-500 mb-3">Sample tasks</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white border border-gray-100 px-4 py-3">
                    <div>
                      <p className="font-semibold text-gray-800">Finish UI setup</p>
                      <p className="text-sm text-gray-500">Landing page design</p>
                    </div>
                    <span className="text-xs font-semibold bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white border border-gray-100 px-4 py-3">
                    <div>
                      <p className="font-semibold text-gray-800">Connect Supabase</p>
                      <p className="text-sm text-gray-500">Database + auth</p>
                    </div>
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                      Ready
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white border border-gray-100 px-4 py-3">
                    <div>
                      <p className="font-semibold text-gray-800">Deploy project</p>
                      <p className="text-sm text-gray-500">Publish on Vercel</p>
                    </div>
                    <span className="text-xs font-semibold bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                      Next
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;