import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navigation";
import {resume} from "react-dom/server";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "AI-powered resume analyzer providing feedback, scoring, and improvement suggestions." },
  ];
}

export default function Home() {
  // @ts-ignore
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Welcome to CVision!</h1>
        <h2>Lets analyse your resume!</h2>
      </div>
    </section>

    {
      resumes.length>0 && (
            <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume}></ResumeCard>
              ))}
            </div>
        )
    }
  </main>
}
