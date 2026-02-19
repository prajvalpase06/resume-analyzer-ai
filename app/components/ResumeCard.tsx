import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({ resume } : { resume: Resume }) => {

    const overallScore = resume?.feedback.overallScore;
    const ATS = resume?.feedback.ATS;
    const toneAndStyle = resume?.feedback.toneAndStyle;
    const content = resume?.feedback.content;
    const structure = resume?.feedback.structure;
    const skills = resume?.feedback.skills;

    // @ts-ignore
    return (
        <Link to={`/resume/${resume.id}`} className="resume-card fade-in animate-in duration-2000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text=-black font-bold wrap-break-word">
                        {resume.companyName}
                    </h2>
                    <h3 className=" text-lg text-gray-500 wrap-break-word">{resume.jobTitle}</h3>
                </div>
                <div className="shrink">
                    <ScoreCircle score={overallScore}></ScoreCircle>
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-2000">
                <div className="w-full h-full">
                    <img src={resume.imagePath} alt="resume" className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"/>
                </div>
            </div>
        </Link>
    )
}

export default ResumeCard;