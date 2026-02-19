import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navigation";
import {resume} from "react-dom/server";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "AI-powered resume analyzer providing feedback, scoring, and improvement suggestions." },
  ];
}

export default function Home() {

  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!auth.isAuthenticated) {
      navigate('/auth?next=/');
    }
  }, [auth.isAuthenticated])

  // @ts-ignore
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Welcome To CVision!</h1>
        <h2>Lets Analyse Your Resume!</h2>
      </div>
      {
        resumes.length>0 && (
              <div className="resumes-section">
                {resumes.slice(0,3).map((resume) => (
                    <ResumeCard key={resume.id} resume={resume}></ResumeCard>
                ))}
              </div>
          )
      }
    </section>
  </main>
}
